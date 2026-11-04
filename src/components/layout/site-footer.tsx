import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { brand, contactLinks, referenceBusinessCopy } from "@/config/brand";
import { siteConfig } from "@/config/site";
import routes from "@/config/routes.json";

const footerRoutes = routes.filter((route) =>
  ["home", "about", "menu", "gallery", "events", "contact"].includes(route.id),
);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" aria-label="AB Hunger Station Home">
              <Image src={brand.logo} width={200} height={90} alt="AB Hunger Station" className="site-footer-logo" />
            </Link>
          </div>
          <div className="site-footer-column">
            <h2>Quick Links</h2>
            <nav aria-label="Footer navigation">
              {footerRoutes.map((route) => <Link key={route.id} href={route.href}>{route.label === "About" ? "About Us" : route.label}</Link>)}
            </nav>
          </div>
          <div className="site-footer-column">
            <h2>Contact Us</h2>
            <p><MapPin size={15} aria-hidden="true"/> {referenceBusinessCopy.displayLocation}</p>
            {contactLinks.phone && <a href={`tel:${contactLinks.phone}`}><Phone size={15} aria-hidden="true"/> {contactLinks.phone}</a>}
            {contactLinks.email && <a href={`mailto:${contactLinks.email}`}><Mail size={15} aria-hidden="true"/> {contactLinks.email}</a>}
            {!contactLinks.phone && !contactLinks.email && <span className="site-footer-contact-note">Contact details pending confirmation</span>}
          </div>
          <div className="site-footer-column">
            <h2>Follow Us</h2>
            <div className="site-footer-socials">
              {contactLinks.facebook ? <a href={contactLinks.facebook} aria-label="Facebook"><Facebook size={18}/></a> : <span aria-label="Facebook link pending"><Facebook size={18}/></span>}
              {contactLinks.instagram ? <a href={contactLinks.instagram} aria-label="Instagram"><Instagram size={18}/></a> : <span aria-label="Instagram link pending"><Instagram size={18}/></span>}
              {contactLinks.youtube ? <a href={contactLinks.youtube} aria-label="YouTube"><Youtube size={18}/></a> : <span aria-label="YouTube link pending"><Youtube size={18}/></span>}
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name} | Restaurant &amp; Café. All Rights Reserved.</span>
          <span>Privacy Policy&nbsp; | &nbsp;Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}
