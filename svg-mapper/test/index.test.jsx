import React from "react";

import {describe, it} from "intern!bdd";
import {expect} from "intern/chai!";
import {mount} from "enzyme";

import SvgIcon from "../../../../../src/js/components/layout/svg-icons";

describe("SvgIcon index mapping file", () => {
    it("renders the Mint svg icon", () => {
        const wrapper = mount(
            <SvgIcon
                product="Mint"
            />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#Mint")).to.have.lengthOf(1);
    });
    it("renders the ProConnect svg icon", () => {
        const wrapper = mount(
            <SvgIcon
                product="ProConnect"
            />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#ProConnect")).to.have.lengthOf(1);
    });
    it("renders the QuickBooks svg icon", () => {
        const wrapper = mount(
            <SvgIcon
                product="QuickBooks"
            />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#QuickBooks")).to.have.lengthOf(1);
    });
    it("renders the TurboTax svg icon", () => {
        const wrapper = mount(
            <SvgIcon
                product="TurboTax"
            />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#TurboTax")).to.have.lengthOf(1);
    });
    it("renders the Turbo svg icon", () => {
        const wrapper = mount(
            <SvgIcon
                product="Turbo"
            />
        );
        expect(wrapper.html()).to.be.defined;
        expect(wrapper.find("#Turbo")).to.have.lengthOf(1);
    });
    it("renders the Default svg icon", () => {
        const wrapper = mount(
            <SvgIcon
                product="Default"
            />
        );
        expect(wrapper.html()).to.be.defined;
    });
});
