import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza | Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}
