// app/page.js
import Updater from '../components/updater'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Updater />
    </main>
  )
}