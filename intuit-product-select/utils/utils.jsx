import {isEqual, isObject, transform} from "lodash-no-global";
import {splunkLogger} from "../services/splunkLogger";
import {MYDATA_CARD_LEARN_MORE_URL} from "../constants";


/**
 * This function is to know if there is at-least one product selected in delete / download flow.
 * @param {Array} productList: List of products.
 * @param {String} selectedFlagName: the property name of the selectedFlag under the myData state.
 * @return {boolean} true if at-least one product is selected else false.
 */
export function isAnyProductSelected(productList, selectedFlagName) {
    const selectedProducts = productList.filter(product => product[selectedFlagName]);
    return selectedProducts.length > 0;
};

/**
 * This function is to update the products selected in delete / download flow.
 * @param {Array} productList: List of products.
 * @param {String} selectedFlagName: the property name of the selectedFlag under the myData state
 * @param {String} productId (optional): Product selected / deselected by the user. If it's not provided then it will update all the products
 * @param {String} selectedFlagValue (optional): true if the product is selected else false if the user deselects the products.
 *      If it's not provided then considered as true by default
 * @return {Array} List of updated products.
 */
export function updateSelectedProducts(productList, selectedFlagName, productId, selectedFlagValue) {
    productList.map(product => {
        if (typeof productId !== "undefined") {
            if (product.productId === productId) {
                product[selectedFlagName] = (typeof selectedFlagValue === "undefined") ? true : selectedFlagValue;
            }
        }
    });
    return productList;
};

export function updateAllSelectedProducts(productList, selectedFlagName, selectedFlagValue) {
    productList.map(product => {
        product[selectedFlagName] = (typeof selectedFlagValue === "undefined") ? true : selectedFlagValue;
    });
    return productList;
};

export function handleLearnMore() {
    window.open(MYDATA_CARD_LEARN_MORE_URL, "_blank");
};

/**
 * This function is to know list of products selected in delete / download flow.
 * @param {Array} productList: List of products.
 * @param {String} selectedFlagName: the property name of the selectedFlag under the myData state.
 * @return {boolean} true if at-least one product is selected else false.
 */
export function selectedProducts(productList, selectedFlagName) {
    const selectedProducts = productList
    .filter(productList => productList[selectedFlagName])
    .map(productList => productList.productName);
    return selectedProducts;
};