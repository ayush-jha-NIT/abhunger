import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, PhoneCall, Clock3, Coffee, ShoppingBag, Truck, UsersRound } from "lucide-react";
import { ExperienceHero, ExperienceHeading, Photo, RoundedLink } from "@/components/experience/primitives";
import { ContactForm } from "./contact-form";
import { restaurant } from "@/config/restaurant";
import "../experience.css";
export const metadata: Metadata = { title: "Contact", description: "Contact AB Hunger Station in Bhagwa Market, Prayagraj for food, bookings and restaurant inquiries." };
const benefits=[{Icon:Coffee,title:"Dine In",text:"Enjoy a cozy dining experience"},{Icon:ShoppingBag,title:"Takeaway",text:"Grab your favorites on the go"},{Icon:Truck,title:"Delivery",text:"Order your food through WhatsApp"},{Icon:UsersRound,title:"Group & Events",text:"Plan your special celebrations"}];
export default function ContactPage(){return <main className="experience-page contact-page">
  <ExperienceHero image="contact-hero" eyebrow="GET IN TOUCH" title="Contact" accent="AB Hunger Station" description="Have a question, feedback or a special request? We'd love to hear from you!">
    {restaurant.whatsapp && <RoundedLink href={`https://wa.me/${restaurant.whatsapp}`} external><MessageCircle size={18}/> Chat on WhatsApp</RoundedLink>}
  </ExperienceHero>
  <section className="site-container contact-info-row">
    <div><MapPin/><strong>Our Location</strong><span>Bhagwa Market<br/>Prayagraj, Uttar Pradesh</span></div>
    <div><PhoneCall/><strong>WhatsApp</strong><span>{restaurant.whatsapp ? `+${restaurant.whatsapp}` : "Number awaiting confirmation"}</span></div>
    <div><Clock3/><strong>Opening Hours</strong><span>Hours displayed in references are awaiting confirmation</span></div>
    <div><Mail/><strong>Messages</strong><span>Send your inquiry through WhatsApp</span></div>
  </section>
  <section className="site-container contact-main-grid">
    <div><ExperienceHeading title="Send Us a Message" description="Fill out the form and send your question to the restaurant."/><ContactForm /></div>
    <div><ExperienceHeading title="Find Us Here" description="Visit AB Hunger Station in Bhagwa Market, Prayagraj."/>
      <div className="contact-map-surface"><MapPin size={53}/><h3>AB Hunger Station</h3><p>Bhagwa Market, Prayagraj</p><small>Map placement pending the official Google Maps location</small></div>
      <div className="contact-map-links">{restaurant.mapsUrl ? <RoundedLink href={restaurant.mapsUrl} external outline>Get Directions</RoundedLink> : <p>Official directions link pending confirmation</p>}</div>
    </div>
  </section>
  <section className="site-container contact-visit"><Photo image="main-dining"/><div><ExperienceHeading title="Plan a Visit Today"/><p>Whether it's a quick coffee, a casual meal, or time with friends, AB Hunger Station offers a welcoming café experience.</p></div></section>
  <section className="site-container contact-benefits">{benefits.map(({Icon,title,text})=><div key={title}><Icon size={28}/><h3>{title}</h3><p>{text}</p></div>)}</section>
</main>;}
