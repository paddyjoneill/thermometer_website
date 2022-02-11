import React, { ChangeEvent, useState } from "react";
import * as EmailValidator from 'email-validator';

const Contact = () => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [responseMessage, setResponseMessage] = useState<string>("")

  const updateName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const updateSubject = (event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)
  const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)
    
  const updateResponseMessage = async (message: string) => {
    setResponseMessage(message)
    await setTimeout(() => setResponseMessage(""), 5000)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validation

    // name
    if(name.length === 0){
      updateResponseMessage("Please Enter a Name")
      return;
    }
    // subject

    // email
    if(!EmailValidator.validate(email)){
      updateResponseMessage("Invalid Email Address")
      return;
    } 

    // message
    if(message.length === 0){
      updateResponseMessage("Please Enter a Message")
      return;
    }

    const apiUrl = "/api/contactForm"
    const payload = {name, email, subject, message}
    const postSettings = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(payload) // body data type must match "Content-Type" header
    }

    const response = await fetch(apiUrl, postSettings)
    // catch error or success...   
    console.log({response});

    if(response.status === 200){
      updateResponseMessage("Message Sent Successfully")
      // clear the input boxes if successful
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } else {
      updateResponseMessage("There was a problem sending your message. Please try again or email directly")
    }
  };


  return (
    <>
      <form className="contactform"
      onSubmit={onSubmit}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={name}
                onChange={updateName}
              />
              {/* {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )} */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={updateEmail}
              />
              {/* {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )} */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                value={subject}
                onChange={updateSubject}
              />
              {/* {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )} */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                value={message}
                onChange={updateMessage}
              ></textarea>
              {/* {responseMessage !== "" && ( */}
                <span className="invalid-feedback">{responseMessage}</span>
              {/* // )} */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
