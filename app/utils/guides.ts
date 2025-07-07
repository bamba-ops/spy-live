// utils/guides.ts

// Import du JSON généré
import rawGuides from './guides_generated.json'

export interface Guide {
  slug: string
  title: string
  meta_title: string
  meta_description: string
  primary_keyword: string
  secondary_keywords: string[]
  steps?: { title: string; content: string }[]
  locale: string
}

// On cast `rawGuides` au type attendu
export const guides: Guide[] = rawGuides as Guide[]
