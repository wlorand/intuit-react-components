import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {shallow} from "enzyme";

import MintSvgIcon from "../../../../../src/js/components/layout/svg-icons/MintSvgIcon";

describe("MintSvgIcon", () => {
    it("component renders", () => {
        const wrapper = shallow(
            <MintSvgIcon />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#Mint")).to.have.lengthOf(1);
    });
});
