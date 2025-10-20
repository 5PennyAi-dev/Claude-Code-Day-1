## 5Penny AI Consultancy — Website Blueprint (Execution-Ready)

This document is an actionable plan and copy deck for building a world‑class website for an AI consultancy aimed at small to mid‑sized businesses. It is intentionally specific and non‑generic, with a strong, ownable voice and a distinct visual system. Everything here is framed to be built quickly, iterated fast, and to convert.

---

### 1) Positioning and Messaging

- **Who we serve**: Owner‑operators and functional leaders at SMBs (10–250 employees) who need practical AI wins that pay back in 90 days or less.
- **Promise**: We turn repetitive processes into reliable AI systems—measurable in hours saved, errors avoided, and dollars captured.
- **Tone**: Calm, direct, outcome‑first. Junior‑ish dev positioning reframed as: “We ship valuable AI faster by obsessing over scope, not hype.”
- **One‑liner**: “Practical AI systems that pay for themselves.”

#### Hero copy (home)
Practical AI that pays for itself
We design and ship small, durable AI systems that save teams hours every week. Fixed‑scope, fixed‑price, 90‑day payoff or we keep working.
[Book a 20‑min fit call]

#### 3 value props (home)
- Small, durable systems: Automations and assistants that are easy to own.
- Fixed‑scope, fixed‑price: Clear packages; no open‑ended consulting.
- 90‑day payoff: Every engagement targets time saved or revenue captured.

#### Category framing
- We do not sell “AI transformation.” We ship specific systems that remove work.

#### Differentiators (non‑generic)
- Library of pre‑tested prompts, agents, and templates shipped as assets your team owns.
- “Vibe coding” capability (internal name) expressed externally as rapid prototyping and collaborative working sessions with your team in the loop.
- Opinionated implementation playbooks for the most common SMB processes.

---

### 2) Information Architecture (IA) and Page Map

1. Home
2. Services (overview) → links to Packages
3. Packages (fixed‑scope offers)
4. Case Studies
5. Prompt & Template Library (lead magnet + samples)
6. Insights (blog/notes)
7. About
8. Contact / Book a Call
9. Legal (Privacy, Terms)

Key navigation: Home, Services, Packages, Case Studies, Library, Insights, About, Book a Call

---

### 3) Detailed Page Blueprints + Primary Copy

#### Home
- Hero (above)
- Proof strip: client logos or proxy categories (“manufacturing,” “agencies,” “retail ops”).
- Outcome tiles (3): Time Saved, Error Rate Down, Revenue Recovered — each with metric ranges.
- Featured packages (3 cards)
- Prompt & Template Library CTA
- Recent case study teaser
- FAQ
- Footer with social + email capture

FAQ seeds:
- “Will this replace staff?” → “No. We remove repetitive work so your team can do higher‑value tasks.”
- “What if results aren’t clear?” → “We define an objective metric up front; we keep working until it moves.”

#### Services
- Overview of capability areas: Prompt Engines, Image/Video Workflows, Assistants/Agents, Internal Tools.
- Each capability includes: use‑case examples, common integrations, typical payoff timeframe.

#### Packages (fixed scope, fixed price)
- Starter: “Prompt Engine + SOP Kit” — $3.5k — one workflow automated, training, ownership docs.
- Standard: “AI Assistant in the Loop” — $9k — assistant + monitoring + handoff.
- Pro: “Mini Internal Tool” — $15k — lightweight web app to orchestrate multi‑step workflow.
- Each card includes: Scope checklist, timeline (2–5 weeks), acceptance metric, what we deliver/you own.

#### Case Studies
- Cards: title, 1‑sentence outcome, metric, 90‑sec read.
- Case study template (repeatable):
  - Context: 3 bullets
  - Constraint: 1 sentence
  - System shipped: diagram + steps
  - Result metric: baseline → after, e.g., 6h/week saved per person
  - Keep‑own: what the client can run without us

#### Prompt & Template Library
- Free samples (gated by email): 3–5 prompts + a one‑page “prompt engine” template.
- Gallery structure; each item is runnable text + short video.
- Lead magnet CTA: “Send me the library + quarterly updates.”

#### Insights
- Short notes and teardown posts; focus on specific workflows and measurable outcomes.

#### About
- Credibility without hype: “We’re builders. We scope small, ship fast, and document so you can own it.”
- Simple founder portrait and 6‑bullet principles.

