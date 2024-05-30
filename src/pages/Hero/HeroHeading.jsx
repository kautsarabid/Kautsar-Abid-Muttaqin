import { motion } from "framer-motion";
export default function HeroHeading() {
	const variantsTitle = {
		offscreen: {
			x: -700,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 1,
			},
		},
	};

	const variantSubTitle = {
		offscreen: {
			x: 700,
			opacity: 0,
		},
		onscreen: (index) => ({
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				delay: 1 + index * 0.2,
			},
		}),
	};
	const subtitles = ["Web Design", "Graphic Design", "UI/UX"];
	return (
		<div className="flex flex-col  items-center justify-center gap-1 text-white">
			<motion.h1
				initial="offscreen"
				animate="onscreen"
				variants={variantsTitle}
				className="font-display font-bold text-4xl sm:text-4xl md:text-6xl xl:text-7xl"
			>
				Kautsar Abid Muttaqin
			</motion.h1>
			<div className="flex flex-wrap justify-center gap-2 text-lg md:text-3xl">
				{subtitles.map((subtitle, index) => (
					<motion.span
						key={index}
						initial="offscreen"
						animate="onscreen"
						custom={index}
						viewport={{ once: true }}
						variants={variantSubTitle}
					>
						{subtitle}
						{index < subtitles.length - 1 && ","}{" "}
						{/* Add comma except for the last item */}
					</motion.span>
				))}
			</div>
		</div>
	);
}
