# 📊 Portfolio Analytics Plan - Taylor'D

- **Analytics Plan**
- **Zachary Taylor**
- **Assignment Due Date: 04/13/25**

---

## Overview

Methodology What specifically do you need to measure and how will you accomplish this.
Implementation Plan How will you add analytics tracking to your Capstone Project site

- Identify target audience
- Paragraph describing product and who target audience

---

### **🎯 Goals**

- Promotion
- click ads
- facebook ads

---

### **🖥️ Stack**

- Next.js
- Sanity CMS
- Analytics tools:

  - Google Analytics 4 - site metrics
  - Vercel Analytics - performance & traffic
  - Custom event tracking (optional)
  - Hotjar / FullStory - UX insights (optional)

---

### **🔍 What to Track**

1. **Page Views**

- Auto-track GA4
- Sanity Route Mapping: `slug`-based routing in Next.js

2. **Sanity Content Engagement**

- Track slugs: scroll depth, if a blog - time of post
- Use metadata in Sanity schema to add tags/categories for filtering reports

3. **Events**

Use `gtag`, or native events for:

- **CTA Clicks**: "Contact Us", etc.
- **Outbound Links**: Partner links, social media clicks
- **Scroll Depth**: Measure engagement on long-form content
- **Search**: On-site search behavior

---

### **🔍 Integration Tips**

GA4 in Next.js App Router

`javascript
// app/layout.jsx
export const metadata = {
  title: 'My Site',
  // add GA script here via <Head />
}
`
Track slug changes in [slug].jsx pages - check rehydration for blocking analytics scripts

---

## Reference Links

Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...
**Google**
[Google Analytics Guides](https://developers.google.com/analytics/devguides/collection/ga4)

[URL Inspection Tool](https://support.google.com/webmasters/answer/9012289): URL Inspection report and test

[Get Started using Google Analytics](https://skillshop.docebosaas.com/learn/courses/8108/get-started-using-google-analytics?hash=8dfe0899afeb31b78963986577ea99e2e5dcf49c&generated_by=11239746): Get to know Google Analytics

**Next.Js Docs**
[Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics): Next.js offers built-in support for measuring and reporting performance metrics

---
