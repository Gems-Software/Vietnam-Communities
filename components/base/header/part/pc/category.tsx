"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface CategoryProps {
  className?: string
}

export function Category({ className }: CategoryProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <NavigationMenuLink
              render={<Link href="/" />}
              className={navigationMenuTriggerStyle()}
            >
              Community Categories
            </NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <ListItem href="/docs" title="Programing">
                Programing category
              </ListItem>
              <ListItem href="/docs/installation" title="Gaming">
                Gaming category
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Operating System"
              >
                Operating System
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
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}
