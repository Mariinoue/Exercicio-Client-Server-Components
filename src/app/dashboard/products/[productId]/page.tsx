interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productId } = params

  return (
    <div>
      <h1>Product Page</h1>
      <p>This is the Product page for {productId}</p>
    </div>
  )
}

export default ProductPage


