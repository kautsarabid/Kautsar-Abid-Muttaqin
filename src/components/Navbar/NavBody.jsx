import { useState, useEffect } from "react";
import NavListMobile from "./NavListMobile";
import HamburgerButton from "./HamburgerButton";

import { MdEmail } from "react-icons/md";
import NavListDesktop from "./NavListDesktop";

export default function NavBody() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleHamburger = () => {
		setIsOpen(!isOpen);
	};

	const navItems = [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Skill",
			link: "#skill",
		},
		{
			title: "CV",
			link: "#",
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`text-white py-4 px-4 ${
				scrolled ? "bg-black shadow-lg" : "bg-transparent"
			} transition-all duration-300`}
		>
			<div className="container flex items-center justify-between ">
				<div className="email">
					<a href="#" className="flex items-center gap-2">
						<MdEmail className="text-4xl md:text-5xl shadow-custom-active p-2 rounded-full" />
						<span className="hidden md:block font-bold">
							abidkautsar@gmail.com
						</span>
					</a>
				</div>
				<div>
					<a href="#">
						<h1 className="font-logo text-4xl">KAM</h1>
					</a>
				</div>

				<div>
					<HamburgerButton onClick={toggleHamburger} isOpen={isOpen} />
					<NavListMobile items={navItems} isOpen={isOpen} />
					<NavListDesktop items={navItems} />
				</div>
			</div>
		</nav>
	);
}
