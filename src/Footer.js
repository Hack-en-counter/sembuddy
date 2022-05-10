import React from "react";
import './App.css';

const Footer = () =>{
    return(
        <div className="footer">
          <h3><i>GET IN TOUCH</i></h3>
          <div className="foot">
          <table className="contact">
              <tr>
                  <td>
                    <p>
                        <img src="https://i.pinimg.com/736x/3f/89/88/3f89880168018d3986bc8cb06bf18c65.jpg" class="img-circle" width="60" height="60"/>
                    </p>
                    <h4>
                        ADDRESS
                    </h4>
                    <p>
                        Institute of Engineering & Technology
                    </p>
                    <p>
                        Sitapur Road, Sector F, Jankipuram
                    </p>
                    <p>
                        Lucknow, Uttar Pradesh 226021
                    </p>
                  </td>
                  <td>
                     <p>
                         <img src="https://e7.pngegg.com/pngimages/911/426/png-clipart-toll-free-telephone-number-email-af-geoscience-and-technology-consulting-email-miscellaneous-blue-thumbnail.png" class="img-circle" width="60" height="60"/>
                     </p>
                     <h4>
                         PHONE
                     </h4>
                     <p>
                        1234567890 
                     </p>
                     <p>
                        1023456789
                     </p>
                     <h6>
                         TIME
                     </h6>
                     <p>
                         9:00am to 9:00pm
                     </p>
                  </td>
                  <td>
                     <p>
                         <img src="https://www.logolynx.com/images/logolynx/91/911d91fe41d7fe494bd15253301d2fe6.jpeg" class="img-circle" width="60" height="60"/>
                     </p>
                     <h4>
                         EMAIL
                     </h4>
                     <p>
                       abcsgjkk0123@gmail.com
                     </p>
                  </td>
              </tr>
          </table>
          </div>
        </div>
    );
};

export default Footer;