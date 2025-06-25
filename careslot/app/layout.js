import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"]});


export const metadata = {
  title: "CareSlot - Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.classname}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {/* header */}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/* footer */}
        <footer className="bg-muted/50">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Shailendra</p>
          </div>
        </footer>
        </ThemeProvider>

      </body>
    </html>
  );
}
