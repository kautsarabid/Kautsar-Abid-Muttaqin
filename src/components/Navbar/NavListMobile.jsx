import NavigationBar from "./NavigationBar";

function NavListMobile({ items, isOpen }) {
	return (
		<div
			className={`${
				isOpen ? " right-4" : "-right-full"
			} absolute flex flex-col items-center justify-evenly rounded-md bg-secondary z-10 top-16 transition-all duration-300 w-[50%] h-[30vh] gap-2 text-center`}
		>
			<NavigationBar items={items} />
		</div>
	);
}

export default NavListMobile;
