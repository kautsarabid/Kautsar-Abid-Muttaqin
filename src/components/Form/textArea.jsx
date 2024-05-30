export default function TextArea({ name, rows }) {
	return (
		<>
			<textarea
				name={name}
				rows={rows}
				className="relative p-4 rounded-xl text-lg text-white bg-transparent shadow-custom-active z-10"
				required
			></textarea>
		</>
	);
}
