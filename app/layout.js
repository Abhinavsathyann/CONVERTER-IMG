import './globals.css'
import Link from 'next/link'


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-gray-50">
<nav className="bg-white shadow p-4 flex justify-center gap-6 text-lg font-semibold">
<Link href="/homePage">Home</Link>
<Link href="/photoToPptPage">Photo → PPT</Link>
<Link href="/pptToPhotoPage">PPT → Photo</Link>
<Link href="/photoToPdfPage">Photo → PDF</Link>
<Link href="/pdfToPhotoPage">PDF → Photo</Link>
</nav>
<main className="max-w-4xl mx-auto p-6">{children}</main>
</body>
</html>
)
}