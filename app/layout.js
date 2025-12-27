import "./globals.css";
import { SessionProvider } from "@/components/session-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}