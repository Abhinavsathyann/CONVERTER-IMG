'use client'
import { useState } from 'react'


export default function PdfToPhotoPage() {
const [pdf, setPdf] = useState(null)
const [status, setStatus] = useState('')


const upload = async (e) => {
e.preventDefault()
if (!pdf) return alert('Select a PDF')
const fd = new FormData()
fd.append('pdf', pdf)
setStatus('Processing...')
const res = await fetch('/api/pdf-to-photo', { method: 'POST', body: fd })
const blob = await res.blob()
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'pdf-images.zip'
a.click()
URL.revokeObjectURL(url)
setStatus('Download complete!')
}


return (
<div>
<h1 className="text-2xl font-bold mb-4">Convert PDF → Photos</h1>
<form onSubmit={upload} className="flex flex-col gap-4">
<input type="file" accept="application/pdf" onChange={(e)=>setPdf(e.target.files?.[0])} />
<button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Convert</button>
</form>
<p className="mt-4 text-gray-700">{status}</p>
</div>
)
}