import Button from '../../components/Button';
import logo from '../../assets/img/citrus-corner-logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src={logo}
                alt="Citrus Corner"
                className="h-32 w-32 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A modern citrus shop focused on fresh oranges and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Citrus Corner keeps the layout clean while offering clear fruit
              categories, quick actions, and straightforward citrus shopping.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
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
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Stacked shopping wireframe
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Curated Catalog
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are grouped by daily need so shoppers can scan
                  faster.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Simple Checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Product pages keep price, stock, and action buttons easy to
                  find.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Pickup Ready
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Store information stays direct for citrus shoppers who want
                  fast order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=900&q=80"
                  alt="Fresh Citrus"
                  className="h-24 w-full object-cover"
                />
                <div className="flex items-center justify-center p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
                    Fresh Citrus
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=80"
                  alt="Organic Citrus"
                  className="h-24 w-full object-cover"
                />
                <div className="flex items-center justify-center p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
                    Organic
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=900&q=80"
                  alt="Fresh Citrus"
                  className="h-24 w-full object-cover"
                />
                <div className="flex items-center justify-center p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
                    Fresh Citrus
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-100 transition hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=900&q=80"
                  alt="Fresh Citrus"
                  className="h-24 w-full object-cover"
                />
                <div className="flex items-center justify-center p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
                    Fresh Citrus
                  </p>
                </div>
              </div>
            </div>
            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
