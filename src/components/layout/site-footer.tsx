import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { brand, contactLinks, referenceBusinessCopy } from "@/config/brand";
import { siteConfig } from "@/config/site";
import routes from "@/config/routes.json";

const footerRoutes = routes.filter((route) =>
  ["home", "about", "menu", "gallery", "events", "contact"].includes(route.id),
);
const socials = [
  { name: "Facebook", href: contactLinks.facebook, Icon: Facebook },
  { name: "Instagram", href: contactLinks.instagram, Icon: Instagram },
  { name: "YouTube", href: contactLinks.youtube, Icon: Youtube },
  { name: "WhatsApp", href: contactLinks.whatsapp, Icon: MessageCircle },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" aria-label="AB Hunger Station, home">
              <Image src="/images/branding/ab-hunger-mark-light.svg" width={200} height={90}
                alt={`${brand.referenceLogoIsApproximation ? "Illustrated " : ""}${siteConfig.name} logo`}
                className="site-footer-logo" />
            </Link>
          </div>
          <div className="site-footer-column site-footer-links">
            <h2>Quick Links</h2>
            <nav aria-label="Footer navigation">
              {footerRoutes.map((route) => (
                <Link key={route.id} href={route.href}>{route.id === "about" ? "About Us" : route.label}</Link>
              ))}
            </nav>
          </div>
          <div className="site-footer-column site-footer-contact">
            <h2>Contact Us</h2>
            <p><MapPin size={15} aria-hidden="true" /> <span>{referenceBusinessCopy.displayLocation}</span></p>
            {contactLinks.phone && <a href={`tel:${contactLinks.phone}`}><Phone size={15} aria-hidden="true" />{contactLinks.phone}</a>}
            {contactLinks.email && <a href={`mailto:${contactLinks.email}`}><Mail size={15} aria-hidden="true" />{contactLinks.email}</a>}
            {!contactLinks.phone && !contactLinks.email && <p className="site-footer-contact-note">Contact details to be confirmed</p>}
          </div>
          <div className="site-footer-column site-footer-follow">
            <h2>Follow Us</h2>
            <div className="site-footer-socials">
              {socials.map(({ name, href, Icon }) =>
                href ? <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}><Icon size={18} aria-hidden="true" /></a>
                  : <span key={name} aria-hidden="true" className="site-footer-social-inactive"><Icon size={18} /></span>,
              )}
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name} | Restaurant &amp; Café. All Rights Reserved.</span>
          <span className="site-footer-legal">Privacy Policy <span aria-hidden="true">|</span> Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}
