import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const read=p=>readFileSync(new URL(p,import.meta.url),"utf8");
test("Owner-supplied venue photos appear in home, about, and gallery",()=>{
  const g=read("../src/app/gallery/gallery-content.tsx");
  const about=read("../src/app/about/page.tsx");
  assert.match(about,/venue-side/);assert.match(about,/venue-entrance/);
  assert.match(g,/venue-side/);assert.match(g,/venue-entrance/);
  const m=JSON.parse(read("../public/images/asset-manifest.json"));
  for(const id of ["exterior","about-wide","main-dining","party-space","booking-seating","venue-side","venue-entrance"]){
    const a=m.assets.find(x=>x.id===id);
    assert.equal(a.sourceReference,"uploaded-venue");
    assert.equal(a.productionReady,true);
    assert.ok(existsSync(new URL("../public"+a.src,import.meta.url)),a.src);
  }
});
