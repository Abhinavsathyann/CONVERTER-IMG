import formidable from 'formidable'
import fs from 'fs'
import { PDFDocument } from 'pdf-lib'


export const config = { api: { bodyParser: false } }


export async function POST(req) {
const form = formidable({ multiples: true })
const [fields, files] = await new Promise((resolve, reject) => {
form.parse(req, (err, flds, fls) => err ? reject(err) : resolve([flds, fls]))
})
const imgs = files.images ? (Array.isArray(files.images) ? files.images : [files.images]) : []
const pdfDoc = await PDFDocument.create()
for (const img of imgs) {
const imageBytes = fs.readFileSync(img.filepath)
let imageEmbed
if (img.mimetype.includes('png')) imageEmbed = await pdfDoc.embedPng(imageBytes)
else imageEmbed = await pdfDoc.embedJpg(imageBytes)
const { width, height } = imageEmbed.scale(1)
const page = pdfDoc.addPage([width, height])
page.drawImage(imageEmbed, { x: 0, y: 0, width, height })
}
const pdfBytes = await pdfDoc.save()
return new Response(Buffer.from(pdfBytes), {
headers: {
'Content-Type': 'application/pdf',
'Content-Disposition': 'attachment; filename="converted.pdf"'
}
})
}