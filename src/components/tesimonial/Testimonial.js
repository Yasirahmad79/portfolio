import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo, quote, testimonialThree} from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    business Owner
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2024 - jun 30, 2024 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  I was struggling to find a reliable web design agency until I came across Yasir ahmad. They not only created a beautiful website that perfectly captures my brand, but they also provided exceptional customer service throughout the entire process. The team was always responsive and helpful, and they went above and beyond to ensure I was satisfied with the final product. I highly recommend Yasir ahmad to anyone looking for a top-notch web design service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Tech Titans Inc.
                  </p>
                  <h3 className="text-2xl font-bold">Alex Turner</h3>
                  <p className="text-base tracking-wide text-gray-500">
                  CTO
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      A food delivery app
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - aug 4, 2025 - onGoing
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  I was blown away by Yasir's expertise in mobile app development. They successfully transformed our vision into a user-friendly and visually stunning app. The team was incredibly collaborative and always went the extra mile to ensure our satisfaction. We're already seeing a significant increase in user engagement and revenue thanks to their exceptional work
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialThree}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Creative Corner
                  </p>
                  <h3 className="text-2xl font-bold">Tima Miroshnichenko</h3>
                  <p className="text-base tracking-wide text-gray-500">
                  Graphic Designer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      DesignHub" (A platform for designers to showcase their work and connect with clients)
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via fiverr - Mar 4, 2024 - may 30, 2024 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  I was initially skeptical about outsourcing my web design project, but Yasir completely exceeded my expectations. They listened attentively to my vision and created a website that perfectly captures the essence of my brand. The design is not only visually stunning but also highly functional. I'm incredibly impressed with their professionalism and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial