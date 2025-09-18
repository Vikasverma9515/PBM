// data/products.ts
import { Product } from '@/types/Product';

export const productsData: Product[] = [
  {
    slug: 'neuro-pro-2',
    name: 'Vielight Neuro Pro 2',
    price: 5000,
    category: 'Professional',
    description: 'The Neuro Pro 2 is the world\'s most customizable and powerful brain photobiomodulation device. Featuring 12 adjustable modules and a comprehensive smartphone app, it allows you to precisely target different brain networks or the entire brain for optimal cognitive results.',
    shortDescription: 'Most advanced brain photobiomodulation device',
    images: [
      '/neuro-pro-2-main.png',
      '/neuro-pro-2-angle1.png',
      '/neuro-pro-2-angle2.png',
      '/neuro-pro-2-angle3.png',
      '/neuro-pro-2-angle4.png'
    ],
    features: [
      'Medical grade technology',
      'Ideal for practitioners, biohackers and meditators',
      '2-year warranty and 6-month return policy'
    ],
    specifications: {
      power: '12,000 mW total power',
      irradiance: '400 mW/cm2',
      modules: '12 programmable Vie-LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Focus', 'Stress', 'Memory', 'Sleep', 'Mental clarity', 'Creativity', 'Brain energy'],
    whatsInBox: [
      '1 Neuro Pro headset',
      '1 Neuro Pro intranasal applicators',
      '1 controller with side heat insulation',
      'Neuro Pro 2 app',
      '1 power adapter 5V 5A with AC input cable',
      '1 power USB-Dc jacket adapter cable',
      '1 power adapter for the smartphone'
    ],
    userGuides: [
      { title: 'Neuro Pro 2 White user guide', url: '/guides/neuro-pro-2-white.pdf' },
      { title: 'Neuro Pro 2 Black user guide', url: '/guides/neuro-pro-2-black.pdf' },
      { title: 'Neuro Pro 2 WiFi Hub Guide', url: '/guides/neuro-pro-2-wifi.pdf' }
    ],
    videos: [
      { title: 'Setup Walkthrough', thumbnail: '/neuro-pro-2-setup-video.jpg', url: '/videos/setup' },
      { title: 'Access Gracefire Protocols', thumbnail: '/neuro-pro-2-protocols-video.jpg', url: '/videos/protocols' }
    ],
    combinedProducts: [
      {
        slug: 'vielight-vagus',
        name: 'Vielight Vagus',
        price: 699,
        image: '/vielight-vagus.png',
        tags: ['Mental clarity', 'Systemic fitness']
      },
      {
        slug: 'vielight-mip',
        name: 'Vielight MIP 470-633-655-810',
        price: 499,
        image: '/vielight-mip.png',
        tags: ['Oxygenation', 'Brain stimulation']
      }
    ]
  },
  {
    slug: 'neuro-gamma-4',
    name: 'Neuro Gamma 4',
    price: 1799,
    category: 'Gamma',
    description: 'Advanced gamma wave brain photobiomodulation device designed to enhance cognitive performance and mental clarity through targeted gamma frequency stimulation.',
    shortDescription: 'Gamma wave brain enhancement device',
    images: [
      '/neuro-gamma-4.png',
      '/neuro-gamma-4.png',
      '/neuro-gamma-4.png'
      // '/neuro-gamma-4-angle1.png',
      // '/neuro-gamma-4-angle2.png'
    ],
    features: [
      'Gamma frequency optimization',
      'Enhanced cognitive performance',
      'Clinical grade technology'
    ],
    specifications: {
      power: '600 mW total power',
      modules: '4 LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Focus', 'Memory', 'Mental clarity', 'Cognitive enhancement'],
    whatsInBox: [
      '1 Neuro Gamma 4 headset',
      '1 intranasal applicator',
      '1 controller unit',
      '1 power adapter',
      '1 USB cable'
    ],
    userGuides: [
      { title: 'Neuro Gamma 4 user guide', url: '/guides/neuro-gamma-4.pdf' }
    ],
    videos: [
      { title: 'Gamma 4 Setup Guide', thumbnail: '/gamma-4-setup.jpg', url: '/videos/gamma-setup' }
    ]
  },
  {
    slug: 'vielight-alpha-4',
    name: 'Vielight Alpha 4',
    price: 1799,
    category: 'Alpha',
    description: 'Precision alpha wave photobiomodulation device engineered to promote relaxation, reduce stress, and enhance overall brain wellness through targeted alpha frequency therapy.',
    shortDescription: 'Alpha wave relaxation and wellness device',
    images: [
      '/vielight-alpha-4.png',
      '/vielight-alpha-4.png',
      '/vielight-alpha-4.png'
      // '/vielight-alpha-4-angle1.png',
      // '/vielight-alpha-4-angle2.png'
    ],
    features: [
      'Alpha frequency specialization',
      'Stress reduction technology',
      'Wellness optimization'
    ],
    specifications: {
      power: '500 mW total power',
      modules: '4 LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Stress reduction', 'Relaxation', 'Sleep', 'Mental wellness'],
    whatsInBox: [
      '1 Alpha 4 headset',
      '1 intranasal applicator',
      '1 controller unit',
      '1 power adapter',
      '1 USB cable'
    ],
    userGuides: [
      { title: 'Alpha 4 user guide', url: '/guides/alpha-4.pdf' }
    ],
    videos: [
      { title: 'Alpha 4 Setup Guide', thumbnail: '/alpha-4-setup.jpg', url: '/videos/alpha-setup' }
    ]
  },
  {
    slug: 'neuro-duo',
    name: 'Neuro Duo',
    price: 2399,
    category: 'Gamma & Alpha',
    description: 'Versatile dual-frequency brain photobiomodulation system combining both gamma and alpha wave technologies for comprehensive brain health and cognitive enhancement.',
    shortDescription: 'Dual-frequency brain enhancement system',
    images: [
      '/neuro-duo-4.png',
      '/neuro-duo-4.png',
      '/neuro-duo-4.png'
      // '/neuro-duo-angle1.png',
      // '/neuro-duo-angle2.png'
    ],
    features: [
      'Dual frequency capability',
      'Gamma & Alpha combination',
      'Comprehensive brain wellness'
    ],
    specifications: {
      power: '800 mW total power',
      modules: '6 LED modules',
      sessionTime: '20 minutes per session',
      warranty: '2-year warranty'
    },
    benefits: ['Focus', 'Relaxation', 'Cognitive balance', 'Mental flexibility'],
    whatsInBox: [
      '1 Neuro Duo headset',
      '1 intranasal applicator',
      '1 dual-mode controller',
      '1 power adapter',
      '1 USB cable'
    ],
    userGuides: [
      { title: 'Neuro Duo user guide', url: '/guides/neuro-duo.pdf' }
    ],
    videos: [
      { title: 'Duo Setup Guide', thumbnail: '/duo-setup.jpg', url: '/videos/duo-setup' }
    ]
  }
];


