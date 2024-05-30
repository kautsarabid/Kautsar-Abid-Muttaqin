export default function Card({ children }) {
	return <>{children}</>;
}

function Container({ children }) {
	return (
		<div className="flex flex-col items-center gap-2 p-5 w-full rounded-2xl shadow-custom-active">
			{children}
		</div>
	);
}

function Title({ children }) {
	return (
		<>
			<h3>{children}</h3>
		</>
	);
}
function Icon({ children }) {
	return <div className="text-white">{children}</div>;
}

function SubTitle({ children }) {
	return <h5 className="text-white font-semibold text-2xl">{children}</h5>;
}

Card.Container = Container;
Card.Icon = Icon;
Card.Title = Title;
Card.SubTitle = SubTitle;
