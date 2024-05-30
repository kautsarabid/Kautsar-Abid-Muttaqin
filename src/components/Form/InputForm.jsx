import Input from "./input";
import Label from "./label";

export default function InputForm({ type, name, htmlFor, title }) {
	return (
		<div className="flex flex-col mb-2 w-full">
			<Input type={type} name={name} />
			<Label htmlFor={htmlFor}>{title}</Label>
		</div>
	);
}
