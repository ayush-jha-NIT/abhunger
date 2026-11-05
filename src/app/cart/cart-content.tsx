"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import { ExperienceHeading, ExperienceHero } from "@/components/experience/primitives";
import { getCafeImage } from "@/config/image-library";
import { menuById,menuItems } from "@/data/menu";
import { money,restaurant } from "@/config/restaurant";
import { useCart } from "@/features/cart/use-cart";
import { setCartQuantity,cartTotal,addCartItem } from "@/features/cart/cart";

export function CartContent(){
  const items=useCart();
  const total=cartTotal(items);
  const suggested=menuItems.filter(item=>item.price!==null&&!items.some(x=>x.id===item.id)).slice(0,3);
  return <main className="experience-page cart-page"><ExperienceHero image="cart-hero" eyebrow="YOUR CART" title="Your Cart" description="Review your order and get ready for a delicious experience." compact/>
    <section className="site-container cart-layout"><div className="cart-items-panel"><h2><ShoppingBag/> Cart Items ({items.reduce((s,x)=>s+x.quantity,0)})</h2>
      {!items.length?<div className="experience-empty"><ShoppingCart size={38}/><h3>Your cart is empty</h3><p>Choose your favorites from our menu.</p><Link className="experience-button" href="/menu">Explore Menu</Link></div>:
      items.map(line=>{const item=menuById.get(line.id);if(!item)return null;const photo=getCafeImage(item.image);return <article className="cart-line" key={line.id}><div className="cart-item-image"><Image src={photo.src} alt={photo.alt} fill sizes="120px"/></div><div className="cart-item-description"><h3>{item.name}</h3><p>{item.description}</p><strong>{money(item.price||0)}</strong></div><div className="cart-quantity"><button aria-label={`Decrease ${item.name}`} type="button" onClick={()=>setCartQuantity(item.id,line.quantity-1)}><Minus size={16}/></button><output>{line.quantity}</output><button aria-label={`Increase ${item.name}`} type="button" onClick={()=>setCartQuantity(item.id,line.quantity+1)} disabled={line.quantity>=20}><Plus size={16}/></button></div><button className="cart-remove" type="button" aria-label={`Remove ${item.name}`} onClick={()=>setCartQuantity(item.id,0)}><Trash2 size={20}/></button></article>;})}
      <p className="cart-promo-note">Promo discounts are currently unavailable. No unverified offers have been added.</p>
    </div><aside className="cart-summary-panel"><h2>Order Summary</h2><div className="cart-total-row"><span>Items subtotal</span><strong>{money(total)}</strong></div><div className="cart-total-row"><span>Delivery charge</span><span>{restaurant.deliveryFee!==null?money(restaurant.deliveryFee):"Confirmed at checkout"}</span></div><div className="cart-grand"><span>Items total</span><strong>{money(total)}</strong></div><p className="cart-summary-footnote">Delivery charges are calculated during checkout and the final payable amount requires restaurant confirmation.</p>{items.length>0?<Link href="/checkout" className="experience-button cart-checkout-button">Proceed to Checkout <ArrowRight size={19}/></Link>:<Link href="/menu" className="experience-button cart-checkout-button">Continue Shopping</Link>}<Link href="/menu" className="experience-button experience-button-outline cart-outline-button">Continue Shopping</Link></aside></section>
    <section className="site-container cart-recommendations"><ExperienceHeading eyebrow="CHEF'S PICKS" title="You May Also Like" description="Discover more café favorites."/><div className="cart-recommendation-grid">{suggested.map(item=>{const photo=getCafeImage(item.image);return <article key={item.id}><div className="cart-recommendation-image"><Image src={photo.src} alt={photo.alt} fill sizes="200px"/></div><div><h3>{item.name}</h3><p>{item.description}</p><strong>{money(item.price||0)}</strong><button type="button" onClick={()=>addCartItem(item.id)}>+ Add to Cart</button></div></article>;})}</div></section>
  </main>;
}
