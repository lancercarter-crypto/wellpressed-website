import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { JuiceBottleIcon, ShotGlassIcon } from './JuiceIcon';
import { useCart, formatPrice } from '../context/CartContext';
import sweetGreensImg from '../../imports/Sweet_Greens.png';
import boltImg from '../../imports/Bolt.png';
import crimsonImg from '../../imports/crimson_glow.png';

export function Products() {
  const { addItem } = useCart();

  const mainJuices = [
    {
      id: 'sweet-greens',
      name: 'Sweet Greens',
      price: 8,
      ingredients: 'Apple • Kale • Lemon • Ginger',
      description: 'Detoxifying, packed with vitamin C and K, supports digestion, boosts energy.',
      image: sweetGreensImg,
      bgTheme: 'bg-emerald-400',
    },
    {
      id: 'bolt',
      name: 'Bolt',
      price: 8,
      ingredients: 'Apple • Lemon • Ginger',
      description: 'Crisp, tangy, and zesty with a kick — immune-boosting and revitalizing.',
      image: boltImg,
      bgTheme: 'bg-[#EFFF3B]',
    },
    {
      id: 'crimson-glow',
      name: 'Crimson Glow',
      price: 8,
      ingredients: 'Apple • Beet • Orange • Lemon • Carrot',
      description: 'Antioxidant-rich, supports circulation, heart health, and natural energy.',
      image: crimsonImg,
      bgTheme: 'bg-rose-400',
    },
  ];

  // These don't have real product photography yet — colorFrom/colorTo drive a
  // placeholder bottle graphic until real photos are swapped in via `image`.
  const otherJuices = [
    {
      id: 'citrus-heat',
      name: 'Citrus Heat',
      price: 8,
      ingredients: 'Orange • Ginger • Pineapple',
      description: 'Immune defense, anti-inflammatory, digestive boost, refreshing with a spicy twist.',
      colorFrom: '#fb923c',
      colorTo: '#f97316',
    },
    {
      id: 'apple-mint-cooler',
      name: 'Apple Mint Cooler',
      price: 8,
      ingredients: 'Green Apple • Pineapple • Celery • Mint',
      description: 'Cooling, hydrating, soothing for digestion, fresh and energizing.',
      colorFrom: '#86efac',
      colorTo: '#4ade80',
    },
    {
      id: 'blue-wave',
      name: 'Blue Wave',
      price: 8,
      ingredients: 'Pineapple • Apple • Lemon • Lime • Spirulina',
      description: 'Cleansing, energizing, rich in antioxidants, plant-based nutrients, and ocean-fresh vibes.',
      colorFrom: '#67e8f9',
      colorTo: '#0ea5e9',
    },
    {
      id: 'sweet-greens-enhanced',
      name: 'Sweet Greens — Enhanced',
      price: 8,
      ingredients: 'Apple, Kale, Lemon, Ginger, Chlorella',
      description: 'Added chlorella for gentle detox support and daily balance.',
      colorFrom: '#34d399',
      colorTo: '#059669',
    },
    {
      id: 'berry-nova',
      name: 'Berry Nova',
      price: 8,
      ingredients: 'Apple, Blueberries, Lemon, Ginger',
      description: 'Smooth berry blend with a bright citrus finish.',
      colorFrom: '#c4b5fd',
      colorTo: '#8b5cf6',
    },
    {
      id: 'crimson-glow-enhanced',
      name: 'Crimson Glow — Enhanced',
      price: 8,
      ingredients: 'Apple, Beets, Orange, Carrot, Lemon, Ginger, Turmeric, Black Pepper',
      description: 'Deeper warmth to support inflammation response and absorption.',
      colorFrom: '#fb7185',
      colorTo: '#e11d48',
    },
    {
      id: 'citrus-heat-enhanced',
      name: 'Citrus Heat — Enhanced',
      price: 8,
      ingredients: 'Orange, Pineapple, Ginger, Turmeric, Cayenne',
      description: 'Extra spice for circulation and metabolic support.',
      colorFrom: '#fdba74',
      colorTo: '#ea580c',
    },
    {
      id: 'strong-green',
      name: 'Strong Green',
      price: 8,
      ingredients: 'Apple, Cucumber, Celery, Spinach, Parsley, Rosemary, Lemon, Ginger, Chlorella',
      description: 'Deep green blend for gut balance and clarity.',
      colorFrom: '#4ade80',
      colorTo: '#166534',
    },
    {
      id: 'strawberry-lemonade',
      name: 'Strawberry Lemonade',
      price: 8,
      ingredients: 'Granny Smith Apple, Strawberry, Lemon, Lime',
      description: 'Bright, smooth, and naturally sweet with a refreshing citrus twist.',
      colorFrom: '#fda4af',
      colorTo: '#facc15',
    },
  ];

  const wellnessShots = [
    {
      id: 'golden-glow',
      name: 'Golden Glow',
      price: 3,
      ingredients: 'Orange • Turmeric • Black Pepper',
      description: 'Anti-inflammatory, immune-boosting, supports joint and overall wellness.',
      colorFrom: '#fde047',
      colorTo: '#f59e0b',
    },
    {
      id: 'immunity-kick',
      name: 'Immunity Kick',
      price: 3,
      ingredients: 'Ginger • Pineapple • Lemon',
      description: 'Strong vitamin C boost, digestive support, fights fatigue, and clears inflammation.',
      colorFrom: '#fef08a',
      colorTo: '#84cc16',
    },
    {
      id: 'burdock-root-power-shot',
      name: 'Burdock Root Power (Shot)',
      price: 3,
      ingredients: 'Burdock Root, Ginger, Lemon, Black Grapes',
      description: 'Earthy and bold. Supports blood health and natural detox pathways.',
      colorFrom: '#d6b98c',
      colorTo: '#78350f',
    },
  ];

  return (
    <section id="menu" className="py-32 bg-[#F9F6F0] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-emerald-600 tracking-widest uppercase mb-4">The Lineup</h2>
          <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-stone-900 leading-none tracking-tighter uppercase">
            Choose Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Fuel.</span>
          </h3>
        </div>

        {/* Top 3 Main Juices */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          {mainJuices.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: index * 0.15 }}
              className={`relative rounded-[3rem] p-10 ${product.bgTheme} shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 group flex flex-col items-center justify-between text-center overflow-visible mt-24 lg:mt-0`}
            >
              <div className="w-[120%] h-[400px] -mt-40 mb-10 relative z-10 drop-shadow-2xl group-hover:-translate-y-8 transition-transform duration-700 ease-out">
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]" 
                />
              </div>

              <div className="relative z-20 w-full bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/50 shadow-inner group-hover:bg-white/60 transition-colors duration-500">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-3xl md:text-4xl font-black text-stone-900 uppercase tracking-tight text-left">{product.name}</h4>
                  <span className="text-2xl font-black text-stone-900 bg-white/50 px-4 py-1 rounded-full">{formatPrice(product.price)}</span>
                </div>

                <p className="text-sm font-bold tracking-widest text-stone-700 uppercase mb-4 text-left opacity-90">{product.ingredients}</p>
                <p className="text-lg font-medium text-stone-800 text-left leading-relaxed opacity-90 mb-6">{product.description}</p>
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-emerald-800 text-white rounded-full py-3 font-black uppercase tracking-wide text-sm transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Juices Grid */}
        <div className="mb-32">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-stone-900 mb-12 uppercase tracking-tight text-center border-b-2 border-stone-200 pb-8"
          >
            Fresh Presses
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherJuices.map((juice, idx) => (
              <motion.div
                key={juice.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <JuiceBottleIcon colorFrom={juice.colorFrom} colorTo={juice.colorTo} className="w-16 h-auto mb-4" />
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-stone-900 uppercase tracking-tight pr-4">{juice.name}</h4>
                  <span className="text-lg font-bold text-emerald-600 shrink-0">{formatPrice(juice.price)}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">{juice.ingredients}</p>
                <p className="text-stone-700 font-medium leading-relaxed mb-6 flex-1">{juice.description}</p>
                <button
                  onClick={() => addItem({ id: juice.id, name: juice.name, price: juice.price })}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-emerald-700 text-white rounded-full py-3 font-black uppercase tracking-wide text-sm transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wellness Shots */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-stone-900 mb-12 uppercase tracking-tight text-center border-b-2 border-stone-200 pb-8"
          >
            Wellness Shots <span className="text-xl text-stone-500 ml-4 lowercase tracking-normal font-medium">(4oz)</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellnessShots.map((shot, idx) => (
              <motion.div
                key={shot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-900 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-transform duration-300 border-b-8 border-amber-400 flex flex-col"
              >
                <ShotGlassIcon colorFrom={shot.colorFrom} colorTo={shot.colorTo} className="w-10 h-auto mb-4" />
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight pr-4">{shot.name}</h4>
                  <span className="text-lg font-bold text-amber-400 shrink-0">{formatPrice(shot.price)}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">{shot.ingredients}</p>
                <p className="text-stone-300 font-medium leading-relaxed mb-6 flex-1">{shot.description}</p>
                <button
                  onClick={() => addItem({ id: shot.id, name: shot.name, price: shot.price })}
                  className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-900 rounded-full py-3 font-black uppercase tracking-wide text-sm transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}