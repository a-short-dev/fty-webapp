import ClientOnly from "./components/ClientOnly";
import "./globals.css";
import ToasterProvider from "./provider/ToasterProvider";

export const metadata = {
  title: "FTY Web App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ToasterProvider />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
