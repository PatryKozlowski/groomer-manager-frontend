import NavBar from "@/components/nav-bar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <main>
            <div className="px-4 pt-6">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
