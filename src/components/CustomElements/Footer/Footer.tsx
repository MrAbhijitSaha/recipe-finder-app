import Link from "next/link";

const Footer = () => {
	return (
		<div className="grid place-items-center">
			Design & Developed By
			<Link
				href={"https://github.com/MrAbhijitSaha"}
				target="_blank"
				className="font-kalam underline decoration-blue-800 underline-offset-4">
				Abhijit
			</Link>
		</div>
	);
};

export default Footer;
