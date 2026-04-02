"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Notfound = () => {
	const router = useRouter();

	return (
		<section className="grid place-items-center">
			<Image
				src="/gif/pagenotfound.gif"
				alt="Loading animation"
				width={480}
				height={480}
				unoptimized
				loading="eager"
			/>

			<p className="">
				Page Not Found <br />
				Back To{" "}
				<Button
					className="text-xl"
					variant="link"
					onClick={() => router.replace("/")}>
					HOME
				</Button>
			</p>
		</section>
	);
};

export default Notfound;
