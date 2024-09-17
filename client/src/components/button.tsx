import {cva} from "class-variance-authority";
import {cn} from "../lib/utils";
import {LuLoader2} from "react-icons/lu";

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
	type?: "button" | "submit" | "reset";
	isLoading?: boolean;
};

const buttonVarients = cva(
	"bg-blue-500 font-semibold text-white px-6 py-2 rounded-md flex items-center justify-center gap-5"
);

export const Button = ({
	children,
	className,
	type = "button",
	isLoading = false,
	...props
}: ButtonProps) => {
	return (
		<button {...props} className={cn(buttonVarients({className}))} type={type}>
			{children}
			{isLoading && <LuLoader2 className="size-6 animate-spin" />}
		</button>
	);
};
