"use client"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/jeu">jeu</Link>
      <Link href="/music">Musique</Link>
      <Link href="/calcul">calcul</Link>
      <Link href="/callback">callback</Link>
      <Link href="/instruction">instruction</Link>
    </main>
  )
}
