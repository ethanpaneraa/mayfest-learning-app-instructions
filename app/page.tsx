import { BasePath } from "@/components/global_constants";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <div>
        <Image
          src="https://www.dilloday.com/favicon.ico"
          alt="dillo day logo"
          width={240}
          height={240}
          className="mb-8"
        />
      </div>
      <h1 className="text-xl font-bold mb-4 sm:text-6xl">
        Mayfest Productions
      </h1>
      <h2 className="text-lg font-bold mb-4 sm:text-4xl">
        Learning App Tutorial
      </h2>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        This is the website for the Mayfest Productions Learning App! In this
        tutorial, you will building a web application that connects to the
        Spotify API and allows for users to display their top tracks and
        artists. This tutorial is designed for newcomers to the Mayfest
        Productions Technology Team and will cover the basics of web development
        in Mayfest Productions.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/${BasePath.CONTENT}${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="https://www.instagram.com/dillo_day/"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Follow Mayfest Productions
        </Link>
      </div>
    </div>
  );
}
