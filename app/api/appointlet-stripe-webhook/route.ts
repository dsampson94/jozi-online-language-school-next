import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { buffer } from 'node:stream/consumers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
    const stripeSig = req.headers.get('stripe-signature');
    const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripeSig || !stripeWebhookSecret) {
        return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
    }

    let stripeEvent: Stripe.Event;

    try {
        const rawBody = await buffer(req.body as any);

        stripeEvent = stripe.webhooks.constructEvent(
            rawBody,
            stripeSig,
            stripeWebhookSecret
        );

        if (stripeEvent.type === 'payment_intent.succeeded') {
            const paymentIntent = stripeEvent.data.object;
            console.log('Payment Intent Succeeded:', paymentIntent);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Error verifying Stripe webhook:', error);
        return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
    }
}
