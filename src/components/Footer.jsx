import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content z-10 mt-[100px]">
        <aside className="mx-auto">
          <p>BAJAR-TECH</p>

          <p>
            BAJAR-TECH.
            <br />
            Providing reliable Services since 2000
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/products" className="link link-hover">
            products
          </Link>
        </nav>
        <div>
          <h6 className="footer-title">Office Address</h6>
          <p>
            Office Address Level-4, 34,
            <br /> Awal Centre, Banani, Dhaka
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Bajar-Tech</h6>

          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/register" className="link link-hover">
            Register
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex justify-center gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="link link-hover"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="facebook"
              data-tooltip-variant="info"
            >
              <FaFacebook size={30} color="#0866ff" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="link link-hover"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Instagram"
              data-tooltip-variant="info"
            >
              <BsInstagram size={30} />
            </a>

            <a
              target="_blank"
              href="https://twitter.com/home"
              className="link link-hover"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Twitter"
              data-tooltip-variant="info"
            >
              <RiTwitterXLine size={30} />
            </a>
          </div>
        </nav>
      </footer>
      <div className="py-2 bg-base-200">
        <aside>
          <p className="text-center">
            Copyright © 2024 - All right reserved by BAJAR-TECH
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
