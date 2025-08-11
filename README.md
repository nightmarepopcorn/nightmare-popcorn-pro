
# Nightmare Popcorn — Pro Mode

Modern site with:
- Next.js 14 (App Router)
- Tailwind (styling)
- Shop with cart (localStorage)
- Stripe Checkout (test mode)
- Webhook endpoint
- SEO basics and dark, grounded aesthetic

## You do this (exact steps)
1) **Download the ZIP** I gave you. Unzip it.
2) Install Node.js (LTS). Then open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
   Visit http://localhost:3000 — the site is live on your computer.
3) Create a free **Stripe** account. Get your **test** Secret key and put it in `.env`:
   ```
   STRIPE_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
   (Webhook secret is optional until you want fulfillment automations.)
4) Click **Cart → Checkout** to test Stripe. It will open a hosted test checkout page. Use Stripe’s test cards.
5) When ready to go online, deploy to **Vercel** (free):
   - Create a Vercel account and click “New Project” → “Import” → upload this folder.
   - Add Environment Variables: `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_SITE_URL` set to your real domain later.
   - Click Deploy. You’ll get a live URL.
6) Point your domain (nightmarepopcorn.com) to Vercel (they give you copy‑paste DNS steps).

## Where stuff lives
- Pages: `/app` (homepage `page.tsx`, shop `/shop`, cart `/cart`)
- Products: `/data/products.ts` (change prices, names, images)
- Checkout API: `/app/api/checkout/route.ts`
- Styles: `/app/globals.css`

## Notes
- All payments are Stripe‑hosted. Your site never handles card data.
- You stay anonymous — no photos, no bios required.
- When you want inventory + orders + fulfillment, I can add Stripe webhooks + an admin dashboard.

-- Generated on 2025-08-11
