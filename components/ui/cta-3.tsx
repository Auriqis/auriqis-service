import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
        strokeWidth={1}
      />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

      <div className="space-y-1">
        <h2 className="text-center font-bold text-2xl">
          Choose how you want to start
        </h2>
        <p className="text-center text-muted-foreground">
          Whether you prefer a quick written brief or a short conversation, we
          make it easy to take the first step. Share your requirements by email
          or schedule a focused intro call with our certified team
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <a
          className="btn btn-outline"
          href="mailto:vimalmurali03@gmail.com"
        >
          Start with Email
        </a>
        <Link href="/contact">
          <Button>
            Schedule a Call{" "}
            <ArrowRightIcon className="size-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
