import Link from "next/link";

const Test = () => {
    return <>
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Link href={'/'}><a>home</a></Link>
                <Link href={'/test'}><a>vercel config cache page</a></Link>
            </div>
            <div style={{ margin: 50 }}>
                TEST PAGE WITH MANUAL CACHE CONFIG
            </div>
        </div>
        <style jsx>{`
          a {
            text-decoration: underline;
            color: blue;
            margin-right: 10px;
          }
        `}</style>
    </>
}

export default Test

export const getServerSideProps = (ctx) => {
    ctx.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
    return {
        props: {}
    }
}
