import React from 'react'
import { footer } from '@/data/Footer'
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <p className="footer__copyright">{footer?.textCopyright}</p>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer