import * as mammoth from "mammoth"
import * as fs from "fs"
import * as path from "path"

export type LicenseSection = {
    title: string
    content: string[]
}

export async function extractAndParsePrivacy(): Promise<LicenseSection[]> {
    const filePath = path.join(process.cwd(), "src/scripts/goals_license.docx")
    const buffer = fs.readFileSync(filePath)

    const { value: rawText } = await mammoth.extractRawText({ buffer })

    const lines = rawText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)

    const sections: LicenseSection[] = []
    let currentSection: LicenseSection | null = null

    const isTitle = (line: string) => {
        if (line.length === 0 || line.length > 100) return false
        if (line.includes(".") || line.includes(":")) return false // заголовки обычно не с точками
        const words = line.split(" ")
        if (words.length > 7) return false
        return /^[А-ЯA-Z]/.test(line)
    }

    for (const line of lines) {
        if (isTitle(line)) {
            if (currentSection) {
                sections.push(currentSection)
            }
            currentSection = { title: line, content: [] }
        } else {
            if (!currentSection) {
                currentSection = { title: "Без заголовка", content: [] }
            }
            currentSection.content.push(line)
        }
    }

    if (currentSection) {
        sections.push(currentSection)
    }

    return sections
}
