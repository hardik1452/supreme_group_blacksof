import { useState } from "react";
import Button from "./Button";
import { toast } from "react-toastify";
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState({
    fullName: false,
    email: false,
    company: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false); //to change submit button text
  //while form input value is changing
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsFormValid({
      ...isFormValid,
      [e.target.name]: e.target.value ? false : null,
    });
  };
  //To validate form data
  const validateForm = () => {
    let validateError = {
      fullName: formData.fullName.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
      company: formData.company.trim() === "",
    };
    setIsFormValid(validateError);
    return Object.values(validateError).every((field) => field === true);
  };
  //When we submit form
  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Hi ${formData.fullName},Thanks for reaching out. We will get back to you! `
      );
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
    }, 2000);
  };
  return (
    <div className="w-full oveflow-hidden bg-secondary font-primary md:px-6 md:py-12 max-sm:px-6 max-sm:py-12 max-md:p-6 lg:px-52 lg:py-32">
      <div className="lg:flex md:flex max-sm:flex-col justify-between items-center text-white">
        {/* Left Side */}
        <div
          className="max-sm:w-full md:w-1/2 lg:w-1/2 flex flex-col gap-7"
          id="contact-us"
        >
          <h2 className="text-2xl font-semibold lg:text-4xl">Get In Touch</h2>
          <div className="w-12 rounded-full h-0.5 bg-white"></div>
          <p className="font-normal text-2xl">For general enquiries</p>
          <p className="font-normal text-xl">
            Address: <br />
            110, 16th Road, Chembur, Mumbai - 400071
          </p>
          <p className="font-normal text-xl">
            Phone :<br />
            <a href="tel:+91 22 25208822">+91 22 25208822</a>
          </p>
          <p className="font-normal text-xl">
            Email :<br />
            <a href="mailto:info@supremegroup.co.in">info@supremegroup.co.in</a>
          </p>
        </div>
        {/* Right Side */}
        <div
          className="max-sm:w-full md:w-1/2 lg:w-1/2 md:mt-8 max-sm:mt-8 max-md:mt-8"
          id="form"
        >
          <form
            onSubmit={submitForm}
            className="max-sm:w-full text-white grid gap-4 space-y-4"
          >
            {/* FullName form data */}
            <div className="w-full mb-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              />
              {isFormValid.fullName && (
                <span className="text-red-500 text-sm font-semibold">
                  Please enter Full Name
                </span>
              )}
            </div>
            {/* Email Form Data */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              />
              {isFormValid.email && (
                <span className="text-red-500 text-sm font-semibold">
                  Please enter email
                </span>
              )}
            </div>
            {/* Company Form Data */}
            <div className="mb-4">
              <input
                type="company"
                name="company"
                value={formData.company || ""}
                onChange={handleChange}
                placeholder="Company"
                className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none"
              />
              {isFormValid.company && (
                <span className="text-red-500 text-sm font-semibold">
                  Please enter company name
                </span>
              )}
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                rows={3}
                className="w-full border-b-2 border-gray-300 bg-transparent outline-none focus:outline-none"
              />
              {isFormValid.message && (
                <span className="text-red-500 text-sm font-semibold">
                  Please enter message
                </span>
              )}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="border-1 rounded-full px-12 py-3 bg-transparent hover:bg-white hover:text-black transition"
              >
                {isSubmitting ? "Loading..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
