// app/layout.js
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Photo/PDF/PPT Converter'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow p-4 flex justify-center gap-8 text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/photo-to-pdf">Photo → PDF</Link>
          <Link href="/pdf-to-photo">PDF → Photo</Link>
          <Link href="/photo-to-ppt">Photo → PPT</Link>
          <Link href="/ppt-to-photo">PPT → Photo</Link>
        </nav>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
