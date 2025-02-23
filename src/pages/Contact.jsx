import React from "react";
import Trandingpost from "../components/Trandingpost";
import Hotnews from "../components/Hotnews";
import Sidebar from "../components/Sidebar";

function Contact() {
  return (
    <div>
      
      <div className="flex gap-3 my-12">

        <div className="bg-white p-8 border-[1px] rounded-sm laptopl:basis-[868px] basis-auto h-fit">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631568066!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1643669949441!5m2!1sen!2sus"
            className=" h-96 border-0 w-full "
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="flex flex-col gap-4 mt-6">
            <h3 className="heading3">Get In Touch With Us!</h3>
            <p>
              Appetite no humoured returned informed. Possession so comparison
              inquietude he he conviction no decisively. Marianne jointure
              attended she hastened surprise but she.
            </p>
            <form className=" flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="email"
                  className="border-[1px] rounded-sm focus:outline-none p-2"
                ></input>
              </div>

              <div className="flex flex-col gap-2 flex-wrap">
                <label>I want to Speak about</label>
                <select className="border-[1px] rounded-sm focus:outline-none p-2">
                  <option value="Promote Articles on your Blog">
                    Promote Articles on your Blog
                  </option>
                  <option value="I have Question about your Website">
                    I have Question about your Website
                  </option>
                  <option value="Affiliate Posts Related Question">
                    Affiliate Posts Related Question
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label>Message</label>
                <textarea
                  rows={10}
                  className="border-[1px] rounded-sm focus:outline-none p-2 "
                ></textarea>
              </div>

              <input
                type="submit"
                value="Submit"
                className="primary-btn py-2"
              />
            </form>
          </div>
        </div>

        <div className="basis-[350px] hidden laptop:block">
          <Sidebar />
        </div>

      </div>

      <div className="py-6 flex gap-4 sm:flex-wrap laptop:flex-nowrap">
        <Trandingpost />
        <Hotnews />
      </div>
    </div>
  );
}

export default Contact;
