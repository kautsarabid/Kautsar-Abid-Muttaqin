import Caraousel from "./components/Caraousel";
import NavBody from "./components/Navbar/NavBody";
import AboutBody from "./pages/About/AboutBody";
import Contact from "./pages/Contact";
import HeroBody from "./pages/Hero/HeroBody";
import ProjectBody from "./pages/Project/ProjectBody";
import SkillBody from "./pages/Skill/SkillBody";
function App() {
	return (
		<>
			<header className="fixed z-50 top-0 w-full">
				<NavBody />
			</header>

			<main>
				<HeroBody />
				<AboutBody />
				<SkillBody />
				<ProjectBody />
				<Contact />
				{/* <Caraousel /> */}
			</main>
		</>
	);
}

export default App;
