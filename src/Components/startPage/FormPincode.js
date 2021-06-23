import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Table from './Table'

const FormPincode = () => {
    const [pincode, setPincode] = useState('');
    const [availableSessions, setSessions] = useState([]);
    const [err, seterr] = useState('')

    const getDetails = async () => {
        if (pincode === "") {
            alert("Enter a Pincode");
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
                    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`,
                    config
                );
                setSessions(res.data.sessions);
                if (availableSessions.length === 0) {
                    seterr('Currently No vaccination Slots Available');
                } else {
                    seterr('');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

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
                    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div id="cformSuccessMsg" class="confirm-message"></div>
                        <form id="" name="">
                            <div class="input-group">
                                <input
                                    class="form-control news-input"
                                    type="Number"
                                    name="subscribe_email"
                                    id="subscribe_email"
                                    maxLength="8"
                                    minLength="4"
                                    placeholder="Enter Pincode"
                                    onChange={(e) => {
                                        setPincode(e.target.value);
                                    }}
                                    required
                                />
                                <span class="input-group-btn">
                                    <button
                                        class="btn btn-custom news-btn"
                                        id=""
                                        name="subscribe_btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            getDetails();
                                        }}
                                    >
                                        <span>Check Avalibilty</span>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
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
                                <h1 class="warning">{err}</h1>
                            </Fragment>
                        )}
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormPincode
