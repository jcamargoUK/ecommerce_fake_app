import Link from "next/link"

export default function Home() {
  return (
    <>
   <h1>Main Page</h1>
   <h3>
      <Link href="/newpage">new page</Link>
   </h3>
   </>
  )
}
