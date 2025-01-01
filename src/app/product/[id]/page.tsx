import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

// Sanity client setup
const client = createClient({
  projectId: "qdtn2ujs", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source);

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const productId = params.id;

  // Fetch product data
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]`,
    { id: productId }
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const mainImageUrl = urlFor(product.image).width(500).height(680).url();
  const thumbnailUrl = urlFor(product.image).width(150).height(150).url();

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10 lg:mx-[120px] md:my-[50px]">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-3">
        {/* Left Column - Images */}
        <div className="md:col-span-3 flex space-x-6 lg:space-x-8">
          {/* Small Images - Vertically aligned */}
          <div className="flex flex-col space-y-4">
            <Image
              src={thumbnailUrl}
              alt={`${product.title} Thumbnail 1`}
              width={150}
              height={150}
              className="rounded-lg shadow-md object-cover"
            />
            <Image
              src={thumbnailUrl}
              alt={`${product.title} Thumbnail 2`}
              width={150}
              height={150}
              className="rounded-lg shadow-md object-cover"
            />
            <Image
              src={thumbnailUrl}
              alt={`${product.title} Thumbnail 3`}
              width={150}
              height={150}
              className="rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Large Image */}
          <div className="flex flex-col items-center ">
            <Image
              src={mainImageUrl}
              alt={product.title}
              width={350}
              height={380}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-6 mt-4 md:mt-0">
          {/* Product Title */}
          <h1 className="text-4xl font-bold text-[#000000]">{product.title}</h1>

          {/* Product Price */}
          <p className="text-3xl font-semibold text-[#B88E2F]">${product.price.toFixed(2)}</p>

          {/* Stars Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-yellow-500">★</span>
            ))}
          </div>

          {/* Product Description */}
          <p className="text-lg text-gray-600">{product.description}</p>

          {/* Color Options (Circles for color selection) */}
          <div className="flex space-x-3"><p>Colors:</p>
            <span className="w-6 h-6 rounded-full bg-[#816DFA] cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-[#000000] cursor-pointer"></span>
            <span className="w-6 h-6 rounded-full bg-[#CDBA7B] cursor-pointer"></span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="px-6 py-3 border border-gray-700 text-[#000000] font-medium rounded-lg hover:bg-[#000000] hover:text-white transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;














