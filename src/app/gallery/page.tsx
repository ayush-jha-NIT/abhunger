import type { Metadata } from "next";
import { GalleryContent } from "./gallery-content";
import "../experience.css";
export const metadata: Metadata = { title: "Gallery", description: "Explore food, coffee, drinks and warm restaurant ambience at AB Hunger Station." };
export default function GalleryPage(){return <GalleryContent/>;}
