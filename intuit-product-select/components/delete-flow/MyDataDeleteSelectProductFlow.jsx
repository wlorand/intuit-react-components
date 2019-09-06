import React, {Fragment} from "react";
import PropTypes from "prop-types";

import BaseWidget from "web-shell-core/widgets/BaseWidget";
import Button from "@ids/button-v2";
import {logAnalyticsMsg} from "../../../sagas/analyticsLogger";
import {
    isAnyProductSelected,
    updateSelectedProducts,
    updateAllSelectedProducts,
    handleLearnMore,
    selectedProducts
} from "../../../utils/utils";
import {
    MYDATA_FLOW,
    DELETE_PRODUCT_SELECTED_FLAG,
    CHECK_BOX
} from "../../../constants";

// child  components
import MyDataAccountHeader from "../MyDataAccountHeader";
import MyDataProductSelect from "../MyDataProductSelect";
import MyDataSpecialHeaderNote from "../MyDataSpecialHeaderNote";

class MyDataDeleteSelectProductFlow extends BaseWidget {

    constructor(props) {
        super(props);
        let {productList} = props;
        const {productId, flow, flowData} = props;
        productList = updateSelectedProducts(productList, DELETE_PRODUCT_SELECTED_FLAG, productId);
        flowData.enableContinueButton = isAnyProductSelected(productList, DELETE_PRODUCT_SELECTED_FLAG);
        props.setMyDataFlowDataDeleteFlow(flow, flowData, flow, productList);
    }

    handleGoBackButtonClick = () => {
        this.props.setMyDataDeleteFlow(MYDATA_FLOW.DELETE_START);

        //Analytics Logger
        logAnalyticsMsg("delete-products-goBack-button-click", {});
    };

    handleNextButtonClick = () => {
        this.props.setMyDataDeleteFlow(MYDATA_FLOW.DELETE_ONE_PRODUCT_SELECTED);

        //Analytics Logger
        logAnalyticsMsg("delete-products-continue-button-click", {
            product: selectedProducts(this.props.productList, DELETE_PRODUCT_SELECTED_FLAG)
        });
    };

    handleCheckBoxProductSelection = (e) => {
        const {flow, flowData} = this.props;
        let {productList} = this.props;
        const productId = e.target.value;
        if (e.target.checked) {
            productList = updateSelectedProducts(productList, DELETE_PRODUCT_SELECTED_FLAG, productId);
            flowData.enableContinueButton = true;
        } else {
            productList = updateSelectedProducts(productList, DELETE_PRODUCT_SELECTED_FLAG, productId, false);
            flowData.enableContinueButton = isAnyProductSelected(productList, DELETE_PRODUCT_SELECTED_FLAG);
        }
        this.props.setMyDataFlowDataDeleteFlow(flow, flowData, flow, productList);

        //Analytics Logger
        logAnalyticsMsg("delete-product-checkbox-click", {
            product: selectedProducts(this.props.productList, DELETE_PRODUCT_SELECTED_FLAG),
            checkbox: e.target.checked ? "Active" : "InActive"
        });
    };

    handleSelectAllProducts = () => {
        const {flow, flowData} = this.props;
        let {productList} = this.props;
        productList = updateAllSelectedProducts(productList, DELETE_PRODUCT_SELECTED_FLAG);
        flowData.enableContinueButton = true;
        this.props.setMyDataFlowDataDeleteFlow(flow, flowData, flow, productList);

        //Analytics Logger
        logAnalyticsMsg("select-all-intuit-products-link-click", {});
    };

    getProductListBasedOnQueryParam = () => {
        const {flowData, productList, productId} = this.props;
        if (flowData.showAllProductBtnClicked || !productId) {
            return productList;
        } else {
            const newProductList = productList.filter((product) => {
                return productId === product.productId;
            });
            return newProductList.length > 0 ? newProductList : productList;
        }
    };

    handleDisplayAllProducts = () => {
        const {flowData, flow} = this.props;
        flowData.showAllProductBtnClicked = true;
        this.props.setMyDataFlowDataDeleteFlow(flow, flowData, flow);

        //Analytics Logger
        logAnalyticsMsg("see-all-intuit-products-link-click", {});
        logAnalyticsMsg("displayed-select-product-data-to-delete-expanded-view", {
            product: JSON.stringify(this.props.productList.map(product => product.productName))
        });

    };

    componentDidMount() {
          //Analytics Logger
        const {productId} = this.props;
        if (productId) {
            logAnalyticsMsg("displayed-select-product-data-to-delete-view", {
                referralProduct: selectedProducts(this.props.productList, DELETE_PRODUCT_SELECTED_FLAG),
                seeAllProductsLink: this.getProductListBasedOnQueryParam().length === 1 ? "true" : "false"
            });

        } else {
            logAnalyticsMsg("displayed-select-product-data-to-delete-expanded-view", {
                product: JSON.stringify(this.props.productList.map(product => product.productName))
            });
        }
    }

    render() {
        const {flowData, intl, flow} = this.props;
        const {formatMessage} = intl;
        const productList = this.getProductListBasedOnQueryParam();

        const myDataProductSelectFunctions = {
            onCheckBoxSelection: this.handleCheckBoxProductSelection,
            onSelectAllProducts: this.handleSelectAllProducts
        };
        const description = (
            <MyDataSpecialHeaderNote tokenStr={formatMessage({id: "myData_delete_product_list_header_description"})}
                stringToBeReplaced="{Learn more}"
                replacedToken={formatMessage({id: "myData_learn_more"})}
                onFunctionName={handleLearnMore}/>);

        return (
            <Fragment>
                <MyDataAccountHeader title={formatMessage({id: "myData_delete_product_list_header_title"})}
                    description={description}/>
                <hr className="ius-conditional-hr"/>
                <MyDataProductSelect productList={productList} displayIcon={CHECK_BOX} flow={flow}
                    intl={intl} {...myDataProductSelectFunctions}/>
                {
                    productList.length === 1 &&
                    (<div className="iam-mydata-account-link-container space-in-between">
                        <Button onClick={this.handleDisplayAllProducts}
                            buttonType="tertiary">{formatMessage({id: "myData_see_all_intuit_products"})}</Button>
                    </div>)
                }
                <div className="iam-mydata-account-button-container space-in-between">
                    <Button onClick={this.handleGoBackButtonClick}
                        buttonType="tertiary">{formatMessage({id: "myData_go_back"})}</Button>
                    <Button onClick={this.handleNextButtonClick}
                        disabled={!flowData.enableContinueButton}>{formatMessage({id: "myData_continue"})}</Button>
                </div>
            </Fragment>
        );
    }

}

MyDataDeleteSelectProductFlow.propTypes = {
    intl: PropTypes.object.isRequired,
    productList: PropTypes.array.isRequired,
    setMyDataDeleteFlow: PropTypes.func.isRequired,
    setMyDataFlowDataDeleteFlow: PropTypes.func.isRequired
};

export default MyDataDeleteSelectProductFlow;