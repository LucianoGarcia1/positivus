import Image from "next/image";
import { ButtonCta } from "./ButtonCta";
export const Services = () => {
  return (
    <section className="c-services">
      <div className="c-services__columnServices">
        <h2>Services</h2>
        <p className="c-services__copy">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="c-services__columnServices">
        <div className="c-services__inlineBoxs">
          <div className="c-services__BoxServices gray">
            <div>
              <h3 className="c-services__BoxTitle">
                Search engine optimization
              </h3>

              <a href="#" className="c-services__learnMore">
                <Image
                  src="../img/learn1.svg"
                  width={41}
                  height={41}
                  alt="Learn more"
                />

                <span>Learn more</span>
              </a>
            </div>

            <div>
              <Image
                src="../img/boxService1.svg"
                width={210}
                height={170}
                alt="Learn more"
                className="c-services__ServicesImg"
              />
            </div>
          </div>
          <div className="c-services__BoxServices green">
            <div>
              <h3 className="c-services__BoxTitle">
                Pay-per-click advertising
              </h3>

              <a href="#" className="c-services__learnMore">
                <Image
                  src="../img/learn1.svg"
                  width={41}
                  height={41}
                  alt="Learn more"
                />

                <span>Learn more</span>
              </a>
            </div>

            <div>
              <Image
                src="../img/boxService2.svg"
                width={210}
                height={148}
                alt="Learn more"
                className="c-services__ServicesImg"
              />
            </div>
          </div>
        </div>

        <div className="c-services__inlineBoxs">
          <div className="c-services__BoxServices black">
            <div>
              <h3 className="c-services__BoxTitle">Social Media Marketing</h3>

              <a href="#" className="c-services__learnMore">
                <Image
                  src="../img/learn3.svg"
                  width={41}
                  height={41}
                  alt="Learn more"
                />

                <span>Learn more</span>
              </a>
            </div>

            <div>
              <Image
                src="../img/boxService3.svg"
                width={210}
                height={210}
                alt="Learn more"
                className="c-services__ServicesImg"
              />
            </div>
          </div>
          <div className="c-services__BoxServices gray">
            <div>
              <h3 className="c-services__BoxTitle">Email Marketing</h3>

              <a href="#" className="c-services__learnMore">
                <Image
                  src="../img/learn1.svg"
                  width={41}
                  height={41}
                  alt="Learn more"
                />

                <span>Learn more</span>
              </a>
            </div>

            <div>
              <Image
                src="../img/boxService4.svg"
                width={210}
                height={194}
                alt="Learn more"
                className="c-services__ServicesImg"
              />
            </div>
          </div>
        </div>

        <div className="c-services__inlineBoxs">
          <div className="c-services__BoxServices green">
            <div>
              <h3 className="c-services__BoxTitle">Content Creation</h3>

              <a href="#" className="c-services__learnMore">
                <Image
                  src="../img/learn1.svg"
                  width={41}
                  height={41}
                  alt="Learn more"
                />

                <span>Learn more</span>
              </a>
            </div>

            <div>
              <Image
                src="../img/boxService5.svg"
                width={210}
                height={196}
                alt="Learn more"
                className="c-services__ServicesImg"
              />
            </div>
          </div>
          <div className="c-services__BoxServices black">
            <div>
              <h3 className="c-services__BoxTitle">Analytics and Tracking</h3>

              <a href="#" className="c-services__learnMore">
                <Image
                  src="../img/learn3.svg"
                  width={41}
                  height={41}
                  alt="Learn more"
                />

                <span>Learn more</span>
              </a>
            </div>

            <div>
              <Image
                src="../img/boxService6.svg"
                width={210}
                height={170}
                alt="Learn more"
                className="c-services__ServicesImg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="c-services__columnServices">
        <div className="c-services__make">
          <div className="c-services__makeTitle">
            <h3>Let&apos;s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <ButtonCta classe="c-button__ButtonCta">
              Get your free proposal
            </ButtonCta>
          </div>
          <div className="c-services__img">
            <Image src="../img/make.svg" width={494} height={395} alt="make" />
          </div>
        </div>
      </div>
    </section>
  );
};
