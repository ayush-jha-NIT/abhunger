"use client";
import { WhatsappForm,field } from "@/components/experience/whatsapp-form";
export function EventForm(){return <WhatsappForm buttonText="Send Booking Request" buildMessage={f=>[
  "AB Hunger Station | Party & Event Inquiry",`Name: ${field(f,"name")}`,`Phone: ${field(f,"phone")}`,`Event: ${field(f,"event")}`,`Date: ${field(f,"date")||"To discuss"}`,`Guests: ${field(f,"guests")}`,`Requests: ${field(f,"requests")||"None"}`,"Please confirm availability and charges."
].join("\n")}>
  <div className="experience-form-grid"><label>Your Name *<input name="name" required maxLength={90} autoComplete="name" placeholder="Name"/></label><label>Phone Number *<input name="phone" required type="tel" minLength={10} maxLength={18} autoComplete="tel" placeholder="Phone number"/></label><label>Event Type *<select name="event" defaultValue="" required><option value="" disabled>Select event</option>{["Birthday","Anniversary","Kitty Party","Corporate Event","Family Gathering","Private Celebration","Other"].map(x=><option key={x}>{x}</option>)}</select></label><label>Preferred Date<input name="date" type="date" /></label></div>
  <label>Number of Guests *<input name="guests" type="number" min={1} max={500} required placeholder="Expected guest count"/></label><label>Additional Requirements<textarea name="requests" rows={3} maxLength={1000} placeholder="Decorations, cake, food, music..."/></label>
</WhatsappForm>;}
