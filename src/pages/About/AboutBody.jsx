import FotoAbed from "../../assets/image/abed.jpg";

export default function AboutBody() {
	return (
		<section
			id="about"
			className=" flex xl:flex-row flex-col items-center justify-center "
		>
			<div className="xl:basis-1/2">
				<img src={FotoAbed} alt="Foto Abid" />
			</div>

			<div className="py-10 xl:basis-1/2 h-full ">
				<h1 className="font-display font-bold text-center text-5xl text-white">
					About
				</h1>

				<p className="text-white p-4">
					I am Abid, a student majoring in Informatics with specialized skills
					in web design, graphic design, and UI/UX. I believe that design is my
					way of communicating with the world. I am committed to delivering
					stunning and user-friendly digital experiences through my design
					skills. With every project I take on, I strive to provide innovative
					solutions and captivating aesthetics.
				</p>
			</div>
		</section>
	);
}
