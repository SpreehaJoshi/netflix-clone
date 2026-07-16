import React from 'react'
import CardImg from "../assets/cardimg.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const CardList = () => {
    const data = [
        {
            id: 1,
            title: "Card 1",
            decription: "Description for Card 2",
            imageURL: "#"
        },
        {
            id: 2,
            title: "Card 2",
            decription: "Description for Card 2",
            imageURL: "#"
        },
        {
            id: 3,
            title: "Card 3",
            decription: "Description for Card 3",
            imageURL: "#"
        },
        {
            id: 1,
            title: "Card 1",
            decription: "Description for Card 2",
            imageURL: "#"
        },
        {
            id: 2,
            title: "Card 2",
            decription: "Description for Card 2",
            imageURL: "#"
        },
        {
            id: 3,
            title: "Card 3",
            decription: "Description for Card 3",
            imageURL: "#"
        }
    ];
  return (
    <div className="text-white md:px-4">
        <h2 className='pt-10 pb-5 text-lg font-medium'>Upcoming</h2>

        <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper'>
        {data.map((item, index) => (
            <SwiperSlide key={index} className='max-w-72'>
                <img src={CardImg} alt="" className='h-44 w-full object-center object-cover'></img>
                <p className='text-center pt-2'>Very Good Movie</p>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default CardList