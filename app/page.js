// app/page.js
export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">File Converter</h1>
      <p className="text-gray-700 mb-8">Convert Photos ↔ PDF and Photos ↔ PPT — simple and fast.</p>
      <div className="flex justify-center gap-4">
        <a href="/photo-to-pdf" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Photo → PDF</a>
        <a href="/pdf-to-photo" className="px-6 py-3 bg-green-600 text-white rounded-lg">PDF → Photo</a>
        <a href="/photo-to-ppt" className="px-6 py-3 bg-indigo-600 text-white rounded-lg">Photo → PPT</a>
        <a href="/ppt-to-photo" className="px-6 py-3 bg-rose-600 text-white rounded-lg">PPT → Photo</a>
      </div>
    </div>
  )
}
