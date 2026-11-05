"use client";
import { WhatsappForm, field } from "@/components/experience/whatsapp-form";
export function ContactForm(){return <WhatsappForm buttonText="Send Message on WhatsApp" buildMessage={f=>[
  "AB Hunger Station | Contact Inquiry",
  `Name: ${field(f,"name")}`,
  `Email: ${field(f,"email")}`,
  `Phone: ${field(f,"phone")||"Not provided"}`,
  `Subject: ${field(f,"subject")}`,
  `Message: ${field(f,"message")}`,
].join("\n")}>
  <div className="experience-form-grid"><label>Your Name *<input name="name" type="text" maxLength={90} autoComplete="name" required placeholder="Your Name"/></label><label>Your Email *<input name="email" type="email" maxLength={150} autoComplete="email" required placeholder="you@example.com"/></label></div>
  <label>Your Phone Number<input name="phone" type="tel" inputMode="tel" maxLength={18} placeholder="Optional"/></label>
  <label>Subject *<select name="subject" required defaultValue=""><option value="" disabled>Choose a subject</option><option>General Inquiry</option><option>Food Order</option><option>Table Reservation</option><option>Parties & Events</option><option>Feedback</option></select></label>
  <label>Your Message *<textarea name="message" required minLength={5} maxLength={1500} rows={5} placeholder="How can we help?"/></label>
</WhatsappForm>;}
