import { Metadata } from "next";

type Props = {
  params: Promise<{ community: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { community } = await params;
  return { title: community };
}

export default async function Community({ params }: Props) {
  const { community } = await params;

  return (
    <>
      {community}
    </>
  )
}