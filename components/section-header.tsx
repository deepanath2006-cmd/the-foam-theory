import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16 lg:mb-20",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-xl text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-[-0.02em] text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
