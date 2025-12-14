import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80"
        >
          NoMove<span className="font-black">Flags</span>
        </Link>

        <nav className="text-sm">
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
