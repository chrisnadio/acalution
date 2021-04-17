import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PRODUCT_API } from '../../utility/constant';
import { Link } from 'react-router-dom';
import '../../assets/Css/card.css';
import { Col, Container, Row } from 'reactstrap';
import { Card } from 'reactstrap';
// import { getProduct } from '../../redux/Action/action';
// import { connect } from 'react-redux';

const ListingPage = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`${PRODUCT_API}`);
                setProduct(result.data.value.products);
        };
        fetchData();
    },[]);
    console.log('output:', products);

    // useEffect(() => {
    //     props.getProduct();
    // },[]);

    return (
    <>
        <Container className='mb-2'>
            <Row>
            {products.map((product) => (
                <Col md='4'>
                    <Link to={`/detail/${product.id}`}>
                   <div className='container1'>
                    <img src={product.image} alt='avatar'/>
                    <div className='container-card'>
                       <li>
                        
                       <h3>{product.name}, {product.grapeVarietes}</h3>
                       <h3>{product.year}</h3>
                      
                        <p>{product.type}
                        {product.region}, 
                        {product.country}
                        </p>
                        <h4>{product.price}</h4>
                        <button className='card-button'>ADD TO CART</button>
                        </li>
                        </div>
                   </div>
                    </Link>
                 </Col>
            ))}
            </Row>
        </Container>
    </>
    )
}

export default ListingPage;

// const mapStateToProps = (state) => {
//     return {
//         products: state.data.productData,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getProducts: () => dispatch(getProduct()),
//     };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(ListingPage);