#### Contact / Book a Call
- Embedded scheduler + short qualifying form (industry, team size, top workflow pain, desired metric).

Audit My Business form (static for v1, spec only here)
- Fields: First name, Last name, Company name, What the company does (multiline), Email, Phone number.
- Layout: two‑column grid on ≥768px (first/last side‑by‑side; email/phone side‑by‑side); single column on mobile; 16px gaps; inputs with 10px radius.
- Labels: always visible above fields (no placeholders as labels). Helper text is muted Steel.
- Button: all caps “AUDIT MY BUSINESS”; glossy jade‑green pill with subtle gradient; 2px Electric Violet focus ring; hover raises by 1px.
- Accessibility: inputs must have associated labels and visible focus states; error text reserved area below each field for future validation.
- Note below form: “This is a visual mockup. Submitting is disabled for now.”

---

### 4) Design System (Distinct + World‑Class)

The palette leans editorial/technical with one electric accent. Accessible contrast targets AA/AAA.

#### Color Palette (Light / Dark)
- Near‑Black: `#0B0D10` (bg dark), `#0F1216` variant
- Ink: `#1C232B` (primary text)
- Porcelain: `#F4F6F8` (bg light)
- Bone: `#EDE9E4` (warm surface)
- Electric Violet: `#6A5BFF` (accent/links)
- Jade: `#00A77C` (success)
- Persimmon: `#FF5A3C` (alert)
- Steel: `#6C7A89` (muted text)

Usage notes:
- Accent is rare; mostly used for links, key CTAs, focus states.
- Surfaces blend warm Bone with cool Porcelain for depth.

#### Typography
- Display: “Suisse Intl” or “Inter Tight” (fallback: Inter) — tight tracking for headlines.
- Text: “Inter” (system fallback: Segoe UI, Roboto, Arial)
- Scale: 12, 14, 16, 18, 22, 28, 36, 48, 64
- Line‑length: 60–72ch; line‑height 1.4–1.6 for body

#### UI Tokens
- Radius: 8, 12, 16
- Spacing: 4‑point grid (4/8/12/16/24/32/48/64)
- Shadow (light): 0 1px 2px rgba(14, 18, 22, 0.08), 0 8px 24px rgba(14, 18, 22, 0.08)
- Shadow (dark): 0 1px 2px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.45)
- Motion: 140–220ms, cubic‑bezier(0.2, 0.8, 0.2, 1)

#### Signature Elements (non‑generic)
- “Ledger lines” divider motif (thin 1px rules spaced 4px) to feel technical.
- Micro‑diagrams for systems with arrows + step numbers.
- Monochrome imagery with a single Electric Violet accent stroke.

Accessibility targets: color contrast AA minimum; focus rings 2px Electric Violet on Bone/Porcelain.

---

### 5) Component Inventory (Build Once, Reuse Everywhere)

- SiteShell (header, nav, mobile drawer, footer)
- HeroSplit (headline, lead, CTA, proof badges)
- ValueProps (3‑up tiles)
- PackageCard (price, scope checklist, metric)
- CaseStudyCard → CaseStudyDetail
- PromptCard → PromptDetail (copy button, short demo)
- TestimonialStrip
- SectionHeader (title, eyebrow, description)
- FAQAccordion
- ContactForm (scheduler embed + fields)
- MetricsStat (baseline → after)
- CodeBlock / PromptBlock with copy‑to‑clipboard
- Badge (category, industry)

---

### 6) Tech Stack and Architecture

- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS + CSS variables for tokens
- Animations: Framer Motion (subtle)
- CMS: Sanity (or Contentlayer with MDX) for Packages, Case Studies, Library, Insights
- Forms: React Hook Form + Zod
- Email/CRM: ConvertKit or Brevo via API for gated library; Zapier/Make optional
- Analytics: Plausible (privacy‑friendly) + GA4 (secondary) + Microsoft Clarity session replays
- Deploy: Vercel; image optimization via Next/Image
- Performance: image lazy‑load, route segment caching, RUM sampling

Directory shape (App Router):

```
app/
  (marketing)/
    page.tsx                // Home
    services/page.tsx
    packages/page.tsx
    case-studies/page.tsx
    case-studies/[slug]/page.tsx
    library/page.tsx
    insights/page.tsx
    about/page.tsx
    contact/page.tsx
  components/
  lib/
  styles/
  data/                     // seed JSON/MDX
```

