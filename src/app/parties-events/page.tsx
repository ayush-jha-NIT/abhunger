import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Cake, Camera, ChefHat, Headphones, Heart, Music, PartyPopper, Sparkles, UtensilsCrossed, UsersRound } from "lucide-react";
import { ExperienceHero, ExperienceHeading, Photo } from "@/components/experience/primitives";
import { EventForm } from "./event-form";
import "../experience.css";
export const metadata: Metadata = { title: "Parties & Events", description: "Plan birthdays, anniversaries, kitty parties and family gatherings at AB Hunger Station, Prayagraj." };
const eventTypes=[{image:"birthday-cake",name:"Birthday Parties"},{image:"anniversary",name:"Anniversary Celebrations"},{image:"kitty-party",name:"Kitty Parties"},{image:"corporate",name:"Corporate Events"},{image:"family-gathering",name:"Family Gatherings"},{image:"private-celebration",name:"Private Celebrations"}] as const;
const perks=[{Icon:UsersRound,title:"Group Seating"},{Icon:UtensilsCrossed,title:"Food & Beverages"},{Icon:Sparkles,title:"Custom Decoration"},{Icon:Headphones,title:"Event Support"}];
const amenities=[{Icon:PartyPopper,title:"Decoration"},{Icon:ChefHat,title:"Food & Drinks"},{Icon:Music,title:"Music & Ambience"},{Icon:Camera,title:"Photo Friendly Space"},{Icon:UsersRound,title:"Group Seating"},{Icon:Headphones,title:"Event Support"}];
export default function EventsPage(){return <main className="experience-page events-page">
  <ExperienceHero image="party-hero" eyebrow="PARTIES & EVENTS" title="Celebrate" accent="Your Special Moments" description="Bring friends and family together for birthdays, anniversaries, gatherings and memorable occasions.">
    <a className="experience-button" href="#event-form"><CalendarDays size={18}/> Book Your Party</a>
    <a className="experience-button experience-button-outline on-dark" href="#party-space">Explore Our Space</a>
  </ExperienceHero>
  <section className="site-container events-perks">{perks.map(({Icon,title})=><div key={title}><Icon/><strong>{title}</strong></div>)}</section>
  <section className="site-container events-occasions"><ExperienceHeading title="Choose Your Celebration" description="Whatever the occasion, we'll help you plan your gathering."/><div className="events-category-grid">{eventTypes.map(event=><Link href="#event-form" key={event.name} className="events-category"><Photo image={event.image}/><strong>{event.name}</strong></Link>)}</div></section>
  <section id="party-space" className="site-container events-main-grid"><div><Photo image="party-space" className="events-wide-photo"/><ExperienceHeading title="Space & Facilities" description="Everything you need for a memorable celebration."/><div className="events-amenities">{amenities.map(({Icon,title})=><div key={title}><Icon/><span>{title}</span></div>)}</div><div className="events-celebration-strip"><Photo image="celebration-cake"/><strong>Plan Your <em>Next Celebration</em></strong></div></div>
  <div><ExperienceHeading title="Our Party Space"/><p className="events-intro">A welcoming area that can be arranged for special occasions, group seating, and memorable celebrations. Capacity and decorations are subject to confirmation.</p><div className="events-mini-perks"><span><UsersRound/> Group Seating</span><span><Heart/> Flexible Setup</span></div><div id="event-form" className="events-booking-panel"><h2><Cake size={23}/> Book Your Event</h2><p>Fill in your details and our team can discuss availability through WhatsApp.</p><EventForm/></div></div></section>
</main>;}
