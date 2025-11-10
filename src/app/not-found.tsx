import Image from "next/image";
import Link from "next/link";

const Notfound = () => {
	return (
		<div>
			<Image
				src="/gif/pagenotfound.gif"
				alt="Loading animation"
				width={480}
				height={480}
				unoptimized
				loading="eager"
			/>
			<div className="">Page not Found</div>
			<Link href={"/"}>HOME</Link>
		</div>
	);
};

export default Notfound;
