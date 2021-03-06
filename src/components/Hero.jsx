import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/lazy";

import SwiperCore, { Autoplay, Lazy } from "swiper";

SwiperCore.use([Autoplay, Lazy]);



import banner01 from "../images/banner01.png";
import banner02 from "../images/banner02.png";
import banner03 from "../images/banner03.png";
import heroImg01 from "../images/heroImage01.png";
import heroImg02 from "../images/heroImage02.png";
import heroImg03 from "../images/heroImage03.png";
import heroImg04 from "../images/heroImage04.png";
import heroImg05 from "../images/heroImage05.png";
import heroImg06 from "../images/heroImage06.png";
import heroImg07 from "../images/heroImage07.png";
import heroImg08 from "../images/heroImage08.png";
import heroImg09 from "../images/heroImage09.png";
import heroImg10 from "../images/heroImage10.png";



const Hero = () => {


  const heroArr = [heroImg01, heroImg02, heroImg03, heroImg04, heroImg05, heroImg06, heroImg07, heroImg08, heroImg09, heroImg10];

  return (
    <section className="pt-8 pb-14 container" id="hero">
      <div className="relative mb-14 " data-aos="fade-in" data-aos-delay="300">
        <Swiper
          loop
          lazy={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {heroArr.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} className="object-fill swiper-lazy" />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute bottom-0 left-0 pb-12 pl-14 z-10">
          <h1 className="text-white text-h1">
            窩窩家居
            <br /> 跟您一起品味生活
          </h1>
        </div>
      </div>
      <h2 className="text-center text-h2 mb-7" id="icon-check">
        床墊優勢
      </h2>
      <ul className="flex gap-7.5 text-center" id="good">
        <li className="space-y-2">
          <img className="bg-gray" src={banner01} alt="" />
          <p>原木料環保</p>
        </li>
        <li className="space-y-2">
          <img className="bg-gray" src={banner02} alt="" />
          <p>好收納</p>
        </li>
        <li className="space-y-2">
          <img className="bg-gray" src={banner03} alt="" />
          <p>好組裝</p>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
