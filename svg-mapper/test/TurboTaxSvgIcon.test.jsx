import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {shallow} from "enzyme";

import TurboTaxSvgIcon from "../../../../../src/js/components/layout/svg-icons/TurboTaxSvgIcon";

describe("TurboTaxSvgIcon", () => {
    it("component renders", () => {
        const wrapper = shallow(
            <TurboTaxSvgIcon />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#TurboTax")).to.have.lengthOf(1);
    });
});
