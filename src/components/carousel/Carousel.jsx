import React, { Fragment, useState } from 'react';
import Img from 'gatsby-image';
import SwiperCore, { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import carouselStyles from './carousel.module.scss';

SwiperCore.use([Pagination, Scrollbar]);

export const Carousel = ({
  sliderOne,
  sliderTwo,
  sliderThree,
  sliderFour,
}) => {
  const [activeSlide, setActiveSlide] = useState('01');

  return (
    <Fragment key="Carousel">
      <section className={carouselStyles.sliderCounter}>
        <h3>Inner Pages</h3>
        <div className={carouselStyles.counterWrap}>
          <div className={carouselStyles.currentSlide}>{activeSlide}</div>
          <div className={carouselStyles.totalSlide}>04</div>
        </div>
      </section>
      <section className={carouselStyles.fullWidthGallery}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={swiper => {
            setActiveSlide(`0${parseInt(swiper.activeIndex, 10) + 1}`);
            trackCustomEvent({
              category: 'Slider Change',
              action: 'Click',
              label: 'Project',
            });
          }}
        >
          <SwiperSlide>
            <Img
              alt="project slider"
              className={carouselStyles.sliderImg}
              fluid={sliderOne.childImageSharp.fluid}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Img
              alt="project slider"
              className={carouselStyles.sliderImg}
              fluid={sliderTwo.childImageSharp.fluid}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Img
              alt="project slider"
              className={carouselStyles.sliderImg}
              fluid={sliderThree.childImageSharp.fluid}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Img
              alt="project slider"
              className={carouselStyles.sliderImg}
              fluid={sliderFour.childImageSharp.fluid}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </Fragment>
  );
};

export default Carousel;
