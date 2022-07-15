import { useRouter } from "next/router"
export default function ProductDetail() {
    const router = useRouter()
    const productId= router.query.productid
  return (
<h1>Details about product-{productId}</h1> )
} 