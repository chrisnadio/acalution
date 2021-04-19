import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import '../../assets/Css/detailpage.css';
import { getDetail } from '../../redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { DETAIL_API } from '../../utility/constant';

const DetailPage = () => {
    const {id} = useParams();
    // const [detail, setDetail] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const result = await axios(`${DETAIL_API}${id}`);
    //         setDetail(result.data.value);
    //         console.log('data getData',result);
    //     };
    //     getData();
    // },[id]);

    const detail = useSelector((state) => state.data.productDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id))
    },[id]);

    return (
    <>
        <div className='navbar'>
            <div><p>Home</p></div>
            <div><p>Product</p></div>
            <div><p>{detail.type}</p></div>
            <div><p>{detail.grapeVarieties}</p></div>
        </div>
        <div className="row">
            <div className="side">
                <img src={detail.image} alt='avatar'/>
            </div>
        <div className='main'>
            <h2>{detail.name}</h2>
            <h5>{detail.grapeVarieties} {detail.vintageYear}</h5>
            <div className='upper-text'>    
                <div><h4>S$ {detail.price}</h4></div>
                <div><Button>ADD TO CART</Button></div>
            </div>  
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