import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

export function Header() {
  const router = useRouter();

  const isHomePage = (router.pathname = "/");
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href="/"></Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isHomePage ? "text-blue-500" : "text-muted-foreground"
              )}
            >
              Inicio
            </Link>
            <Link href="/blog">Blog</Link>
            <Button variant="secondary">Comecar</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
