
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest){
  const body = await req.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2024-06-20" });

  const line_items = (body.items ?? []).map((i:any) => ({
    price_data: {
      currency: "usd",
      product_data: { name: i.name },
      unit_amount: i.price
    },
    quantity: i.qty
  }));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`
  });

  return NextResponse.json({ url: session.url });
}
