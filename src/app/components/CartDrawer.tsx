import React, { useEffect, useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { useCart, formatPrice } from '../context/CartContext';
import { CheckoutForm, CheckoutSuccess } from './CheckoutForm';

type View = 'cart' | 'checkout' | 'success';

export function CartDrawer() {
  const { items, isOpen, setOpen, updateQty, removeItem, subtotal } = useCart();
  const [view, setView] = useState<View>('cart');

  useEffect(() => {
    if (isOpen) setView('cart');
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex flex-col p-0">
        <SheetHeader className="border-b border-stone-100">
          <SheetTitle className="text-xl font-black uppercase tracking-tight text-stone-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            {view === 'checkout' ? 'Checkout' : 'Your Cart'}
          </SheetTitle>
        </SheetHeader>

        {view === 'success' ? (
          <CheckoutSuccess onClose={() => setOpen(false)} />
        ) : view === 'checkout' ? (
          <div className="flex-1 overflow-y-auto">
            <CheckoutForm onBack={() => setView('cart')} onSuccess={() => setView('success')} />
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-stone-500 p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-stone-300" />
            <p>Your cart is empty. Add a juice or two!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 bg-stone-50 rounded-xl p-4 border border-stone-100">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-stone-900 truncate">{item.name}</p>
                    <p className="text-sm text-stone-500">{formatPrice(item.price)} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-7 h-7 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-7 h-7 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 flex items-center justify-center transition-colors ml-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-100 p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center text-lg font-black text-stone-900">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                onClick={() => setView('checkout')}
                className="w-full bg-stone-900 hover:bg-emerald-800 text-[#EFFF3B] hover:text-white py-4 rounded-xl font-black uppercase tracking-wide transition-colors"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
