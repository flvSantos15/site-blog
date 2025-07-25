import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface IActiveLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
}

export function ActiveLink({ href, children, ...rest }: IActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(`${rest.as}`);

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
