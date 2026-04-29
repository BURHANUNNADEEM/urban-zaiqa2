import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/CartDrawer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Urban Zaiqa — Restaurant & Catering" },
      { name: "description", content: "Authentic Pakistani restaurant & catering. Premium packages, signature biryani, BBQ, karahi & desserts." },
      { name: "author", content: "Urban Zaiqa" },
      { name: "theme-color", content: "#3a1518" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Urban Zaiqa" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Urban Zaiqa — Restaurant & Catering" },
      { name: "twitter:title", content: "Urban Zaiqa — Restaurant & Catering" },
      { property: "og:description", content: "Authentic Pakistani restaurant & catering. Premium packages, signature biryani, BBQ, karahi & desserts." },
      { name: "twitter:description", content: "Authentic Pakistani restaurant & catering. Premium packages, signature biryani, BBQ, karahi & desserts." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/96b0d195-088c-4e48-a9a8-c8fa3f5daf0f/id-preview-6463d37d--93ae7f01-8baf-4e79-a9e2-ab472fe54361.lovable.app-1777237849686.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/96b0d195-088c-4e48-a9a8-c8fa3f5daf0f/id-preview-6463d37d--93ae7f01-8baf-4e79-a9e2-ab472fe54361.lovable.app-1777237849686.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <Outlet />
      <CartDrawer />
    </CartProvider>
  );
}
