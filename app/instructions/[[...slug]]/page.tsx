import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getContentsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import GenericBreadcrumb from "@/components/generic-breadcrumb";
import { BasePath } from "@/components/global_constants";

type PageProps = {
  params: { slug: string[] };
};

export default async function InstructionsPage({
  params: { slug = [] },
}: PageProps) {
  const pathName = slug.join("/");
  const res = await getContentsForSlug(`${BasePath.INSTRUCTIONS}/${pathName}`);

  if (!res) notFound();

  const { frontmatter, content } = res;

  return (
    <div className="flex items-start gap-10">
      <div className="flex-[3] pt-10">
        <GenericBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl -mt-2">{frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {frontmatter.description}
          </p>
          <div>{content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} type={BasePath.INSTRUCTIONS} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getContentsForSlug(`${BasePath.INSTRUCTIONS}/${pathName}`);

  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
