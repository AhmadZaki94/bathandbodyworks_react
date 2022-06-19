import image from "./image/Screenshot.png";
import "./Navbar.css"
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsBagCheck } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      {/*................... Banner part...................... */}
      <div className="banner">
        <a href="/">
          <img alt="img" src={image} />
        </a>
      </div>

      {/*.....................Navbar part......................*/}

      <div className="navbar">
        {/*.........upper part...........*/}
        <div className="upperPart">
          <div>
            <a href="/">
              <img alt="img"
                style={{ "margin-left": "550px"}}
                width="400px"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwa9385fe9/images/svg-icons/Logos-main.svg?yocs=o_s_"/>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              width: "500px",
              justifyContent: "space-evenly",
              marginLeft: "100px",
            }}
          >
            <InputGroup w="300px">
              <Input
                w="300px"
                h="35px"
                placeholder="Search by fragrance or product..."
              />
              <InputRightElement children={<SearchIcon color="green.500" />} />
            </InputGroup>
            <Link to='/login'>
              <FaRegUserCircle fontSize="30px"></FaRegUserCircle>
            </Link>
            <Link to="/cart">
              <BsBagCheck fontSize="30px"></BsBagCheck>
            </Link>
          </div>
        </div>

        {/*.........lower part...........*/}
        <div className="navbarOptions">
          {/* <a className="optionName"> */}
            <h3 id="bar">
              All SALE
              <div className="innerdiv">
                <ul>
                  <li>SHOP BY CATEGORY</li>
                  <li className="hideOptions">EXPLORE ALL SALE</li>
                </ul>
                <ul className="hidden">
                    <li>
                        <Link to='/products'>
                        All Sale Body Care
                        </Link>
                    </li>
                    <li>All Sale Candles</li>
                    <li>All Sale Home Fragrance</li>
                    <li>All Sale Hand Soap</li>
                    <li>All Sale Hand Sanitizer</li>
                    
                </ul>
                <ul className="hidden">
                  <li>All Sale Gift & Accessories</li>
                </ul>

                <ul>
                  <li style={{"fontWeight":"bold"}}>ALL SALE OFFERS</li>
                  <li>50-75% Off Select Sale Items</li>
                  <li>$3.95 Select Body Care</li>
                  <li>$11.95 Select 3-Wick Candles</li>
                  <li>$3.25 Select Hand Soaps</li>
                </ul>
                  
                <ul className="pos">
                  <li>$3.50 Select Wallflowers</li>
                  <li>$5.95 Select Single Wick Candles</li>
                  <li>50% Off Select Hand Sanitizers</li>
                  <li>25-50% Off Select Gifts & Accessories</li>
                </ul>

              </div>
            </h3>

            <h3 id="bar" className="bar1">BODY CARE</h3>

          <h3 id="bar">CANDELS</h3>

          <h3 id="bar">HOME FRAGRANCE</h3>

          <h3 id="bar">HAND SOAP AND SANITIZERS</h3>

          <h3 id="bar">MEN'S</h3>

          <h3 id="bar">GIFTS</h3>

          <h3 id="bar">BEST SELLERS</h3>
          {/* </a> */}

        
        </div>
        
      </div>
    </div>
  );
};