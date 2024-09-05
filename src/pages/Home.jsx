import React from "react";
import { Link } from "react-router-dom";
import {
  skin_act,
  skin_all,
  skin_beauty,
  skin_boymask,
  skin_care,
  skin_drop,
  skin_face,
  skin_girl,
  skin_girlmask,
  skin_product,
  skin_rolll,
  skin_washh,
} from "../assets/images";
import { MdOutlineCall } from "react-icons/md";
import { services } from "./services";
import { skinTypes } from "./skinTypes";
import { IoStar, IoStarOutline, IoThumbsUp } from "react-icons/io5";
import { reviewData } from "../data/reviewData";


export default function Home() {
  return (
    <main>
      <section className="relative px-6 bg-main">
        <div className="container mx-auto relative h-[100vh] gap-4 text-purple-400 flex flex-col-reverse md:flex-row">
          <div className="flex flex-col flex-1 justify-center items-start gap-0.5 py-10">
            <h2 className="font-bold font-bubblegum text-6xl leading-tight max-w-sm py-10">
              Take Care of your Skin
            </h2>
            <p className="font-light max-w-xs text-base leading-8">
              Your skin should glow as bright as your soul. We are here to help
              you achieve the perfect skincare routine.
            </p>
            <Link
              to={"/contact"}
              onClick={() => handleClick()}
              className="flex hover:bg-slate-400 hover:text-black rounded-full my-auto cursor-pointer justify-center items-center gap-2 border-2 px-4 py-1 text-base lg:text-lg text-white bg-purple-400"
            >
              <MdOutlineCall />
              Contact Us
            </Link>
          </div>
          <div className="flex justify-center gap-5">
            <div className="absolute h-14 w-14 md:h-14 md:w-14 top-[80%] left-[20%] rounded-full overflow-hidden">
              <img src={skin_care} alt="" className="" />
            </div>
            <div className="absolute h-10 w-10 md:h-10 md:w-10 bottom-[45%] right-[50%] rounded-full overflow-hidden">
              <img src={skin_product} alt="" className="" />
            </div>
            <div className="absolute h-12 w-12 md:h-12 md:w-12 top-[10%] left-[20%] rounded-full overflow-hidden">
              <img src={skin_washh} alt="" className="" />
            </div>
          </div>
          <div className="flex-1 w-22 h-27 md:w-30 md:h-35">
            <img
              src={skin_face}
              alt=""
              className="object-center h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      
      
      
      <section className="relative shad ">
        <div className="container bg-main py-10 flex flex-col  mx-auto gap-8 items-center  ">
        <div className="text-center mxauto">
          <h3 className="font-bold text-3xl text-purple-300 ">The health of your skin</h3>
        </div>
          <div className="flex border-2 bg-white flex-col md:flex-row relative">
            <div className="flex-1 border-r w-96 h-96">
              <img
                src={skin_girlmask}
                alt=""
                className="object-cover w-full h-full p-10"
              />
            </div>
            <div className="flex-1 pb-10 pl-3 flex border-l flex-col items-start justify-start gap-4 ">
              <p className="font-bubblegum text-base text-purple-400 md:text-1xl leading-tight max-w-sm ">
                Healthy skin is always in. Let us help you in achieving it together. We have over 10 years of experience, you are in save hands. We are always ready to serve you.
              </p>
              <img
                src={skin_beauty}
                alt="skin_care"
                className="absolute bottom-36 right-3  md:bottom-5 md:right-5 h-40 w-40"
              />
            </div>
          </div>
          <div className=" flex flex-1 justify-center items-center gap-3 text-center">
            <p className="text-purple-400 font-bubblegum text-base max-w-sm">
              Great skin doesn't happen by chance, it happens by appointment. We have 20 experts ready to work with you in getting your dream skin. 
            </p>
          </div>
          <div className="flex border-2 bg-white  flex-col md:flex-row relative">
            <div className="border-r flex-1 flex p-4 flex-col items-start gap-4">
              <div className="flex-1 w-36 h-36">
                <img
                  src={skin_girl}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 w-40 self-end justify-end text-purple-400">
                <p className="">
                  Skin care is like dieting. You have to invest time and effort. There is no instant miracle cure.
                </p>
              </div>
            </div>
            <div className="flex-1 flex h-full p-4 border-l gap-2 ">
              <div className="flex-1 gap-3 w-20 ">
                <img
                  src={skin_boymask}
                  alt="skin_care"
                  className=" w-full object-cover"
                />
              </div>
              <div className=" flex-1 ">
                <h3 className="font-semibold text-purple-400 text-2xl">Skincare is an important part of self-care.</h3>{" "}
                <p>
                Skincare should be a proactive approach rather than a reactive one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-4 bg-white">
        <div className="container mx-auto relative py-3 gap-3 flex flex-col">
          <div className="flex flex-col flex-1 justify-center items-center gap-3 text-center">
            <h3 className="font-semibold text-3xl md:text-4xl leading-tight text-purple-400">
              The kind of services we provide
            </h3>
            <p className="text-dark font-serif max-w-sm text-base">
              Achieving a flawless skin is all about having the perfect routine
             to follow.
            </p>
          </div>
          <div className="grid grid-rows md:grid-cols-2 mx-auto gap-2 md:gap-4">
            {services.map((services) => (
              <aside key={services.id} className="bg-main bg-inherit">
                <div className="flex flex-row p-5 my-auto items-start justify-start max-w-md">
                  <div className="flex gap-2 p-4 pt-0 items-start">
                    <div>{services.icon}</div>
                    <div className="flex flex-col gap-1 flex-1">
                      <h4 className="text-lg lg:text-2xl text-purple-300 font-bold">
                        {services.servicesHeader}
                      </h4>
                      <p className="text-base lg:text-lg text-primary font-light">
                        {services.text}
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>
      <section className="relative px-4 py-10 bg-main">
        <div className="container mx-auto gap-8 flex flex-col">
          <div className="flex flex-col flex-1 justify-center items-center gap-3 text-center">
            <h3 className="font-semibold text-3xl md:text-5xl leading-tight text-purple-300">
              We deal with all skin types
            </h3>
            <p className="text-dark font-serif text-base">
              We help you determine your skin type and how to care for it. Your skin will type is determined by our experts with great knowledge in this field.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 mx-auto">
            {
              skinTypes.map(skin => (
                <aside key={skin.id} className="bg-white rounded-md">
                    <div className="relative overflow-hidden h-36 lg:h-49 ">
                      <img src={skin.image} alt={skin.typesname} className="absolute top-0 left-0 rounded-t-md w-full h-full object-cover" />
                    </div>
                    <div className="p-2">
                      <h4 className="text-2xl md:text-2xl font-bold text-purple-500">{skin.typesname}</h4>
                    </div>
                </aside>
              ))
            }
          </div>
        </div>
      </section>
      <section className="relative px-4 py-4 shad bg-main">
        <div className="container mx-auto relative py-3 gap-3 flex flex-col">
          <div className="flex flex-col flex-1 justify-center items-center gap-3 text-center">
            <h3 className="font-semibold text-3xl md:text-4xl leading-tight text-purple-400">Satisfied Customers Saying About Us</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-auto bg-purple-300  grid-flow-dense">
            {
              reviewData.map(review => (
                <aside key={review.id} className={`p-4 flex flex-col gap-4 bg-main ${review?.productImage? 'row-span-2' : 'row-span-1' }`}>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center w-max">
                <img src={review.image} alt={review.name} className="h-6 w md:h-110 md:w-8 rounded-full flex-shrink-0 object-cover" />
                <div className="">
                   <h5 className="text-base lg:text-lg font-semibold text-dark">{review.name}</h5>
                   <div className="flex gap-1 text-primary text-xs lg:text-sm">
                    {Array(review.rating).map(( el,i) => <IoStar key={i}/>)}
                    <IoStarOutline/>
                   </div>
                </div>
              </div>
            </div>
          {review?.productImage &&<img src={review.productImage} alt="" className="object-cover w-full h-32 lg:h-48" />}
            <p className="text-base lg:text-lg text-black font-light text-justify leading-loose">{review.text}</p>
            </aside>
              ))
            }
             </div>
      </section>
    </main>
  );
}
