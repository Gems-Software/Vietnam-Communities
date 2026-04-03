import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function HeaderPc() {
  return (
    <header className="hidden md:flex h-12 border-b-2 px-4 justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-6/12 max-w-md">
          <Input
            name="search"
            placeholder="Search..."
            className="pr-10"
          />

          <div className="absolute right-1 inset-y-0 flex items-center">
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="h-7 w-7"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div>
        some items
      </div>
    </header>
  )
}