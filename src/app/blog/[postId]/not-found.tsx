import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] p-8 grid place-content-center">
      <h1 className="font-bold text-4xl mb-4 text-electric-orange">This page could not be found</h1>
      <Link href="/" className="inline-block mx-auto text-lg text-grassroots-mid hover:text-primary-accent">return home</Link>
    </div>
  )
}
