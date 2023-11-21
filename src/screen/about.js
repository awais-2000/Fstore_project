import React from "react";
import aboutPic from "../pictures/about-1.jpg";
import "./about.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const about = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section id="aboutUs" className="about section-padding mt-5">
        <div className="container">
          <div className=" mb-5 justify-content-center text-center">
            <h1 className="about-heading">About Us</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="about-img">
                <img src={aboutPic} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="">
                <h2 className="about-text">
                  WE Provide Best Quality<br></br> Services Ever
                </h2>
                <p className="about-paragraph">
                  A foodstore is a retail business that sells food and household
                  goods. Foodstores can be small neighborhood stores or large
                  supermarkets. They typically sell a wide variety of products,
                  including fresh produce, meat, dairy, bakery goods, packaged
                  foods, beverages, and household supplies. Foodstores play an
                  important role in the food supply chain, providing consumers
                  with access to a variety of food products.
                </p>
                <a href="#" className="btn btn-success">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////// */}
      {/* Services */}

      <section className="services section-padding mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2 className="services-heading">Our Services</h2>
                <p className="services-paragraph">
                  Delightful dining awaits with our exceptional service{" "}
                  <br></br> We invite you to indulge in a culinary experience
                  like no other.<br></br> Our attentive staff will cater to your
                  every need, <br></br>ensuring a memorable dining experience
                  that will surpass your expectations.
                </p>
              </div>
            </div>
          </div>
          {/* --------------Card-1----------------- */}
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-dark text-center bg-light pb-2">
                <div className="card-body">
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">
                    When it comes to food, quality reigns supreme. From the
                    freshest ingredients to the most meticulous preparation,
                    every aspect contributes to an exceptional dining
                    experience. Indulge in dishes that tantalize the taste buds
                    and leave you craving more. When it comes to food, quality
                    reigns supreme. From the freshest ingredients to the most
                    meticulous preparation, every aspect contributes to an
                    exceptional dining experience. Indulge in dishes that
                    tantalize the taste buds and leave you craving more.
                  </p>
                  <button className="btn btn-dark text-light">Read More</button>
                </div>
              </div>
            </div>
            {/* ---------------------------Card-2------------------------------ */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-dark text-center bg-light pb-2">
                <div className="card-body">
                  <h3 className="card-title"> Quick Delivery</h3>
                  <p className="lead">
                    In today's fast-paced world, convenience is king. Quick
                    delivery services have revolutionized the way we receive our
                    goods, offering a seamless and efficient experience. From
                    groceries to restaurant meals, these services bring the
                    world to our doorstep, saving us time and effort. Whether
                    you're craving a late-night snack or need a last-minute
                    item, quick delivery services have you covered, ensuring
                    that you get what you need when you need it.
                  </p>
                  <button className="btn btn-dark text-light">Read More</button>
                </div>
              </div>
            </div>
            {/* ---------------------------Card-3------------------------------ */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-dark text-center bg-light pb-2">
                <div className="card-body">
                  <h3 className="card-title">Gaining Customer Trust</h3>
                  <p className="lead">
                    In the realm of business, trust is the cornerstone of a
                    thriving relationship with clients. It's the foundation upon
                    which loyalty, satisfaction, and repeat business are built.
                    To cultivate trust, consistently deliver exceptional
                    service, maintain transparency, and actively address
                    customer concerns. By prioritizing their needs and
                    demonstrating genuine care, you'll foster a loyal customer
                    base that will wholeheartedly advocate for your brand. base
                    that will wholeheartedly advocate for your brand.
                  </p>
                  <button className="btn btn-dark text-light">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default about;
