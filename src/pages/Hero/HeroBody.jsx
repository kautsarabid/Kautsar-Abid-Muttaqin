import { MdOpacity } from "react-icons/md";
import Button from "../../components/Button";
import HeroHeading from "./HeroHeading";
import HeroSosmed from "./HeroSosmed";
import { motion, transform } from "framer-motion";
export default function HeroBody() {
	const variantButton = {
		offscreen: {
			transform: "scale(0)",
			opacity: 0,
		},
		onscreen: {
			transform: "scale(1)",
			opacity: 1,
			transition: {
				duration: 0.8,
				delay: 2,
			},
		},
	};
	return (
		<section className="relative bg-blur-atas overflow-hidden" id="hero">
			<div className="h-screen flex flex-col  items-center justify-center gap-3">
				<HeroHeading />
				<motion.div
					initial="offscreen"
					animate="onscreen"
					variants={variantButton}
					viewport={{ once: true }}
				>
					<Button link="#project" classCSS="px-10 py-4 md:px-16 md:py-5">
						My Project
					</Button>
				</motion.div>
			</div>

			<HeroSosmed />
		</section>
	);
}
