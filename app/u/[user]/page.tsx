import { Metadata } from "next";

type Props = {
  params: Promise<{ user: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { user } = await params;
  return { title: user };
}

export default async function User({ params }: Props) {
  const { user } = await params;

  return <div>{user}</div>;
}