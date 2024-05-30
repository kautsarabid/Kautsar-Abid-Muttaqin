import Button from "../components/Button";
import InputForm from "../components/Form/InputForm";

export default function Contact() {
	return (
		<section className="mt-10 px-[2em] mb-5">
			<h1 className="font-display font-bold text-center text-5xl text-white mb-10">
				Hire Me
			</h1>

			<form
				action="mailto:abidkautsar@gmail.com"
				method="get"
				className="flex flex-col gap-3 mb-2 items-center w-full md:w-[80%] mx-auto rounded-lg  px-10 py-7 shadow-custom-active"
			>
				<InputForm
					title={"Subject"}
					htmlFor={"subject"}
					type={"text"}
					name={"subject"}
					rows={2}
				/>

				<InputForm
					title={"Body"}
					htmlFor={"body"}
					type={"text"}
					name={"body"}
				/>
				<button
					type="submit"
					className="font-bold text-xl text-white  shadow-custom-active inline-block rounded-2xl hover:shadow-custom-hover transition-all duration-300 ease-in-out  py-4 px-20 hover:px-28 cursor-pointer"
				>
					Submit
				</button>
			</form>
		</section>
	);
}
