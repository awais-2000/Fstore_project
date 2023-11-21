import React from "react";
// import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      {/* <footer className="bg-success p-2 text-center" >
        <div class="container">
            <h5 className='text-white'>Info@:</h5>
            <p className='mt-2 text-white'>Email : ABCD@gmail.com</p>
            <p className='mt-2 text-white'>Phone No : ABCD@gmail.com</p>
            <p class="text-white">All Right Reserved © 2023 FoodStore, Inc</p>
        </div>
    </footer> */}

      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  We developed this project using <br></br> MERN Stack
                  technology ourselves.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">MERN Stack</h6>
                <p>
                  <a href="#!" className="text-reset">
                    MongoDB
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    NodeJs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    ExpressJs
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Framework Use</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Bootstrap 5
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Express
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Internal CSS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    External CSS
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Dera Ismail Khan, Pakitan
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center bg-success p-4 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Food-Store
          </a>
        </div>
      </footer>
    </>
  );
}
// ---------------------------------------------
