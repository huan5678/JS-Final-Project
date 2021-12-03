import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import SwiperCore, { Autoplay } from "swiper";

import product01 from "../images/productImage01.png";

SwiperCore.use([Autoplay]);

function RecommendCard({ props }) {
  <div class="flex min-w-[350px]">
      <img src={props.productImg} />
    <div class="flex flex-col">
      <div class="flex">
        <img src={props.avatarImg} />
        <div class="flex flex-col">
          <h3>{props.userName}</h3>
          <p class="text-primary text-sm">{ props.productName}</p>
        </div>
        <p>{ props.recommendText}</p>
      </div>
    </div>
  </div>
}

export function Recommend() {
  return (
    <section class="bg-primary-dark pt-14 pb-20">
      <h2 class="text-h2 text-center text-white mb-8">好評推薦</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <RecommendCard
          
          
    </section>
  );
}
