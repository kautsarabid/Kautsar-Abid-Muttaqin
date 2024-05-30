import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaNodeJs,
	FaReact,
} from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
	SiExpress,
	SiMongodb,
	SiMicrosoftexcel,
	SiMicrosoftword,
	SiMicrosoftpowerpoint,
	SiAdobephotoshop,
	SiCanva,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import Card from "../../components/Card";

export default function SkillBody() {
	const iconItemsProgramming = [
		{ title: "HTML", icon: <FaHtml5 className="text-8xl" /> },
		{ title: "CSS", icon: <FaCss3Alt className="text-8xl" /> },
		{ title: "Javascript", icon: <RiJavascriptFill className="text-8xl" /> },
	];

	const iconItemsFramework = [
		{ title: "Bootstrap", icon: <FaBootstrap className="text-8xl" /> },
		{ title: "Tailwind", icon: <RiTailwindCssFill className="text-8xl" /> },
		{ title: "NodeJS", icon: <FaNodeJs className="text-8xl" /> },
		{ title: "ExpressJS", icon: <SiExpress className="text-8xl" /> },
		{ title: "MongoDB", icon: <SiMongodb className="text-8xl" /> },
		{ title: "ReactJS", icon: <FaReact className="text-8xl" /> },
	];

	const iconItemsSoftware = [
		{ title: "Visual Studio Code", icon: <VscVscode className="text-8xl" /> },
		{
			title: "Adobe Photoshop",
			icon: <SiAdobephotoshop className="text-8xl" />,
		},
		{
			title: "Canva",
			icon: <SiCanva className="text-8xl" />,
		},
		{
			title: "Figma",
			icon: <CgFigma className="text-8xl" />,
		},
		{
			title: "Adobe Photoshop",
			icon: <SiAdobephotoshop className="text-8xl" />,
		},
		{ title: "Ms Excel", icon: <SiMicrosoftexcel className="text-8xl" /> },
		{ title: "Ms Word", icon: <SiMicrosoftword className="text-8xl" /> },
		{
			title: "Ms Powerpoint",
			icon: <SiMicrosoftpowerpoint className="text-8xl" />,
		},
	];
	return (
		<section className="mt-10 px-[2em]" id="skill">
			<h1 className="font-display font-bold text-center text-5xl text-white mb-10">
				My Skill
			</h1>

			<div>
				<h2 className="text-white font-bold mb-4 text-2xl capitalize">
					programming language
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">
					{iconItemsProgramming.map((item, index) => (
						<Card key={index}>
							<Card.Container>
								<Card.Icon>{item.icon}</Card.Icon>
								<Card.SubTitle>{item.title}</Card.SubTitle>
							</Card.Container>
						</Card>
					))}
				</div>
			</div>

			<div>
				<h2 className="text-white font-bold mt-6 mb-3 text-2xl capitalize">
					Framework
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 text-center">
					{iconItemsFramework.map((item, index) => (
						<Card key={index}>
							<Card.Container>
								<Card.Icon>{item.icon}</Card.Icon>
								<Card.SubTitle>{item.title}</Card.SubTitle>
							</Card.Container>
						</Card>
					))}
				</div>
			</div>
			<div>
				<h2 className="text-white font-bold mt-6 mb-3 text-2xl capitalize">
					Software
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 text-center">
					{iconItemsSoftware.map((item, index) => (
						<Card key={index}>
							<Card.Container>
								<Card.Icon>{item.icon}</Card.Icon>
								<Card.SubTitle>{item.title}</Card.SubTitle>
							</Card.Container>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
