import React, { ChangeEvent, useState } from "react";

const Contact = () => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const updateName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const updateSubject = (event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)
  const updateMessage = (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };


  return (
    <>
      <form className="contactform"
      // onSubmit={handleSubmit(onSubmit)}
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
                // {...register(
                //   "email",
                //   {
                //     required: "Email is Required",
                //     pattern: {
                //       value: /\S+@\S+\.\S+/,
                //       message: "Entered value does not match email format",
                //     },
                //   },
                //   { required: true }
                // )}
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
                // {...register("subject", { required: true })}
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
                // {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
                value={message}
                onChange={updateMessage}
              ></textarea>
              {/* {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )} */}
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
