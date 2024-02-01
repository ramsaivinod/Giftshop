import React, { useEffect } from "react";
import "./SiteMap.css";
import { Typography } from "@mui/material";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="main-section container"
      style={{ justifyContent: "center" }}
    >
      <div className="terms-of-use-container">
        <Typography style={headingTerms}>Privacy Policy</Typography>

        <section style={sectionStyle}>
          <Typography style={termsPara}>
            <article>
              Jagadguru Kripaluji Yog, hereinafter referred to as the
              "Organization" and / or "JKYog" accords the highest priority in
              safeguarding the information of its visitors, devotees and
              customers. We appreciate your trust & we are committed to act with
              utmost care. By visiting JKYog you are accepting the practices
              defined in this policy.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>USE OF COOKIES</Typography>
          <Typography style={termsPara}>
            <article>
              This website uses cookies to better the users experience while
              visiting the website. Where applicable this website uses a cookie
              control system allowing the user on their first visit to the
              website to allow or disallow the use of cookies on their computer
              / device. This complies with recent legislation requirements for
              website's to obtain explicit consent from users before leaving
              behind or reading files such as cookies on a user's computer /
              device.Cookies are small amount of data, mostly alphanumerical
              identifiers that are transferred to your computer's hard drive.
              They are small pieces of information that are stored by your
              browser. This helps our system to recognize your browser the next
              time you enter our site. Our cookies do not contain any personally
              identifying information. Most web browsers auto accept cookies. To
              take advantage of the unique features of our website, we recommend
              that you allow cookies.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>INFORMATION COLLECTION</Typography>
          <Typography style={termsPara}>
            <article>
              Our primary purpose in collecting personal information is to
              provide you with a safer trading experience. We only collect
              personal information about you that we consider necessary for this
              purpose and to achieve this goal.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              You are under no obligation to provide us with this information
              and can access many aspects of the site without providing us any
              personal information.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              When you visit this website, we can record certain information in
              relation to your visit such as:
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              <ul style={{ listStyle: "disc" }}>
                <li>Your IP or proxy server IP.</li>
                <li>Basic domain information.</li>
                <li>
                  Your Internet service provider is sometimes captured depending
                  on the configuration of your ISP connection.
                </li>
                <li>The date and time of your visit to the website.</li>
                <li>The length of your session.</li>
                <li>The pages which you have accessed.</li>
                <li>
                  The number of times you access our site within any month.
                </li>
                <li>The size of file you look at</li>
                <li>The website which referred you to our website</li>
                <li>The operating system which your computer uses.</li>
              </ul>
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              This information is only used for statistical purposes.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              Various pages on this site invite you to provide us your name and
              contact details, for example, for buying products, to go onto our
              mailing list for our newsletter, enter competitions, or to enable
              us to provide you with web site related services such as
              notifications.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              If you use our site’s feedback, bulletin board, discussion and
              support forms, you are asked to provide your name, organisation,
              title, address, email address and telephone number. JKYog will not
              otherwise collect information from you through this site unless
              you knowingly provide it to us.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              By voluntarily providing information to us when using the site,
              you are consenting to the collection and use of your personal
              information by us.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              The site uses session cookies, which are used only during a
              browsing session, and expire when you quit your browser. Upon
              closing your browser, the session cookie set by this site is
              destroyed and no personal information is maintained which might
              identify you should you visit our site at a later date.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>SECURITY</Typography>
          <Typography style={termsPara}>
            <article>
              This site has security measures in place to protect the loss or
              misuse of, or alteration or unauthorised access to, information
              under our control. However, if you send information from this
              site, it will not be encrypted unless we expressly tell you it is.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              JKYog has stringent security measures in place to protect the
              loss, misuse, and alteration of the information under our control.
              We adhere against unauthorized access.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>
            TRANSACTION SECURITY POLICY
          </Typography>
          <Typography style={termsPara}>
            <article>
              All financial transactions on this website are handled by our
              Payment Gateway service provider PayPal. JKYog does not interfere
              in any way with the financial transactions and is completely
              controlled by PayPal and You.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              Use of PayPal payment gateway services are subject to the Terms of
              Use and Privacy Policy published by the company. Please refer to
              the following links for information.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full"
              >
                https://www.paypal.com/us/webapps/mpp/ua/privacy-full
              </a>
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              Any data transmitted during the session of the financial
              transaction such as payment by credit/debit card, etc., will be
              encrypted or scrambled and then decrypted or unscrambled at the
              receiving end. This will ascertain that data cannot be read during
              transmission You should be able to see the padlock symbol in the
              status bar on the bottom right hand corner of the browser window.
              The URL address will also start with https:// depicting a secure
              webpage. SSL applies encryption between two points such as your PC
              and the connecting server.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>Safe & Secure Shopping</Typography>
          <Typography style={termsPara}>
            <article>
              Online transactions on JKYog are secured with the highest levels
              of transaction security currently available in the market. PayPal
              uses 256-bit encryption technology to protect your card
              information while securely transmitting it to the respective banks
              for payment processing.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              Please refer to the following website links for more updated
              information on PayPal security measures.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.paypal.com/us/webapps/mpp/paypal-safety-and-security"
              >
                https://www.paypal.com/us/webapps/mpp/paypal-safety-and-security
              </a>
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.paypal.com/us/webapps/mpp/security/buyer-protection"
              >
                https://www.paypal.com/us/webapps/mpp/security/buyer-protection
              </a>
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              All credit card and debit card payments on PayPal are processed
              through secure and trusted payment gateways managed by leading
              banks. Banks may use additional password services for online
              transactions, providing an additional layer of security through
              identity verification.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              JKYog does not capture or store your credit / debit card details
              in any form, at any point, or in any location / asset directly or
              indirectly owned by or connected to JKYog.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>LINKS TO OTHER WEB SITES</Typography>
          <Typography style={termsPara}>
            <article>
              To enhance your viewing experience, our site can connect you with
              a number of links to other local and international organisations
              and agencies. When connecting to such other websites you will no
              longer be subject to this policy but to the privacy policy of the
              new site.
            </article>
            <article style={{ marginTop: "0.5rem" }}>
              JKYog is not responsible for the privacy practices of linked
              sites. Underlined words and phrases are click-through links or
              hyperlinks to pages and websites. JKYog strongly recommends that
              you read the Privacy Policy of the linked websites as they may
              contain further terms and conditions which apply to you.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>
            PRIVACY POLICY AMENDMENTS
          </Typography>
          <Typography style={termsPara}>
            <article>
              We may change this Policy. Such changes will be effective when a
              notice of the change is made available on the site.
            </article>
          </Typography>
        </section>

        <section style={sectionStyle}>
          <Typography style={termsHeading}>YOUR CONSENT</Typography>
          <Typography style={termsPara}>
            <article>
              By using our website services and/ or by providing your
              information, you consent to the collection and use of the
              information you disclose on the services in accordance with this
              privacy policy, including but not limited to your consent for
              sharing your information as per this privacy policy.
            </article>
          </Typography>
        </section>
      </div>
    </div>
  );
};

const sectionStyle = {
  borderBottom: "1px solid slategrey",
  padding: "0 0 1rem 0",
};

const headingTerms = {
  fontSize: "2rem",
  fontWeight: 600,
  padding: "1.2rem 0",
  textAlign: "center",
};

const termsPara = {
  fontFamily: "Satoshi, sans-serif",
  fontSize: "0.8rem",
  fontWeight: 400,
  color: "dimgrey",
  letterSpacing: "0.5px",
  lineHeight: "30px",
};

const termsHeading = {
  color: "#291900",
  fontSize: "1.2rem",
  padding: "1.2rem 0",
  textAlign: "left",
};

export default CookiePolicy;
