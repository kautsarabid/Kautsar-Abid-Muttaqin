export default function Label({ htmlFor, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className="absolute my-4 mx-0 text-lg  text-white/70 bg-black transition duration-150 ease px-4 rounded-full"
		>
			{children}
		</label>
	);
}
