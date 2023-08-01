import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="c-footer">
      <nav className="c-footer__nav">
        <div className="c-footer__logo">
          <Image
            src="../img/LogoWhite.svg"
            width={180}
            height={30}
            alt="Positivus"
          />
        </div>

        <ul className="c-footer__menu">
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Use Cases</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>

        <div>
          <a href="#" title="linkedin">
            <Image
              src="../img/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
          <a href="#" title="facebook">
            <Image
              src="../img/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
            />
          </a>
          <a href="#" title="twitter">
            <Image
              src="../img/twitter.svg"
              alt="twitter"
              width={30}
              height={30}
            />
          </a>
        </div>
      </nav>

      <div className="c-footer__inlineContact">
        <div className="c-footer__Title">
          <h4>Contact us:</h4>
          <ul>
            <li>Email: info@positivus.com</li>
            <li>Phone: 555-567-8901</li>
            <li>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </li>
          </ul>
        </div>

        <div className="c-footer__newsLetter">
          <input type="email" placeholder="Email" />
          <button>Subscribe to news</button>
        </div>
      </div>

      <div className="c-footer__copy">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};
