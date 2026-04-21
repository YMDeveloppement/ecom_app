// import axiosIns from '@/plugins/axiosIns.js'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import '@/assets/css/bottomnav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTableCellsLarge, faUser, faBasketShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function bottomNav() {
    let [arr_categories, setArr_categories] = useState([])

    useEffect(() => {
        axios.get('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json').then(res => {
            let arr_cat = Object.values(res.data).map(item => item.category)
            setArr_categories([... new Set(arr_cat), ... new Set(arr_cat)])
        })

    }, [])

    return (
        <>
            <nav className="bottom-nav navbar bg-body-tertiary fixed-bottom">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navcart" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div>
                            <FontAwesomeIcon icon={faList} />
                            <p></p>
                        </div>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navcategories" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <div>
                            <FontAwesomeIcon icon={faTableCellsLarge} />
                            <p></p>
                        </div>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
                        <div>
                            <FontAwesomeIcon icon={faBasketShopping} />
                            <p></p>
                        </div>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
                        <div>
                            <FontAwesomeIcon icon={faHeart} />
                            <p></p>
                        </div>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation">
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                            <p></p>
                        </div>
                    </button>

                    {/* ######################################### */}

                    <div className="offcanvas p-3 offcanvas-end" tabIndex="-1" id="navcategories" aria-labelledby="offcanvasNavbarLabel">
                        <h4>Categories</h4>
                        <div className=" accordion accordion-flush" id="accordionExample">
                            {arr_categories.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`}>
                                            {item}
                                        </button>
                                    </h2>
                                    <div id={`flush-collapseOne${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <small>- {item}</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="navcart" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Fruits & Vegetables</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" >Beverages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#" >Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}