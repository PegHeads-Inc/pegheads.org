import React from "react";
import PegHeadsLogo from "../../assets/images/PegHeadsLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="footer">
    <div className="footer-top">
      <div>
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <img src={PegHeadsLogo} alt="pegheads.org" className="footer-logo" />
              <br />
              <br />
              <p>
                <strong>Email:</strong> zippy@pegheads.ai<br/>
              </p>
              <div class="social-links mt-3">
                <a href="https://www.tiktok.com/@pegheads" target="_blank" rel="noreferrer"><i
                    class="bi bi-tiktok"></i></a>
                <a href="https://twitter.com/pegheads1" target="_blank" rel="noreferrer"><i
                    class="bi bi-twitter"></i></a>
                <a href="https://www.instagram.com/pegheads/" target="_blank" rel="noreferrer"><i
                    class="bi bi-instagram"></i></a>
                <a href="https://discord.gg/gN5ZKCHuF9" target="_blank" rel="noreferrer"><i
                    class="bi bi-discord"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/lessons/">Lessons</Link></li>
              <li><Link to="/about/">About</Link></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Other Links</h4>
            <ul>
              <li><a href="https://github.com/PegHeads-Inc"
                  target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://solsea.io/collection/61beda3797bcc637ba907d89"
                  target="_blank" rel="noreferrer">SolSea</a></li>
              <li><a href="https://pegheads.ai/PHCwhitepaper.pdf" target="_blank" rel="noreferrer">WhitePaper</a></li>
              <li><a href="https://pegheads.ai" target="_blank" rel="noreferrer">PegHeads.ai</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="copyright">
        Copyright © 2021 PegHeads Inc
      </div>
    </div>
  </footer>
);

export default Footer;
