'use client'
import { useState } from 'react'


export default function PhotoToPdfPage() {
const [images, setImages] = useState([])
const [status, setStatus] = useState('')


const upload = async (e) => {
e.preventDefault()
if (!images.length) return alert('Select images')
const fd = new FormData()
images.forEach(f => fd.append('images', f))
setStatus('Processing...')
const res = await fetch('/api/photo-to-pdf', { method: 'POST', body: fd })
const blob = await res.blob()
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'converted.pdf'
a.click()
URL.revokeObjectURL(url)
setStatus('Download complete!')
}


return (
<div>
<h1 className="text-2xl font-bold mb-4">Convert Photos → PDF</h1>
<form onSubmit={upload} className="flex flex-col gap-4">
<input multiple type="file" accept="image/*" onChange={(e)=>setImages(Array.from(e.target.files))} />
<button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">Convert</button>
</form>
<p className="mt-4 text-gray-700">{status}</p>
</div>
)
}