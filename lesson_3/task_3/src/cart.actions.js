export const ADD_PRODUCT = "PRODUCT/ADD_PRODUCT";
export const REMOVE_PRODUCT = "PRODUCT/REMOVE_PRODUCT";

export const addProduct = productData => ({
  type: ADD_PRODUCT,
    productData,
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId,
});
