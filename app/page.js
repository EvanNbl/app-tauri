// app/page.js
import Updater from '../components/updater'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="mt-4 text-lg">
        version 0.0.2
      </p>
      <Updater />
    </main>
  )
}