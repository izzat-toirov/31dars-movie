import { memo } from "react"

export const LanguageSwitcher = memo(() => {
  return (
    <select>
        <option value="">uz</option>
        <option value="">en</option>
        <option value="">ru</option>
    </select>
  )
})
