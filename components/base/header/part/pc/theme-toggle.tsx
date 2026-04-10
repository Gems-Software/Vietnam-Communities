"use client"

import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ComponentPropsWithoutRef, useEffect, useState } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const iconClass = "h-4 w-4"
  const iconSun = <Sun className={iconClass} />
  const iconMoon = <Moon className={iconClass} />
  const iconSystem = <Laptop className={iconClass} />

  const currentTheme = !mounted ? null : theme === "dark" ? (
    <>{iconMoon} Dark</>
  ) : theme === "light" ? (
    <>{iconSun} Light</>
  ) : (
    <>{iconSystem} System</>
  )

  const handleSelect = (themeValue: string) => {
    setTheme(themeValue)
    requestAnimationFrame(() => {
      setOpen(null)
    })
  }

  return (
    <NavigationMenu value={open} onValueChange={setOpen}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2">
            Theme: {currentTheme}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-1">
              <ListItem title="Light" onClick={() => handleSelect("light")}>
                {iconSun}
              </ListItem>
              <ListItem title="Dark" onClick={() => handleSelect("dark")}>
                {iconMoon}
              </ListItem>
              <ListItem title="System" onClick={() => handleSelect("system")}>
                {iconSystem}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  onClick,
  ...props
}: ComponentPropsWithoutRef<"li"> & {
  title: string
  onClick: () => void
}) {
  return (
    <li {...props}>
      <Button
        onClick={onClick}
        variant="ghost"
        className="w-full justify-start gap-2"
      >
        {children}
        {title}
      </Button>
    </li>
  )
}
