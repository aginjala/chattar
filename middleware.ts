import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const matcher = createRouteMatcher([
//   "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)"
]);

export default clerkMiddleware((auth, req) => {
  if (matcher(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
