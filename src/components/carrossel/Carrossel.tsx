
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Carrossel.css";


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/46/ea/5a/46ea5af6ef998183b90d2cd70e1c7805.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/b9/32/32/b9323230bd943b1b24a67a893b6f356f.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/ca/e7/dc/cae7dc1392f6f8bd071c8a1dbe962a51.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/82/33/0a/82330ad03b5473f28e58de0f816d4247.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/c4/11/c3/c411c3ef4e94b14c9dbefcaa42a02a8b.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/fb/61/2f/fb612f0f96afd2007e4b3996cf392ff9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/1a/6a/6a/1a6a6a2dfb6def3e59eafe8d3f649168.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/236x/01/3d/18/013d187679fa5ef87389612ca155b911.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/06/a2/ad/06a2ad290720d643099cd0a63930b69e.jpg" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}