// // data/products.ts
// import { Product } from '@/types/Product';

// export const productsData: Product[] = [
//   {
//     slug: 'neuro-pro-2',
//     name: 'Vielight Neuro Pro 2',
//     price: 5000,
//     category: 'Professional',
//     description: 'The Neuro Pro 2 is Vielight’s most powerful, customizable full-brain photobiomodulation device. With 12 adjustable Vie-LED modules and advanced presets via the Neuro Pro app, it enables precise targeting of brain networks or full transcranial stimulation for cognitive wellness.',
//     shortDescription: 'Most advanced brain photobiomodulation device',
//     images: [
//       '/neuro-pro-2-main.png',
//       '/neuro-pro-2-angle1.png',
//       '/neuro-pro-2-angle2.png',
//       '/neuro-pro-2-angle3.png',
//       '/neuro-pro-2-angle4.png'
//     ],
//     features: [
//       'Medical grade technology',
//       'Ideal for practitioners, biohackers and meditators',
//       '2-year warranty and 6-month return policy'
//     ],
//     specifications: {
//       power: '12,000 mW total power',
//       irradiance: '≈ 400 mW/cm²',
//       modules: '12 programmable Vie-LED modules',
//       sessionTime: '20 minutes per session',
//       warranty: '2-year warranty'
//     },
//     benefits: [
//       'Focus',
//       'Stress',
//       'Memory',
//       'Sleep',
//       'Mental clarity',
//       'Creativity',
//       'Brain energy'
//     ],
//     whatsInBox: [
//       '1 Neuro Pro headset',
//       '1 Neuro Pro intranasal applicators',
//       '1 controller with side heat insulation',
//       'Neuro Pro 2 app',
//       '1 power adapter 5V 5A with AC input cable',
//       '1 power USB-DC jacket adapter cable',
//       '1 power adapter for the smartphone'
//     ],
//     userGuides: [
//       { title: 'Neuro Pro 2 White user guide', url: 'https://pro.vielight.com/UserGuide-White-NeuroPro2.pdf' },
//       { title: 'Neuro Pro 2 Black user guide', url: 'https://pro.vielight.com/UserGuide-Black-NeuroPro2.pdf' },
//       { title: 'Neuro Pro 2 WiFi Hub Guide', url: 'https://pro.vielight.com/WiFiHubGuide-NeuroPro2.pdf' }
//     ],
//     videos: [
//       { title: 'Setup Walkthrough', thumbnail: '/neuro-pro-2-setup-video.jpg', url: '/videos/setup' },
//       { title: 'Access Gracefire Protocols', thumbnail: '/neuro-pro-2-protocols-video.jpg', url: '/videos/protocols' }
//     ],
//     combinedProducts: [
//       {
//         slug: 'vielight-vagus',
//         name: 'Vielight Vagus',
//         price: 699,
//         image: '/vielight-vagus.png',
//         tags: ['Mental clarity', 'Systemic fitness']
//       },
//       {
//         slug: 'vielight-mip',
//         name: 'Vielight MIP 470-633-655-810',
//         price: 499,
//         image: '/vielight-mip.png',
//         tags: ['Oxygenation', 'Brain stimulation']
//       }
//     ]
//   },
//   {
//     slug: 'neuro-duo-4',
//     name: 'Vielight Neuro Duo 4',
//     price: 2399,
//     category: 'Gamma & Alpha',
//     description: 'Vielight Neuro Duo 4 is a transcranial-intranasal photobiomodulation device offering both Alpha (10 Hz) and Gamma (40 Hz) modes. It features 5 Vie-LED modules, is modular and adjustable to target different brain networks, with safety certifications and powerful irradiance for enhanced cognitive benefits.',
//     shortDescription: 'Dual-mode Alpha & Gamma brain enhancement device',
//     images: [
//       '/neuro-duo-4-main.png',
//       '/neuro-duo-4-angle1.png',
//       '/neuro-duo-4-angle2.png',
//       '/neuro-duo-4-angle3.png',
//       '/neuro-duo-4-angle4.png'
//     ],
//     features: [
//       'Alpha & Gamma capability',
//       'Transcranial + intranasal LED modules',
//       '2-year warranty and 6-month return policy'
//     ],
//     specifications: {
//       power: '≈ 5000 mW total power',
//       irradiance: '≈ 250 mW/cm² (transcranial) & frontal/intranasal ranges', 
//       modules: '5 Vie-LED modules',
//       sessionTime: '20 minutes per session',
//       warranty: '2-year warranty'
//     },
//     benefits: [
//       'Focus',
//       'Stress',
//       'Memory',
//       'Sleep',
//       'Mental clarity',
//       'Creativity',
//       'Brain energy'
//     ],
//     whatsInBox: [
//       '1 Neuro Duo headset',
//       '1 Neuro intranasal applicator',
//       '1 charger',
//       '1 device pouch',
//       '1 carry case',
//       '1 silicone sleeve'
//     ],
//     userGuides: [
//       { title: 'Neuro Duo 4 user guide', url: 'https://pro.vielight.com/UserGuide-NeuroDuo4.pdf' }
//     ],
//     videos: [
//       { title: 'Neuro Duo 4 Setup Guide', thumbnail: '/neuro-duo-4-setup.jpg', url: '/videos/duo-setup' }
//     ],
//     combinedProducts: [
//       {
//         slug: 'vielight-vagus',
//         name: 'Vielight Vagus',
//         price: 699,
//         image: '/vielight-vagus.png',
//         tags: ['Mental clarity', 'Systemic fitness']
//       },
//       {
//         slug: 'vielight-mip',
//         name: 'Vielight MIP 470-633-655-810',
//         price: 499,
//         image: '/vielight-mip.png',
//         tags: ['Oxygenation', 'Brain stimulation']
//       }
//     ]
//   }
//   // entries for neuro-alpha and neuro-gamma to be filled…
// ];
