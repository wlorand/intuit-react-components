import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Checkbox} from "@ids/checkbox-v1";
import Link from "@ids/link-v1";
import {intlShape} from "react-intl";
import {CHEVRON_ICON, CHECK_BOX} from "../../constants";

// child components
import SvgIcon from "../layout/svg-icons/";

const MyDataProductSelect = ({
    productList,
    displayIcon,
    onChevronSelection,
    onCheckBoxSelection,
    onSelectAllProducts,
    deleteSelected,
    downloadSelected,
    intl,
    flow
}) => {
    const {formatMessage} = intl;
    const selectedProductTitle = formatMessage({id: "myData_selected_product_title"});
    const selectAllButton = formatMessage({id: "myData_select_all_products"});
    return (
        <div className="iam-mydata-content-container">
            <div className="iam-mydata-flex-container">
                <div className="iam-mydata-intuit-products">
                    {selectedProductTitle}
                </div>
                {displayIcon === CHECK_BOX &&
                <div className="iam-mydata-flex-link">
                    <Link onClick={onSelectAllProducts}>
                        {selectAllButton}
                    </Link>
                </div>
                }
            </div>
            <ul>
                {
                    productList.filter((product) => {
                        return (!deleteSelected && !downloadSelected) ? true : ((deleteSelected && product.deleteSelected) ||
                            (downloadSelected && product.downloadSelected));
                    }).map((product, i) => {
                        return (
                            <Fragment key={i}>
                                <li className="iam-mydata-list-item-flex-container">
                                    <span className="iam-mydata-data-strong">
                                        <SvgIcon product={product.productName} />
                                        {product.productName}
                                    </span>
                                    { displayIcon === CHEVRON_ICON &&
                                        (<span className="iam-mydata-action-column">
                                            <button className="iam-mydata-button-nostyling" onClick={onChevronSelection}>
                                                <i className="iam-mydata-chevron" data-productid={product.productId} />
                                            </button>
                                        </span>)
                                    }
                                    {displayIcon === CHECK_BOX &&
                                        (<span className="iam-mydata-action-column">
                                            <Checkbox
                                                value={product.productId}
                                                checked={(flow.match("DELETE") && product.deleteSelected) || (flow.match("DOWNLOAD") && product.downloadSelected)}
                                                onChange={onCheckBoxSelection}
                                            />
                                        </span>)
                                    }
                                </li>
                                <hr className="ius-conditional-hr" />
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
    displayIcon: PropTypes.string.isRequired,
    onChevronSelection: PropTypes.func,
    onCheckBoxSelection: PropTypes.func.isRequired,
    onSelectAllProducts: PropTypes.func.isRequired,
    deleteSelected: PropTypes.bool,
    downloadSelected: PropTypes.bool,
    intl: intlShape.isRequired
};

export default MyDataProductSelect;