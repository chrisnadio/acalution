import React from "react";
import { Row, Col } from "reactstrap";
import '../../assets/Css/footer.css';
import App from '../../assets/Images/appstore.png';
import Google from '../../assets/Images/googleplay.png';
import Master from '../../assets/Images/mastercard.png';
import Visa from '../../assets/Images/visa.png';
import American from '../../assets/Images/american.png';

const Layout = () => {

  return (
  <>
    <div className="footer">
      <Row xs="1" sm="2" md="4">
        <Col>
          <h7>DOWNLOAD OUR APP</h7>
          <img className="img-download" src={App} alt="avatar"/>
          <img className="img-download" src={Google} alt="avatar"/>
        </Col>
        <Col>
          <p>Home</p>
          <p>Contact us</p>
          <p>About us</p>
          <p>FAQ</p>
        </Col>
        <Col>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Terms & Conditions</p>
        </Col>
        <Col>
          <h7>PAYMENT OPTIONS</h7>
          <Row xs="2" sm="3">
            <img className="img-payment" src={Visa} alt="avatar"/>
            <img className="img-payment" src={Master} alt="avatar"/>
            <img className="img-payment" src={American} alt="avatar"/>
          </Row>
        </Col>
      </Row>
      <div className="footer-bottom">
        Copyright &copy;2021 Fabianus Chrisna Dio 
      </div>
    </div>
  </>
  );
};

export default Layout;
