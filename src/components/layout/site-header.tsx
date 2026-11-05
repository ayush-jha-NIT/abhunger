"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Clock3, Facebook, Instagram, MapPin, Menu, MessageCircle, ShoppingCart, UtensilsCrossed, X, Youtube } from "lucide-react";
import { brand, contactLinks, referenceBusinessCopy } from "@/config/brand";
import { getHeaderVariant, isActiveRoute } from "@/config/header";
import { CartIndicator } from "@/components/layout/cart-indicator";
import { cn } from "@/lib/utils";

const socialAccounts = [
  { name: "Facebook", href: contactLinks.facebook, Icon: Facebook },
  { name: "Instagram", href: contactLinks.instagram, Icon: Instagram },
  { name: "YouTube", href: contactLinks.youtube, Icon: Youtube },
  { name: "WhatsApp", href: contactLinks.whatsapp, Icon: MessageCircle },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const variant = getHeaderVariant(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // The menu is keyed to its route: navigating makes a prior open state inactive,
  // without forcing a setState from inside an effect.
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const isOpen = mobileOpen && openedOnPath === pathname;

  useEffect(() => {
    if (!isOpen) return;
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  function toggleMobile() {
    if (isOpen) {
      setMobileOpen(false);
      return;
    }
    setOpenedOnPath(pathname);
    setMobileOpen(true);
  }

  return (
    <header className="site-header">
      <div className="site-topbar">
        <div className="site-container site-topbar-inner">
          <div className="site-topbar-message">
            <UtensilsCrossed aria-hidden="true" className="site-orange-icon" size={14} />
            <span>Good Food, Great Coffee &amp; Memorable Moments</span>
            <span className="site-topbar-separator" aria-hidden="true" />
            <span>Restaurant &amp; Café</span>
          </div>
          <div className="site-topbar-details">
            <span className="site-topbar-info"><MapPin aria-hidden="true" size={14} className="site-orange-icon" />{referenceBusinessCopy.displayLocation}</span>
            <span className="site-topbar-separator" aria-hidden="true" />
            <span className="site-topbar-info"><Clock3 aria-hidden="true" size={14} className="site-orange-icon" />{referenceBusinessCopy.displayHours}</span>
          </div>
          <div className="site-socials" aria-label="Social profiles">
            {socialAccounts.map(({ name, href, Icon }) =>
              href ? <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}><Icon size={14} aria-hidden="true" /></a>
                : <span key={name} className="site-social-disabled" aria-hidden="true"><Icon size={14} /></span>,
            )}
          </div>
        </div>
      </div>

      <div className="site-container site-navbar">
        <Link href="/" className="site-brand" aria-label="AB Hunger Station, home" onClick={() => setMobileOpen(false)}>
          <Image src={brand.logo} alt="AB Hunger Station Restaurant and Café" width={218} height={98} priority className="site-brand-image" />
        </Link>
        <nav className="site-desktop-nav" aria-label="Main navigation">
          {variant.navigation.map((item) => (
            <Link key={item.id} href={item.href} aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
              className={cn("site-nav-link", isActiveRoute(pathname, item.href) && "site-nav-link-active")}>{item.label}</Link>
          ))}
        </nav>
        <div className="site-header-actions">
          <span className="site-nav-divider" aria-hidden="true" />
          {variant.showCart && <CartIndicator />}
          <Link href={variant.actionHref} className="site-book-button" onClick={() => setMobileOpen(false)}>
            {variant.actionHref === "/menu" ? <ShoppingCart aria-hidden="true" size={19} /> : <CalendarDays aria-hidden="true" size={19} />}
            <span>{variant.actionLabel}</span>
          </Link>
          <button ref={menuButton} className="site-mobile-toggle" type="button" onClick={toggleMobile}
            aria-expanded={isOpen} aria-controls="site-mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
            {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="site-mobile-navigation" className={cn("site-mobile-nav", isOpen && "site-mobile-nav-open")}
        aria-label="Mobile navigation" aria-hidden={!isOpen} inert={!isOpen}>
        {variant.navigation.map((item) => (
          <Link key={item.id} href={item.href} className={cn("site-mobile-link", isActiveRoute(pathname, item.href) && "site-mobile-link-active")}
            aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined} onClick={() => setMobileOpen(false)}>{item.label}</Link>
        ))}
        <Link href="/cart" className="site-mobile-link" onClick={() => setMobileOpen(false)}>Your Cart</Link>
        {!variant.navigation.some((item) => item.id === "events") && (
          <Link href="/parties-events" className="site-mobile-link" onClick={() => setMobileOpen(false)}>Parties &amp; Events</Link>
        )}
        <Link href="/book-table" className="site-mobile-link" onClick={() => setMobileOpen(false)}>Book a Table</Link>
      </nav>
    </header>
  );
}
