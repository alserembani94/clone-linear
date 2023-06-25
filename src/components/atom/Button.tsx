import { cx } from "@/utils/cx";
import Link, { LinkProps } from "next/link";

type ButtonProps = {
  children: any;
  className?: React.AnchorHTMLAttributes<HTMLAnchorElement>["className"];
} & LinkProps;

const Button = ({ children, href, className, ...props }: ButtonProps) => {
  return (
    <Link
      href={href}
      {...props}
      className={cx([
        className,
        "flex gap-4 rounded-full border border-[#77777765] px-2 py-1 text-xs bg-[#66666665] hover:bg-[#88888865] transition-colors ease-in-out duration-200 w-fit",
      ])}
    >
      {children}
    </Link>
  );
};

export default Button;
