import { ReactNode } from "react"

export function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <main className="flex-1 py-4 md:py-5">{children}</main>
    </main>
  )
}
