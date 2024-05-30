export default function Input({ type, name }) {
	return (
		<input
			type={type}
			name={name}
			className="relative p-4 rounded-xl text-lg text-white bg-transparent shadow-custom-active z-10"
			required
		/>
	);
}
