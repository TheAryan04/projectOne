import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui consequuntur, beatae, aliquid itaque impedit facilis",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique nam, est fugiat a voluptatem magnam, eos",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore eos ad non incidunt! Eos corporis nulla",
    },
]
const TopProducts = () => {
  return (
    <div>
        <div className="container px-10">
            {/* header section */}
            <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-orange-200'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consectetur iusto enim?</p>
            </div>
            {/* body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data) => (
                        <div data-aos="zoom-in" className='rounded-2xl bg-white hover:bg-gray-800 hover:text-white relative shadow-xl duration-300 group max-w-[300px] dark navi'>
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                </div>
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button className='bg-gradient-to-r from-[#fea928] to-[#ed8900] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-200'>Order Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts;