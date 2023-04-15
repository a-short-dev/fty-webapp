export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/user/:path*", "/user/dashboard", "/user/settings", "/admin"],
};
