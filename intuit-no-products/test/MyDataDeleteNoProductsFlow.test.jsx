/**
 * File: MyDataDeleteNoProductsFlow.jsx
 * Desc: Uses Jest and Enzyme to test a React Component
 */
import React from 'react';

import { shallow, mount } from 'enzyme';

import MyDataDeleteNoProductsFlow from '../../../../../src/js/components/mydata/delete-flow/MyDataDeleteNoProductsFlow';

import mockIntl from '../../../mock/mockIntl';
import mockState from "../../../mock/mockState";
import { MYDATA_CARD, MYDATA_FLOW } from '../../../../../src/js/constants';
import {cancelWorkOrderFlow} from "../../../mock/mockFunctions";

let card;
const displayCardSection = cardName => card = cardName;
let flow = MYDATA_FLOW.DELETE_NO_PRODUCTS;

const flowData = mockState.myData.flowDataMap[MYDATA_FLOW.DELETE_NO_PRODUCTS];
const setMyDataFlowData = (flow, flowData) => {
  flowData.enableContinueButton = flowData.enableContinueButton;
}
const setMyDataDeleteFlow = updatedFlow => flow = updatedFlow;

const testPropParams = {
  intl: mockIntl,
  cancelDeleteFlow: cancelWorkOrderFlow,
  displayCardSection,
  setMyDataDeleteFlow,
  flowData,
  flow
};

describe('MyData Delete No Products Flow Component', () => {

  it('MyData Delete No Products Flow Component renders', () => {
    const wrapper = shallow(
      <MyDataDeleteNoProductsFlow {...testPropParams} />,
    );

    expect(wrapper).toBeDefined();
  });

  it('MyData Delete No Products Flow Component with Cancel button click ', () => {
    const wrapper = mount(
      <MyDataDeleteNoProductsFlow {...testPropParams} />,
    );

    wrapper.find('.idsButton--tertiary').simulate('click');
    expect(wrapper).toBeDefined();
  });

  it('MyData Delete No Products Flow Component with Back button click ', () => {
    const wrapper = mount(
        <MyDataDeleteNoProductsFlow {...testPropParams} />,
      );

    expect(wrapper).toBeDefined();
    wrapper.find('.idsButton--secondary').simulate('click');
    expect(flow).toBe(MYDATA_FLOW.DELETE_START);
  });

  it('MyData Delete No Products Flow Component with Continue button click ', () => {
    flowData.enableContinueButton = true;
    const wrapper = mount(
      <MyDataDeleteNoProductsFlow {...testPropParams} />,
    );

    expect(wrapper).toBeDefined();

    wrapper.find('.idsButton--primary').simulate('click');
    expect(flow).toBe(MYDATA_FLOW.DELETE_CONFIRM);
  });

  it("MyData Delete No Products Flow Component with the simulation of checkBox trigger", () => {
    const wrapper = mount(
      <MyDataDeleteNoProductsFlow
        setMyDataFlowData={setMyDataFlowData}
        {...testPropParams}
      />,
    );

    expect(wrapper).toBeDefined();

    wrapper.instance().handleCheckboxChange(["1"], false);
    expect(flowData.enableContinueButton).toBe(false);

    wrapper.instance().handleCheckboxChange(["1"], true);
    expect(flowData.enableContinueButton).toBe(true);
  });
});
