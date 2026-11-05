import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  ConciergeBell,
  Heart,
  MapPin,
  Navigation,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import { contactLinks, referenceBusinessCopy } from "@/config/brand";
import { getCafeImage, type CafeImageId } from "@/config/image-library";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AB Hunger Station in Bhagwa Market, Prayagraj, and explore our café ambience, food and warm hospitality.",
};

const values = [
  {
    title: "Delicious Food",
    description: "A wide variety of freshly prepared dishes made with quality ingredients.",
    Icon: ConciergeBell,
  },
  {
    title: "Great Beverages",
    description: "From classic coffees to refreshing shakes, there’s something for every mood.",
    Icon: Coffee,
  },
  {
    title: "Cozy Ambience",
    description: "A warm and welcoming space, perfect to relax, work, or spend time with your loved ones.",
    Icon: UsersRound,
  },
  {
    title: "Warm Hospitality",
    description: "Because every guest is special to us.",
    Icon: Heart,
  },
] as const;

const ambienceImages: CafeImageId[] = ["main-dining", "plant-lounge", "booth-seating"];
const foodStrip: CafeImageId[] = [
  "about-strip-burger",
  "about-strip-pasta",
  "about-strip-cappuccino",
  "about-strip-sandwich",
  "about-strip-brownie",
];

function AboutHero() {
  const photo = getCafeImage("about-hero");
  return (
    <section className="about-hero" aria-labelledby="about-title">
      <div className="about-hero-photo" aria-hidden="true">
        <Image src={photo.src} alt="" fill priority sizes="(max-width: 700px) 100vw, 65vw" />
      </div>
      <div className="about-hero-shade" aria-hidden="true" />
      <div className="site-container about-hero-inner">
        <div className="about-hero-copy">
          <p className="about-hero-eyebrow"><span /> ABOUT US <span /></p>
          <h1 id="about-title">Our Story,<br /><em>Our Passion</em></h1>
          <p>More than a restaurant, AB Hunger Station is a space where great food, warm hospitality, and good vibes come together.</p>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  const exterior = getCafeImage("exterior");
  return (
    <section className="about-story" aria-labelledby="about-story-title">
      <div className="site-container about-story-inner">
        <div className="about-story-photo">
          <Image src={exterior.src} alt={exterior.alt} fill sizes="(max-width: 760px) 100vw, 46vw" />
        </div>
        <div className="about-story-copy">
          <p className="about-script-label">Where Warmth Meets Taste <Heart size={23} aria-hidden="true" /></p>
          <h2 id="about-story-title">AB Hunger Station</h2>
          <p>
            Located in Bhagwa Market, Prayagraj, AB Hunger Station is a restaurant &amp;
            café born from a simple idea: to serve delicious food, refreshing beverages,
            and a cozy space for everyone. Whether you&apos;re here for a quick bite,
            a coffee break, or a long catch-up with friends, we promise great taste
            and a memorable experience every time.
          </p>
        </div>
      </div>
    </section>
  );
}

function OurValues() {
  return (
    <section className="about-values" aria-labelledby="about-values-title">
      <div className="site-container">
        <div className="about-title-group">
          <div className="about-section-ornament" aria-hidden="true"><span /><UtensilsCrossed size={27} /><span /></div>
          <h2 id="about-values-title">What We Stand For</h2>
          <p>The values that make AB Hunger Station special.</p>
        </div>
        <div className="about-values-grid">
          {values.map(({ title, description, Icon }) => (
            <article className="about-value-card" key={title}>
              <Icon size={39} strokeWidth={2} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurAmbience() {
  return (
    <section className="about-ambience" aria-labelledby="about-ambience-title">
      <div className="site-container about-ambience-inner">
        <div className="about-ambience-copy">
          <p className="about-ambience-label">Our</p>
          <h2 id="about-ambience-title">Ambience</h2>
          <span aria-hidden="true" className="about-short-rule" />
          <p>A comfortable, modern and vibrant space designed for great food and good conversations.</p>
        </div>
        <div className="about-ambience-photos">
          {ambienceImages.map((id) => {
            const photo = getCafeImage(id);
            return (
              <div className="about-ambience-photo" key={id}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 650px) 80vw, (max-width: 900px) 31vw, 26vw" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FoodGalleryStrip() {
  return (
    <section className="about-food-strip" aria-label="Food and drinks at AB Hunger Station">
      {foodStrip.map((id) => {
        const photo = getCafeImage(id);
        return (
          <div className="about-food-strip-photo" key={id}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 650px) 50vw, 20vw" />
          </div>
        );
      })}
    </section>
  );
}

function VisitUs() {
  return (
    <section className="about-visit" aria-labelledby="about-visit-title">
      <div className="site-container">
        <div className="about-visit-pill">
          <h2 id="about-visit-title"><MapPin aria-hidden="true" size={29} />Visit Us Today</h2>
          <p>Come, enjoy great food, coffee, and a relaxing café experience at AB Hunger Station in {referenceBusinessCopy.displayLocation}.</p>
          {contactLinks.directions ? (
            <a href={contactLinks.directions} target="_blank" rel="noopener noreferrer" className="about-visit-action">
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </a>
          ) : (
            <Link href="/contact" className="about-visit-action">
              <ArrowRight size={18} aria-hidden="true" /> View Location
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurAmbience />
      <FoodGalleryStrip />
      <VisitUs />
    </main>
  );
}
