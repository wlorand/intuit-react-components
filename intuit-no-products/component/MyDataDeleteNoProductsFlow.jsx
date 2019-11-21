import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BaseWidget from 'web-shell-core/widgets/BaseWidget';
import { intlShape } from 'react-intl';

import Button from '@ids/button-v2';
import { handleLearnMore } from 'src/js/utils/utils';
import { logAnalyticsMsg } from '../../../sagas/analyticsLogger';

import { MYDATA_FLOW, DOWNLOAD_MANAGER } from '../../../constants';

// child components
import MyDataAccountHeader from '../MyDataAccountHeader';
import MyDataSpecialHeaderNote from '../MyDataSpecialHeaderNote';
import ListFromTokenIds from '../../ListFromTokenIds';
import MyDataDisclosure from '../MyDataDisclosure';

class MyDataDeleteNoProductsFlow extends BaseWidget {
  
  handleCancelButtonClick = () => {
    this.props.cancelDeleteFlow();
    logAnalyticsMsg('delete-no-products-cancel-button-click', {});
  };

  handleBackButtonClick = () => {
    this.props.setMyDataDeleteFlow(MYDATA_FLOW.DELETE_START);
    logAnalyticsMsg('delete-no-products-back-button-click', {});
  };

  handleContinueButtonClick = () => {
    this.props.setMyDataDeleteFlow(MYDATA_FLOW.DELETE_CONFIRM);
    logAnalyticsMsg('delete-no-products-continue-button-click', {});
  };

  handleGoToDownload = () => {
    this.props.displayCardSection(DOWNLOAD_MANAGER, DOWNLOAD_MANAGER, false);
    logAnalyticsMsg('delete-no-products-download-data-link-click', {});
  };

  handleCheckboxChange = (optionValue, enableButton) => {
    const flowData = this.props.flowData;
    flowData.selectedCheckBox = optionValue;
    flowData.enableContinueButton = enableButton;
    this.props.setMyDataFlowData(this.props.flow, flowData);
    logAnalyticsMsg('delete-no-products-legal-disclosure-click', {
      Checkbox: enableButton ? 'Active' : 'InActive',
      legalDisclosure: optionValue,
    });
  };

  componentDidMount() {
    logAnalyticsMsg('displayed-delete-no-products-view', {});
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { flowData } = this.props;
    const headerTitle = formatMessage({ id: 'myData_delete_no_products_header_title' });
    const headerTitleDesc = formatMessage({
      id: 'myData_delete_no_products_header_desc',
    });

    const specialNote = (
      <MyDataSpecialHeaderNote
        tokenStr={formatMessage({ id: 'myData_delete_no_products_multi_desc2' })}
        stringToBeReplaced="{Learn more}"
        replacedToken={formatMessage({ id: 'myData_learn_more' })}
        onFunctionName={handleLearnMore}
      />
    );

    const reviewsBeforeDeletingNoProductsData = [
      formatMessage({ id: 'myData_delete_no_products_multi_desc1' }),
      specialNote,
    ];

    const multiDescListItems = (
      <ListFromTokenIds listOfTokens={reviewsBeforeDeletingNoProductsData} />
    );

    const specialNoteJsx = (
      <MyDataSpecialHeaderNote
        tokenStr={formatMessage({ id: 'myData_delete_no_products_special_note' })}
        stringToBeReplaced="{download your data}"
        replacedToken={formatMessage({
          id: 'myData_delete_no_products_special_note_string_to_replace',
        })}
        onFunctionName={this.handleGoToDownload}
      />
    );

    const checkBoxOptions = [
      {
        label: formatMessage({ id: 'myData_delete_no_products_disclosure_option1' }),
        value: formatMessage({ id: 'myData_delete_no_products_disclosure_value1' }),
      },
    ];

    return (
      <Fragment>
        <div className="iam-mydata-delete-no-products-container">
          <MyDataAccountHeader
            title={headerTitle}
            description={headerTitleDesc}
            multiDesc={multiDescListItems}
            specialNote={specialNoteJsx}
          />
          <hr className="ius-conditional-hr" />
          <MyDataDisclosure
            checkBoxOptions={checkBoxOptions}
            onChange={this.handleCheckboxChange}
            optionValue={flowData.selectedCheckBox}
          />
        </div>

        <div className="iam-mydata-account-button-container">
          <Button
            onClick={this.handleCancelButtonClick}
            buttonType="tertiary"
            data-automation="cancel-button"
          >
            {formatMessage({ id: 'myData_button_cancel' })}
          </Button>
          <Button
            onClick={this.handleBackButtonClick}
            buttonType="secondary"
            className="iam-mydata-back-button"
            data-automation="back-button"
          >
            {formatMessage({ id: 'myData_button_back' })}
          </Button>
          <Button
            onClick={this.handleContinueButtonClick}
            buttonType="primary"
            data-automation="continue-button"
            disabled={!flowData.enableContinueButton}
          >
            {formatMessage({ id: 'myData_button_continue' })}
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default MyDataDeleteNoProductsFlow;

MyDataDeleteNoProductsFlow.propTypes = {
  cancelDeleteFlow: PropTypes.func.isRequired,
  displayCardSection: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  setMyDataDeleteFlow: PropTypes.func.isRequired,
};
