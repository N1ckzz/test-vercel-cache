import Link from "next/link";

const Test = () => {
    return <>
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Link href={'/'}><a>home</a></Link>
                <Link href={'/test-2'}><a>manual cache page</a></Link>
            </div>
            <div style={{ margin: 50 }}>
                PAGE WITH CACHE IN VERCEL CONFIG JSON
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
    return {
        props: {}
    }
}
