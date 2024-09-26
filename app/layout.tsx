import type { Metadata } from "next";

//styles
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "/public/css/style.css";

//components
import Header from "@/components/Header";
import ButtonToggle from "@/components/elements/ButtonToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import ActiveContextSectionProvider from "@/context/ActiveContextSection";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";
import { themeDefault } from "@/data/Header";

export const metadata: Metadata = {
  title: "Mladen Blagovčanin",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme={themeDefault.mode}>
          <Loading />
          <ButtonToggle />
          <ActiveContextSectionProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
          </ActiveContextSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
