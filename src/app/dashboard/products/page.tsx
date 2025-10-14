import ProductComponent from "@/components/Product/Product"
import ProductsListNextPage from "@/components/ProductsListNextPage/ProductsListNextPage"
import { Product } from "@/interfaces/product"
import { GenericListResponse } from "@/interfaces/response"

async function getData(perPage = 12) {
  try {
    const request = await fetch(`https://dummyjson.com/products?limit=${perPage}&skip=${perPage}&select=title,price`)
    const response: GenericListResponse<'products', Array<Product>> = await request.json()
    return response.products
  } catch (error) {
    console.error(`Error fetching products: ${error}`)
    return []
  }
}

const ProductsListPage = async () => {
  const PER_PAGE = 15
  const data = await getData(PER_PAGE)


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products List Page</h1>
      <div className="content grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
        {data.length === 0 && <p className="text-gray-600">No products found</p>}
        {data?.length >= PER_PAGE && (
          <ProductsListNextPage perPage={PER_PAGE} />
        )}
      </div>
    </div>
  )
}

export default ProductsListPage

