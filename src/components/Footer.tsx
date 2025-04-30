import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8">
      <div className="py-8 text-center">
        <Link href="/" className="font-bold text-sm text-primary-accent">Refresh 29</Link>
      </div>
    </footer>
  )
}
