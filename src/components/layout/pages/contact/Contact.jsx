import React, { useState } from "react";
import { send } from "emailjs-com";

import "./Contact.scss";

const Contact = () => {
  const [formInputs, setFormInputs] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const ChangeHandler = (event) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  const formHandler = (event) => {
    event.preventDefault();
    send("service_yyeki9b", "template_ioz6ifx", formInputs, "yySSC3OYij-nR0TpB")
      .then((response) => {
        alert("Message sent successfully");
      })
      .catch((err) => {
        alert("Message not sent");
      });
    setFormInputs({ from_name: "", message: "", reply_to: "" });
  };

  return (
    <div className="Contact">
      <div className="wrapper">
        <div className="form-bg">
          <form>
            <div>
              <input
                type="text"
                name="from_name"
                value={formInputs.from_name}
                onChange={ChangeHandler}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="reply_to"
                value={formInputs.reply_to}
                onChange={ChangeHandler}
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                type="text"
                name="message"
                value={formInputs.message}
                onChange={ChangeHandler}
                placeholder="Message"
              />
            </div>
            <div>
              <button onClick={formHandler}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
