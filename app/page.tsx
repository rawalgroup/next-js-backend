import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Simple usage of Tailwind CSS with Next.js
        </h1>
        <p className="max-w-[700px] text-lg">
          Click on <Link href="/api-doc">Doc</Link> to see the Swagger UI.
        </p>
      </div>
      <div className="flex gap-4">
        {siteConfig.links.docs && (
          <Link href={siteConfig.links.docs} target="_blank" rel="noreferrer" className={buttonVariants()}>
            Documentation
          </Link>
        )}
        {siteConfig.links.github && (
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        )}
      </div>
    </section>
  );
}
