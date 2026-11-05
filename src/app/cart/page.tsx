import type { Metadata } from "next";
import { CartContent } from "./cart-content";
import "../experience.css";
export const metadata:Metadata = {title:"Your Cart",description:"Review food items and quantities before checking out with AB Hunger Station."};
export default function CartPage(){return <CartContent/>;}
