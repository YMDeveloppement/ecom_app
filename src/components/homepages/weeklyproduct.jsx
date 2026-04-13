import { useState } from "react";

export default function WeeklyProduct() {

    const [weekprod, setWeekprod] = useState([
        "./src/assets/imgs/pub/pub1.png",
        "./src/assets/imgs/pub/pub2.png",
        "./src/assets/imgs/pub/pub3.png",
    ]);

    return (
        <>
            <div className="weekly-product-section">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center justify-content-center">
                        <img src={weekprod[0]} alt="Product 1" className="img-fluid rounded" style={{ objectFit: "cover", maxHeight: 260 }} />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center justify-content-center">
                        <img src={weekprod[1]} alt="Product 2" className="img-fluid rounded" style={{ objectFit: "cover", maxHeight: 260 }} />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
                        <img src={weekprod[2]} alt="Product 3" className="img-fluid rounded" style={{ objectFit: "cover", maxHeight: 260 }} />
                    </div>
                </div>
            </div>

        </>
    )
}
