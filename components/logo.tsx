 import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({
  className,
  priority = false,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* T Logo */}
      <Image
        src="/logo-t.png"
        alt="The Foam Theory"
        width={75}
        height={75}
        priority={priority}
        className="h-20 w-20 object-contain sm:h-20 sm:w-20"
      />

      {/* Text */}
      <div className="leading-none">
        <div className="text-[11px] italic font-semibold tracking-wide text-black">
          THE
        </div>

        <div className="text-3xl font-extrabold tracking-tight text-blue-900">
          FOAM
        </div>

        <div className="text-[12px] font-extrabold tracking-[0.45em] text-black">
          THEORY
        </div>
      </div>
    </div>
  );
}