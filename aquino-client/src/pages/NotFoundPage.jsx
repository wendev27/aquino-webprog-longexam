import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#F97316]/20 bg-[#FFF7ED] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
            Oops
          </p>
          <h1 className="text-6xl font-bold leading-tight text-black sm:text-7xl">
            404
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            We couldn't find that page. Use the links below to return to the
            shop, explore products, or access your account.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/" variant="secondary">
              Back Home
            </Button>
            <Button to="/products" variant="primary">
              View Products
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#F97316]/20 bg-[#FFEDD5] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-black">
            Where do you want to go next?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-[#F97316]/20 bg-[#FFF7ED] p-6">
              <p className="text-sm font-semibold text-[#F97316]">Home</p>
              <p className="mt-2 text-sm text-[#A16207]">
                Return to the main page.
              </p>
              <Button to="/" className="mt-4">
                Go Home
              </Button>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm font-semibold text-amber-200">Products</p>
              <p className="mt-2 text-sm text-zinc-400">
                Browse fresh oranges and citrus bundles.
              </p>
              <Button to="/products" className="mt-4" variant="primary">
                Shop Products
              </Button>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm font-semibold text-amber-200">Sign In</p>
              <p className="mt-2 text-sm text-zinc-400">
                Access your account and saved orders.
              </p>
              <Button to="/auth/signin" className="mt-4">
                Sign In
              </Button>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-sm font-semibold text-amber-200">Sign Up</p>
              <p className="mt-2 text-sm text-zinc-400">
                Create a new account for faster checkout.
              </p>
              <Button to="/auth/signup" className="mt-4">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
