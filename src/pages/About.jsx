import React from 'react'
import { skin_act, skin_all, skin_balm, skin_care, skin_drop, skin_face, skin_fact, skin_product, skin_rolll } from '../assets/images'

export default function About() {
  return (
    <main>
    <section className="relative px-4 py-10 bg-main">
      <div className="container mx-auto relative py-20 gap-4 flex flex-col-reverse md:flex-row">
        <div className="flex flex-col flex-1 justify-center items-start gap-4 py-10">
        <h2 className="font-serif text-6xl leading-tight max-w-sm py-10 text-backdrop">Feel Comfortable in Flawless Skin</h2>
      <p className=" font-normal max-w-md text-base leading-8 pb-10">The action or process of investing time and money with the expectation of achieving healthy, youthful, glowing skin in the future.</p>
        </div>
        <div className="flex-1 w-22 h-27 md:w-30 md:h-35">
            <img src={skin_all} alt="" className="object-center h-full w-full object-cover" /></div>
        </div>
        <div className=' h-40'>
        <p className="text-dark font-semibold shad max-w-full text-base leading-8 pb-10 ">Beauty by Maks offers the best consultation on skincare and steps to follow to get to your dream skin. Your journey to timeless beauty begins here. We help you achieve healthy, radiant, we are a call away from you.</p>
        </div>
    </section>
    <section className="relative px-4 py-4 bg-main">
      <div className="container mx-auto relative py-3 gap-3 flex flex-col-reverse md:flex-row">
        <div className="flex flex-col flexl-1 justify-center items-center gap-3 text-center">
          <h3 className="font-serif text-5xl leading-tight text-backdrop justify-center ">About Us...</h3>
          <p className=" flex flex-1 items-center">We are a skincare consultation store. We specialize at solving skincare issues and concerns, we work with tastes and budgets and demonstrating steps to follow. We follow key aspects, like skin analysis, we offer a thorough skin analysis using technology like facial scanners to identify skin concerns, such as acne, aging, hyperpigmentation or dehydration. We also work on personalized treatment based on the skin analysis, lifestyle and preferences. We have experts from different fields, we have experts like beauty specialists, dermatologists, personal consultants, skincare advisors and estheticians ready to help you, they have years of experience and are ready to go through this journey with you. Customers are educated on skincare knowledge, tips and routines to help them achieve their skin goals. We also create private setting for consultations, making customers feel at ease discussing thir skin concerns. We also follow-up appointments or online support to monitor progress, address concerns, and adjust recommendations as needed.</p>
        </div>
        <div>
        </div>
      </div>
    </section>
  </main>
  )
}

