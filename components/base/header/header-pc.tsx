import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, MessageSquareText } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/base/header/part/pc/theme-toggle"
import { AvatarMenu } from "@/components/base/header/part/pc/avatar-menu"
import { Category } from "@/components/base/header/part/pc/category"

export function HeaderPc() {
  return (
    <header className="hidden h-13 items-center justify-between border-b bg-background px-4 md:flex">
      <div className="flex flex-1 items-center gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt=""
            width={25}
            height={25}
            priority
          />
        </Link>

        <Category className="hidden md:block" />

        <ThemeToggle />
      </div>

      <div className="flex items-center gap-4">
        <Input placeholder="Search community" />
        <Button variant="ghost">
          <MessageSquareText />
        </Button>
        <Button variant="ghost">
          <Bell />
        </Button>
        <AvatarMenu />
      </div>
    </header>
  )
}
