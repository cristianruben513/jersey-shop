import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export default function LobbyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}