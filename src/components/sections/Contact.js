import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: ""
    };
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Hire Me.</h2>
                <p className="description">
                  I am available for all kinds of work. Connect with me via
                  phone: <a href="tel:909-827-8184">909-321-2634.</a> To
                  email fill out the form below or
                  <a href="mailto: issac-moreno@lambdastudents.com"> Click Here </a>
                </p>
              </div>
              <div className="form-wrapper">
                <form>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.rnName}
                      onChange={e => {
                        this.setState({ rnName: e.target.value });
                      }}
                      placeholder="Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={e => {
                        this.setState({ rnEmail: e.target.value });
                      }}
                      placeholder="E-mail *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={e => {
                        this.setState({ rnSubject: e.target.value });
                      }}
                      placeholder="Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={e => {
                        this.setState({ rnMessage: e.target.value });
                      }}
                      placeholder="What are you writing about?"
                    />
                  </label>
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src="/assets/images/about/about-6.jpg" alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
