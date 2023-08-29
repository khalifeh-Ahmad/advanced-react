import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React from "react";
import "swiper/css";
import "../Swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperCarosel = ({
  children,
  items,
  navigation,
  pagination,
  slidesPerView,
}) => {
  const cloneItem = items.map((el) => (
    <SwiperSlide key={el.id}>
      {React.cloneElement(children, {
        item: el,
        key: el.id,
      })}
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView ? slidesPerView : 3}
      navigation={navigation ? navigation : true}
      pagination={pagination ? pagination : false}
    >
      {cloneItem}
    </Swiper>
  );
};

export default SwiperCarosel;
