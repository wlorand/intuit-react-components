import { isEqual, isObject, transform } from 'lodash-no-global';
import { splunkLogger } from '../services/splunkLogger';

import { MYDATA_CARD_LEARN_MORE_URL } from '../constants';

/**
 * This function is to know if there is at-least one product selected in delete / download flow.
 * @param {Array} productList: List of products.
 * @param {String} selectedFlagName: the property name of the selectedFlag under the myData state.
 * @return {boolean} true if at-least one product is selected else false.
 */
export function isAnyProductSelected(productList, selectedFlagName) {
  return productList.filter((product) => product[selectedFlagName]);
}

/**
 * This function is to update the products selected in delete / download flow.
 * @param {Array} productList: List of products.
 * @param {String} selectedFlagName: the property name of the selectedFlag under the myData state
 * @param {String} productId (optional): Product selected / deselected by the user. If it's not provided then it will update all the products
 * @param {String} selectedFlagValue (optional): true by default and if the product is selected - false if user deselects the products.
 * @return {Array} List of updated products.
 */
export function updateSelectedProducts(
  productList,
  selectedFlagName,
  productId,
  selectedFlagValue
) {
  productList.map((product) => {
    if (productId !== undefined) {
      if (product.productId === productId) {
        product[selectedFlagName] =
          selectedFlagValue === undefined ? true : selectedFlagValue;
      }
    }
  });
  return productList;
}

export function updateAllSelectedProducts(
  productList,
  selectedFlagName,
  selectedFlagValue
) {
  productList.map((product) => {
    product[selectedFlagName] =
      selectedFlagValue === undefined ? true : selectedFlagValue;
  });
  return productList;
}

export function handleLearnMore() {
  window.open(MYDATA_CARD_LEARN_MORE_URL, '_blank');
}

/**
 * This function is to know list of products selected in delete / download flow.
 * @param {Array} productList: List of products.
 * @param {String} selectedFlagName: the property name of the selectedFlag under the myData state.
 * @return {boolean} true if at-least one product is selected else false.
 */
export function selectedProducts(productList, selectedFlagName) {
  return productList
    .filter((productList) => productList[selectedFlagName])
    .map((productList) => productList.productName);
}
