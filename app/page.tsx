import LoginClient from "./auth/LoginClient";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <LoginClient />
    </ClientOnly>
  );
}
