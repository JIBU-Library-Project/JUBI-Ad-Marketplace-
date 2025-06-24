import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className=" bg-[#01160c] border-t border-gray-300 mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
      
      {/* About */}
      <div className='text-white'>
        <h4 className="font-semibold text-[#42eb59] mb-3">About Jubi Ad Market Place</h4>
        <p>
          Connecting buyers and sellers across Ghana with safety, trust, and ease.
          Post your ad, find your deal, and trade smarter.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold text-[#42eb59] mb-3">Quick Links</h4>
        <ul className="space-y-1 text-white">
          <li><a href="/" className="hover:text-green-400">About Us</a></li>
          <li><a href="/" className="hover:text-green-400">Contact</a></li>
          <li><a href="/" className="hover:text-green-400">Terms & Conditions</a></li>
          <li><a href="/" className="hover:text-green-400">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-semibold text-[#42eb59] mb-3">Get in Touch</h4>
       <div className='text-white'>
         <p>Email: <a href="mailto:support@adplatform.com" className="text-green-400">support@jubiads.com</a></p>
        <p>Phone: +233 55 346 9818</p>
        <p className="mt-2">
          Follow us:
          <span className="inline-flex gap-2 ml-2">
            <a href="#" className="hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-400">Twitter</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
          </span>
        </p>
       </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="//border-t //border-gray-300 mt-10 pt-4 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Jubi Ad Market Place Ghana. All rights reserved.
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer