import React from "react";
import { ButtonCta } from "./ButtonCta";

export const Contact = () => {
  return (
    <section className="c-contact">
      <div className="c-contact__Column">
        <h2>Contact Us</h2>
        <p className="c-contact__p">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="c-contact__Column">
        <div className="c-contact__wrapper">
          <form className="c-contact__form">
            <div className="c-contact__snippets">
              <label>
                <input type="radio" name="radio" required />
                Say Hi
              </label>
              <label>
                <input type="radio" name="radio" required />
                Get a Quote
              </label>
            </div>

            <div className="c-contact__camps">
              <label>
                Name
                <input type="text" placeholder="Name" required />
              </label>

              <label>
                Email*
                <input type="email" placeholder="Email" required />
              </label>

              <label>
                Message*
                <textarea placeholder="Message" required></textarea>
              </label>
            </div>

            <ButtonCta type="button" classe="c-button__ButtonCta">
              Send Message
            </ButtonCta>
          </form>
        </div>
      </div>
    </section>
  );
};
