import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom';




export default function Footer() {

  return (
    <footer className="bg-purple-300 text-base pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 p-8 lg:items-start lg:justify-between">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 lg:w-1/4">
            <h1 className="text-xl md:text-2xl text-white font-bold uppercase">Beauty by Maks</h1>
            <p className="text-white">
              The best person for the job, Skincare has no gender.
            </p>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col gap-8 w-full md:w-1/3 lg:w-1/4">
            <h4 className="text-xl font-semibold uppercase text-white">Subscribe</h4>
            <p className="text-white">30% off for our first-time customers.</p>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-newcolor rounded"
              type="text"
              placeholder="Email Address"
            />
          </div>

          {/* Follow Us Section */}
          <div className="text-xl text-white flex flex-col gap-3 w-full md:w-1/3 lg:w-1/4">
            <h4 className="uppercase">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <AiOutlineInstagram className="text-2xl" />
                <p>Instagram</p>
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineTwitter className="text-2xl" />
                <p>Twitter</p>
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineFacebook className="text-2xl" />
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small className="pt-5 border-t border-white opacity-50 text-xs text-center block">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved
      </small>
    </footer>
  );
}