import Project1 from "../../assets/image/website/memo.png";
import Project2 from "../../assets/image/website/mypets!.png";
import Project3 from "../../assets/image/website/restauran-app.png";
import Project4 from "../../assets/image/website/wws.png";
import Project5 from "../../assets/image/website/bezzie-minisoccer.png";
import Project6 from "../../assets/image/website/porto-sekar.png";
import Caraousel from "../../components/Caraousel";

export default function WebsiteBody() {
	const websiteItems = [
		{
			title: "Memories",
			image: Project1,
			urlDemo: "https://kautsarabid.github.io/memo/",
			urlGithub: "https://github.com/kautsarabid/memo",
			description:
				"This project is a photo gallery website designed to showcase a collection of photos in an engaging",
		},
		{
			title: "MyPets",
			image: Project2,
			urlDemo: "https://github.com/kautsarabid/My-Pets",
			urlGithub: "https://github.com/kautsarabid/My-Pets",
			description:
				"This project is a website for animal data collection designed to assist organizations, breeders, and researchers in managing information about various types of animals.",
		},
		{
			title: "Restauran App",
			image: Project3,
			urlDemo: "https://restoran-pwa-testing-and-optimized.vercel.app/",
			urlGithub:
				"https://github.com/kautsarabid/Restoran-PWA-Testing-and-Optimized",
			description:
				"This website provides detailed information about restaurants, including menus, customer reviews, locations, and ratings. The purpose of this website is as an assignment from dicoding.com",
		},
		{
			title: "WWS",
			image: Project4,
			urlDemo: "https://kautsarabid.github.io/quiz-vocab/",
			urlGithub: "https://github.com/kautsarabid/quiz-vocab",
			description:
				"This project is a Vocabulary Game, an engaging and educational platform designed to enhance your English vocabulary skills through fun and interactive gameplay.",
		},
		{
			title: "Bezzie Minisoccer",
			image: Project5,
			urlDemo: "https://bezzie-minisoccer.vercel.app/",
			urlGithub: "https://github.com/kautsarabid/bezzie-minisoccer",
			description:
				"Bezzie Minisoccer Website is a digital platform designed to promote and manage Bezzie's company services in the field of minisoccer.",
		},
		{
			title: "Portofolio",
			image: Project6,
			urlDemo: "https://porto-sekar.vercel.app/",
			urlGithub: "https://github.com/kautsarabid/porto-sekar",
			description:
				"This portfolio website was designed for our client, a professional who wanted to present their work and accomplishments in an elegant and engaging way. The website was built with the primary goal of reflecting the client's identity and expertise.",
		},
	];
	return (
		<>
			<h3 className="font-semibold text-3xl pl-3 ml-10 text-white">Website</h3>
			<div className="relative">
				<Caraousel
					projecetItems={websiteItems}
					classSwiperSlide={"max-w-[80%] overflow-hidden"}
					classCSSLeft={"left-6"}
					classCSSRight={"right-6"}
				/>
			</div>
		</>
	);
}
