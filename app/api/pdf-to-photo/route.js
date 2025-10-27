import formidable from 'formidable'
import fs from 'fs'
import { fromPath } from 'pdf2pic'
import archiver from 'archiver'


export const config = { api: { bodyParser: false } }


export async function POST(req) {
const form = formidable({ multiples: false })
const [fields, files] = await new Promise((resolve, reject) => {
form.parse(req, (err, flds, fls) => err ? reject(err) : resolve([flds, fls]))
})
const pdfFile = files.pdf
const outputDir = `/tmp/pdf-images-${Date.now()}`
fs.mkdirSync(outputDir, { recursive: true })
const converter = fromPath(pdfFile.filepath, { density: 150, saveFilename: 'page', savePath: outputDir, format: 'png', width: 1000, height: 1414 })
const pages = await converter.bulk(-1)
const zipPath = `${outputDir}.zip`
const output = fs.createWriteStream(zipPath)
const archive = archiver('zip')
archive.pipe(output)
fs.readdirSync(outputDir).forEach((file) => archive.append(fs.createReadStream(`${outputDir}/${file}`), { name: file }))
await archive.finalize()
const zipBuffer = fs.readFileSync(zipPath)
return new Response(zipBuffer, {
headers: {
'Content-Type': 'application/zip',
'Content-Disposition': 'attachment; filename="pdf-images.zip"'
}
})
}