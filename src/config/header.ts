import routes from "@/config/routes.json";

/**
 * The eight reference exports show two navbar treatments. Older informational
 * pages have an Order Online CTA; events/commerce views show Book a Table.
 * This configuration makes that deliberate instead of copying navbar markup.
 */
const infoPages = new Set(["/", "/about", "/gallery", "/contact"]);
const cartPages = new Set(["/menu", "/parties-events", "/book-table", "/cart", "/checkout"]);

export function getHeaderVariant(pathname: string) {
  const isInfoPage = infoPages.has(pathname);
  return {
    actionHref: isInfoPage ? "/menu" : "/book-table",
    actionLabel: isInfoPage ? "Order Online" : "Book a Table",
    showCart: cartPages.has(pathname),
    navigation: routes.filter((route) =>
      ["home", "about", "menu", "gallery", "contact"].includes(route.id) ||
      (!isInfoPage && route.id === "events"),
    ),
  };
}

/** A nested page should continue highlighting its parent navigation entry. */
export function isActiveRoute(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
