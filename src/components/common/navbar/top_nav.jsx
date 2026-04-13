import React from 'react';
import { Carousel, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { useRef } from 'react'

const TopNav = () => {

    const searchRef = useRef();

    const langs = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Frensh' },
        { id: 3, name: 'Arabic' },
    ];
    const currencies = [
        { id: 1, name: 'MAD' },
        { id: 2, name: 'Euro' },
        { id: 3, name: 'USD' },
    ];

    return (
        <>
            <div className='top_nav nav mx-auto '>
                <div className='row border-bottom w-100 py-1 px-2  '>
                    <ul className='d-none col-4  navLinks d-flex  align-items-center  gap-3'>
                        <li className='active'><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">My Account</a></li>
                        <li><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">About Us</a></li>
                        <li><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Wishlist</a></li>
                    </ul>
                    <div className='col-6 navLinks   '>
                        <li><p>We deliver to you every day from <span className="time">7:00 to 23:00</span></p></li>
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-end gap-3'>
                        <li>
                            <Form.Select aria-label="Default select example">
                                {langs.map((lang , index) => (
                                    <option key={index} value={lang.id}>{lang.name}</option>

                                ))}
                            </Form.Select>
                        </li>
                        <li>
                            <Form.Select aria-label="Default select example">
                                {currencies.map((currency, index) => (
                                    <option key={index} value={currency.id}>{currency.name}</option>
                                ))}
                            </Form.Select>
                        </li>
                        <li>
                            <a className=" link-offset-2 link-underline link-underline-opacity-0" href="#">Order Tracking</a>
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNav;