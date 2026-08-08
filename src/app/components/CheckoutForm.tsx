import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useCart, formatPrice } from '../context/CartContext';

// TODO: replace with your real Formspree endpoint. Create a free form at
// https://formspree.io, then paste its endpoint URL (https://formspree.io/f/xxxxxxx) here.
const ORDER_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type OrderType = 'pickup' | 'delivery';

export function CheckoutForm({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const { items, subtotal, clearCart } = useCart();
  const [orderType, setOrderType] = useState<OrderType>('pickup');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const orderSummary = items
      .map((i) => `${i.qty} x ${i.name} — ${formatPrice(i.price * i.qty)}`)
      .join('\n');
    data.set('order_summary', orderSummary);
    data.set('order_total', formatPrice(subtotal));

    if (ORDER_FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      setStatus('error');
      setErrorMessage(
        'Ordering isn’t connected yet — the site owner needs to add a Formspree endpoint in CheckoutForm.tsx.'
      );
      return;
    }

    try {
      const res = await fetch(ORDER_FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Submission failed');
      clearCart();
      onSuccess();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong sending your order. Please try again or call us.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4">
      <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Order Summary</h4>
        <ul className="text-sm text-stone-700 flex flex-col gap-1 mb-2">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between">
              <span>{i.qty} × {i.name}</span>
              <span>{formatPrice(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-black text-stone-900 pt-2 border-t border-stone-200">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="checkout-name" className="text-sm font-bold text-stone-700 uppercase tracking-wider">Name</label>
        <input id="checkout-name" name="name" required className="w-full bg-white border border-stone-300 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="checkout-email" className="text-sm font-bold text-stone-700 uppercase tracking-wider">Email</label>
        <input id="checkout-email" name="email" type="email" required className="w-full bg-white border border-stone-300 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="checkout-phone" className="text-sm font-bold text-stone-700 uppercase tracking-wider">Phone</label>
        <input id="checkout-phone" name="phone" type="tel" required className="w-full bg-white border border-stone-300 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-stone-700 uppercase tracking-wider">Order Type</span>
        <div className="flex gap-3">
          {(['pickup', 'delivery'] as OrderType[]).map((type) => (
            <label
              key={type}
              className={`flex-1 text-center capitalize rounded-lg py-3 border cursor-pointer font-medium transition-colors ${
                orderType === type ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-stone-300 text-stone-700'
              }`}
            >
              <input
                type="radio"
                name="order_type"
                value={type}
                checked={orderType === type}
                onChange={() => setOrderType(type)}
                className="sr-only"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {orderType === 'delivery' && (
        <div className="flex flex-col gap-2">
          <label htmlFor="checkout-address" className="text-sm font-bold text-stone-700 uppercase tracking-wider">Delivery Address</label>
          <input id="checkout-address" name="address" required className="w-full bg-white border border-stone-300 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="checkout-notes" className="text-sm font-bold text-stone-700 uppercase tracking-wider">Notes (optional)</label>
        <textarea id="checkout-notes" name="notes" rows={3} className="w-full bg-white border border-stone-300 rounded-lg py-3 px-4 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-lg p-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg py-3 font-bold uppercase tracking-wide text-sm transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex-[2] bg-stone-900 hover:bg-emerald-800 text-[#EFFF3B] hover:text-white rounded-lg py-3 font-black uppercase tracking-wide text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" />}
          Place Order
        </button>
      </div>
    </form>
  );
}

export function CheckoutSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 p-10">
      <CheckCircle2 className="w-16 h-16 text-emerald-500" />
      <h4 className="text-2xl font-black text-stone-900 uppercase">Order Sent!</h4>
      <p className="text-stone-600">Thanks for your order — we'll be in touch shortly to confirm.</p>
      <button
        onClick={onClose}
        className="mt-4 bg-stone-900 hover:bg-emerald-800 text-[#EFFF3B] hover:text-white rounded-lg py-3 px-8 font-black uppercase tracking-wide text-sm transition-colors"
      >
        Done
      </button>
    </div>
  );
}
