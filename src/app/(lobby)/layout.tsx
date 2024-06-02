import { getCurrentUser } from "@/actions/getCurrentUser";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export default async function LobbyLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}