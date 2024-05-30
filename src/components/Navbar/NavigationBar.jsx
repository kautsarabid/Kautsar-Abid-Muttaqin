export default function NavigationBar({ items }) {
	return (
		<>
			{items.map((item, index) => (
				<a
					className="group font-semibold w-[20%] md:w-full"
					href={item.link}
					key={index}
				>
					{item.title}
					<div className="w-0 h-0.5 mt-0.5 rounded-full bg-white group-hover:w-full transition-width duration-300"></div>
				</a>
			))}
		</>
	);
}
