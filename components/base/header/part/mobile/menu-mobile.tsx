import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost">
            <Menu />
          </Button>
        }
      />
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>No Close Button</SheetTitle>
          <SheetDescription>
            This sheet doesn&apos;t have a close button in the top-right corner.
            Click outside to close.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
