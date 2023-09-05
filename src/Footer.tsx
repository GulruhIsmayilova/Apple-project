import React from "react";
import "./Footer.css"; // Footer stil dosyasını içe aktarın
const Footer = () => {
  return (
    <div className="ac-gf-content">
      <table
        className="ac-gf-directory"
        aria-label="Apple Directory"
        role="navigation"
      >
        <tbody>
          <tr>
            <td className="ac-gf-directory-column">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Explore
                </span>
              </h3>
              <ul
                id="footer-directory-column-section-products"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/mac/"
                    data-analytics-title="mac"
                  >
                    Mac
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/ipad/"
                    data-analytics-title="ipad"
                  >
                    iPad
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/mac/"
                    data-analytics-title="mac"
                  >
                    iPhone
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/ipad/"
                    data-analytics-title="ipad"
                  >
                    Watch
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/mac/"
                    data-analytics-title="mac"
                  >
                    AirPods
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/ipad/"
                    data-analytics-title="ipad"
                  >
                    TV&Home
                  </a>
                </li>
              </ul>
            </td>
            <td className="ac-gf-directory-column">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Account
                </span>
              </h3>
              <ul
                id="footer-directory-column-section-accounts"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://appleid.apple.com/az/"
                    data-analytics-title="manage your apple id"
                    data-analytics-exit-link=""
                  >
                    Manage Your Apple&nbsp;ID
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://www.icloud.com"
                    data-analytics-title="icloud.com"
                    data-analytics-exit-link=""
                  >
                    iCloud.com
                  </a>
                </li>
              </ul>
            </td>
            <td className="ac-gf-directory-column">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Entertainment
                </span>
              </h3>
              <ul
                id="footer-directory-column-section-entertainment"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/apple-one/"
                    data-analytics-title="apple one"
                  >
                    Apple&nbsp;One
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/apple-tv-plus/"
                    data-analytics-title="apple tv plus"
                  >
                    Apple&nbsp;TV+
                  </a>
                </li>
              </ul>
            </td>
            <td className="ac-gf-directory-column">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  For Business
                </span>
              </h3>
              <ul
                id="footer-directory-column-section-business"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/business/"
                    data-analytics-title="apple and business"
                  >
                    Apple and Business
                  </a>
                </li>
              </ul>
            </td>
            <td className="ac-gf-directory-column">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Apple Values
                </span>
              </h3>
              <ul
                id="footer-directory-column-section-responsibility"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/accessibility/"
                    data-analytics-title="accessibility"
                  >
                    Accessibility
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/environment/"
                    data-analytics-title="environment"
                  >
                    Environment
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/privacy/"
                    data-analytics-title="privacy"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </td>
            <td className="ac-gf-directory-column">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  About Apple
                </span>
              </h3>
              <ul
                id="footer-directory-column-section-about"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                > 
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/careers/"
                    data-analytics-title="career opportunities"
                  >
                    Career Opportunities
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://investor.apple.com/"
                    data-analytics-title="investors"
                    data-analytics-exit-link=""
                  >
                    Investors
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/compliance/"
                    data-analytics-title="ethics and compliance"
                  >
                    Ethics &amp; Compliance
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/az/apple-events/"
                    data-analytics-title="events"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="ac-gf-footer">
        <div className="ac-gf-footer-shop" x-ms-format-detection="none">
          <a
            href="https://locate.apple.com/az/en/"
            data-analytics-title="other retailers or resellers"
            data-analytics-exit-link=""
          >
            Find a retailer
          </a>{" "}
          near you.
        </div>
        <div className="ac-gf-footer-locale">
          <a
            className="ac-gf-footer-locale-link"
            href="/choose-country-region/"
            title="Choose your country or region"
            aria-label="Azerbaijan. Choose your country or region"
            data-analytics-title="choose your country"
          >
            Azerbaijan
          </a>
        </div>
        <div className="ac-gf-footer-legal">
          <div className="ac-gf-footer-legal-copyright">
            Copyright © 2023 Apple Inc. All rights reserved.
          </div>
          <ul className="ac-gf-footer-legal-links" role="list">
            <li className="ac-gf-footer-legal-links-item" role="listitem">
              <a
                className="ac-gf-footer-legal-link"
                href="/legal/privacy/en-ww/"
                data-analytics-title="privacy policy"
              >
                Privacy Policy
              </a>
            </li>
            <li className="ac-gf-footer-legal-links-item" role="listitem">
              <a
                className="ac-gf-footer-legal-link"
                href="https://www.apple.com/legal/"
                data-analytics-title="legal"
              >
                Legal
              </a>
            </li>
            <li className="ac-gf-footer-legal-links-item" role="listitem">
              <a
                className="ac-gf-footer-legal-link"
                href="/az/sitemap/"
                data-analytics-title="site map"
              >
                Site Map
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
