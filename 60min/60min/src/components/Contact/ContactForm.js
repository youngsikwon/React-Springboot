import React from 'react';
import emailjs from 'emailjs-com';
import dotenv from 'dotenv';
import './ContactForm.scss';
dotenv.config();

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: '',
      senderEmail: '',
      message: '',
    };
  }

  handleMessage = (e) => {
    let tmpState = this.state;
    tmpState.message = e.target.value;
    this.setState(tmpState);
  };

  handleEmail = (e) => {
    let tmpState = this.state;
    tmpState.senderEmail = e.target.value;
    this.setState(tmpState);
  };

  handleName = (e) => {
    let tmpState = this.state;
    tmpState.senderName = e.target.value;
    this.setState(tmpState);
  };

  sendEmail = (e) => {
    // console.log("send");
    e.preventDefault();
    const templateOptions = {
      senderName: this.state.senderName,
      message: this.state.message,
      senderEmail: this.state.senderEmail,
    };

    emailjs
      .send(
        'gmail',
        `${process.env.REACT_APP_EMAIL_KEY}`,
        templateOptions,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert('Send email!');
          this.setState({
            senderName: '',
            message: '',
            senderEmail: '',
          });
        },
        (error) => {
          // console.log(error.text);
          alert('Error');
        }
      );
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.sendEmail}>
        <div className="form-flex">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="senderName"
              value={this.state.senderName}
              onChange={this.handleName}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="senderEmail"
              value={this.state.senderEmail}
              onChange={this.handleEmail}
              required
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleMessage}
              required
            />
          </div>
        </div>
        <input type="submit" value="Send" className="mail-btn" />
      </form>
    );
  }
}
