import {FaExclamation, FaTriangleExclamation, FaX} from "react-icons/fa6";
import {IToast} from "../types/toast";
import {cva} from "class-variance-authority";
import {cn} from "../lib/utils";
import {FaCheckCircle} from "react-icons/fa";
import {useTimeout} from "../hooks/useTimeout";

interface Content extends IToast {
	id: number;
}

interface ToastProps {
	content: Content;
	close: () => void;
}

const toastVarients = cva(
	"w-[300px] h-fit px-4 py-4 relative z-[99999] flex items-center gap-5 rounded-md",
	{
		variants: {
			variant: {
				success:
					"border border-emerald-500 bg-emerald-200 text-emerald-600 z-50",
				error: "bg-red-200 border border-destructive text-destructive",
				info: "bg-yellow-300 dark:bg-yellow-500 border border-yellow-500 text-slate-800 dark:text-slate-800",
			},
		},
		defaultVariants: {
			variant: "success",
		},
	}
);

const icons: Record<string, JSX.Element> = {
	success: <FaCheckCircle />,
	error: <FaTriangleExclamation />,
	info: <FaExclamation />,
};

const Toast = ({content, close}: ToastProps) => {
	useTimeout(close, content.duration!);

	return (
		<div className={cn(toastVarients({variant: content.variant}))}>
			<FaX onClick={close} className="absolute top-3 right-3 cursor-pointer" />
			<div>{icons[content.variant!]}</div>
			<div>
				<h1 className="font-semibold">{content.title}</h1>
				<p>{content.description}</p>
			</div>
		</div>
	);
};

export default Toast;
