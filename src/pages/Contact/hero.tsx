import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import Toast from "../../components/Toast";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>(null);
  const recaptchaRef = useRef<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token: string | null) => {
    setCaptcha(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      setToast({ show: true, message: "Please verify you are not a robot.", type: "error" });
      return;
    }
    setLoading(true);
    setToast({ show: true, message: "Sending...", type: "loading" });
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: form.project,
          message: form.message,
          time: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully:", res);
      setToast({ show: true, message: "Message sent successfully!", type: "success" });
      setForm({ name: "", email: "", phone: "", project: "", message: "" });
      setCaptcha(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (err: any) {
      console.log("Email send failed:", err);
      if (err && (err.message?.includes('Network') || err.toString().includes('Network'))) {
        setToast({ show: true, message: "Network error. Please check your connection and try again.", type: "error" });
      } else {
        setToast({ show: true, message: "Failed to send message.", type: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row lg:pb-[60px] self-end items-end">
      {/* Left side - Contact form */}
      <div className="w-full lg:w-1/2 px-[16px]  py-[40px] items-end lg:px-20 lg:py-[60px] bg-white">
        <div className="">
          {/* Heading */}
          <h2 className="text-[32px] text-[#3B241E] lg:text-[40px] lg:leading-[40px] font-semibold mb-2 lg:mb-[20px]">
            CONTACT US
          </h2>
          <p className="text-[14px] text-[#000000] mb-8 lg:mb-[40px]">
            We're excited to hear about your project. Fill out the form or reach
            us directly.
          </p>

          {/* Form */}
          <form className="space-y-[40px] lg:space-y-[40px]" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[44px] lg">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
                required
              />
            </div>

            {/* Phone Number & Project Type */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[44px]">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
              />
              <input
                type="text"
                name="project"
                placeholder="Project Type"
                value={form.project}
                onChange={handleChange}
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={8}
              value={form.message}
              onChange={handleChange}
              className="w-full border-b text-[14px] border-[#000] focus:outline-none py-2 lg:py-text-[#000] placeholder-[#000]"
              required
            ></textarea>

            {/* reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleCaptcha}
              className="mb-6"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3B241E] w-full lg:w-[200px] text-white text-sm px-6 py-3 mt-[40px] lg:mt-[60px]"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          <Toast
            show={toast.show}
            message={toast.message}
            type={toast.type as any}
            onHide={() => setToast({ ...toast, show: false })}
          />
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative inset-0 w-full lg:block lg:w-1/2 h-[500px] lg:h-[880px]">
        <img
          src="https://res.cloudinary.com/dzwv3fba5/image/upload/v1750861232/contact-img_ovb4ix.png"
          alt="Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00000066] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Contact;
