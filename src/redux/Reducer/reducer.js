let initialState = {
    productData: [],
    productDetail: [],
};

const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT":
            return {
                ...state,
                productData: payload,
            };
        case "GET_PRODUCT_DETAIL":
            return {
                ...state,
                productDetail: payload,
            };
        default:
            return state;
    }
};

export default Reducer;