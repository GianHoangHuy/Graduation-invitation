import fs from 'fs'
import crypto from 'crypto'

const BASE_URL = 'https://graduation-invitation-tieulong.vercel.app' // Thay domain của bạn
const GUESTS_FILE = './src/guests.ts'
const INPUT_FILE = './danh-sach.txt'
const OUTPUT_MD = './DANH_SACH_LINK_MOI.md'

// Đọc danh sách hiện có để không làm đổi mã của người cũ
let existingGuests = {}
if (fs.existsSync(GUESTS_FILE)) {
    const content = fs.readFileSync(GUESTS_FILE, 'utf-8')
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
        try {
            existingGuests = JSON.parse(jsonMatch[0])
        } catch {}
    }
}

// Đọc danh sách tên từ danh-sach.txt
if (!fs.existsSync(INPUT_FILE)) {
    console.error('❌ Chưa tìm thấy file danh-sach.txt')
    process.exit(1)
}

const names = fs.readFileSync(INPUT_FILE, 'utf-8')
    .split('\n')
    .map(n => n.trim())
    .filter(Boolean)

// Tìm mã cũ theo tên
const nameToCode = {}
for (const [code, name] of Object.entries(existingGuests)) {
    nameToCode[name] = code
}

const updatedGuests = {}
const tableRows = []

for (const name of names) {
    // Nếu đã có mã thì giữ nguyên, nếu chưa có thì tạo mới
    const code = nameToCode[name] || crypto.randomBytes(6).toString('hex')
    updatedGuests[code] = name
    tableRows.push({
        name,
        code,
        url: `${BASE_URL}/?invite=${code}`
    })
}

// Ghi lại src/guests.ts
fs.writeFileSync(
    GUESTS_FILE,
    `// Auto-generated\nexport const guests: Record<string, string> = ${JSON.stringify(updatedGuests, null, 2)}\n`,
    'utf-8'
)

// Ghi file bảng Markdown để copy
const md = `# Danh Sách Thiệp Mời\n\n| STT | Khách mời | Mã | Link gửi trực tiếp |\n| :--- | :--- | :--- | :--- |\n` +
    tableRows.map((r, i) => `| ${i + 1} | **${r.name}** | \`${r.code}\` | ${r.url} |`).join('\n')

fs.writeFileSync(OUTPUT_MD, md, 'utf-8')

console.log(`✅ Hoàn tất! Đã xử lý ${tableRows.length} khách mời.`)