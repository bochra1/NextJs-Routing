import { useRouter } from "next/router"
export default function Review() {
    const router = useRouter()
    const productId = router.query.productid
    const reviewId = router.query.reviewid
  return (
    <h1>Review {reviewId} for product {productId}  </h1>
 )
}
