import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Checkbox} from "@ids/checkbox-v1";
import Link from "@ids/link-v1";
import {intlShape} from "react-intl";

// child components
import SvgIcon from "../layout/svg-icons/";
import {CHECK_BOX} from "../../constants";

const MyDataProductSelect = ({
    productList,
    displayIcon,
    onCheckBoxSelection,
    onSelectAllProducts,
    deleteSelected,
    downloadSelected,
    intl,
    flow,
    hideHeader
}) => {
    const {formatMessage} = intl;
    const selectedProductTitle = formatMessage({id: "myData_selected_product_title"});
    const selectAllButton = formatMessage({id: "myData_select_all_products"});
    return (
        <div className="iam-mydata-content-container">
            <div className="iam-mydata-flex-container">
                {!hideHeader &&
                <div className="iam-mydata-intuit-products">
                    {selectedProductTitle}
                </div>
                }
                {
                    productList.length > 1 && displayIcon === CHECK_BOX &&
                    <div className="iam-mydata-flex-link">
                        <Link onClick={onSelectAllProducts}>
                            {selectAllButton}
                        </Link>
                    </div>
                }
            </div>
            <ul>
                {
                    productList.filter(product => {
                        return (!deleteSelected && !downloadSelected) ? true : ((deleteSelected && product.deleteSelected) ||
                            (downloadSelected && product.downloadSelected));
                    }).map((product, i) => {
                        return (
                            <Fragment key={i}>
                                {/* known issue  - li tag triggers the eslint violation */}
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                                <li className="iam-mydata-list-item-flex-container" data-productid={product.productId}>
                                    <span className="iam-mydata-data-strong">
                                        <SvgIcon product={product.productName}/>
                                        {product.productName}
                                    </span>
                                    {
                                        displayIcon === CHECK_BOX &&
                                        (<span className="iam-mydata-action-column">
                                            <Checkbox
                                                value={product.productId}
                                                checked={(flow.match("DELETE") && product.deleteSelected) || (flow.match("DOWNLOAD") && product.downloadSelected)}
                                                onChange={onCheckBoxSelection}
                                            />
                                        </span>)
                                    }
                                </li>
                                <div className="iam-mydata-product-description-line">
                                    {(flow.match("DELETE") && product.productDeleteDesc) || (flow.match("DOWNLOAD") && product.productDownloadDesc)}
                                </div>
                                <hr className="ius-conditional-hr"/>
                            </Fragment>
                        );
                    })
                }
            </ul>
        </div>
    );
};

MyDataProductSelect.propTypes = {
    products: PropTypes.array.isRequired,
    displayIcon: PropTypes.string,
    onCheckBoxSelection: PropTypes.func,
    onSelectAllProducts: PropTypes.func,
    deleteSelected: PropTypes.bool,
    downloadSelected: PropTypes.bool,
    intl: intlShape.isRequired
};

export default MyDataProductSelect;