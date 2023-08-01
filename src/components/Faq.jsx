import Image from "next/image";
import { useState } from "react";

const faq = [
  {
    title: "Consultation",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Continual Improvement",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

export const Faq = () => {
  const [active, setActive] = useState(null);

  const handleActive = (index) => {
    setActive((prev) => (prev === index ? null : index));
  };
  return (
    <section className="c-faq">
      <div className="c-faq__Column">
        <h2>Our Working Process</h2>
        <p className="c-faq__description">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="c-faq__Column">
        {faq.map((item, index) => (
          <div
            className={`c-faq__faqBox ${active === index ? "content" : null}`}
            key={index}
            onClick={() => handleActive(index)}
          >
            <div className="c-faq__Title">
              <h4>
                <span>{index + 1}</span>
                {item.title}
              </h4>

              {active === index ? (
                <Image
                  src="/img/closeFaq.svg"
                  width={58}
                  height={59}
                  alt="close faq"
                />
              ) : (
                <Image
                  src="/img/activeFaq.svg"
                  width={58}
                  height={59}
                  alt="active faq"
                />
              )}
            </div>

            <div className="c-faq__body">
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
