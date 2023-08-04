import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { useRef } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const ref = useRef();
  const menuMobile = () => {
    ref.current.classList.toggle("active");
  };
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
          <ul className="c-header__menu" ref={ref}>
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

            <Button type="button" classe="c-button--active">
              Request a quote
            </Button>
          </ul>

          <button className="c-header__MenuButton" onClick={menuMobile}>
            <Image
              priority
              src="/img/menu.svg"
              alt="Menu"
              width={26}
              height={19}
            />
          </button>
        </nav>
      </div>
      {router.asPath === "/" ? (
        <>
          <div className="c-header__cta">
            <div className="c-header__details">
              <h1>Navigating the digital landscape for success</h1>
              <p>
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <Button type="button" classe="c-button__ButtonCta">
                Book a consultation
              </Button>
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

          <div className="c-header__logotypes">
            <div className="c-header__inlineLogos">
              <Image
                src="/img/amazon.svg"
                alt="Amazon icon"
                width={125}
                height={48}
                priority
              />
              <Image
                src="/img/drib.svg"
                alt="Dribbble icon"
                width={127}
                height={48}
                priority
              />
              <Image
                src="/img/hub.svg"
                alt="HubSpot icon"
                width={129}
                height={48}
                priority
              />
            </div>
            <div className="c-header__inlineLogos">
              <Image
                src="/img/notion.svg"
                alt="Notion icon"
                width={147}
                height={48}
                priority
              />
              <Image
                src="/img/netflix.svg"
                alt="Netflix icon"
                width={126}
                height={48}
                priority
              />
              <Image
                src="/img/zoom.svg"
                alt="Zoom icon"
                width={111}
                height={48}
                priority
              />
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
};
