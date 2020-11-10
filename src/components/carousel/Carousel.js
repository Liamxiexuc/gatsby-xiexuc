import React, { Fragment, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([ Pagination, Scrollbar]);

export const Carousel = ({ children, ...props }) => {
    const [activeSlide, setActiveSlide] = useState('01');


    return (
        <Fragment>
            <section className={projectStyles.sliderCounter}>
                <strong>Inner pages: </strong>
                <div className={projectStyles.counterWrap}>
                    <div className={projectStyles.currentSlide}>
                        {activeSlide}
                    </div>
                    <div className={projectStyles.totalSlide}>
                        04
                    </div>
                </div>
            </section>
            <section className={projectStyles.fullWidthGallery}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setActiveSlide(`0${(parseInt(swiper.activeIndex) + 1)}`)}
                >
                    <SwiperSlide>
                        <Img alt='project slider' className={projectStyles.sliderImg} fluid={sliderOne.childImageSharp.fluid}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img alt='project slider' className={projectStyles.sliderImg} fluid={sliderTwo.childImageSharp.fluid}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img alt='project slider' className={projectStyles.sliderImg} fluid={sliderThree.childImageSharp.fluid}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img alt='project slider' className={projectStyles.sliderImg} fluid={sliderFour.childImageSharp.fluid}/>
                    </SwiperSlide>
                </Swiper>
            </section>
        </Fragment>
    )
};

export default Carousel;