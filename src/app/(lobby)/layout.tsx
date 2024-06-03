import { getCurrentUser } from "@/actions/getCurrentUser";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

interface LobyLayoutProps extends React.PropsWithChildren<{
  modal: React.ReactNode
}> { }

export default async function LobbyLayout({ children, modal }: LobyLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1">
        {children}
        {modal}
      </main>
      <Footer />
    </div>
  );
}