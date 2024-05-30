export default function HamburgerButton({ onClick, isOpen }) {
	return (
		<div className="md:hidden transition-all duration-300 ease-in-out">
			<button
				onClick={onClick}
				className="focus:outline-none text-white hover:text-gray-300 "
			>
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
					/>
				</svg>
			</button>
		</div>
	);
}
