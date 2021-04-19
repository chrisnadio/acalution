import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/Css/card.css';
import { Col, Container, Row } from 'reactstrap';
import Button from '../../components/Button';
import { getProduct } from '../../redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import useInfiniteScroll from 'react-infinite-scroll-hook';
// import { PRODUCT_API } from '../../utility/constant';
// import axios from 'axios';

const ListingPage = () => {
    const products = useSelector((state) => state.data.productData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct())
    },[]);

    const [page, setPage] = useState(2);
    // const [product, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            setPage( prev => prev +1);
        }
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(`${PRODUCT_API}`);
    //             setProduct(result.data.value.products);
    //     };
    //     fetchData();
    // },[]);

    return (
    <div onScroll={handleScroll}>
        <Container className='mb-2'>
            <Row>
            {products.map((product) => (
                <Col md='4'>
                    <Link to={`/detail/${product.id}`}>
                    <div className='container1'>
                        <img src={product.image} alt='avatar'/>
                        <div className='container-card'>
                            <div className='container-title'>
                                <h5>{product.name}, {product.grapeVarietes}</h5>
                                <h5>{product.year}</h5>
                                <p>{product.type}
                                    {product.region}, 
                                    {product.country}
                                </p>
                            </div>
                            <div className='container-price'>
                                <h4>S$ {product.price}</h4>
                            </div>
                            <div className='container-button'>
                                <Button/>
                            </div>
                        </div>
                    </div>
                    </Link>
                </Col>
            ))}
            </Row>
        </Container>
    </div>
    )
}

export default ListingPage;