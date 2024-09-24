import React from "react";
import {senderEmail} from'@/actions/sendEmail'
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
const Form = () => {

//  const api="re_b9Koff8K_PtqMoNtW7DLrDvcqMvMZvfgU"

  return (
    <form action={async (formData) => {
      const { data, error } = await senderEmail(formData);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success("Email sent successfully!");
    }}
    
    className="contact-form needs-validation card card--white">
      <div className="row">
        <div className="col-md-6 mb-24">
          <input
            type="text"
            name="senderName"
            className="form-control contact-form__input"
            id="name"
            placeholder="Enter Your Name"
            required
            maxLength={500} />
        </div>

        <div className="col-md-6 mb-24">
          <input
            type="email"
            name="senderEmail"
            className="form-control contact-form__input"
            id="email"
            placeholder="Enter Your Email"
            required
            maxLength={500}/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-24">
          <input
            type="text"
            name="subject"
            className="form-control contact-form__input"
            id="subject"
            placeholder="Enter Your Subject"
            required
            maxLength={500}/>
        </div>

        <div className="col-lg-12 mb-24">
          <textarea
            className="form-control contact-form__input contact-form__input--textarea"
            id="msg"
            name="message"
            placeholder="Enter Your Message"
            rows={5}
            required
            maxLength={5000}
          ></textarea>
        </div>
        <div className="col-12">
          <SubmitBtn/>
        </div>
      </div>
    </form>
  );
};

export default Form;
