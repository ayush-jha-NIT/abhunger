"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChefHat, Coffee, ShoppingCart, Utensils } from "lucide-react";
import { ExperienceHeading, ExperienceHero } from "@/components/experience/primitives";
import { getCafeImage } from "@/config/image-library";
import { menuItems, menuCategories, type MenuCategory } from "@/data/menu";
import { money, restaurant } from "@/config/restaurant";
import { addCartItem } from "@/features/cart/cart";

export function MenuContent(){
  const [category,setCategory]=useState<"All"|MenuCategory>("All");
  const [search,setSearch]=useState("");
  const [added,setAdded]=useState<string|null>(null);
  const items=menuItems.filter(item=>(category==="All"||item.category===category) && `${item.name} ${item.description}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <main className="experience-page menu-page">
    <ExperienceHero image="cheese-pull-pizza" eyebrow="FRESHLY PREPARED" title="Discover Our" accent="Delicious Menu" description="Explore our café favorites, comforting meals and refreshing drinks." compact />
    <div className="site-container menu-main">
      <ExperienceHeading title="Our Menu" description="Good food, great coffee and something for every craving."/>
      {!restaurant.menuConfirmed && <div className="experience-notice" role="status"><strong>Sample menu:</strong> Items and displayed prices are based on design references and must be confirmed with the restaurant before ordering.</div>}
      <div className="menu-toolbar"><div className="menu-filter-tabs" aria-label="Menu categories">{["All",...menuCategories].map(name=><button key={name} type="button" onClick={()=>setCategory(name as "All"|MenuCategory)} aria-pressed={category===name} className={category===name?"selected":""}>{name}</button>)}</div><label className="menu-search">Search menu<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search dishes or drinks" type="search" /></label></div>
      <div className="menu-grid">{items.map(item=>{const image=getCafeImage(item.image);return <article className="menu-product" key={item.id}><div className="menu-product-photo"><Image src={image.src} alt={image.alt} fill sizes="(max-width:650px) 85vw, (max-width:950px) 45vw, 30vw"/></div><div className="menu-product-info"><span className="menu-tag">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p><div className="menu-product-bottom"><strong>{item.price!==null?money(item.price):"Price on request"}</strong>{item.price!==null?<button type="button" onClick={()=>{addCartItem(item.id);setAdded(item.id);}}><ShoppingCart size={17} aria-hidden="true"/>{added===item.id?"Added":"Add to Cart"}</button>:<span>Ask at café</span>}</div></div></article>;})}</div>
      {items.length===0 && <div className="experience-empty"><Coffee/><h3>No dishes match your search</h3><p>Try a different category or keyword.</p></div>}
      <div className="menu-cart-callout"><ChefHat size={32}/><p>Made fresh, served with care. Review your selections before sending an order inquiry.</p><Link className="experience-button" href="/cart"><Utensils size={17}/> View Your Cart</Link></div>
    </div>
  </main>;
}
