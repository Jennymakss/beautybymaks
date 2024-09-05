import React from "react";
import { Link } from "react-router-dom";


export default function Account() {
    return (
      <section className=" relative py-20 flex flex-col items-center justify-center bg-main">
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="text-2xl">Account</label>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-red-300 after:mt-0.5 after:flex-1 after:border-t after:border-red-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>
          <input
          
            className="text-sm w-full px-4 py-2 border border-solid border-pink-400 rounded"
            type="text"
            required
            placeholder="Email Address"
          
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-pink-400 rounded mt-4"
            type="password"
            placeholder="Password"
            required
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-pink-400 hover:text-pink-400 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <div>
            <button
              className="mt-4 bg-pink-300 hover:bg-pink-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
            
            </div>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            
            <Link to={"/register"}
              className="text-pink-600 hover:underline hover:underline-offset-4"
              href="#"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    );
  };
