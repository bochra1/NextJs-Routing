import Link from "next/link"
export default function ProductList({productId = 100}) {
  return (
         <> 
         <Link href='/'> Home </Link>
         
           <h2><Link href='/product/1'replace >
           <a>Product1</a></Link></h2>

           <h2><Link href='/product/2'>
           <a>Product2</a></Link></h2>

           <h2><Link href='/product/3'>
           <a>Product3</a></Link></h2>

           <h2><Link href={`/product/${productId}`}>
           <a>Product {productId}</a></Link></h2>
            </>

  )
}
