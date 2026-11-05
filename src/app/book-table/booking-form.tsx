"use client";
import { WhatsappForm,field } from "@/components/experience/whatsapp-form";
export function BookingForm(){return <WhatsappForm buttonText="Send Booking on WhatsApp" buildMessage={f=>[
  "AB Hunger Station | Table Reservation Request",`Name: ${field(f,"name")}`,`Phone: ${field(f,"phone")}`,`Date: ${field(f,"date")}`,`Preferred time: ${field(f,"time")}`,`Number of guests: ${field(f,"guests")}`,`Occasion: ${field(f,"occasion")||"Casual dining"}`,`Special requests: ${field(f,"requests")||"None"}`,"Please confirm availability."
].join("\n")}>
  <div className="experience-form-grid"><label>Your Name *<input name="name" autoComplete="name" required maxLength={90} placeholder="Your name"/></label><label>Mobile Number *<input name="phone" type="tel" minLength={10} maxLength={18} required autoComplete="tel" placeholder="Phone number"/></label><label>Preferred Date *<input name="date" required type="date"/></label><label>Preferred Time *<input name="time" type="time" required/></label></div>
  <label>Number of Guests *<select name="guests" defaultValue="" required><option value="" disabled>Choose party size</option>{Array.from({length:20},(_,i)=>i+1).map(n=><option value={n} key={n}>{n} {n===1?"Guest":"Guests"}</option>)}<option value="21+">21+ Guests (subject to availability)</option></select></label>
  <label>Occasion / Event<select name="occasion" defaultValue="Casual Dining">{["Casual Dining","Birthday","Anniversary","Family Gathering","Business Meeting","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
  <label>Special Request<textarea name="requests" rows={3} maxLength={1000} placeholder="Decoration, cake, seating preferences..."/></label>
</WhatsappForm>;}
