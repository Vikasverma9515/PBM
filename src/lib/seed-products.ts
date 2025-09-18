// lib/seed-products.ts
import { supabaseAdmin } from '@/lib/supabase/admin'

const productsData = [
  {
    name: 'Vielight Neuro Pro 2',
    slug: 'neuro-pro-2',
    price: 5000,
    category: 'Professional',
    description: 'The Neuro Pro 2 is the world\'s most customizable and powerful brain photobiomodulation device. Featuring 12 adjustable modules and a comprehensive smartphone app, it allows you to precisely target different brain networks or the entire brain for optimal cognitive results.',
    short_description: 'Most advanced brain photobiomodulation device',
    images: [
      '/neuro-pro-2-main.jpg',
      '/neuro-pro-2-angle1.jpg',
      '/neuro-pro-2-angle2.jpg',
      '/neuro-pro-2-angle3.jpg',
      '/neuro-pro-2-angle4.jpg'
    ],
    specifications: {
      power: '12,000 mW total power',
      irradiance: '400 mW/cm2',
      modules: '12 programmable Vie-LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Focus', 'Stress', 'Memory', 'Sleep', 'Mental clarity', 'Creativity', 'Brain energy'],
    whats_in_box: [
      '1 Neuro Pro headset',
      '1 Neuro Pro intranasal applicators',
      '1 controller with side heat insulation',
      'Neuro Pro 2 app',
      '1 power adapter 5V 5A with AC input cable',
      '1 power USB-Dc jacket adapter cable',
      '1 power adapter for the smartphone'
    ],
    user_guides: [
      { title: 'Neuro Pro 2 White user guide', url: '/guides/neuro-pro-2-white.pdf' },
      { title: 'Neuro Pro 2 Black user guide', url: '/guides/neuro-pro-2-black.pdf' },
      { title: 'Neuro Pro 2 WiFi Hub Guide', url: '/guides/neuro-pro-2-wifi.pdf' }
    ],
    videos: [
      { title: 'Setup Walkthrough', thumbnail: '/neuro-pro-2-setup-video.jpg', url: '/videos/setup' },
      { title: 'Access Gracefire Protocols', thumbnail: '/neuro-pro-2-protocols-video.jpg', url: '/videos/protocols' }
    ],
    inventory: 50,
    featured: true
  },
  {
    name: 'Neuro Gamma 4',
    slug: 'neuro-gamma-4',
    price: 1799,
    category: 'Gamma',
    description: 'Advanced gamma wave brain photobiomodulation device designed to enhance cognitive performance and mental clarity through targeted gamma frequency stimulation.',
    short_description: 'Gamma wave brain enhancement device',
    images: [
      '/neuro-gamma-4-main.jpg',
      '/neuro-gamma-4-angle1.jpg',
      '/neuro-gamma-4-angle2.jpg'
    ],
    specifications: {
      power: '600 mW total power',
      modules: '4 LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Focus', 'Memory', 'Mental clarity', 'Cognitive enhancement'],
    whats_in_box: [
      '1 Neuro Gamma 4 headset',
      '1 intranasal applicator',
      '1 controller unit',
      '1 power adapter',
      '1 USB cable'
    ],
    user_guides: [
      { title: 'Neuro Gamma 4 user guide', url: '/guides/neuro-gamma-4.pdf' }
    ],
    videos: [
      { title: 'Gamma 4 Setup Guide', thumbnail: '/gamma-4-setup.jpg', url: '/videos/gamma-setup' }
    ],
    inventory: 25
  },
  {
    name: 'Vielight Alpha 4',
    slug: 'vielight-alpha-4',
    price: 1799,
    category: 'Alpha',
    description: 'Precision alpha wave photobiomodulation device engineered to promote relaxation, reduce stress, and enhance overall brain wellness through targeted alpha frequency therapy.',
    short_description:     'Alpha wave relaxation and wellness device',
    images: [
      '/vielight-alpha-4-main.jpg',
      '/vielight-alpha-4-angle1.jpg',
      '/vielight-alpha-4-angle2.jpg'
    ],
    specifications: {
      power: '500 mW total power',
      modules: '4 LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Stress reduction', 'Relaxation', 'Sleep', 'Mental wellness'],
    whats_in_box: [
      '1 Alpha 4 headset',
      '1 intranasal applicator',
      '1 controller unit',
      '1 power adapter',
      '1 USB cable'
    ],
    user_guides: [
      { title: 'Alpha 4 user guide', url: '/guides/alpha-4.pdf' }
    ],
    videos: [
      { title: 'Alpha 4 Setup Guide', thumbnail: '/alpha-4-setup.jpg', url: '/videos/alpha-setup' }
    ],
    inventory: 30
  },
  {
    name: 'Neuro Duo',
    slug: 'neuro-duo',
    price: 2399,
    category: 'Gamma & Alpha',
    description: 'Versatile dual-frequency brain photobiomodulation system combining both gamma and alpha wave technologies for comprehensive brain health and cognitive enhancement.',
    short_description: 'Dual-frequency brain enhancement system',
    images: [
      '/neuro-duo-main.jpg',
      '/neuro-duo-angle1.jpg',
      '/neuro-duo-angle2.jpg'
    ],
    specifications: {
      power: '800 mW total power',
      modules: '6 LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Focus', 'Relaxation', 'Cognitive balance', 'Mental flexibility'],
    whats_in_box: [
      '1 Neuro Duo headset',
      '1 intranasal applicator',
      '1 dual-mode controller',
      '1 power adapter',
      '1 USB cable'
    ],
    user_guides: [
      { title: 'Neuro Duo user guide', url: '/guides/neuro-duo.pdf' }
    ],
    videos: [
      { title: 'Duo Setup Guide', thumbnail: '/duo-setup.jpg', url: '/videos/duo-setup' }
    ],
    inventory: 20
  }
]

export async function seedProducts() {
  try {
    // Clear existing products
    await supabaseAdmin.from('products').delete().neq('id', '')
    
    // Insert new products
    const { data, error } = await supabaseAdmin
      .from('products')
      .insert(productsData.map(product => ({
        ...product,
        in_stock: true,
        active: true
      })))

    if (error) {
      console.error('Error seeding products:', error)
      return
    }

    console.log('Products seeded successfully:', data)
  } catch (error) {
    console.error('Error in seedProducts:', error)
  }
}

// Run this once: node -e "require('./lib/seed-products.ts').seedProducts()"