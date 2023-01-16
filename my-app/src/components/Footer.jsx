import React from 'react'
import { FaFacebookF, FaTwitter,FaInstagram,FaPinterest} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className='footerSection'>
            <div className='row'>
                <div className="footer-content">
                 <ul className="footerCircles">
                    <li><FaFacebookF className='footerIcon'/></li>
                    <li><FaTwitter className='footerIcon'/></li>
                    <li><FaPinterest className='footerIcon'/></li>
                    <li><FaInstagram className='footerIcon'/></li>
                 </ul>
                 <div className="copy-right-content">
                    <p className="copyright">Copyright {new Date().getFullYear} ade_o@etna-alternance.net | All Right</p>
                 </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
