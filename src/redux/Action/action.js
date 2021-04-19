import axios from 'axios';

export const getProduct = () => {
    return (dispatch) => {
    return axios
        .get('https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=1')
        .then((res) => {
            dispatch({
                type: "GET_PRODUCT",
                payload: res.data.value.products,
                });
            })
            .catch((err) => {
            dispatch({ type: "GET_DATA_ERROR", payload: "Your Connection Unstable" });
        });
    };
};

export const getDetail = (id)  => {
    return (dispatch) => {
    axios.get(`https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}`)
        .then(res => {
            dispatch({
                type: "GET_PRODUCT_DETAIL",
                payload: res.data.value,
            });      
        })
        .catch(err => console.log(err));
    };
};

