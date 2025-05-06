import { User } from "../../types"

export async function getAllUsers() : Promise<User[]>{
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {next: {
      revalidate: 60,
    }})

    if(!res.ok) throw new Error(`Failed to fetch all users: ${res.status} ${res.statusText}`)

    const data : User[] = await res.json()
    return data
  }catch(error){
    console.error("Failed to fetch all users", error)
    throw error
  }
}