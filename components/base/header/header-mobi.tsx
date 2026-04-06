import { MenuMobile } from "@/components/base/header/part/mobile/menu-mobile"

export function HeaderMobi() {
  return (
    <header className="flex h-13 items-center justify-between border-b bg-background px-3 md:hidden">
      <MenuMobile />
    </header>
  )
}
