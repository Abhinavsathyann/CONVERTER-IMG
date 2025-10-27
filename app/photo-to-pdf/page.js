'use client'
import { useState } from 'react'

export default function PhotoToPdf() {
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!files.length) return alert('Select images')
    const fd = new FormData()
    files.forEach(f => fd.append('images', f))
    setStatus('Uploading...')
    const res = await fetch('/api/photo-to-pdf', { method: 'POST', body: fd })
    if (!res.ok) { setStatus('Failed'); return }
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'images-to.pdf'
    a.click()
    URL.revokeObjectURL(url)
    setStatus('Downloaded')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photo → PDF</h1>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <input type="file" accept="image/*" multiple onChange={e => setFiles(Array.from(e.target.files))} />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Convert to PDF</button>
      </form>
      <p className="mt-3 text-sm text-gray-600">{status}</p>
    </div>
  )
}
