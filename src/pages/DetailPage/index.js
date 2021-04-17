import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DETAIL_API } from '../../utility/constant';
import '../../assets/Css/detailpage.css';
// import { getMovieDetail } from '../../redux/Action/action';
// import { connect } from 'react-redux';

const DetailPage = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const result = await axios(`${DETAIL_API}${id}`);
            setDetail(result.data.value);
            console.log('data getData',result);
        };
        getData();
    },[id]);

    // useEffect(() => {
    //     props.getProduct();
    // },[]);

    return (
    <>
        <div className='navbar'>
            <a href='#'>Home</a>
            <a href='#'>Product</a>
            <a href='#'>{detail.type}</a>
            <a href='#'>{detail.grapeVarieties}</a>
        </div>
        <div className="row">
            <div className="side">
                <img src={detail.image} alt='avatar'/>
            </div>
        <div className="main">
            <h2>{detail.name}</h2>
            <h5>{detail.grapeVarieties} {detail.vintageYear}</h5>      
            <h4>S${detail.price}</h4>
            <button>ADD TO CART</button>
            <div className='middle-text'>
                <div>
                    <h6>Region</h6>
                    <h5>{detail.country}{detail.region}</h5>
                </div>
                <div>
                    <h6>Producer</h6>
                    <h4>{detail.producer}</h4>
                </div>
                <div>
                    <h6>Bottle</h6>
                    <h4>{detail.bottleSize}</h4>
                </div>
                <div>
                    <h6>Alcohol</h6>
                    <h4>{detail.alcohol}%</h4>
                </div>
            </div>
            <h6>Description</h6>
            <h7>{detail.description}</h7>
            <br></br>
            <h6>Tasting Notes</h6>
            <h7>{detail.tastingNotes}</h7>
        </div>
        </div>
    </>
    )
}

export default DetailPage;

// const mapStateToProps = (state) => {
//     return {
//         products: state.data.productDetail,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getProducts: () => dispatch(getMovieDetail()),
//     };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(DetailPage);