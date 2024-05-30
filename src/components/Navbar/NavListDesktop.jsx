import NavigationBar from "./NavigationBar";

export default function NavListDesktop({ items }) {
	return (
		<div className="hidden md:flex gap-10 justify-between">
			<NavigationBar items={items} />
		</div>
	);
}
