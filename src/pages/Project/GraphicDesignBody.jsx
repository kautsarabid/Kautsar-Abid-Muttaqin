// Asset Image
import Project1 from "../../assets/image/graphic-design/abed-minisoccer.png";
import Project2 from "../../assets/image/graphic-design/abed-minisoccer2.png";
import Project3 from "../../assets/image/graphic-design/abed-minisoccer3.png";
import Project4 from "../../assets/image/graphic-design/abed-minisoccer4.png";
import Project5 from "../../assets/image/graphic-design/Derby-Manchester.png";
import Project6 from "../../assets/image/graphic-design/infografis-peduli-lingkungan.png";
import Project7 from "../../assets/image/graphic-design/logo1.png";
import Project8 from "../../assets/image/graphic-design/logo2.png";
import Project9 from "../../assets/image/graphic-design/logo3.png";
import Project10 from "../../assets/image/graphic-design/logo4.png";
import Project11 from "../../assets/image/graphic-design/man-of-thoushand-flowers.png";
import Project12 from "../../assets/image/graphic-design/man-on-fire.png";
import Project13 from "../../assets/image/graphic-design/MUvsFulham.png";
import Project14 from "../../assets/image/graphic-design/Niki.png";
import Project15 from "../../assets/image/graphic-design/pigletsekar.png";
import Project16 from "../../assets/image/graphic-design/sekar-headline.png";
import Project17 from "../../assets/image/graphic-design/sekar1.png";
import Project18 from "../../assets/image/graphic-design/sekar2.png";

import Caraousel from "../../components/Caraousel";
export default function GraphicDesignBody() {
	const projectItems = [
		{
			image: Project1,
		},
		{
			image: Project2,
		},
		{
			image: Project3,
		},
		{
			image: Project4,
		},
		{
			image: Project5,
		},
		{
			image: Project6,
		},
		{
			image: Project7,
		},
		{
			image: Project8,
		},
		{
			image: Project9,
		},
		{
			image: Project10,
		},
		{
			image: Project11,
		},
		{
			image: Project12,
		},
		{
			image: Project13,
		},
		{
			image: Project14,
		},
		{
			image: Project15,
		},
		{
			image: Project16,
		},
		{
			image: Project17,
		},
		{
			image: Project18,
		},
	];
	return (
		<>
			<h3 className="font-semibold text-3xl text-white">Graphic Design</h3>

			<Caraousel
				projecetItems={projectItems}
				classSwiperSlide={"max-w-[60%] h-[50vh] md:h-[70vh] lg:max-w-[20%]"}
				classCSSLeft={"left-16"}
				classCSSRight={"right-16"}
			/>
		</>
	);
}
