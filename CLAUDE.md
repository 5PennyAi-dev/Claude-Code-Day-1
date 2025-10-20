# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for **5Penny AI Consultancy**, an AI consultancy targeting SMBs (10-250 employees) with practical, fixed-scope AI automation projects. The positioning is "Practical AI that pays for itself" with a focus on 90-day ROI.

## Implementation Status

**Current state**: Blueprint only (WEBSITE_BLUEPRINT.md). No code has been implemented yet.

## Planned Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS variables for design tokens
- **Animations**: Framer Motion (subtle, intentional usage only)
- **CMS**: Sanity or Contentlayer with MDX for content management
- **Forms**: React Hook Form + Zod validation
- **Email/CRM**: ConvertKit or Brevo for gated content
- **Analytics**: Plausible (primary), GA4 (secondary), Microsoft Clarity for session replays
- **Deployment**: Vercel with Next/Image optimization

## Planned Architecture

```
app/
  (marketing)/
    page.tsx                      # Home
    services/page.tsx
    packages/page.tsx
    case-studies/page.tsx
    case-studies/[slug]/page.tsx
    library/page.tsx
    insights/page.tsx
    about/page.tsx
    contact/page.tsx
  components/                     # Reusable UI components
  lib/                           # Utilities and helpers
  styles/                        # Global styles and tokens
  data/                          # Seed JSON/MDX content
```

## Design System (Critical Implementation Details)

### Color Palette
- **Near-Black**: `#0B0D10` (dark bg), `#0F1216` variant
- **Ink**: `#1C232B` (primary text)
- **Porcelain**: `#F4F6F8` (light bg)
- **Bone**: `#EDE9E4` (warm surface)
- **Electric Violet**: `#6A5BFF` (accent/links) — use sparingly
- **Jade**: `#00A77C` (success)
- **Persimmon**: `#FF5A3C` (alert)
- **Steel**: `#6C7A89` (muted text)

Accent color is intentionally rare; primarily for links, CTAs, and focus states.

### Typography
- **Display**: "Suisse Intl" or "Inter Tight" (fallback: Inter)
- **Text**: "Inter" (system fallback: Segoe UI, Roboto, Arial)
- **Scale**: 12, 14, 16, 18, 22, 28, 36, 48, 64
- **Line-height**: 1.4–1.6 for body text; 60–72ch line length

### UI Tokens
- **Radius**: 8, 12, 16
- **Spacing**: 4-point grid (4/8/12/16/24/32/48/64)
- **Motion**: 140–220ms, cubic-bezier(0.2, 0.8, 0.2, 1)
- **Focus rings**: 2px Electric Violet

### Signature Visual Elements
- "Ledger lines" divider motif (thin 1px rules spaced 4px)
- Micro-diagrams with arrows + step numbers
- Monochrome imagery with single Electric Violet accent stroke

## Site Structure

### Pages (Navigation Order)
1. Home — Hero, value props, packages, library CTA, case study teaser, FAQ
2. Services — Overview of capabilities with use-cases and integrations
3. Packages — Fixed-scope offers ($3.5k / $9k / $15k tiers)
4. Case Studies — Outcome-focused cards with metrics
5. Library — Gated prompt/template samples (lead magnet)
6. Insights — Blog/teardown posts
7. About — Founder story + principles
8. Contact / Book a Call — Scheduler + qualifying form

### Core Components to Build
- `SiteShell` — Header, nav, mobile drawer, footer
- `HeroSplit` — Headline, lead, CTA, proof badges
- `ValueProps` — 3-up tiles
- `PackageCard` — Price, scope checklist, acceptance metric
- `CaseStudyCard` / `CaseStudyDetail`
- `PromptCard` / `PromptDetail` — With copy button
- `ContactForm` — Scheduler embed + fields
- `FAQAccordion`
- `MetricsStat` — Baseline → after display

## Content Schemas

### Package
- name, slug, price, timelineWeeks, acceptanceMetric, scopeChecklist[], deliverables[], ctaLabel, featured

### CaseStudy
- title, slug, industry, summary, baselineMetric {label, value, unit}, afterMetric {label, value, unit}, steps[] {title, description}, coverImage, takeaway

### Prompt
- title, slug, category, plainText, variables[], usageNotes, sampleOutput, gated:boolean

### ContactLead
- name, email, company, teamSize, industry, painPoint, desiredMetric, createdAt, source

## Voice and Style Guidelines

- **Tone**: Calm, direct, outcome-first. No hype words ("revolutionary," "cutting-edge")
- Use short sentences. Quantify outcomes when possible
- Replace abstract nouns with actions ("We cut manual entry by 70%")
- Always close sections with a clear next step
- **No emojis** unless explicitly requested

### Key Messaging
- **One-liner**: "Practical AI systems that pay for themselves."
- **Promise**: "We turn repetitive processes into reliable AI systems—measurable in hours saved, errors avoided, and dollars captured."
- **Differentiator**: Fixed-scope, fixed-price packages with 90-day payoff targets

## Conversion Strategy

- **Primary CTA**: "Book a 20-min fit call"
- **Secondary CTA**: "Get the prompt library"
- Lead flow: Library download → email capture → 3-email nurture → booking
- Fit call booking auto-creates intake doc with form answers

## Pre-Launch Requirements

- Lighthouse score 90+ mobile/desktop
- OpenGraph images per route
- Styled 404 and 500 pages
- Keyboard navigation validated
- Focus traps for modals/drawers
- Schema.org markup: Organization, Service, Product, Article, HowTo, FAQ
- Accessibility: AA contrast minimum, visible focus states, labels on all inputs

## Implementation Notes

- **Scope discipline**: Blueprint emphasizes shipping small and fast. Avoid scope creep.
- **Content seeding**: Need 3 packages, 2 case studies, 5 prompts for v1 launch
- **Accessibility**: All inputs must have visible labels (no placeholder-only patterns). Error text reserved area below fields.
- **Performance**: Image lazy-load, route segment caching, RUM sampling enabled
- **Form spec** (WEBSITE_BLUEPRINT.md:101-107): Two-column grid ≥768px, single column mobile, 16px gaps, 10px radius, glossy jade button with Electric Violet focus ring
