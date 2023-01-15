import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }: any) {
  return (
    <>
    <Header />
      <div className="text-gray-900 dark:text-gray-400">
        {children}
      </div>
    <Footer />
    </>
  );
}