import React, { Fragment, useState } from "react";

const NewsLetter = () => {
  const [text, setText] = useState('')

  return (
    <Fragment>
      <section class="newsletter">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div class="main_content">
                <h4>
                  <strong>Feedback</strong>
                </h4>

                <p>Please Provide Your Valuable Feedback</p>
                <div id="" class="confirm-message"></div>
                <form id="" name="">
                  <div class="input-group">
                    <input
                      class="form-control news-input"
                      type="text"
                      name="subscribe_email"
                      id="subscribe_email"
                      placeholder="Give Your Valuable Feed Back"
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                    />
                    <span class="input-group-btn">
                      <button
                        class="btn btn-custom news-btn"
                        id=""
                        name="subscribe_btn"
                        onClick={(e) => {
                          setText("");
                        }}
                      >
                        <span>Send Feedback</span>
                      </button>
                    </span>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NewsLetter;
