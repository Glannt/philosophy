import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import Chatbox from "@/components/chatbot";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-9xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Group 5</p>
        </Link>
        <span className="mx-4 text-default-400">|</span>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.facebook.com/ngo.khanh.duy.119629/"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Mentor</span>
          <p className="text-primary">PhD. S. Ngô Khánh Duy</p>
        </Link>
      </footer>
      <Chatbox />
    </div>
  );
}
