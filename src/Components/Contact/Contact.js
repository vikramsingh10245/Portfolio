import React, { useRef, useState } from 'react';
import { images } from '../../Constants';
import emailjs from 'emailjs-com';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import { BsPerson, BsEnvelope, BsChatDots } from 'react-icons/bs';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2nghdbc', 'template_c9qczld', e.target, '3aYeG0AObTPOoFmqV')
      .then((result) => {
        toast('Email Sent Successfully');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        toast.error('An Error Occur',error.text);
      });
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="left-column">
        <h2>Let's Get in Touch:</h2>
        <span>Just one click away</span>
      </div>

      <div className="right-column">
        <img src={images.email} style={{height:120, width:120}} alt='email' />
        <Form onSubmit={sendEmail} ref={form}>
          <FormGroup>
            <Label for="name">
              <span className="icon-container">
                <BsPerson className="contact__icon" />
              </span>
            </Label>
            <Input
              type="text"
              className="form-control"
              id="name"
              name="from_name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              <span className="icon-container">
                <BsEnvelope className="contact__icon" />
              </span>
            </Label>
            <Input
              type="email"
              className="form-control"
              id="email"
              name="from_email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">
              <span className="icon-container">
                <BsChatDots className="contact__icon" />
              </span>
            </Label>
            <Input
              type="textarea"
              className="form-control"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          <button type="submit" className="contact__button">
            Send message
          </button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
