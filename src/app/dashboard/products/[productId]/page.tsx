import QuoteComponent from "@/components/QuoteComponent/QuoteComponent";
import { Product } from "@/interfaces/product";
import Image from "next/image";
interface ProductPageProps {
  params: {
    productId: string;
  };
}

async function getProductData(id: string): Promise<Product | null> {
  try {
    const request = await fetch(`https://dummyjson.com/products/${id}`);
    const response: Product = await request.json();
    return response;
  } catch (error) {
    console.error(`Error fetching product: ${error}`);
    return null;
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = params;
  const product = await getProductData(productId);
  if (!product) {
    return <p>Não há produtos disponíveis</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {product.title}
        </h2>
        <p className="text-2xl font-semibold text-gray-900">{`Preço: ${product.price}`}</p>
        <p className="text-lg text-gray-700 text-center mb-4">{`Descrição:  ${product.description}`}</p>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
        />
        <QuoteComponent productId={productId} />
      </div>
    </div>
  );
};

export default ProductPage;
