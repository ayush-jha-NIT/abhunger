"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, MapPin, MessageCircle, Minus, Plus, ShoppingBag, Truck, UserRound } from "lucide-react";
import { ExperienceHero } from "@/components/experience/primitives";
import { useCart } from "@/features/cart/use-cart";
import { cartTotal, setCartQuantity } from "@/features/cart/cart";
import { menuById } from "@/data/menu";
import { getCafeImage } from "@/config/image-library";
import { calculateDeliveryFee, money, restaurant, whatsappUrl } from "@/config/restaurant";

type OrderType = "delivery"|"takeaway";
export function CheckoutContent(){
  const items=useCart();
  const [orderType,setOrderType]=useState<OrderType>("delivery");
  const [error,setError]=useState("");
  const subtotal=cartTotal(items);
  const deliveryFee = calculateDeliveryFee(subtotal, orderType);
  const canQuoteTotal = deliveryFee!==null;
  const total=canQuoteTotal?subtotal+deliveryFee:subtotal;

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=event.currentTarget;
    if(!form.reportValidity())return;
    if(!items.length){setError("Your cart is empty.");return;}
    if(!restaurant.whatsapp){setError("WhatsApp checkout is unavailable until the restaurant verifies its contact number.");return;}
    const data=new FormData(form);
    const customer=String(data.get("name")||"").trim();const phone=String(data.get("phone")||"").trim();const address=String(data.get("address")||"").trim();
    if(orderType==="delivery"&&!address){setError("Enter a delivery address.");return;}
    const lines=items.map(line=>{const item=menuById.get(line.id);return item?`• ${item.name} x${line.quantity} = ${money((item.price||0)*line.quantity)}`:""}).filter(Boolean);
    const message=["AB Hunger Station | Food Order Inquiry", "", ...lines,"",`Items subtotal: ${money(subtotal)}`,`Delivery charge: ${orderType==="takeaway"?"Not applicable":deliveryFee===null?"To be confirmed":money(deliveryFee)}`,...(orderType==="delivery"?[`Delivery area: within ${restaurant.deliveryRadiusKm} km of the cafe; distance to be confirmed by cafe`]:[]),`Total: ${canQuoteTotal?money(total):"Awaiting delivery fee confirmation"}`,!restaurant.menuConfirmed?"NOTE: Menu prices are reference samples. Please confirm item prices and final amount.":"Please confirm final payable amount.","",`Order type: ${orderType.toUpperCase()}`,`Name: ${customer}`,`Phone: ${phone}`,...(orderType==="delivery"?[`Delivery address: ${address}`]:[]),`Preferred time: ${String(data.get("time")||"ASAP")}`,`Payment: ${String(data.get("payment")||"Cash / UPI on fulfillment")}`,`Instructions: ${String(data.get("instructions")||"None")}`,"Please confirm order acceptance before preparing."].join("\n");
    const url=whatsappUrl(message);if(!url)return;setError("");window.location.assign(url);
  }
  return <main className="experience-page checkout-page">
    <ExperienceHero image="checkout-hero" eyebrow="CHECKOUT" title="Proceed to Checkout" description="Review your order, fill in your details and send your request to the restaurant." compact/>
    <div className="site-container checkout-stepper"><span><ShoppingBag/> Cart</span><span className="active"><MapPin/> Checkout</span><span><Check/> Confirmation by Restaurant</span></div>
    <section className="site-container checkout-layout"><div className="checkout-details-panel"><h2><UserRound/> Your Details</h2><p>Enter your details to complete your order inquiry.</p>
      <form id="checkout-form" className="experience-form" onSubmit={submit}><fieldset className="checkout-order-options"><legend>Order Type *</legend><label className={orderType==="delivery"?"is-active":""}><input type="radio" name="orderType" value="delivery" checked={orderType==="delivery"} onChange={()=>setOrderType("delivery")}/><Truck/><strong>Delivery</strong><small>Get it delivered to your location</small></label><label className={orderType==="takeaway"?"is-active":""}><input type="radio" name="orderType" value="takeaway" checked={orderType==="takeaway"} onChange={()=>setOrderType("takeaway")}/><ShoppingBag/><strong>Takeaway</strong><small>Pick up from AB Hunger Station</small></label></fieldset>
        <div className="experience-form-grid"><label>Full Name *<input name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Your full name"/></label><label>Mobile Number *<input name="phone" type="tel" autoComplete="tel" minLength={10} maxLength={18} required placeholder="Phone number"/></label></div>
        {orderType==="delivery" && <p className="experience-form-note">Delivery is available within {restaurant.deliveryRadiusKm} km. Free delivery applies strictly above {money(restaurant.freeDeliveryAbove)}. For ₹300 or below, the charge and location eligibility must be confirmed by the restaurant.</p>}
        {orderType==="delivery" && <label>Delivery Address *<textarea name="address" autoComplete="street-address" required maxLength={350} rows={2} placeholder="House number, street, landmark, area, Prayagraj"/></label>}
        <div className="experience-form-grid"><label>Preferred Time<select name="time" defaultValue="ASAP"><option value="ASAP">As soon as available</option><option value="30–45 minutes">In 30–45 minutes (request)</option><option value="1 hour">In 1 hour (request)</option><option value="Call to coordinate">Coordinate with restaurant</option></select></label><label>Payment Method<select name="payment" defaultValue="Cash / UPI on fulfillment"><option>Cash / UPI on fulfillment</option><option>Cash</option><option>UPI directly with restaurant</option></select></label></div>
        <label>Special Instructions (Optional)<textarea name="instructions" rows={3} maxLength={700} placeholder="Less spicy, no onion, extra sauce..."/></label>
        {error && <p role="alert" className="experience-form-error">{error}</p>}
        {!restaurant.whatsapp && <p role="status" className="experience-form-note">WhatsApp checkout is disabled until a verified restaurant number is configured.</p>}
      </form>
    </div>
    <aside className="checkout-summary-panel"><h2><ShoppingBag/> Order Summary</h2><p>Review your items before sending the request.</p>
      {items.length===0?<div className="experience-empty"><ShoppingBag/><h3>No items in your cart</h3><Link className="experience-button" href="/menu">Browse Menu</Link></div>:items.map(line=>{const item=menuById.get(line.id);if(!item)return null;const image=getCafeImage(item.image);return <article className="checkout-line" key={line.id}><div className="checkout-line-image"><Image src={image.src} alt={image.alt} fill sizes="75px"/></div><div><h3>{item.name}</h3><span>{money(item.price||0)} each</span></div><div className="cart-quantity"><button aria-label={`Decrease ${item.name}`} onClick={()=>setCartQuantity(item.id,line.quantity-1)} type="button"><Minus size={13}/></button><output>{line.quantity}</output><button aria-label={`Increase ${item.name}`} onClick={()=>setCartQuantity(item.id,line.quantity+1)} type="button" disabled={line.quantity>=20}><Plus size={13}/></button></div><strong>{money((item.price||0)*line.quantity)}</strong></article>;})}
      <div className="checkout-price-summary"><div><span>Items total</span><strong>{money(subtotal)}</strong></div><div><span>Delivery charges</span><strong>{orderType==="takeaway"?"Not applicable":deliveryFee===null?"To confirm":money(deliveryFee)}</strong></div><div className="checkout-grand"><span>{canQuoteTotal?"Estimated total":"Subtotal (excluding delivery)"}</span><strong>{money(total)}</strong></div></div>
      {!restaurant.menuConfirmed&&<p className="experience-notice">These are reference menu prices, not an approved quotation. Restaurant will confirm the final amount.</p>}
      <button className="checkout-whatsapp-button" type="submit" form="checkout-form" disabled={!restaurant.whatsapp||items.length===0}><MessageCircle size={23}/> Place Order on WhatsApp</button>
      <p className="experience-form-note">WhatsApp will open with your order prefilled. You must send the message and receive restaurant confirmation.</p>
    </aside></section>
  </main>;
}
