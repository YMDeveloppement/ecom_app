import React from 'react';
import { Form, Col, Row, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import MyLogo from '@/assets/imgs/veryfrais.png'
import { useRef } from 'react'

const MainNav = () => {
    const searchRef = useRef();

    return (
        <>
            <div className='logo-home w-100'>
                <Row className='w-100 d-flex align-items-center justify-content-between'>
                    <Col xs={6} sm={6} md={3} className='MyLogo d-flex align-items-center justify-content-start gap-2'>
                        <img className="" src={MyLogo} alt="Logo" />
                        <h5 className='m-0'>ShopStore</h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} className='search-product d-flex align-items-center justify-content-start '>
                        <Form.Control
                            ref={searchRef}
                            type="search"
                            placeholder="Search for products, categories or brands..."
                            className=""
                            aria-label="Search"

                        />
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                    </Col>
                    <Col md={3} className='myaccount p-3  align-items-center justify-content-start gap-4'>
                        <button className=' d-flex align-items-center gap-3 p-0 bg-transparent border-0 text-start  btn btn-light' type="button" >
                            <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faUser} />
                            <div className='d-flex flex-column '>
                                <small style={{ fontSize: '13px' }} className='text-secondary'>
                                    sign in
                                </small>
                                <small style={{ fontSize: '13px', fontWeight: 'bold' }} >
                                    Account
                                </small>

                            </div>
                        </button>
                        <button className='setCountUp p-0  bg-transparent border-0 text-start  btn btn-light' type="button" >
                            <FontAwesomeIcon style={{ fontSize: '23px' }} icon={faHeart} />
                        </button>
                        <button className='setCountUp p-0  bg-transparent border-0 text-start  btn btn-light' type="button" >
                            <FontAwesomeIcon style={{ fontSize: '23px' }} icon={faCartShopping} />
                        </button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default MainNav;