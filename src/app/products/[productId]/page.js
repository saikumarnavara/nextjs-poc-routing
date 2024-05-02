export default function ProductDetails({ params }) {
    return (

        <div>
            <h1>Product Details</h1>
            <p>Product details go here {params.productId}</p>
        </div>
    )
}