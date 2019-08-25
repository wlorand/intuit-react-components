import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {shallow} from "enzyme";

import ProConnectSvgIcon from "../../../../../src/js/components/layout/svg-icons/ProConnectSvgIcon";

describe("ProConnectSvgIcon", () => {
    it("component renders", () => {
        const wrapper = shallow(
            <ProConnectSvgIcon />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#ProConnect")).to.have.lengthOf(1);
    });
});
