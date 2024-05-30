import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from "./Button";

// import required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Caraousel({
	classSwiperSlide,
	classCSSLeft,
	classCSSRight,
	projecetItems,
}) {
	const [showPrevButton, setShowPrevButton] = useState(false);
	const [showNextButton, setShowNextButton] = useState(true);

	const handleSlideChange = (swiper) => {
		setShowPrevButton(!swiper.isBeginning);
		setShowNextButton(!swiper.isEnd);
	};
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				navigation={{
					prevEl: ".button-prev",
					nextEl: ".button-next",
					clickable: true,
				}}
				observer={true}
				observeSlideChildren={true}
				onSlideChange={handleSlideChange}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="flex items-center h-fit py-2 mt-4"
			>
				{projecetItems.map((item, index) => (
					<SwiperSlide
						key={index}
						className={`rounded-xl shadow-custom-active ${classSwiperSlide}`}
					>
						{item.urlDemo || item.urlGithub ? (
							<>
								<div>
									<img src={item.image} alt={item.title} />
								</div>

								<div>
									<h5 className="pl-3 pt-2 text-white font-semibold text-2xl">
										{item.title}
									</h5>
									<p className="text-white px-3 pb-4 pt-1">
										{item.description}
									</p>
								</div>

								<div className="flex gap-3 px-3 mb-4">
									<Button
										link={item.urlGithub}
										target="_blank"
										classCSS={"px-6 py-4"}
									>
										Github
									</Button>
									<Button
										link={item.urlDemo}
										target="_blank"
										classCSS={"px-6 py-4"}
									>
										Demo
									</Button>
								</div>
							</>
						) : (
							<img
								src={item.image}
								alt="ini foto"
								className="w-full h-full object-cover object-center rounded-xl"
							/>
						)}
					</SwiperSlide>
				))}
				<div
					className={`z-10 button-prev absolute ${classCSSLeft}`}
					style={{ visibility: showPrevButton ? "visible" : "hidden" }}
				>
					<FaArrowLeft className="text-white md:text-3xl" />
				</div>
				<div
					className={`z-10 button-next absolute  ${classCSSRight}`}
					style={{ visibility: showNextButton ? "visible" : "hidden" }}
				>
					<FaArrowRight className="text-white md:text-3xl" />
				</div>
			</Swiper>
		</>
	);
}
