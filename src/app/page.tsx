import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Clock3,
  Camera,
  ConciergeBell,
  House,
  MapPin,
  Navigation,
  ShoppingCart,
  Sprout,
  Timer,
  UtensilsCrossed,
} from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks, referenceBusinessCopy } from "@/config/brand";
import { homeGallery, homeHighlights } from "@/config/home-content";
import { getCafeImage } from "@/config/image-library";
import "./home.css";

export const metadata: Metadata = {
  title: "AB Hunger Station | Restaurant & Café in Prayagraj",
  description:
    "Discover coffee, favourites from the kitchen, a warm dining space and celebrations at AB Hunger Station, Prayagraj.",
};

const features = [
  {
    name: "Fresh Ingredients",
    description: "We use quality ingredients to prepare food that truly satisfies.",
    image: "fresh-ingredients" as const,
    Icon: Sprout,
  },
  {
    name: "Cozy Ambience",
    description: "A comfortable and welcoming space, perfect for meals, coffee, and catch-ups.",
    image: "main-dining" as const,
    Icon: House,
  },
  {
    name: "Fast Service",
    description: "Delicious food, prepared fresh and served with care.",
    image: "fast-service" as const,
    Icon: Timer,
  },
];

function HomeHero() {
  const image = getCafeImage("home-hero");
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero-art">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 700px) 100vw, 64vw"
          className="home-hero-image"
        />
      </div>
      <div className="home-hero-wash" aria-hidden="true" />
      <div className="site-container home-hero-inner">
        <div className="home-hero-copy">
          <div className="home-hero-welcome"><span aria-hidden="true" />Welcome to<span aria-hidden="true" /></div>
          <h1 id="home-title">AB Hunger Station</h1>
          <p className="home-hero-category">Restaurant &amp; Café</p>
          <p className="home-hero-location">{referenceBusinessCopy.displayLocation}</p>
          <p className="home-hero-description">
            A perfect place to enjoy delicious food, aromatic coffee and a cozy café ambience in the heart of Prayagraj.
          </p>
          <div className="home-hero-actions">
            <ActionLink href="/menu"><UtensilsCrossed size={18} aria-hidden="true" /> View Menu</ActionLink>
            <ActionLink href="/menu" variant="outline"><ShoppingCart size={18} aria-hidden="true" /> Order Now</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialSection() {
  return (
    <section className="home-section home-special" aria-labelledby="special-heading">
      <div className="site-container">
        <SectionHeading
          icon={<ChefHat size={31} strokeWidth={1.5} />}
          title={<span id="special-heading">What Makes Us Special</span>}
          description="More than just a café, we're a restaurant and café that brings together great food, warm hospitality, and a space to relax and enjoy."
        />
        <div className="home-special-grid">
          {features.map(({ name, description, image, Icon }) => {
            const photo = getCafeImage(image);
            return (
              <article className="home-special-card" key={name}>
                <div className="home-special-photo">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 46vw, (max-width: 1000px) 28vw, 175px" />
                </div>
                <div className="home-special-body">
                  <Icon className="home-special-icon" size={27} aria-hidden="true" strokeWidth={2.3} />
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="home-section home-highlights" aria-labelledby="highlights-heading">
      <div className="site-container">
        <SectionHeading
          icon={<ConciergeBell size={29} strokeWidth={1.6} />}
          title={<span id="highlights-heading">Popular Menu Highlights</span>}
          description="Our Chef's Picks – A delicious selection of our most loved dishes."
        />
        <div className="home-menu-grid">
          {homeHighlights.map((item) => {
            const photo = getCafeImage(item.image);
            return (
              <Link href="/menu" className="home-menu-card" key={item.name} aria-label={`Explore ${item.name} on our menu`}>
                <div className="home-menu-photo">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 500px) 45vw, (max-width: 850px) 31vw, 18vw" />
                </div>
                <div className="home-menu-info">
                  <h3>{item.name}</h3>
                  <p className="home-menu-price">₹{item.referencePriceRupees}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="home-centered-action">
          <ActionLink href="/menu" size="small">View Full Menu <ArrowRight size={17} aria-hidden="true" /></ActionLink>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const photo = getCafeImage("about-wide");
  return (
    <section className="home-about" aria-labelledby="home-about-heading">
      <div className="site-container home-about-layout">
        <div className="home-about-copy">
          <p className="home-eyebrow">Our Story</p>
          <h2 id="home-about-heading">About AB Hunger Station</h2>
          <p>
            AB Hunger Station is a restaurant &amp; café located in Bhagwa Market, Prayagraj.
            We&apos;re passionate about serving a delightful range of food and beverages, from
            coffee and comforting meals to fresh desserts, in a warm and friendly environment.
          </p>
          <Link href="/about" className="home-text-link">Discover our story <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
        <div className="home-about-photo">
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 58vw" />
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="home-section home-gallery" aria-labelledby="home-gallery-heading">
      <div className="site-container">
        <SectionHeading
          icon={<Camera size={29} strokeWidth={1.5} />}
          title={<span id="home-gallery-heading">Gallery &amp; Ambience</span>}
          description="A glimpse of our food, drinks and the welcoming space at AB Hunger Station."
        />
        <div className="home-gallery-grid">
          {homeGallery.map(({ image, label }) => {
            const photo = getCafeImage(image);
            return (
              <Link href="/gallery" className="home-gallery-tile" key={image} aria-label={`Open gallery: ${label}`}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 480px) 45vw, (max-width: 800px) 31vw, 17vw" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  const photo = getCafeImage("exterior");
  return (
    <section className="home-visit" aria-labelledby="home-visit-heading">
      <div className="site-container home-visit-layout">
        <div className="home-visit-photo">
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 34vw" />
        </div>
        <div className="home-visit-main">
          <div className="home-visit-intro">
            <h2 id="home-visit-heading"><MapPin size={25} aria-hidden="true" /> Visit Us Today</h2>
            <p>Drop by AB Hunger Station at Bhagwa Market, Prayagraj, and enjoy great food, coffee and a relaxing café experience.</p>
          </div>
          <div className="home-visit-info">
            <div><MapPin size={23} aria-hidden="true" /><p><strong>Our Location</strong><span>{referenceBusinessCopy.displayLocation}</span></p></div>
            <div><Navigation size={23} aria-hidden="true" /><p><strong>Find Us</strong><span>In Prayagraj</span></p></div>
            <div><Clock3 size={23} aria-hidden="true" /><p><strong>Opening Hours*</strong><span>{referenceBusinessCopy.displayHours.replace("Open Daily: ", "")}</span></p></div>
            {contactLinks.directions ? (
              <a className="home-directions" href={contactLinks.directions} target="_blank" rel="noopener noreferrer">Get Directions <ArrowRight size={14} aria-hidden="true" /></a>
            ) : (
              <Link className="home-directions" href="/contact">View Location <ArrowRight size={14} aria-hidden="true" /></Link>
            )}
          </div>
          <p className="home-visit-disclaimer">*Operating hours must be confirmed by the restaurant.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <HomeHero />
      <SpecialSection />
      <HighlightsSection />
      <AboutSection />
      <GallerySection />
      <VisitSection />
    </main>
  );
}