---

### 7) Data Schemas (CMS / Contentlayer)

These are concise, implementation‑ready field sets designed for fast content entry and reuse.

#### Service
- id, title, slug, summary, examples[] (title, description), integrations[]

#### Package
- id, name, slug, price, timelineWeeks, acceptanceMetric, scopeChecklist[], deliverables[], ctaLabel, featured:boolean

#### CaseStudy
- id, title, slug, industry, summary, baselineMetric {label, value, unit}, afterMetric {label, value, unit}, steps[] {title, description}, coverImage, takeaway

#### Prompt
- id, title, slug, category, plainText, variables[], usageNotes, sampleOutput, gated:boolean

#### Testimonial
- id, authorName, role, company, quote, avatar

#### BlogPost
- id, title, slug, excerpt, bodyMDX, tags[], publishedAt

#### ContactLead
- id, name, email, company, teamSize, industry, painPoint, desiredMetric, createdAt, source

---

### 8) Conversion System & Measurement

- Primary CTA: “Book a 20‑min fit call.” Secondary: “Get the prompt library.”
- Lead scoring: library download + contact form fields → CRM tag; trigger 3‑email nurture.
- Fit call booking → intake doc auto‑created with answers.
- North‑star metrics: calls booked/week; library signups/week; package close rate; time‑to‑first‑value for each engagement.

---

### 9) SEO, Content, and Differentiation Strategy

- Intent clusters: “AI for [industry] SOPs,” “Prompt engines for [role],” “Agent handoff safety.”
- Content cadence (90 days):
  - Weekly teardown post (Insights)
  - Bi‑weekly prompt/agent drop (Library)
  - Monthly case study refresh with a metric
- Schema.org: Organization, Service, Product (packages), Article, HowTo (library items), FAQ.
- Snippet‑ready titles: action verbs + metrics (e.g., “Cut invoice prep 82% with an assistant in the loop”).

---

### 10) Visual Examples (quick starters)

Buttons
- Primary: Electric Violet bg, white text, 6px ring on focus
- Secondary: Outline Ink 1px; hover fill Bone

Cards
- Bone surface, subtle shadow, eyebrow label in Steel, title in Ink

Empty states
- Monochrome illustration + single accent line; one sentence and a CTA

---

### 11) Implementation Plan (2‑Week Sprint)

Week 1
- Set up Next.js, Tailwind, tokens, and core components
- Build Home, Packages, Case Studies (list), Library (list)
- Seed CMS with 3 packages, 2 case studies, 5 prompts
- Integrate scheduler + CRM for gated library

Week 2
- Build detail views, About, Services, Contact
- Wire analytics and goals; add sitemap + metadata + schema
- Polish: motion, a11y review, responsive QA
- Launch; start the content cadence

---

### 12) Legal and Trust

- Privacy: what data is collected (email, form fields, analytics), retention, opt‑out
- Terms: ownership of deliverables, warranty on uptime not guaranteed, confidentiality
- DPA links for processors (Vercel, Plausible, CRM)

---

### 13) Voice and Writing Guide (house style)

- Use short sentences. Quantify when possible. Avoid hype words (revolutionary, cutting‑edge).
- Replace abstract nouns with actions (“We cut manual entry by 70%”).
- Always close with a next step: call or library.

---

### 14) Copy Snippets (ready to paste)

CTA (primary)
Book a 20‑min fit call

CTA (secondary)
Get the prompt & template library

Microcopy
- You keep the system. You own the prompts. We document everything.
- Clear scope. Clear price. Clear metric.

Footer
Built in public. Shipped small on purpose.

---

### 15) Future Roadmap (post‑launch)

- Pricing calculator linked to package scope and timeline sliders
- Mini demo environment where visitors can try a prompt engine with sample data
- “Before/After” interactive metric sliders on case studies
- Client portal for checklists and acceptance metrics

---

### 16) Build Checklist (tick before launch)

- Lighthouse 90+ on mobile/desktop
- OpenGraph images per route
- 404 and 500 pages styled
- Cookie banner only if required by jurisdictions in traffic mix
- Keyboard navigation and focus traps validated

---

This blueprint is designed to be executed as‑is. If we keep the scope tight, the initial, polished v1 ships in two weeks and starts collecting proof immediately.


