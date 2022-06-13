import React from "react";

const ContactInfo = () => {
  const kevin = require("../images/Painter626.jpg");
  return (
    <div className="contact">
      <img src={kevin} alt="" />
      <table>
        <tbody>
          <tr>
            <td className="label">Email:</td>
            <td>
              <a href="mailto:kevin.cincotta@gmail">Kevin.Cincotta@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td className="label">Phone:</td>
            <td>
              <a href="tel:4437188598">443.718.8598</a>
            </td>
          </tr>
          <tr>
            <td className="label">Instagram:</td>
            <td>
              <a href="https://www.instagram.com/1ndr.works">@1ndr.works</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfo;
