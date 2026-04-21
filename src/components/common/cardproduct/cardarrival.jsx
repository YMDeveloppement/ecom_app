import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import "@/assets/css/cards/cardarrival.scss"
export default function CardArrival({ item }) {

    function addToFavorite() {
        console.log("clicked")
    }


    return (
        <div className="card card-produit p-2 " >
            <div className='row'>
                <div className="img-produit col-6 ">
                    <div className="like-btn" onClick={addToFavorite}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="discount-chip">
                        <span className=" badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <span className="ship-organic ">
                        <span className="leaf-icon">🌿</span>
                    </span>
                    <div className="add-to-card">
                        <FontAwesomeIcon style={{ color: '#634C9F', marginRight:"1rem" }} icon={faPlus} /> add</div>
                    <img src={item.path_img} className="card-img-top" alt={item.title} />
                </div>

                <div className='col-6'>
                    <div className="px-2 pt-3">
                        {Array.from({ length: 5 }, (_, i) => {
                            return (
                                (i < item.rates ? <FontAwesomeIcon key={i} icon={faStar} className="text-warning" /> : <FontAwesomeIcon key={i} icon={faStar} className="text-secondary" />)
                            )
                        })}
                        <span className="ps-2">{item.rates}</span>
                    </div>
                    <div className="title  p-2 ">
                        <h6 className="card-title" style={{ inlineSize: "140px", overflow: "hidden", textWrap: "nowrap" }}>{item.title}</h6>
                    </div>

                    <div className="product-card">
                        <div className='' style={{ display: 'flex', alignItems: 'baseline' }}>
                            <div className="price-new"><span>{item.price.toFixed(2)} <sub>MAD</sub></span>  </div>
                            <div className="price-old"><span >{item.old_price.toFixed(2)} <sub>MAD</sub></span> </div>
                        </div>

                        <hr className="dropdown-divider" />

                        <p className="stock-warning">This product is about to run out</p>

                        <div className="stock-bar-track">
                            <div className="stock-bar-fill"></div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span className="available-label">available only:</span>
                            <span className="available-count">{item.stock}</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="timer  pt-3 pb-3 d-flex align-items-center justify-space-between gap-2 ">

                {
                    (item.timer) ? (
                        <>
                            <div className='d-flex align-items-center justify-space-between gap-2'>
                                <div className="timer-item">10</div>
                                <div className="timer-item">10</div>
                                <div className="timer-item">10</div>
                                <div>:</div>
                                <div className="timer-item">10</div>
                            </div>
                            <p className=''>Remains until the end of the offer</p>
                        </>
                    ) : 
                    <div>
                        <p style={{lineHeight:'39px'}} className='m-0 w-100   text-center'>Remains until the end of the offer</p>

                    </div>

                }
            </div>

        </div >
    )
}