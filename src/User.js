import React from "react";
import { useParams, Link } from "react-router-dom";
import userData from "./data";
import { PhoneOutlined, MailOutlined, GlobalOutlined } from "@ant-design/icons";
function User() {
  const { userId } = useParams();
  console.log(userData);
  const user = userData.find((item) => item.id == userId);
  if (!user) {
    return (
      <>
        <section className="wrapper error">
          <h2>user not found</h2>
          <Link to="/" className="homeBtn">
            Home
          </Link>
        </section>
      </>
    );
  }
  const { address, email, gender, image, firstname, lastname, phone, website } =
    user;
  const { street, streetName, zipcode, city, country, county_code } = address;
  return (
    <>
      <div className="userWrapper ">
        <img src={image} className="uImg" alt="user" />
        <div className="uInfo p-3">
          <h3>
            {firstname} {lastname}
          </h3>
          <p className="uMail common">
            <MailOutlined />
            {email}
          </p>
          <a
            href="https://www.hello.com"
            className="uWebsite common"
            target="_blank"
          >
            <GlobalOutlined />
            {website}
          </a>
          <p className="uPhone common">
            <PhoneOutlined />
            {phone}
          </p>
          <address>
            {street} , {streetName} , {zipcode}, {city}, {country}
          </address>
          <img
            src={`https://flagcdn.com/h24/${county_code.toLowerCase()}.png`}
            className="uFlag"
            alt=""
          />
          <span className={`gender ${gender}`}>{gender.toUpperCase()}</span>
        </div>
      </div>
      <div className="btnWrapper mb-4">
        <Link to="/" className="homeBtn">
          Home
        </Link>
      </div>
    </>
  );
}

export default User;
