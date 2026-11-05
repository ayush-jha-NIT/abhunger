import type { Metadata } from "next";
import { CheckoutContent } from "./checkout-content";
import "../experience.css";
export const metadata: Metadata = { title:"Checkout", description:"Review delivery or takeaway details and send your AB Hunger Station food order through WhatsApp."};
export default function CheckoutPage(){return <CheckoutContent/>;}
