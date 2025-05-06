import { getAllUsers } from "@/utils/getAllUsers"
import Link from "next/link"

export default async function UsersPage() {

  const users = await getAllUsers()

  return (
    <main className="p-8 min-h-screen bg-off-white text-primary">
      <h1 className="font-bold text-3xl">Users Profiles</h1>
      <p className="font-light mb-2">View the latest users profiles of the refresh platform.</p>
      <nav>
        <ul className="font-light">
          {users.map(user => {
            return (
              <li key={user.id} className="mb-2">
                <Link href={`/users/${user.id}`} className="hover:text-grassroots">&#8594; {user.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </main>
  )
}