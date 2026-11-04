"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Clock3, Facebook, Instagram, MapPin, Menu, ShoppingCart, UtensilsCrossed, X, Youtube } from "lucide-react";
import { brand, contactLinks, referenceBusinessCopy } from "@/config/brand";
import routes from "@/config/routes.json";
import { cn } from "@/lib/utils";

const navigation = routes.filter((route) =>
  ["home", "about", "menu", "gallery", "events", "contact"].includes(route.id),
);

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header relative z-50 bg-brand-cream">
      <div className="site-topbar">
        <div className="site-container site-topbar-inner">
          <div className="site-topbar-message">
            <UtensilsCrossed aria-hidden="true" className="text-brand-orange" size={14} />
            <span>Good Food, Great Coffee &amp; Memorable Moments</span>
            <span className="site-topbar-separator" aria-hidden="true" />
            <span>Restaurant &amp; Café</span>
          </div>
          <div className="site-topbar-details">
            <span className="site-topbar-info">
              <MapPin aria-hidden="true" size={14} className="text-brand-orange" />
              {referenceBusinessCopy.displayLocation}
            </span>
            <span className="site-topbar-separator" aria-hidden="true" />
            <span className="site-topbar-info">
              <Clock3 aria-hidden="true" size={14} className="text-brand-orange" />
              {referenceBusinessCopy.displayHours}
            </span>
          </div>
          <div className="site-socials" aria-label="Social profiles awaiting confirmation">
            {contactLinks.facebook ? (
              <a href={contactLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={15}/></a>
            ) : <Facebook aria-hidden="true" size={15} />}
            {contactLinks.instagram ? (
              <a href={contactLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={15}/></a>
            ) : <Instagram aria-hidden="true" size={15} />}
            {contactLinks.youtube ? (
              <a href={contactLinks.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube size={15}/></a>
            ) : <Youtube aria-hidden="true" size={15} />}
          </div>
        </div>
      </div>

      <div className="site-container site-navbar">
        <Link href="/" className="site-brand" aria-label="AB Hunger Station Home">
          <Image src={brand.logo} alt="AB Hunger Station Restaurant and Café" width={218} height={98} priority className="site-brand-image" />
        </Link>

        <nav className="site-desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn("site-nav-link", pathname === item.href && "site-nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <span className="site-nav-divider" aria-hidden="true" />
          <Link href="/cart" className="site-cart-link" aria-label="View cart">
            <ShoppingCart aria-hidden="true" size={24} strokeWidth={1.9} />
          </Link>
          <Link href="/book-table" className="site-book-button">
            <CalendarDays aria-hidden="true" size={18} />
            <span>Book a Table</span>
          </Link>
          <button
            className="site-mobile-toggle"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <nav
        id="site-mobile-navigation"
        className={cn("site-mobile-nav", mobileOpen && "site-mobile-nav-open")}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={cn("site-mobile-link", pathname === item.href && "site-mobile-link-active")}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/cart" className="site-mobile-link" onClick={() => setMobileOpen(false)}>Your Cart</Link>
        <Link href="/book-table" className="site-mobile-link" onClick={() => setMobileOpen(false)}>Book a Table</Link>
      </nav>
    </header>
  );
}
