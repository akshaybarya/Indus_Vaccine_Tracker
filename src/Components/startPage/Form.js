import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

const Form = () => {
  const [Indianstates, fetchStates] = useState([]);
  const [selctedState, setSelectedState] = useState("");
  const [Districts, fetchDistricts] = useState([]);
  const [selctedDistrict, setSelectedDistrict] = useState("");
  const [availableSessions, setSessions] = useState([]);
  const [err, seterr] = useState('')

  useEffect(async () => {
    try {
      const config = {
        headers: {
          "User-Agent": "axios app",
        },
      };

      const res = await axios.get(
        "https://cdn-api.co-vin.in/api/v2/admin/location/states",
        config
      );
      //console.log(res.data.states);
      //const json = await res.json();
      fetchStates(res.data.states);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getDistrict = async (st) => {
    try {
      const config = {
        headers: {
          "User-Agent": "axios app",
        },
      };

      const res = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${st}`,
        config
      );
      fetchDistricts(res.data.districts);
      //console.log(res.data.districts);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    if (selctedDistrict === "-1" || selctedState === "-1") {
      alert("Select state and district");
    } else {
      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      today = dd + "-" + mm + "-" + yyyy;
      console.log(today);
      try {
        const config = {
          headers: {
            "User-Agent": "axios app",
          },
        };

        const res = await axios.get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${selctedDistrict}&date=${today}`,
          config
        );
        setSessions(res.data.sessions);
        //console.log(res.data.sessions);
        if (availableSessions.length === 0) {
          seterr('Currently No vaccination Slots Available');
        } else {
          seterr('');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Fragment>
      <section id="contact" class="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h4>Check Avalibilty</h4>
              <div class="line-separate line-white text-center">
                <span></span>
              </div>
              <p>Without Entering OTP</p>
            </div>
          </div>

          <div id="cformSuccessMsg" class="confirm-message"></div>
          <form id="" name="contactForm" method="POST">
            <div class="row my_form">
              <div class="col-lg-4 col-md-4 col-lg-offset-2 col-md-offset-2">
                <select
                  class="selectpicker form-control"
                  data-size="5"
                  data-width="auto"
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    getDistrict(e.target.value);
                  }}
                >
                  <option selected="true" disabled="disabled" value="-1">Choose a State</option>
                  {Indianstates.map((st) => (
                    <option value={st.state_id}>{st.state_name}</option>
                  ))}
                </select>
              </div>
              <div class="col-lg-4 col-md-4">
                <select
                  class="selectpicker form-control"
                  data-width="auto"
                  data-size="5"
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                  }}
                >
                  <option selected="true" disabled="disabled" value="-1">Choose a District</option>
                  {Districts.map((dt) => (
                    <option value={dt.district_id}>{dt.district_name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="text-center">
                  <button
                    class="btn btn-custom"
                    id="contact_submit_btn"
                    name="contact_submit_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      onSubmit(e);
                    }}
                  >
                    <span>Check Avalibilty</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div class="container-fluid">
        <div class="row ">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            {availableSessions.length !== 0 ? (
              <Table availableSessions={availableSessions} />
            ) : (
              <Fragment>
                <center><b class="warning">{err}</b></center>
                <br /><br />
              </Fragment>
            )}
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
