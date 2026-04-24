import { NavLink, Outlet } from 'react-router-dom';

const authNavLinkClass = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#F97316] bg-[#FED7AA] text-[#7C2D12]'
      : 'border-transparent text-[#7C2D12] hover:border-[#F97316] hover:bg-[#FED7AA] hover:text-[#7C2D12]',
  ].join(' ');

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#FFF7ED] text-[#7C2D12]">
      <div className="border-b border-[#F97316]/20 bg-[#FFF7ED]/95 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <NavLink
            to="/"
            className="text-lg font-bold tracking-tight text-[#7C2D12]"
          >
            Home
          </NavLink>
          <div className="flex gap-3">
            <NavLink to="/auth/signin" className={authNavLinkClass}>
              Sign In
            </NavLink>
            <NavLink to="/auth/signup" className={authNavLinkClass}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>

      <div className="grid min-h-[calc(100vh-4rem)] w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b border-[#F97316]/20 bg-[#FFEDD5] p-8 sm:p-10 lg:border-b-0 lg:border-r border-[#F97316]/20 lg:p-16">
          <div className="w-full max-w-md space-y-10 rounded-[2rem] border-2 border-[#F97316]/20 bg-[#FFF7ED]/95 p-8 shadow-2xl shadow-[#F97316]/20">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F97316]">
                Customer Login
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#7C2D12] sm:text-5xl">
                Secure access for citrus shoppers
              </h2>
              <p className="text-sm leading-7 text-[#A16207]">
                Sign in or create an account to save favorites, manage orders,
                and keep fresh fruit ready.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#F97316]/20 bg-[#FFEDD5]/90 p-5">
                <p className="text-sm font-semibold text-[#F97316]">
                  Fast pickup
                </p>
                <p className="mt-2 text-sm text-[#A16207]">
                  Plan orders and pickup windows ahead of time.
                </p>
              </div>
              <div className="rounded-3xl border border-[#F97316]/20 bg-[#FFEDD5]/90 p-5">
                <p className="text-sm font-semibold text-[#F97316]">
                  Saved preferences
                </p>
                <p className="mt-2 text-sm text-[#A16207]">
                  Keep a record of favorite products and quick orders.
                </p>
              </div>
              <div className="rounded-3xl border border-[#F97316]/20 bg-[#FFEDD5]/90 p-5">
                <p className="text-sm font-semibold text-[#F97316]">
                  Citrus-ready orders
                </p>
                <p className="mt-2 text-sm text-[#A16207]">
                  Always access fresh orange varieties from one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <main className="flex items-center bg-[#FFF7ED] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md rounded-[2rem] border-2 border-[#F97316]/20 bg-[#FFEDD5]/95 p-8 shadow-2xl shadow-[#F97316]/20">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
