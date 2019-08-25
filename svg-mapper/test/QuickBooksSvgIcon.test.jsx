import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {shallow} from "enzyme";

import QuickBooksSvgIcon from "../../../../../src/js/components/layout/svg-icons/QuickBooksSvgIcon";

describe("QuickBooksSvgIcon", () => {
    it("component renders", () => {
        const wrapper = shallow(
            <QuickBooksSvgIcon />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#QuickBooks")).to.have.lengthOf(1);
    });
});
