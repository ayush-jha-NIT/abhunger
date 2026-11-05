import type { Metadata } from "next";
import { MenuContent } from "./menu-content";
import "../experience.css";
export const metadata: Metadata = { title:"Menu", description:"Browse food, coffee and dessert selections at AB Hunger Station in Prayagraj." };
export default function MenuPage(){return <MenuContent/>;}
