import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">File Converter</h1>
      <p className="mb-6">Convert Photos ↔ PDF and Photos ↔ PPT — simple and fast.</p>

      <div className="space-x-6">
        <Link href="/photo-to-pdf" className="text-blue-600 underline">Photo → PDF</Link>
        <Link href="/pdf-to-photo" className="text-blue-600 underline">PDF → Photo</Link>
      </div>
    </div>
  );
}
