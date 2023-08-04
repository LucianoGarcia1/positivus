
import { SwiperSlide, Swiper } from "swiper/react";

export const Testimonials = () => {
  const dataTestimonials = [
    {
      name: "John Smith",
      carge: "Marketing Director at XYZ Corp",
      testimonial:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      carge: "Marketing Director at XYZ Corp",
      testimonial:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      carge: "Marketing Director at XYZ Corp",
      testimonial:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      carge: "Marketing Director at XYZ Corp",
      testimonial:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      carge: "Marketing Director at XYZ Corp",
      testimonial:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
  ];
  return (
    <section className="c-testi">
      <div className="c-testi__Column">
        <h2>Testimonials</h2>
        <p className="c-testi__p">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="c-testi__Column">
        <Swiper
          className="c-testi__slide"
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {dataTestimonials.map((item, index) => (
            <SwiperSlide className="c-testi__wrapper" key={index}>
              <div className="c-testi__testimonial">
                <p>{item.testimonial}</p>
              </div>

              <div className="c-testi__profile">
                <h4>{item.name}</h4>
                <span>{item.carge}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
