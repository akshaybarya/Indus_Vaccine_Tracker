import React from 'react'

const Home = () => {
    return (
        <div>
            <section id="home">
                <div class="content">
                    <div id="large-header" class="large-header">
                        <canvas id="demo-canvas"></canvas>
                        <div id="data" class="home-main container">
                            <div class="row">
                                <div class="logo">
                                    <img src="../images/logo.png" alt="logo" />
                                    <p>Covid Vaccine Tracker</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                    <div class="dash days_dash">
                                        <div class="digit">0</div>
                                        <div class="digit">0</div>
                                        <span class="dash_title">Days</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                    <div class="dash hours_dash">
                                        <div class="digit">0</div>
                                        <div class="digit">0</div>
                                        <span class="dash_title">Hours</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                    <div class="dash minutes_dash">
                                        <div class="digit">0</div>
                                        <div class="digit">0</div>
                                        <span class="dash_title">Minutes</span>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-3 col-xs-6 dash-glob" data-scroll-reveal="enter bottom move 25px, after 0.3s">
                                    <div class="dash seconds_dash">
                                        <div class="digit">0</div>
                                        <div class="digit">0</div>
                                        <span class="dash_title">Seconds</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
