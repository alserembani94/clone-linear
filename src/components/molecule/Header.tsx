import Link from "next/link";
import Linear from "../Logo/Linear";

const Header = () => (
  <header className="w-full flex justify-center sticky top-0 bg-[#e2e2e210] backdrop-blur-sm text-sm">
    <div className="flex justify-between items-center gap-4 w-full max-w-screen-xl border-b border-b-[#77777765] px-[80px]">
      <nav className="flex items-center gap-4">
        <Link
          href="/"
          className="hover:text-gray-500 transition-colors ease-in-out duration-200"
        >
          <Linear />
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out duration-200 px-1 py-4"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out duration-200 px-1 py-4"
          href="/method"
        >
          Method
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out duration-200 px-1 py-4"
          href="/customers"
        >
          Customers
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out duration-200 px-1 py-4"
          href="/changelog"
        >
          Changelog
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out duration-200 px-1 py-4"
          href="/integrations"
        >
          Integrations
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out duration-200 px-1 py-4"
          href="/pricing"
        >
          Pricing
        </Link>
      </nav>
      <div id="auth" className="flex gap-4 items-center">
        <Link href="/login">Log in</Link>
        <Link
          href="/signup"
          className="bg-slate-400 px-4 py-1 rounded-full bg-radial-linear"
        >
          Sign up
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
