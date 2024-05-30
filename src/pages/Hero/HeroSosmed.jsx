import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

import { motion } from "framer-motion";

export default function HeroSosmed() {
	const variantSubTitle = {
		offscreen: {
			x: -700,
			opacity: 0,
		},
		onscreen: (index) => ({
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				delay: 1.5 + index * 0.2,
			},
		}),
	};
	const iconSosmed = [
		{
			url: "https://www.instagram.com/abidkautsar/?hl=id",
			icon: <AiFillInstagram className="p-1" />,
		},
		{
			url: "https://github.com/kautsarabid?tab=repositories",
			icon: <AiFillGithub className="p-1" />,
		},
		{
			url: "https://www.linkedin.com/in/kautsar-abid-muttaqin-70a848214/",
			icon: <FaLinkedin className="p-1" />,
		},
	];
	return (
		<div className="absolute xl:top-[160px] bottom-12 flex xl:flex-col gap-6 p-5">
			{iconSosmed.map((item, index) => (
				<motion.a
					key={index}
					href={item.url}
					target="_blank"
					variants={variantSubTitle}
					custom={index}
					initial="offscreen"
					animate="onscreen"
					viewport={{ once: true }}
					className="card-sosmed text-white text-5xl "
				>
					{item.icon}
				</motion.a>
			))}
		</div>
	);
}
