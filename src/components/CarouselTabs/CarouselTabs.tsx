import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Keyboard, Navigation, Pagination, Mousewheel, Autoplay } from 'swiper';
import classNames from 'classnames';
import useSwiperRef from '@hooks/useSwiperRef';
import swiper from './CarouselTabs.module.scss';
import { ICarouselTabsProps } from '@type/general';
import PaginationBullets from './PaginationBullets';

const CarouselTabs: FC<ICarouselTabsProps> = ({ slides, menu, className }) => {
  const [pagination, paginationRef] = useSwiperRef<HTMLDivElement>();

  const params = {
    modules: [Keyboard, Mousewheel, Pagination],
    spaceBetween: 16,
    scrollbar: {
      el: `${swiper.scrollbar}`,
      draggable: true,
    },
    slidesPerGroup: 3,
    pagination: {
      clickable: true,
      el: pagination,
      bulletActiveClass: `${swiper.isActive}`,
      bulletClass: `${swiper['pagination-bullet']}`,
      renderBullet: (index, className) => {
        return (
          '<div class="' +
          className +
          '"><span>' +
          menu[index] +
          '</span></div>'
        );
      },
    },

    keyboard: {
      enabled: true,
    },

    breakpoints: {
      769: {
        spaceBetween: 40,
      },
    },
  };

  return (
    <div className={classNames(swiper.wrapper, className)}>
      <Swiper {...params} className={swiper.carousel} slidesPerView='auto'>
        {slides.map((item) => {
          return <SwiperSlide key={item.id}>{item.item}</SwiperSlide>;
        })}
        <PaginationBullets
          paginationRef={paginationRef}
          className={swiper['pagination-bullets']}
        />
      </Swiper>
    </div>
  );
};

export default CarouselTabs;
