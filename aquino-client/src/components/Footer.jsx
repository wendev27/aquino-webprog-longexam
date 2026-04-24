import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#F97316]/20 bg-[#FFEDD5] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.55fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-bold text-[#7C2D12]">Citrus Corner</p>
          <p className="max-w-sm text-sm leading-6 text-[#A16207]">
            Enjoy premium orange varieties with fresh delivery and clear
            pricing.
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-[#A16207]">
            Fresh citrus made easy
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>
              <Link to="/" className="transition hover:text-amber-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-amber-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition hover:text-amber-200">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Account
          </p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>
              <Link
                to="/auth/signin"
                className="transition hover:text-amber-200"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/auth/signup"
                className="transition hover:text-amber-200"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <a
                href="mailto:support@citruscorner.shop"
                className="transition hover:text-amber-200"
              >
                support@citruscorner.shop
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
