"use client";

import { Button } from "@/components/ui/button";
import { RefreshPageBtnProps } from "@/lib/alltypes";
import { useRouter } from "next/navigation";

const RefreshPageBtn = ({ text }: RefreshPageBtnProps) => {
	const router = useRouter();
	return (
		<Button
			className="rounded-full border-gray-600 text-foreground transition-colors hover:border-[#F4D03F] hover:bg-transparent hover:text-[#F4D03F]"
			variant={"outline"}
			onClick={() => router.refresh()}>
			{text}
		</Button>
	);
};

export default RefreshPageBtn;
