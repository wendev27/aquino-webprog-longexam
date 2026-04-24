import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-[#F97316]/20 bg-[#FFF7ED] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-amber-50">
              Product not found
            </h1>
            <p className="mt-3 text-zinc-400">
              The item you are looking for is not available or may have been
              removed from the catalogue.
            </p>
            <Button to="/products" className="mt-6" variant="primary">
              Back to Products
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-amber-400/20 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Button to="/products" variant="secondary">
              Back to Products
            </Button>
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100">
              {product.category}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="overflow-hidden rounded-[1.75rem] border-2 border-[#F97316]/20 bg-[#FFF7ED]">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
                  {product.category}
                </p>
                <h1 className="mt-3 text-4xl font-bold leading-tight text-amber-50 sm:text-5xl">
                  {product.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                  <span className="text-xl font-semibold text-amber-100">
                    {product.price}
                  </span>
                  <span>{product.stock}</span>
                </div>
              </div>

              <div className="space-y-4 text-zinc-300">
                {product.content.map((paragraph, index) => (
                  <p key={index} className="text-base leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Add to Cart</Button>
                <Button to="/products" variant="secondary">
                  Back to Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
