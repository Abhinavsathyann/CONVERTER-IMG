export default function HomePage() {
return (
<div className="text-center mt-20">
<h1 className="text-3xl font-bold mb-6">Photo ⇄ PPT ⇄ PDF Converter</h1>
<p className="text-gray-700 text-lg mb-10">Choose your conversion type:</p>
<div className="grid grid-cols-2 gap-6 justify-center">
<a href="/photoToPptPage" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Photo → PPT</a>
<a href="/pptToPhotoPage" className="px-6 py-3 bg-green-600 text-white rounded-lg">PPT → Photo</a>
<a href="/photoToPdfPage" className="px-6 py-3 bg-purple-600 text-white rounded-lg">Photo → PDF</a>
<a href="/pdfToPhotoPage" className="px-6 py-3 bg-red-600 text-white rounded-lg">PDF → Photo</a>
</div>
</div>
)
}