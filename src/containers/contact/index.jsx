import React from "react";
import PageHeaderContent from "../pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import "./style.scss";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_knfphrl",
        "template_t8thc2x",
        form.current,
        "Hw2QVlD8De9OAnvGV"
      )
      .then(
        (result) => {
          toast.success("Email sent Successfully");
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error("try again");
        }
      );
  };
  return (
    <div>
      <PageHeaderContent
        headerText="Contact Me"
        // icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact">
        <Animate
          play
          duration={1}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact_us">
            <h3 className="contact_us_header">Contact me</h3>
          </div>
        </Animate>

        <Animate
          play
          duration={1}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact_us_form" ref={form} onSubmit={sendEmail}>
            <ToastContainer />
            <div className="contact_us_form_control">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="inputName"
                  name="user_name"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="inputEmail"
                  name="user_email"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder=" send message"
                  required
                  className="desc"
                  raw="15"
                  name="message"
                />
              </div>
            </div>
            <button className="btn">Submit</button>
          </form>
        </Animate>
      </div>
    </div>
  );
};

export default Contact;
