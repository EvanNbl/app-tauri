"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Updater from '../components/updater'
import { Button } from "@/components/ui/button"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>Chargement...</p>
      </main>
    )
  }

  if (!session) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold">Bienvenue {session.user?.name}</h1>
      {session.user?.image && (
        <img 
          src={session.user.image} 
          alt="Profile" 
          className="w-20 h-20 rounded-full"
        />
      )}
      <p className="mt-4 text-lg">
        Email: {session.user?.email}
      </p>
      <p className="text-sm text-muted-foreground">
        version 0.0.2
      </p>
      <Button onClick={() => signOut({ callbackUrl: "/login" })}>
        Se déconnecter
      </Button>
      <Updater />
    </main>
  )
}