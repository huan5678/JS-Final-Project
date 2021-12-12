import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";

import SwiperCore, { Autoplay, Grid } from "swiper";

import product01 from "../images/productImage01.png";
import product02 from "../images/productImage02.png";
import product03 from "../images/productImage03.png";
import product04 from "../images/productImage04.png";
import product05 from "../images/productImage05.png";
import product06 from "../images/productImage06.png";
import product07 from "../images/productImage07.png";

import user01 from "../images/Ellipse01.png";
import user02 from "../images/Ellipse02.png";
import user03 from "../images/Ellipse03.png";
import user04 from "../images/Ellipse04.png";
import user05 from "../images/Ellipse05.png";
import user06 from "../images/Ellipse06.png";
import user07 from "../images/Ellipse07.png";
import user08 from "../images/Ellipse08.png";
import user09 from "../images/Ellipse09.png";
import user10 from "../images/Ellipse10.png";

const recommendList = [
  {
    productImg: product01,
    avatarImg: user02,
    userName: "王六角",
    productName: "Jodan 雙人床架",
    recommendText: "CP值很高。",
  },
  {
    productImg: product02,
    avatarImg: user01,
    userName: "小杰",
    productName: "Louvre 雙人床架",
    recommendText: "非常舒適，有需要會再回購",
  },
  {
    productImg: product02,
    avatarImg: user03,
    userName: "Leaf",
    productName: "Antony 雙人床架",
    recommendText: "很喜歡～還有送三年保固～",
  },
  {
    productImg: product03,
    avatarImg: user05,
    userName: "美濃鄧子琪",
    productName: "Charles 系列儲物組合",
    recommendText: "廚房必備美用品！",
  },
  {
    productImg: product06,
    avatarImg: user04,
    userName: "江八角",
    productName: "Charles 雙人床架",
    recommendText: "品質不錯～",
  },
  {
    productImg: product07,
    avatarImg: user06,
    userName: "juni讚神",
    productName: "Antony 床邊桌",
    recommendText: "讚ㄉ！",
  },
  {
    productImg: product04,
    avatarImg: user07,
    userName: "isRaynotArray",
    productName: "Antony 遮光窗簾",
    recommendText: "物超所值！",
  },
  {
    productImg: product05,
    avatarImg: user08,
    userName: "久安說安安",
    productName: "Louvre 單人床架",
    recommendText: "一個人躺剛剛好。",
  },
  {
    productImg: product05,
    avatarImg: user09,
    userName: "程鮭魚",
    productName: "Louvre 單人床架",
    recommendText: "租屋用剛剛好",
  },
  {
    productImg: product06,
    avatarImg: user10,
    userName: "PeiQun",
    productName: "Antony 雙人床架",
    recommendText: "睡起來很舒適",
  },
];

SwiperCore.use([Autoplay,Grid]);

function RecommendCard({ props }) {
  return (
    <div className="bg-white flex">
      <img src={props.productImg} className="md:w-24 object-fill" />
      <div className="flex flex-col p-9 md:p-3">
        <div className="flex gap-2 mb-2">
          <img src={props.avatarImg} className="h-28 w-28 md:h-10 md:w-10 object-fill" />
          <div className="flex flex-col">
            <h3 className="text-xl md:text-base">{props.userName}</h3>
            <p className="text-primary text-lg md:text-sm">{ props.productName}</p>
          </div>
        </div>
        <p className="text-2xl md:text-base">{ props.recommendText}</p>
      </div>
    </div>
  );
}

export function Recommend() {
  return (
    <section className="bg-primary-dark pt-14 pb-20" id="recommend">
      <h2 className="text-h2 text-center text-white mb-8">好評推薦</h2>
      <div className="container">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              slidesPerColumn: 1,
            },
            768: {
              slidesPerView: 2.2,
              slidesPerGroup: 3,
              slidesPerColumn: 2,
            },
          }}
          grid={{
            rows: 2,
            fill: 'row'
          }}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {recommendList.map((props) => (
            <SwiperSlide key={props.userName}>
              <RecommendCard props={props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
