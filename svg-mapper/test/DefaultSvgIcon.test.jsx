import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {shallow} from "enzyme";

import DefaultSvgIcon from "../../../../../src/js/components/layout/svg-icons/DefaultSvgIcon";

describe("DefaultSvgIcon", () => {
    it("component renders", () => {
        const wrapper = shallow(
            <DefaultSvgIcon />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#Default")).to.have.lengthOf(1);
    });
});
