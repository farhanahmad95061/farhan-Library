import React, { useEffect, useState } from 'react'
//import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';



function Freebook() {
  const [book,setbook]=useState([]);
  useEffect(()=>{
   const getbook=async()=>{
     try {
       const res= await axios.get("http://localhost:4001/book");
       //console.log(res.data );
       setbook(res.data);

     } catch (error) {
       console.log(error)
       
     }
   }
   getbook();
  },[])
    const filtereddata=book.filter((data)=>data.category==="Free")
    console.log(filtereddata);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div>
      <h1 className='font-bold text-xl pb-2'>Free offered courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cumque, numquam similique beatae the font the vlaue.</p>
      </div>

    <div>
    <Slider {...settings}>
        {filtereddata.map((item)=>(
       <Cards item={item} key={item.id}/>

        ))}
      </Slider>
    </div>
    </div>
    </>
      
  )
}

export default Freebook
