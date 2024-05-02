import { notFound } from "next/navigation"
export default function ReviewDetails({ params }) {

    if (parseInt(params.reviewId) > 10) {
        return notFound()
    }
    if (parseInt(params.productId) > 10) {
        return notFound()
    }
    return (
        <div>
            <h1>Review {params.reviewId}</h1>
            <p>product {params.productId}</p>
        </div>
    )
}