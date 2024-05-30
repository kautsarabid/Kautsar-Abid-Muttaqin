import Input from "./input";
import Label from "./label";
import TextArea from "./textArea";

export default function InputForm({ type, name, htmlFor, title, rows = 5 }) {
	return (
		<div className="flex flex-col mb-2 w-full">
			{/* <Input type={type} name={name} /> */}
			<TextArea name={name} type={type} rows={rows} />
			<Label htmlFor={htmlFor}>{title}</Label>
		</div>
	);
}
