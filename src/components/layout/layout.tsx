import { ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

interface ILayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col dark">
      <Header />

      <main className="flex-1 flex flex-col mb-12">{children}</main>

      <Footer />
    </div>
  );
}
