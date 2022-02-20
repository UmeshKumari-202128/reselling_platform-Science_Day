import React from "react";

import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import {FaGooglePlay } from "react-icons/fa";
import {MdEmail } from "react-icons/md";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <div className="first">
        <table className="middle">
          <tr>
            <th>POPULAR LOCATIONS</th>
            <th>TRENDING LOCATIONS</th>
            <th>ABOUT US</th>
            <th>OLX</th>
            <th >FOLLOW US</th>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Kolkata</td>
            <td><a href="#">Kolkata</a></td>

            <td><a href="#">Kolkata</a></td>
            
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Kolkata</td>
            <td><a href="#">Kolkata</a></td>
            <td><a href="#">Kolkata</a></td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Kolkata</td>
            <td><a href="#">Kolkata</a></td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td></td>
            <td><a href="#">Kolkata</a></td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td></td>
            <td><a href="#">Kolkata</a></td>
          </tr>
        </table>
      </div>
      <div className="last">Central University of Haryana,<AiOutlineCopyrightCircle/> 2022</div>
    </div>
  );
}

export default Footer;
