import Button from '../../components/Button';
import banner from '../../assets/img/citrus-corner-banner.png';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-[#F97316]/20 bg-[#FFEDD5] px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-[#FED7AA]/10" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              Citrus Marketplace
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Welcome to Citrus Corner
            </h1>
            <p className="mt-4 text-sm leading-7 text-black sm:text-base">
              Discover premium orange varieties, fresh citrus, and simple
              shopping in one place.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Citrus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.02] hover:shadow-md">
            <img
              src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=900&q=80"
              alt="Fresh oranges"
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-900">
                Fresh Fruit Picks
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Hand-selected oranges and citrus essentials for every day.
              </p>
              <Button to="/products" className="mt-4" variant="primary">
                View Products
              </Button>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.02] hover:shadow-md">
            <img
              src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80"
              alt="Morning citrus"
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-900">
                Morning Market
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Bright morning citrus selections for a fresh start.
              </p>
              <Button to="/products" className="mt-4" variant="primary">
                Shop Oranges
              </Button>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.02] hover:shadow-md">
            <img
              src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=900&q=80"
              alt="Fresh oranges"
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-900">
                Fresh Fruit Picks
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Hand-selected oranges and citrus essentials for every day.
              </p>
              <Button to="/products" className="mt-4" variant="primary">
                View Products
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
