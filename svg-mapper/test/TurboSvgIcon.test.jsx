import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {shallow} from "enzyme";

import TurboSvgIcon from "../../../../../src/js/components/layout/svg-icons/TurboSvgIcon";

describe("TurboSvgIcon", () => {
    it("component renders", () => {
        const wrapper = shallow(
            <TurboSvgIcon />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#Turbo")).to.have.lengthOf(1);
    });
});
