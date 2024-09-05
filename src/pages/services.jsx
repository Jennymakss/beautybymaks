import React from 'react'
import { AiFillDingtalkSquare } from 'react-icons/ai'
import { FaPersonDress } from 'react-icons/fa6'
import { MdRecommend } from 'react-icons/md'
import { TfiShine } from 'react-icons/tfi'

export const services = [
    {
        id: "4440",
        servicesHeader: "Personal Consultation",
        icon: <FaPersonDress className="rounded-full p-2 w-12 text-white h-12 bg-blue-400"/>,
        text: "We offer one in one session to our clients, this helps us to identify their skin type, concerns, and determine the best product to use.This helps us gain a better understanding your skin needs while taking into account factors like lifestyle and environment that can impact the health of your skin.",
    },
    {
        id: "4441",
        servicesHeader: "Personalized Recommendation",
        icon: <MdRecommend className="rounded-full p-2 w-12 text-white h-12 bg-orange-400"/>,
        text: "We offer recommendation based on the individual's skin type and shade. This recommendations target the individual's issues and skin concerns. You also get to know the ingredients in your products without having to do the research on your own.",
    },
    {
        id: "4442",
        servicesHeader: "Skin Care Awareness",
        icon: <TfiShine className="rounded-full p-2 w-12 text-white h-12 bg-purple-400"/>,
        text: "We educate and promote the importance of skincare and the benefits that comes with it. We also promote the importance of maintaining skin's health. We also talk about issues that can prevent skin Cancer and the causes of it.",
    },
    {
        id: "444",
        servicesHeader: "Talks/Seminars",
        icon: <AiFillDingtalkSquare className="rounded-full p-2 w-12 text-white h-12 bg-lime-400"/>,
        text: "We Organize talks and seminars for our customers to come and learn more about skincare. Experts personnels educate our customers on the purpose of skincare and reasons why skincare for daily use.",
    },

]
