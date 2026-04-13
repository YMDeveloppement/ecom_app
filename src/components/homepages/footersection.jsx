export default function FooterSection() {
  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-light py-4 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h5 className="fw-bold mb-1">Join our newsletter for £10 offs</h5>
              <p className="text-muted mb-0" style={{ fontSize: 13 }}>
                Register now to get latest updates on promotions & coupons. Don't worry, we not spam!
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <button
                  className="btn px-4 text-white fw-semibold"
                  style={{ backgroundColor: "#6c4ecb", whiteSpace: "nowrap" }}
                >
                  SEND
                </button>
              </div>
              <p className="text-muted mt-1 mb-0" style={{ fontSize: 11 }}>
                By subscribing you agree to our{" "}
                <a href="#" className="text-muted">Terms & Conditions</a> and{" "}
                <a href="#" className="text-muted">Privacy & Cookie Policy.</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-white pt-5 pb-3 border-top">
        <div className="container">
          <div className="row g-4">

            {/* Contact */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="fw-bold mb-3">Do You Need Help?</h6>
              <p className="text-muted mb-3" style={{ fontSize: 13 }}>
                Autosaligan aut. Nek danuis lobomia. Ntc antipol kymodie nyriat. Presea filmaskia.
              </p>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span style={{ fontSize: 18 }}>📞</span>
                <div>
                  <div className="text-muted" style={{ fontSize: 12 }}>Monday-Friday: 10am–8pm</div>
                  <div className="fw-bold" style={{ fontSize: 17 }}>0 800 300-353</div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: 16 }}>✉️</span>
                <a href="mailto:info@example.com" className="text-muted text-decoration-none" style={{ fontSize: 13 }}>
                  info@example.com
                </a>
              </div>
            </div>

            {/* Make Money */}
            <div className="col-12 col-sm-6 col-lg-2">
              <h6 className="fw-bold mb-3">Make Money with Us</h6>
              <ul className="list-unstyled">
                {["Sell on Oriign", "Sell Your Services on Oriign", "Sell on Oriign Business", "Sell Your Apps on Oriign", "Become an Affiliate", "Advertise Your Products", "Self-Publish with Us", "Become an Bloovner Vendor"].map((item) => (
                  <li key={item} className="mb-1">
                    <a href="#" className="text-muted text-decoration-none" style={{ fontSize: 13 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let Us Help */}
            <div className="col-12 col-sm-6 col-lg-2">
              <h6 className="fw-bold mb-3">Let Us Help You</h6>
              <ul className="list-unstyled">
                {["Accessibility Statement", "Your Orders", "Returns & Replacements", "Shipping Rates & Policies", "Refund and Returns Policy", "Privacy Policy", "Terms and Conditions", "Cookie Settings", "Help Center"].map((item) => (
                  <li key={item} className="mb-1">
                    <a href="#" className="text-muted text-decoration-none" style={{ fontSize: 13 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get to Know */}
            <div className="col-12 col-sm-6 col-lg-2">
              <h6 className="fw-bold mb-3">Get to Know Us</h6>
              <ul className="list-unstyled">
                {["Careers for Oriign", "About Oriign", "Investor Relations", "Oriign Devices", "Customer reviews", "Social Responsibility", "Store Locations"].map((item) => (
                  <li key={item} className="mb-1">
                    <a href="#" className="text-muted text-decoration-none" style={{ fontSize: 13 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="fw-bold mb-3">Download our app</h6>
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="border rounded p-2 d-flex align-items-center gap-2" style={{ cursor: "pointer", maxWidth: 160 }}>
                  <span style={{ fontSize: 22 }}>🍎</span>
                  <div>
                    <div className="text-muted" style={{ fontSize: 10 }}>Download App Get</div>
                    <div style={{ fontSize: 12, color: "#e8232a", fontWeight: 600 }}>-10% Discount</div>
                    <div className="fw-semibold" style={{ fontSize: 12 }}>App Store</div>
                  </div>
                </div>
                <div className="border rounded p-2 d-flex align-items-center gap-2" style={{ cursor: "pointer", maxWidth: 160 }}>
                  <span style={{ fontSize: 22 }}>🤖</span>
                  <div>
                    <div className="text-muted" style={{ fontSize: 10 }}>Download App Get</div>
                    <div style={{ fontSize: 12, color: "#e8232a", fontWeight: 600 }}>-20% Discount</div>
                    <div className="fw-semibold" style={{ fontSize: 12 }}>Google Play</div>
                  </div>
                </div>
              </div>
              <p className="fw-semibold mb-2" style={{ fontSize: 13 }}>Follow us on social media:</p>
              <div className="d-flex gap-2">
                {["f", "t", "in", "yt"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none fw-bold"
                    style={{ width: 30, height: 30, fontSize: 12, backgroundColor: "#6c4ecb" }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <hr className="mt-4 mb-3" />
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <p className="text-muted mb-0" style={{ fontSize: 12 }}>
                Copyright 2025 © Bbasstore WooCommerce WordPress Theme. All right reserved. Powered by{" "}
                <a href="#" className="text-decoration-none fw-semibold" style={{ color: "#6c4ecb" }}>BlackRise Themes.</a>
              </p>
              <div className="d-flex gap-2 mt-2 flex-wrap">
                {["VISA", "MasterCard", "PayPal", "Skrill", "Klarna"].map((p) => (
                  <span
                    key={p}
                    className="border rounded px-2 py-1 text-muted"
                    style={{ fontSize: 11, fontWeight: 600 }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end flex-wrap">
                {["Terms and Conditions", "Privacy Policy", "Order Tracking"].map((link) => (
                  <a key={link} href="#" className="text-muted text-decoration-none" style={{ fontSize: 12 }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}