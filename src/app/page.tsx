import { ArrowRight, Coffee, Heart, UtensilsCrossed } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

/** Part 1 UI component preview. Part 4 replaces it with the exact Home reference layout and photography. */
export default function Home() {
  return (
    <main>
      <section className="site-preview-hero">
        <div className="site-container site-preview-hero-content">
          <p className="site-script">Welcome to</p>
          <h1>{siteConfig.name}</h1>
          <p className="site-preview-subtitle">Restaurant &amp; Café</p>
          <p className="site-preview-description">{siteConfig.tagline}</p>
          <div className="site-preview-actions">
            <ActionLink href="/menu"><UtensilsCrossed size={18} aria-hidden="true"/> View Menu</ActionLink>
            <ActionLink href="/book-table" variant="outline">Book a Table <ArrowRight size={17} aria-hidden="true"/></ActionLink>
          </div>
        </div>
        <div className="site-preview-watermark" aria-hidden="true">PHASE 1 · IMAGE ASSETS PENDING</div>
      </section>
      <section className="site-container site-preview-features">
        <SectionHeading
          icon={<UtensilsCrossed size={27} />}
          title="What Makes Us Special"
          description="A preview of reusable cards, typography and spacing. The finished Home design and photographs will be added in Phase 4."
        />
        <div className="site-feature-grid">
          <FeatureCard icon={<UtensilsCrossed size={32}/>} title="Fresh Ingredients" description="Menu content and original food photography will be connected in the dedicated menu phase." />
          <FeatureCard icon={<Coffee size={32}/>} title="Cozy Ambience" description="Interior images will be added to match the warm cafe atmosphere in the reference." />
          <FeatureCard icon={<Heart size={32}/>} title="Warm Hospitality" description="This is a design-system preview, not the completed reference-matched website." />
        </div>
      </section>
    </main>
  );
}
