import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getContentsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import GenericBreadcrumb from "@/components/generic-breadcrumb";
import { BasePath } from "@/components/global_constants";
import fs from "fs";
import path from "path";

type PageProps = {
  params: { slug: string[] };
};

function getAllAboutFiles() {
  const aboutDir = path.join(process.cwd(), "contents/about");
  return fs
    .readdirSync(aboutDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export default async function AboutPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.length > 0 ? slug.join("/") : "index";
  const res = await getContentsForSlug(`${BasePath.ABOUT}/${pathName}`);

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
      <Toc path={pathName} type={BasePath.ABOUT} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getContentsForSlug(`${BasePath.ABOUT}/${pathName}`);

  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  // Get all MDX files in the about directory
  const aboutFiles = getAllAboutFiles(); // You'll need to implement this function

  return [
    { slug: [] }, // For the root /about page
    ...aboutFiles.map((file) => ({
      slug: file.replace(/\.mdx$/, "").split("/"),
    })),
  ];
}
