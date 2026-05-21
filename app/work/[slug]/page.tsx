import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pb-24">
      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
          <p className="text-xs text-stone-500 tracking-[0.3em] uppercase mb-3">
            {project.year} · {project.type}
          </p>
          <h1 className="font-kr text-3xl md:text-4xl lg:text-5xl max-w-3xl">
            {project.title}
          </h1>
          {project.titleKr && project.titleKr !== project.title && (
            <p className="text-stone-500 text-sm mt-2">{project.titleKr}</p>
          )}
        </div>
      </div>

      <div className="px-8 max-w-4xl mt-12">
        {/* Meta */}
        <div className="flex flex-wrap gap-x-8 gap-y-1 mb-12 text-xs text-stone-500 tracking-wider">
          <span>{project.venue}</span>
          {project.org && <span>{project.org}</span>}
          <span>{project.location}</span>
        </div>

        {/* Description */}
        <div className="border-t border-stone-900 pt-12 mb-16">
          <p className="text-stone-300 leading-relaxed text-lg max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Image grid */}
        {project.images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-900 mb-16">
            {project.images.slice(1).map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] bg-[#0a0a0a] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${project.title} ${i + 2}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* Back */}
        <div className="border-t border-stone-900 pt-8">
          <Link
            href="/work"
            className="text-xs text-stone-500 hover:text-[#f0ede8] transition-colors tracking-[0.2em] uppercase"
          >
            ← 작업 목록
          </Link>
        </div>
      </div>
    </main>
  );
}
