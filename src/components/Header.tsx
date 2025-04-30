import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8">
      <div className="py-8">
        <Link href="/" className="font-bold text-xl text-primary-accent">Refresh 29</Link>
      </div>
    </header>
  )
}
