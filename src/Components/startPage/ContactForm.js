import React, { Fragment, useState } from 'react'
import nodemailer from 'nodemailer'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [text, setText] = useState('')

    const sendMail = async () => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'indusvaccinationtraker@gmail.com',
                pass: 'Akshay123'
            }
        })

        var mailOptions = {
            from: 'indusvaccinationtraker@gmail.com',
            to: mail,
            subject: 'Thank you ' + name + ' for contacting Indus Vaccination Traker',
            text: 'We appreciate you contacting Indus Vaccination Traker. One of our colleagues will get back in touch with you soon!Have a great day!'
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            }
        })
        setName('')
        setMail('')
        setText('')
    }

    return (
        <Fragment>
            <section id="contact" class="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <h4>Get In Touch</h4>
                            <div class="line-separate line-white text-center"><span></span></div>
                            <p>7-Gandhi Road, Mungaoli, AshokNagar -473443</p>
                        </div>
                    </div>

                    <div id="cformSuccessMsg" class="confirm-message"></div>
                    <form id="" name="contactForm" method="POST" >
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-lg-offset-2 col-md-offset-2">
                                <input class="" type="text" name="contact_name" id="contact_name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <input class="" type="text" name="contact_email" id="contact_email" placeholder="Email" value={mail} onChange={(e) => { setMail(e.target.value) }} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-lg-offet-2 col-md-offset-2">
                                <textarea name="contact_message" id="contact_message" placeholder="Message" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="text-right">
                                    <button class="btn btn-custom" id="contact_submit_btn" name="contact_submit_btn" onClick={(e) => {
                                        e.preventDefault();
                                        sendMail();
                                    }} ><span>Send Message</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactForm;
