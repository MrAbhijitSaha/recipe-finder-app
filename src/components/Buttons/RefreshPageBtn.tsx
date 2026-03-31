"use client";

import { Button } from "@/components/ui/button";
import { RefreshPageBtnProps } from "@/lib/alltypes";
import { useRouter } from "next/navigation";

const RefreshPageBtn = ({ text }: RefreshPageBtnProps) => {
	const router = useRouter();
	return (
		<Button
			className="text-foreground hover:text-primary rounded-full border-gray-600 px-8 py-6 text-xl"
			variant="outline"
			onClick={() => router.refresh()}>
			{text}
		</Button>
	);
};

export default RefreshPageBtn;
