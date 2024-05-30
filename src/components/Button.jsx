export default function Button(props) {
	const { children, link, classCSS, target } = props;

	return (
		<h6 className="">
			<a
				href={link}
				target={target}
				className={`${classCSS} font-bold text-xl text-white  shadow-custom-active inline-block rounded-2xl hover:shadow-custom-hover hover:px-20 transition-all duration-300 ease-in-out cursor-pointer`}
			>
				{children}
			</a>
		</h6>
	);
}
