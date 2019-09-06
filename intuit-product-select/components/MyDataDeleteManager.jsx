import React from "react";
import PropTypes from "prop-types";
import {intlShape} from "react-intl";

import BaseWidget from "web-shell-core/widgets/BaseWidget";
import {MYDATA_FLOW} from "../../constants/index";

// Flow components
import MyDataDeleteStartFlow from "./delete-flow/MyDataDeleteStartFlow";
import MyDataDeleteProductSelectedFlow from "./delete-flow/MyDataDeleteProductSelectedFlow";
import MyDataDeleteSelectProductFlow from "./delete-flow/MyDataDeleteSelectProductFlow";
import MyDataDeleteConfirmFlow from "./delete-flow/MyDataDeleteConfirmFlow";
import MyDataDeleteSuccessFlow from "./delete-flow/MyDataDeleteSuccessFlow";
import MyDataDeletePreventFlow from "./delete-flow/MyDataDeletePreventFlow";
import MyDataDeleteCancelConfirmFlow from "./delete-flow/MyDataDeleteCancelConfirmFlow";
import MyDataDeleteCancelSuccessFlow from "./delete-flow/MyDataDeleteCancelSuccessFlow";
import MyDataPartialDeleteStatusFlow from "./delete-flow/MyDataPartialDeleteStatusFlow";
import MyDataBUContentErrorMapper from "./delete-flow/MyDataBUContentErrorMapper";

class MyDataDeleteManager extends BaseWidget {

    setMyDataFlowDataDeleteFlow = (curFlow, flowData, nextFlow, productList) => {
        const newFlowDataMap = {...this.props.flowDataMap, [curFlow]: flowData};
        const newState = {
            flowDataMap: newFlowDataMap,
            deleteFlow: nextFlow
        };
        if (productList) {
            newState.productList = productList;
        }
        this.props.setMyDataState(newState);
    };

    getContentBody = () => {
        const {
            intl,
            queryParams,
            emailAddress,
            productList,
            setMyDataReset,
            displayCardSection,
            setMyDataFlowData,
            setMyDataDownloadFlow,
            setMyDataDeleteFlow,
            flow,
            flowDataMap,
            contactUsUrl,
            workOrder
        } = this.props;

        let body;

        const flowComponentData = {
            flow,
            displayCardSection,
            setMyDataDeleteFlow,
            setMyDataFlowData,
            intl,
            flowData: flowDataMap[flow],
            setMyDataFlowDataDeleteFlow: this.setMyDataFlowDataDeleteFlow
        };

        switch (flow) {
            case MYDATA_FLOW.DELETE_START:
                body = (<MyDataDeleteStartFlow
                    emailAddress={emailAddress}
                    productList={productList}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.DELETE_PRODUCT_SELECT:
                body = <MyDataDeleteSelectProductFlow productId={queryParams.aid} productList={productList} {...flowComponentData}/>;
                break;

            case MYDATA_FLOW.DELETE_ONE_PRODUCT_SELECTED:
                body = <MyDataDeleteProductSelectedFlow productList={productList} {...flowComponentData} />;
                break;

            case MYDATA_FLOW.DELETE_CONFIRM:
                const {createMyDataDeleteWorkOrder} = this.props;
                body = (<MyDataDeleteConfirmFlow
                    intl={intl}
                    queryParams={queryParams}
                    productList={productList}
                    createMyDataDeleteWorkOrder={createMyDataDeleteWorkOrder}
                    contactUsUrl={contactUsUrl}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.DELETE_SUCCESS:
                body = (<MyDataDeleteSuccessFlow
                    setMyDataReset={setMyDataReset}
                    emailAddress={emailAddress}
                    productList={productList}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.DELETE_PREVENT:
                body = (<MyDataDeletePreventFlow
                    displayCardSection={displayCardSection}
                    emailAddress={emailAddress}
                    setMyDataDownloadFlow={setMyDataDownloadFlow}
                    productList={workOrder.downloadOrder.scope.products}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.DELETE_CANCEL_CONFIRM:
                const {cancelMyDataWorkOrder} = this.props;
                const {deleteOrder} = workOrder;
                body = (<MyDataDeleteCancelConfirmFlow
                    emailAddress={emailAddress}
                    workOrderId={deleteOrder.id}
                    cancelMyDataWorkOrder={cancelMyDataWorkOrder}
                    queryParams={queryParams}
                    contactUsUrl={contactUsUrl}
                    flowDataMap={flowDataMap}
                    productList={deleteOrder.scope.products}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.DELETE_CANCEL_SUCCESS:
                body = (<MyDataDeleteCancelSuccessFlow
                    emailAddress={emailAddress}
                    setMyDataReset={setMyDataReset}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.PARTIAL_DELETE_STATUS:
                body = (<MyDataPartialDeleteStatusFlow
                    emailAddress={emailAddress}
                    displayCardSection={displayCardSection}
                    setMyDataDeleteFlow={setMyDataDeleteFlow}
                    productList={workOrder.deleteOrder.scope.products}
                    {...flowComponentData}
                />);
                break;

            case MYDATA_FLOW.BU_ERROR_CONTENT:
                // TODO : Passing the hardCoded ErrorCodes to verify the functionality working. Will be replaced once we have the API in place
                // DC_CGTT_001 is an errorCode provided by the orchestration API which represents "TurboTax Filing Restriction"
                body = (<MyDataBUContentErrorMapper
                    errorCodes={this.props.errorCodes || ["DC_CGTT_001"]}
                    {...flowComponentData}
                />);
                break;

            default:
            // Log Error
        }
        return body;
    };

    render() {
        const className = this.props.ignoreIUSClass ? "iam-mydata-content-container" : "iam-mydata-content-container ius";
        return (
            <div className={className}>
                {this.getContentBody()}
            </div>
        );
    }
}

MyDataDeleteManager.propTypes = {
    displayCardSection: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
    queryParams: PropTypes.Object,
    ignoreIUSClass: PropTypes.bool,
    workOrder: PropTypes.Object
};

export default MyDataDeleteManager;
