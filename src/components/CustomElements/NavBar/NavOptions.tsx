import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navOptions } from "@/lib/navoptions";
import { Menu } from "lucide-react";

const NavOptions = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetContent className="rounded-ss-[45%] rounded-ee-[15%]">
					<SheetHeader>
						<SheetTitle />
					</SheetHeader>
					{navOptions.map((item) => (
						<SheetClose key={item.id}>{item.name}</SheetClose>
					))}
				</SheetContent>
			</Sheet>
		</>
	);
};

export default NavOptions;
