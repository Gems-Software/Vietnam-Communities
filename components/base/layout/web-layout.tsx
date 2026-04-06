import { ReactNode } from "react"
import { Header } from "@/components/base/header/header"

export function WebLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header/>
      <div className="flex-1 pt-4 md:pt-5">{children}</div>
    </main>
  )
}
