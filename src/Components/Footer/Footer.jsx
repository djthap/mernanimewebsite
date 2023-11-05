import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
  return (
    <div className='footer_part'>
        <div className="d-flex flex-column h-100">
<footer className="w-100 py-4 flex-shrink-0" >
    <div className="container py-4">
        <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
                <h5 className="h1 ">FB.</h5>
                <p className="small text-light">This is a  website to watch free animes</p>
                <p className="small text-light mb-0">&copy; Copyrights. All rights reserved. <a className="text-light" href="#">Dhananjay</a></p>
            </div>
            <div className="col-lg-2 col-md-6">
                <h5 className=" mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><a  >Home</a></li>
                    <li><a href='/search' >Search</a></li>
                   
                </ul>
            </div>
            <div className="col-lg-2 col-md-6">
                
            </div>
            <div className="col-lg-4 col-md-6">
  
  <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3">Social Media</h5>
            <div className="social-media-links">
              <a href="https://www.facebook.com/anshu.thap.7" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="social-media-icon" />
              </a>
              <a href="https://www.instagram.com/djthap/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="social-media-icon" />
              </a>
              <a href="https://github.com/djthap" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="social-media-icon" />
              </a>
              <a href="mailto:dhananjaythap111@email.com">
                <EmailIcon className="social-media-icon" />
              </a>
            </div>
          </div>
          {/* Add other footer content or links here */}
        </div>
      </div>
</div>

        </div>
    </div>
</footer>
</div>
        
        </div>
  )
}
