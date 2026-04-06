import { Metadata } from "next"
import { WebLayout } from "@/components/base/layout/web-layout"

type Props = {
  params: Promise<{ community: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { community } = await params
  return { title: community }
}

export default async function Community({ params }: Props) {
  const { community } = await params

  return (
    <WebLayout>
      <div>{community}</div>
    </WebLayout>
  )
}
