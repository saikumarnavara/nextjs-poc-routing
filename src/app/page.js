
import Link from 'next/link'
export default function Home() {
    console.log('Home page');
    return (
        <>
            <h1>Home page</h1>
            <Link href='/products'>skip to products</Link>
        </>
    )

}