import { Metadata, ResolvingMetadata } from "next";

interface BlogPageProps {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: "Welcome on blog page !",
};

export const generateMetadata = async (
  { params, searchParams }: BlogPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> => {
  return {
    title: "",
    description: "",
  };
};

const Page = ({ params, searchParams }: BlogPageProps) => {
  return <div></div>;
};

export default Page;
