import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <h1>INFO_</h1>
      <section>
        <p>
          This web application was made by <b>Ferrois</b> for experimentation
          with software development.
        </p>
      </section>
      <section>
          <h3>Disclaimer!!</h3>
          <p>Please do <b>NOT</b> register with your real password. I will not be responsible for any data breaches or security vulnerabilities.</p>
      </section>
      <section>
          <h3>Information</h3>
          <p>This application uses JWT(Json web token) to encrypt your authorization keys for authroization. If you got your hands on the key, please do not expose it or others will be able to access your account!!!</p>
          <p>Please report any glitches or vulnerabilities</p>
          <p>There are still many missing features that i will implement in the near future</p>
      </section>
      <section>
          <h3>More</h3>
          <p>I will be working on future projects, in the near future probably on a web-game called Partype, if you are interested in contributing to the game please do contact me!!</p>
          <p>Unfortunately as I start my Junior College education, I will have lesser time to work on sites like this.</p>
      </section>
      <section>
          <h4>Special thanks</h4>
          <p>I would like to thank those and my previous company for encouraging me on working on software development and i owe it to them for their guidance.</p>
      </section>
    </footer>
  );
};

export default Footer;
