import axios from 'axios'
import { useState } from 'react'
import "@/assets/css/mainsection.css"

function LinksNav() {
    
    let [arr_categories, setArr_categories] = useState([])
    
    axios.get('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json').then(res => {
        let arr_cat = Object.values(res.data).map(item => item.category)
        setArr_categories([... new Set(arr_cat) , ... new Set(arr_cat)  ])
    })

    return (
            <>
            <div  className="categorySection accordion" id="mainaccordion">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button style={{color:"#030712", fontWeight:"600"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapsemain`} aria-expanded="true" aria-controls={`flush-collapsemain`}>
                            All categories
                        </button>
                    </h2>
                    <div id={`flush-collapsemain`} className="accordion-collapse collapse show accordion-flush" data-bs-parent="#mainaccordion" style={{maxHeight:'300px' , overflow:'auto'}}>
                        <div className="accordion-body p-0">

                            <div className="accordion accordion-flush" id="accordionExample">
                                {arr_categories.map((item, index) => (
                                    <div className="accordion-item">
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
                    </div>
                </div>
            </div>




        </>
    )
}
export default LinksNav