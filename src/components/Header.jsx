import Link from "next/link";
import Image from "next/image";
import { ButtonCta } from "./ButtonCta";

export const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__header">
        <div className="c-header__logo">
          <Image
            priority
            src="/img/logo2.svg"
            alt="Positivus"
            width={220}
            height={36}
          />
        </div>

        <nav className="c-header__nav">
          <ul className="c-header__menu">
            <li className="c-header__items">
              <Link href="/">About us</Link>
            </li>
            <li className="c-header__items">
              <Link href="/">Services</Link>
            </li>
            <li className="c-header__items">
              <Link href="/">Use Cases</Link>
            </li>
            <li className="c-header__items">
              <Link href="/">Pricing</Link>
            </li>
            <li className="c-header__items">
              <Link href="/">Blog</Link>
            </li>

            <ButtonCta type="button" classe="btnWhite">
              Request a quote
            </ButtonCta>
          </ul>
        </nav>
      </div>
      <div className="c-header__cta">
        <div className="c-header__details">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <ButtonCta type="button" classe="btnBlack">
            Book a consultation
          </ButtonCta>
        </div>
        <div className="c-header__ilustration">
          <Image
            priority
            src="/img/cta-header.svg"
            alt="ilustration"
            width={600.46}
            height={515}
          />
        </div>
      </div>

      <div className="c-header__logotypes"></div>
    </header>
  );
};
