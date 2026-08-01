import * as mammoth from "mammoth"
import * as fs from "fs"
import * as path from "path"

interface LicenseSection {
    title: string
    content: string[]
}

export async function extractAndParseLicense(): Promise<LicenseSection[]> {
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
        const isUpperCase = line === line.toUpperCase()
        const isNotLong = line.length > 0 && line.length < 100
        return isUpperCase && isNotLong
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
