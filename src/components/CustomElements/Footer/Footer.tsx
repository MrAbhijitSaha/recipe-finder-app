import Link from "next/link";

const Footer = () => {
	return (
		<div className="grid place-items-center">
			Design & Developed By{" "}
			<Link
				href={"https://abhijitsaha.vercel.app/"}
				target="_blank"
				className="underline underline-offset-4 decoration-blue-800 font-kalam">
				Abhijit
			</Link>
		</div>
	);
};

export default Footer;
