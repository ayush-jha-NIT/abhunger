import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, ConciergeBell, MessageCircle, PartyPopper, Star, UsersRound } from "lucide-react";
import { ExperienceHero, ExperienceHeading, Photo } from "@/components/experience/primitives";
import { BookingForm } from "./booking-form";
import "../experience.css";
export const metadata: Metadata = { title:"Book a Table", description:"Send a table reservation request to AB Hunger Station in Prayagraj over WhatsApp." };
const reasons=[{Icon:UsersRound,title:"For Every Occasion",text:"Perfect for birthdays, anniversaries, family dinners and casual meetups."},{Icon:ConciergeBell,title:"Comfortable Dining",text:"Spacious seating, warm ambience and a great food experience."},{Icon:PartyPopper,title:"Special Arrangements",text:"Discuss decorations and special requests before booking."},{Icon:Star,title:"Personalized Service",text:"Share your preferences with the restaurant team."}];
export default function BookTablePage(){return <main className="experience-page booking-page">
  <ExperienceHero image="table-booking-hero" eyebrow="BOOK A TABLE ONLINE" title="Reserve Your Table at" accent="AB Hunger Station" description="Planning a casual meal, a get-together or a celebration? Request your table online through WhatsApp."/>
  <section className="site-container booking-layout"><div><ExperienceHeading title="Why Book a Table?"/><div className="booking-reasons">{reasons.map(({Icon,title,text})=><article key={title}><span><Icon/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><Photo image="booking-seating" className="booking-side-photo"/></div>
  <div className="booking-form-panel"><h2><CalendarDays/> Book Your <em>Table</em></h2><p>Fill in your details and we&apos;ll review your reservation request on WhatsApp.</p><BookingForm/></div></section>
  <section className="site-container booking-how"><ExperienceHeading title="How It Works"/><div className="booking-how-grid">{[{Icon:CalendarDays,title:"1. Fill the Form",text:"Enter your table and occasion details."},{Icon:MessageCircle,title:"2. Send on WhatsApp",text:"Send the prepared request to the restaurant."},{Icon:CheckCircle2,title:"3. Get Confirmation",text:"The team will confirm availability and details."}].map(({Icon,title,text})=><div key={title}><Icon/><h3>{title}</h3><p>{text}</p></div>)}</div></section>
</main>;}
