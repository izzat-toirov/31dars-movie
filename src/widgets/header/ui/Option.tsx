import { LanguageSwitcher } from "@/features/language-switcher"
import { ThemeChanger } from "@/features/theme"
import { memo } from "react"

export const Option = memo(() => {
  return (
    <div>
        <LanguageSwitcher/>
        <ThemeChanger/>
    </div>
  )
})
