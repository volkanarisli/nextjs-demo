// import { useRouter } from 'next/router'

import Link from "next/link"
import { server } from '../../../config'
import Meta from '../../../components/Meta'
// 
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}


const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <br />
            <p>{article.body}</p>

            <Link href='/'>Go Back</Link>
        </>
    )
}

export default article
