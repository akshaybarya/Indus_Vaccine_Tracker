import React, { Fragment, useState } from "react";
import ContactForm from "./ContactForm";
import Form from "./Form";
import FormPincode from "./FormPincode";

const Features = () => {
  const [mode, changeMode] = useState(1);
  return (
    <Fragment>
      <section
        class="features parallax"
        data-stellar-background-ratio="0.7"
        id="features"
      >
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-4 col-md-4">
              <div class="features-box">

                <div class="open-overlay">
                  <a class="Special_a" href='#!' onClick={(e) => {
                    e.preventDefault();
                    changeMode(1);
                  }} >
                    <i class="icon-lightbulb"></i>
                  </a>
                </div>
                <h4>Search By District</h4>
                <p>
                  Get Vaccination details by entering State and District
                  Details.
                </p>

              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="features-box">
                <div class="open-overlay">
                  <a class="Special_a" href='!#' onClick={(e) => {
                    e.preventDefault();
                    changeMode(2);
                  }}>
                    <i class="icon-ribbon"></i>
                  </a>
                </div>
                <h4>Search By Pin</h4>
                <p>
                  Get Vaccination details by entering Pincode of Your Area
                  Details.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="features-box">
                <div class="open-overlay">
                  <a class="Special_a" href='!#' onClick={(e) => {
                    e.preventDefault();
                    changeMode(3);
                  }} >
                    <i class="icon-circle-compass"></i>
                  </a>
                </div>
                <h4>Customer Services</h4>
                <p>
                  mail us with any questions or inquiries. We would be
                  happy to answer your questions and set up a meeting with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {mode === 1 ? (<Form />) : (
        mode === 2 ? (<FormPincode />) : (<ContactForm />)
      )}

    </Fragment>
  );
};

export default Features;
