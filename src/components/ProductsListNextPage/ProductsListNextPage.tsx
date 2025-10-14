'use client'

import { Product } from "@/interfaces/product"
import { GenericListResponse } from "@/interfaces/response"
import { useState } from "react"
import ProductComponent from "../Product/Product"

interface ProductsListNextPageProps {
  perPage?: number
}

const ProductsListNextPage = ({ perPage = 12 }: ProductsListNextPageProps) => {
  const [data, setData] = useState<Product[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [loading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const getData = async () => {
    if (!hasMore || loading) {
      return
    }
    try {
      setIsLoading(true)
      setPage(page + 1)
      const request = await fetch(`https://dummyjson.com/products?limit=${perPage}&skip=${page * perPage}&select=title,price`)
      const response: GenericListResponse<'products', Array<Product>> = await request.json()
      setData([...data, ...response.products])
      if (response.products.length < perPage) {
        setHasMore(false)
      }
    } catch (error) {
      setHasMore(false)
      console.error(`Error fetching products: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {data?.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))
      }
      <footer className='container mx-auto p-4 mt-8 text-center col-span-full'>
        { 
          hasMore && (<button
            onClick={getData}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
          { loading ? 'Loading...' : 'Load more Products' }
          </button>)
        }
        {
          !hasMore && (<p className="text-gray-600">No more products to load</p>)
        }
      </footer>
    </>
  )
}

export default ProductsListNextPage
