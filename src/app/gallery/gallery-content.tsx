"use client";
import { useState } from "react";
import { Camera, Coffee, Grid2X2, Heart, Instagram, Sofa, Utensils } from "lucide-react";
import { getCafeImage, type CafeImageId } from "@/config/image-library";
import { restaurant } from "@/config/restaurant";
import Image from "next/image";
import { ExperienceHero, RoundedLink } from "@/components/experience/primitives";

const groups = [
  { title: "Our Food", id: "Food", icon: Utensils, images: ["cheese-pull-pizza", "veg-momos", "paneer-curry", "cheesy-pasta", "veg-burger", "grilled-sandwich", "pasta-primavera", "brownie-ice-cream"] as CafeImageId[] },
  { title: "Our Beverages", id: "Beverages", icon: Coffee, images: ["cappuccino", "chocolate-shake", "blue-lemonade", "strawberry-shake", "iced-coffee", "coffee-beans"] as CafeImageId[] },
  { title: "Our Ambience", id: "Ambience", icon: Sofa, images: ["feature-wall", "main-dining", "plant-lounge", "booth-seating", "about-wide", "booking-seating"] as CafeImageId[] },
  { title: "Our Moments", id: "Moments", icon: Heart, images: ["birthday-cake", "anniversary", "kitty-party", "private-celebration", "celebration-cake", "party-space"] as CafeImageId[] },
];
const categories = [{ id: "All", icon: Grid2X2 }, ...groups.map(g => ({ id: g.id, icon: g.icon }))];

export function GalleryContent(){
  const [selected,setSelected] = useState("All");
  const [expanded,setExpanded] = useState<string[]>([]);
  const shown = selected === "All" ? groups : groups.filter(g=>g.id===selected);
  return <main className="experience-page gallery-page">
    <ExperienceHero image="gallery-hero" eyebrow="GALLERY" title="A Visual Treat" accent="from Our Café" description="Take a look at our delicious food, cozy ambience and memorable moments at AB Hunger Station." />
    <div className="site-container gallery-content">
      <div className="gallery-categories" aria-label="Gallery categories">
        {categories.map(({id,icon:Icon})=><button key={id} type="button" onClick={()=>setSelected(id)} className={`gallery-category ${selected===id?"is-selected":""}`} aria-pressed={selected===id}><Icon size={20} aria-hidden="true"/>{id}</button>)}
      </div>
      {shown.map(group => {
        const Icon = group.icon; const tiles = expanded.includes(group.id)||selected!=="All" ? group.images : group.images.slice(0,4);
        return <section key={group.id} className="gallery-section" aria-labelledby={`gallery-${group.id}`}>
          <div className="gallery-section-bar"><Icon size={28} aria-hidden="true"/><h2 id={`gallery-${group.id}`}>{group.title}</h2><span className="gallery-rule"/>
            {group.images.length>4 && selected==="All" && <button type="button" onClick={()=>setExpanded(v=>v.includes(group.id)?v.filter(x=>x!==group.id):[...v,group.id])}>{expanded.includes(group.id)?"View Less":"View More"} →</button>}
          </div>
          <div className="gallery-grid">{tiles.map(id=>{const photo=getCafeImage(id);return <figure className="gallery-tile" key={id}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width:650px) 50vw, (max-width:950px) 33vw, 25vw" /></figure>;})}</div>
        </section>;
      })}
      <div className="gallery-follow-banner"><Camera size={33} aria-hidden="true"/><div><h2>Share Your <em>#ABHungerStation</em> Moments</h2><p>Dine with us, click your favorite moments and tag us on Instagram!</p></div>{restaurant.instagramUrl?<RoundedLink href={restaurant.instagramUrl} external><Instagram size={17}/> Tag Us on Instagram</RoundedLink>:<span className="gallery-social-pending">Instagram profile will be linked soon</span>}</div>
    </div>
  </main>;
}
