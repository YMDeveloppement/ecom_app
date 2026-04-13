import '@/assets/css/cards/cardproduct.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CardProduct({ item }) {


    function addToFavorite() {
        console.log("clicked")
    }   
    return (
        <div className="card main-card-product" >
            <div className="img-produit ">
                <div className="like-btn" onClick={addToFavorite}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="discount-chip">
                    <span className=" badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <span class="ship-organic ">
                    <span class="leaf-icon">🌿</span>
                    Organic
                </span>
                <div className="add-to-card">
                    <FontAwesomeIcon style={{ color: 'white' }} icon={faPlus} />                                        </div>
                <img src={item.path_img} className="card-img-top" alt={item.title} />
            </div>
            <div className="px-2 pt-3">
                {Array.from({ length: 5 }, (_, i) => {
                    return (
                        (i < item.rates ? <FontAwesomeIcon key={i} icon={faStar} className="text-warning" /> : <FontAwesomeIcon key={i} icon={faStar} className="text-secondary" />)
                    )
                })}
                <span className="ps-2">{item.rates}</span>
            </div>
            <div className="title  p-2 ">
                <h6 className="card-title">{item.title}</h6>
            </div>


            <div className="product-card">
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <div className="price-sale"><span>{item.price.toFixed(2)}</span> <span>MAD</span> </div>
                    <div className="price-original"><span >{item.old_price.toFixed(2)}</span> <span>MAD</span></div>
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
    )
}