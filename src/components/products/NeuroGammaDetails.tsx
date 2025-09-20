// // components/products/NeuroGammaDetails.tsx
// import React from 'react';
// import Image from 'next/image';
// import { Clock, Zap, Sun, Brain, Users, Shield, ArrowRight, Play, Minus, Plus } from 'lucide-react';

// interface NeuroGammaDetailsProps {
//   activeTab: string;
//   expandedSection: string | null;
//   toggleSection: (section: string) => void;
// }

// const NeuroGammaDetails: React.FC<NeuroGammaDetailsProps> = ({
//   activeTab,
//   expandedSection,
//   toggleSection,
// }) => {
//   const renderTabContent = () => {
//     if (activeTab === 'general') {
//       return (
//         <div className="space-y-12">
//           {/* Overview & benefits */}
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="relative">
//               <Image
//                 src="/neuro-gamma-4.png"
//                 alt="Vielight Neuro Gamma overview"
//                 width={600}
//                 height={500}
//                 className="rounded-2xl w-full"
//               />
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold text-black">Overview & benefits</h2>

//               <div className="flex flex-wrap gap-3">
//                 {['Focus', 'Memory', 'Mental clarity', 'Stress', 'Sleep'].map((benefit) => (
//                   <span
//                     key={benefit}
//                     className="px-4 py-2 border border-gray-400 rounded-full text-sm text-gray-700"
//                   >
//                     {benefit}
//                   </span>
//                 ))}
//               </div>

//               <div className="space-y-4">
//                 <p className="text-gray-700 leading-relaxed">
//                   The Vielight Neuro Gamma is designed to support brain performance and wellness using targeted
//                   photobiomodulation. It’s simple to use at home and built on science-backed engineering.
//                 </p>
//                 <p className="text-gray-700 leading-relaxed">
//                   Its ergonomic headset and intranasal applicator enable effective light delivery for a consistent
//                   experience.
//                 </p>
//               </div>

//               {/* Key specs */}
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <Clock className="w-5 h-5 text-gray-600" />
//                   <span className="font-medium text-black">~20 minutes per session</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Brain className="w-5 h-5 text-gray-600" />
//                   <span className="font-medium text-black">Easy, guided use at home</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Sun className="w-5 h-5 text-gray-600" />
//                   <span className="font-medium text-black">Powerful photobiomodulation output</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Zap className="w-5 h-5 text-gray-600" />
//                   <span className="font-medium text-black">Precision light placement</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Users className="w-5 h-5 text-gray-600" />
//                   <span className="font-medium text-black">Comfortable and practical design</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* What's in the box */}
//           <div className="bg-gray-200 rounded-2xl overflow-hidden">
//             <button
//               onClick={() => toggleSection('whats-in-box')}
//               className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//             >
//               <h3 className="text-xl font-bold text-black">What's in the box</h3>
//               {expandedSection === 'whats-in-box' ? (
//                 <Minus className="w-6 h-6 text-black" />
//               ) : (
//                 <Plus className="w-6 h-6 text-black" />
//               )}
//             </button>

//             {expandedSection === 'whats-in-box' && (
//               <div className="px-8 pb-8">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                   <div className="space-y-6">
//                     <p className="text-lg font-semibold text-black">Each device comes with:</p>
//                     <div className="space-y-4">
//                       {[
//                         '1 Neuro Gamma headset',
//                         '1 intranasal applicator',
//                         '1 controller unit',
//                         '1 power adapter with cable',
//                         'User guide',
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-center space-x-3">
//                           <div className="w-8 h-8 bg-[#EA1934] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
//                             {index + 1}
//                           </div>
//                           <span className="text-black font-medium">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <Image
//                       src="/neuro-gamma-4.png"
//                       alt="Neuro Gamma components"
//                       width={600}
//                       height={500}
//                       className="rounded-2xl"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Guides & tutorials */}
//           <div className="bg-gray-200 rounded-2xl overflow-hidden">
//             <button
//               onClick={() => toggleSection('user-guides')}
//               className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//             >
//               <h3 className="text-xl font-bold text-black">Guides & tutorials</h3>
//               {expandedSection === 'user-guides' ? (
//                 <Minus className="w-6 h-6 text-black" />
//               ) : (
//                 <Plus className="w-6 h-6 text-black" />
//               )}
//             </button>

//             {expandedSection === 'user-guides' && (
//               <div className="px-8 pb-8 space-y-8">
//                 <div>
//                   <h4 className="text-xl font-bold text-[#EA1934] mb-4">User guides</h4>
//                   <p className="text-gray-700 mb-6">
//                     Review these guides carefully before first use.
//                   </p>

//                   <div className="flex flex-wrap gap-4">
//                     {['Neuro Gamma user guide', 'Intranasal applicator instructions', 'Safety & care'].map(
//                       (guide) => (
//                         <button
//                           key={guide}
//                           className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-colors"
//                         >
//                           {guide}
//                         </button>
//                       ),
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-xl font-bold text-[#EA1934] mb-6">Video tutorials</h4>
//                   <div className="space-y-6">
//                     {/* Responsive 16:9 YouTube embed */}
//                     <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden bg-black">
//                       <iframe
//                         className="absolute inset-0 w-full h-full"
//                         src="https://www.youtube.com/embed/VIDEO_ID_1"
//                         title="Neuro Gamma | Setup Walkthrough"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowFullScreen
//                       />
//                     </div>

//                     <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden bg-black">
//                       <iframe
//                         className="absolute inset-0 w-full h-full"
//                         src="https://www.youtube.com/embed/VIDEO_ID_2"
//                         title="Neuro Gamma | Usage Tips"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowFullScreen
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }

//     if (activeTab === 'device') {
//       return (
//         <div className="space-y-12">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="relative">
//               <Image
//                 src="/neuro-gamma-4.png"
//                 alt="Neuro Gamma device on person"
//                 width={600}
//                 height={500}
//                 className="rounded-2xl"
//               />
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold text-[#EA1934]">Comfortable, science-driven design</h2>
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 Designed for consistent placement and ease of use, for a high-quality at-home experience.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <Sun className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-black">Optimized light delivery</p>
//                     <p className="text-gray-600">Comfortable headset with targeted coverage.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Zap className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-black">Reliable performance</p>
//                     <p className="text-gray-600">Simple controls and consistent output.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Brain className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-black">Built for regular sessions</p>
//                     <p className="text-gray-600">Designed to fit easily into your routine.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center">
//             <button className="bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors">
//               Shop Neuro Gamma now
//             </button>
//           </div>
//         </div>
//       );
//     }

//     if (activeTab === 'app') {
//       return (
//         <div className="space-y-12">
//           <div className="text-center space-y-8">
//             <h2 className="text-3xl font-bold text-black">How to use Neuro Gamma</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {/* Step 1 */}
//               <div className="bg-white rounded-2xl p-6 text-center space-y-4">
//                 <div className="relative mx-auto w-48 h-48">
//                   <Image src="/product-showcase-1.png" alt="Prepare device" fill className="object-cover rounded-xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#EA1934]">Prepare</h3>
//                 <p className="text-gray-700 text-sm">Place the headset comfortably and connect the intranasal applicator.</p>
//               </div>
//               {/* Step 2 */}
//               <div className="bg-white rounded-2xl p-6 text-center space-y-4">
//                 <div className="relative mx-auto w-48 h-48">
//                   <Image src="/product-showcase-2.png" alt="Start session" fill className="object-cover rounded-xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#EA1934]">Start</h3>
//                 <p className="text-gray-700 text-sm">Begin your session. A typical session is about 20 minutes.</p>
//               </div>
//               {/* Step 3 */}
//               <div className="bg-white rounded-2xl p-6 text-center space-y-4">
//                 <div className="relative mx-auto w-48 h-48">
//                   <Image src="/product-showcase-3.png" alt="Relax" fill className="object-cover rounded-xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#EA1934]">Relax</h3>
//                 <p className="text-gray-700 text-sm">Sit back and relax while the device runs the session.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="space-y-12">
//       {renderTabContent()}

//       {/* Common sections visible under any tab */}
//       {/* How the Neuro Gamma works */}
//       <div className="bg-gray-900 rounded-2xl overflow-hidden">
//         <div className="relative">
//           <Image
//             src="/brain-technology-image.png"
//             alt="How the Neuro Gamma works"
//             width={1200}
//             height={600}
//             className="w-full h-96 object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-start p-8">
//             <div className="space-y-4 text-black drop-shadow-md">
//               <h2 className="text-4xl font-bold">How the Neuro Gamma works</h2>
//               <button className="flex items-center space-x-3 bg-white/90 text-black px-8 py-4 rounded-full hover:bg-white">
//                 <Play className="w-6 h-6" />
//                 <span className="font-semibold text-lg">Watch the video</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Video grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {[
//           { title: 'Neuro Gamma', subtitle: 'Introduction Video', image: '/product-showcase-1.png' },
//           { title: 'Neuro Gamma', subtitle: 'Usage Guide', image: '/product-showcase-2.png' },
//           { title: 'Neuro Gamma', subtitle: 'Tips & Best Practices', image: '/product-showcase-3.png' },
//           { title: 'Neuro Gamma', subtitle: 'Maintenance & Care', image: '/hero.png' },
//         ].map((video, index) => (
//           <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden">
//             <div className="relative">
//               <Image
//                 src={video.image}
//                 alt={`${video.title} ${video.subtitle}`}
//                 width={300}
//                 height={200}
//                 className="w-full h-48 object-cover"
//               />

//             </div>
//             <div className="p-4 space-y-2">
//               <h3 className="font-bold text-black">{video.title}</h3>
//               <p className="text-sm text-gray-600">{video.subtitle}</p>
//               <button className="flex items-center space-x-2 text-[#EA1934] font-medium hover:opacity-90 transition-colors">
//                 <Play className="w-4 h-4" />
//                 <span>Watch the video</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Community section */}
//       <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8">
//         <div className="space-y-6">
//           <h2 className="text-2xl font-bold text-black">Join the Neuro community</h2>
//           <p className="text-gray-700">
//             Owning a Vielight device grants you access to updates, support resources, and a helpful user community.
//           </p>
//           <div className="space-y-3">
//             {[
//               'Helpful tutorials and guides',
//               'Responsive technical support',
//               'Tips from experienced users',
//               'Occasional webinars and updates',
//             ].map((benefit) => (
//               <div key={benefit} className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
//                   <svg className="w-3 h-3 text-[#EA1934]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-gray-700 text-sm">{benefit}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="relative">
//           <Image
//             src="/athletes-icon.png"
//             alt="Community"
//             width={500}
//             height={400}
//             className="rounded-xl object-contain"
//           />
//         </div>
//       </div>

//       {/* Research section */}
//       <div className="relative rounded-2xl overflow-hidden">
//         <Image
//           src="/vielight-benefits-background.jpg"
//           alt="Research background"
//           width={1200}
//           height={500}
//           className="w-full h-96 object-cover"
//         />
//         <div className="absolute inset-0 bg-[#EA1934] bg-opacity-95 flex items-center p-8">
//           <div className="max-w-3xl space-y-6 text-white">
//             <h2 className="text-4xl font-bold">Science-backed technology</h2>
//             <p className="text-xl">Vielight technology has been studied across multiple applications. Explore research highlights.</p>
//             <button className="bg-white text-[#EA1934] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//               See research
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeuroGammaDetails;


// components/products/NeuroGammaDetails.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Zap, Sun, Brain, Users, Shield, ArrowRight, Play, Minus, Plus } from 'lucide-react';

interface NeuroGammaDetailsProps {
  activeTab: string;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const NeuroGammaDetails: React.FC<NeuroGammaDetailsProps> = ({
  activeTab,
  expandedSection,
  toggleSection,
}) => {
  // State for video modal
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {/* Overview & Benefits Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative ">
          <Image
            src="/neuro-gamma-4.png"
            alt="Vielight Neuro Gamma overview"
            width={600}
            height={500}
            className="rounded-2xl w-full h-full "
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black">Overview and benefits</h2>

          {/* Benefit Tags */}
          <div className="flex flex-wrap gap-3">
            {['Focus', 'Memory', 'Mental clarity', 'Brain energy'].map((benefit) => (
              <span
                key={benefit}
                className="px-4 py-2 border border-gray-400 rounded-full text-sm text-gray-700"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Most of our research is accomplished with the Neuro Gamma. This device has a neuromodulating effect on 
              Gamma brain waves, which induces a more focused mental state. The Neuro Gamma 4 is sufficient for a 
              majority of people.
            </p>
          </div>

          {/* Key specs with icons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-black">20 minutes per session</span>
            </div>
            <div className="flex items-center space-x-3">
              <Brain className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-black">Results in 4 to 8 weeks</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sun className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-black">~5000 mW power | 250 mW/cm2</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-black">Adjustable to target any brain area</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-black">Bypasses hair and enables full contact</span>
            </div>
          </div>

          {/* The Neuro offers a nasal gateway section */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-bold text-black">The Neuro offers a nasal gateway to the brain</h3>
            <p className="text-gray-700">
              The Vielight Neuro also offers <strong>patented intranasal photobiomodulation technology.</strong>
            </p>
            <p className="text-gray-700">
              This is the best way to deliver near-infrared energy through the nose to the underside of the brain.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Brain className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-gray-700">
                  The olfactory bulb is directly connected to the brain regions responsible for keeping long-term memories
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Zap className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-gray-700">
                  The ventromedial prefrontal cortex is vital for cognitive processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works - Expandable section */}
      <div className="bg-gray-200 rounded-2xl overflow-hidden">
        <button
          onClick={() => toggleSection('how-it-works')}
          className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
        >
          <h3 className="text-xl font-bold text-black">How it works</h3>
          {expandedSection === 'how-it-works' ? (
            <Minus className="w-6 h-6 text-black" />
          ) : (
            <Plus className="w-6 h-6 text-black" />
          )}
        </button>

        {expandedSection === 'how-it-works' && (
          <div className="px-8 pb-8">
            <div className="space-y-4 text-gray-700">
              <p>
                The Neuro Gamma 4 has <strong>5 Vie-LED modules</strong> that emit pulsed 810nm near-infrared light at 40 Hz to stimulate the brain cells without generating heat.
              </p>
              <p>
                Although near-infrared light is mostly invisible, our design efficiently produces the <strong>highest amount of power in the industry</strong> (~300 mW/cm2 irradiance, 1000 mW per transcranial LED, 5000–6000 mW total). <a href="#" className="text-blue-600 underline">See 3rd party testing report.</a>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* What's in the box - Expandable section */}
      <div className="bg-gray-200 rounded-2xl overflow-hidden">
        <button
          onClick={() => toggleSection('whats-in-box')}
          className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
        >
          <h3 className="text-xl font-bold text-black">What's in the box</h3>
          {expandedSection === 'whats-in-box' ? (
            <Minus className="w-6 h-6 text-black" />
          ) : (
            <Plus className="w-6 h-6 text-black" />
          )}
        </button>

        {expandedSection === 'whats-in-box' && (
          <div className="px-8 pb-8">
            <p className="text-gray-700 mb-6">Each device comes with:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• 1 Neuro headset</li>
              <li>• 1 Neuro intranasal applicator</li>
              <li>• 1 charger</li>
              <li>• 1 device pouch</li>
              <li>• 1 silicon sleeve</li>
              <li>• 1 carry case</li>
            </ul>
          </div>
        )}
      </div>

      {/* Additional info & user guide - Expandable section */}
      <div className="bg-gray-200 rounded-2xl overflow-hidden">
        <button
          onClick={() => toggleSection('additional-info')}
          className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
        >
          <h3 className="text-xl font-bold text-black">Additional info & user guide</h3>
          {expandedSection === 'additional-info' ? (
            <Minus className="w-6 h-6 text-black" />
          ) : (
            <Plus className="w-6 h-6 text-black" />
          )}
        </button>

        {expandedSection === 'additional-info' && (
          <div className="px-8 pb-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Manufacturer</span>
                    <span>Vielight Inc</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">LED Power</span>
                    <span>1000 mW per module</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Power Density | Irradiance</span>
                    <div className="text-right text-sm">
                      <p>100-150 mW/cm² (3) : Rear Transcranial LEDs</p>
                      <p>75-125 mW/cm² (1) : Frontal Transcranial LED</p>
                      <p>25-50 mW/cm² (1) : Intranasal LED</p>
                      <p>(Potential 300 mW/cm² but safety-limited)</p>
                    </div>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Est. Irradiance Area</span>
                    <span>400cm² (+/- 50cm²) including intranasal module footprint</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Targeted Brain Network</span>
                    <div className="text-right text-sm">
                      <p>Default Mode Network</p>
                      <p>Modules are adjustable to target different areas</p>
                    </div>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Head Size Suitability</span>
                    <span>Minimum age: 5 years old based on published study data</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Medical Grade Certification</span>
                    <span>ISO13485 and MDSAP</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Safety Certification</span>
                    <span>TÜV Rheinland</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  See user guide
                </button>
                <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  See info sheet
                </button>
                <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  See research
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Section - What is the Vielight Neuro 4? */}
      <div className="rounded-2xl overflow-hidden bg-gray-200">
        <div className="relative">
          <Image
            src="/neuro-4-video-bg.jpg"
            alt="What is the Vielight Neuro 4?"
            width={1200}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start p-12">
            <div className="text-black space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                What is the Vielight<br />Neuro 4?
              </h2>
              <button
                onClick={() => setSelectedVideoUrl('https://youtu.be/VIDEO_ID_MAIN')}
                className="flex items-center space-x-3 text-black bg-white bg-opacity-20 px-8 py-4 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors border border-black border-opacity-30"
              >
                <Play className="w-6 h-6" />
                <span className="font-semibold text-lg">Watch the video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Three Video Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Vielight Neuro 4",
            subtitle: "Set Up Guide",
            image: "/video-setup-guide.jpg",
            url: "https://youtu.be/VIDEO_SETUP"
          },
          {
            title: "Can light penetrate the skull?",
            subtitle: "Real human skull demo",
            image: "/video-skull-demo.jpg", 
            url: "https://youtu.be/VIDEO_SKULL"
          },
          {
            title: "Vielight Neuro",
            subtitle: "Dementia and Brain Photobiomodulation Research",
            image: "/video-research.jpg",
            url: "https://youtu.be/VIDEO_RESEARCH"
          }
        ].map((video, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="relative">
              <Image
                src={video.image}
                alt={video.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div 
                className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => setSelectedVideoUrl(video.url)}
              >
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-bold text-black text-lg">{video.title}</h3>
                <p className="text-gray-600">{video.subtitle}</p>
              </div>
                            <button
                onClick={() => setSelectedVideoUrl(video.url)}
                className="flex items-center space-x-2 text-black bg-white bg-opacity-80 px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors border border-gray-300 text-sm"
              >
                <Play className="w-4 h-4" />
                <span>Watch the video</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="text-center">
        {/* <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
          Add Vielight Neuro Gamma 4 to cart
        </button> */}
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="bg-gray-200 rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq-difference')}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
          >
            <h3 className="text-xl font-semibold text-black">What is the difference with other Neuro models?</h3>
            <span className="text-3xl font-light">
              {expandedSection === 'faq-difference' ? '−' : '+'}
            </span>
          </button>

          {expandedSection === 'faq-difference' && (
            <div className="px-8 pb-8">
              <div className="space-y-4 text-gray-700">
                <p>The main difference among Neuro devices is which pulse rates it grants access to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The Neuro Gamma 4 pulses near-infrared light energy at 40 Hz, which has a neuromodulating effect on Gamma brain waves.</li>
                  <li>The Neuro Alpha 4 pulses near-infrared light energy at 10 Hz, which has a neuromodulating effect on Alpha brain waves.</li>
                  <li>The Neuro Duo 4 grants access to both the Alpha and Gamma pulse rates.</li>
                </ul>
                <p>The Gamma induces a more focused mental state while the Alpha induces a more relaxed mental state while The Neuro Duo 4 allows you to access both pulse rates.</p>
              </div>
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="bg-gray-200 rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq-usage')}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
          >
            <h3 className="text-xl font-semibold text-black">How often should I use the Neuro Gamma 4?</h3>
            <span className="text-3xl font-light">
              {expandedSection === 'faq-usage' ? '−' : '+'}
            </span>
          </button>

          {expandedSection === 'faq-usage' && (
            <div className="px-8 pb-8">
              <div className="space-y-4 text-gray-700">
                <p>At first, you can use your Neuro Gamma 4 every other day to six days a week, depending on your needs and health. It is timed for 20 minutes per session.</p>
                <p>Our general recommendation is to use it daily. The Neuro Gamma 4 is best used in the morning or early afternoon.</p>
                <p>If you have any additional questions about usage, you can <a href="#" className="text-blue-600 underline">get a free consultation with our experts</a>.</p>
              </div>
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="bg-gray-200 rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq-side-effects')}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
          >
            <h3 className="text-xl font-semibold text-black">Are there any contraindications or side effects?</h3>
            <span className="text-3xl font-light">
              {expandedSection === 'faq-side-effects' ? '−' : '+'}
            </span>
          </button>

          {expandedSection === 'faq-side-effects' && (
            <div className="px-8 pb-8">
              <div className="space-y-4 text-gray-700">
                <p>Vielight products are safe and well-tolerated by most users. However, there are some contraindications and potential side effects to be aware of:</p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-black">Contraindications:</p>
                  <p>We don't recommend using our devices if you have active brain bleeds or a history of seizures. Pregnant women should also consult with their healthcare provider before using photobiomodulation devices.</p>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-black">Side effects:</p>
                  <p>Some users may experience mild and temporary side effects, such as headaches, dizziness, or slight discomfort at the application site. These usually subside as the body adjusts to the therapy.</p>
                </div>

                <p>If you have any additional questions, feel free to <a href="#" className="text-blue-600 underline">reach out to us</a>!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Section - Vielight vs Them */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vielight Card */}
        <div className="border-4 border-[#EA1934] rounded-2xl p-2 bg-white">
          <div className="relative mb-6">
            <Image
              src="/vielight-brain-visualization.jpg"
              alt="Vielight brain visualization"
              width={400}
              height={200}
              className="w-full h-70 object-cover rounded-xl"
            />
          </div>
          <div className="text-center space-y-4">
            <div className="text-[#EA1934] text-2xl font-bold">VIELIGHT</div>
            <div className="space-y-3 text-gray-700">
              <p><strong>200-300% sunlight irradiance</strong></p>
              <p><strong>Patented intranasal applicator</strong></p>
              <p><strong>Full contact with scalp</strong></p>
              <p><strong>Modular design for a better fit</strong></p>
            </div>
            <div className="text-2xl font-bold text-black">$1,799</div>
          </div>
        </div>

        {/* Them Card */}
        <div className="border-2 border-gray-300 rounded-2xl p-2 bg-gray-50">
          <div className="relative mb-6">
            <Image
              src="/competitor-device.jpg"
              alt="Competitor device"
              width={400}
              height={200}
              className="w-full h-70 object-cover rounded-xl"
            />
          </div>
          <div className="text-center space-y-4">
            <div className="text-gray-600 text-2xl font-bold">Them</div>
            <div className="space-y-3 text-gray-600">
              <p>≤4-10% sunlight irradiance</p>
              <p>No intranasal applicator</p>
              <p>No full contact</p>
              <p>Non-adjustable</p>
            </div>
            <div className="text-2xl font-bold text-gray-700">
              +$3,200 <span className="text-[#EA1934] text-lg">+78% ▲</span>
            </div>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/research-lab-background.jpg"
          alt="Research lab with person using Neuro Gamma"
          width={1200}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0  flex items-center p-12">
          <div className="max-w-2xl space-y-8 text-black">
            <h2 className="text-4xl font-bold leading-tight">Feel better with the Neuro Gamma</h2>
            <p className="text-xl leading-relaxed">
              We have over 35 published and ongoing clinical trials with Vielight technology. 
              The Neuro Gamma 4 has been used in research such as:
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                "Alzheimer's disease (Dementia)",
                "Parkinson's disease", 
                "Traumatic brain injury",
                "Cognitive creativity",
                "Neuromodulation"
              ].map((condition) => (
                <span key={condition} className="px-5 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-sm font-medium">
                  {condition}
                </span>
              ))}
            </div>

            <button className="bg-[#EA1934] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              See research
            </button>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal Popup */}
      {selectedVideoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-2 max-w-5xl w-full max-h-[90vh]">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setSelectedVideoUrl(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl px-4 py-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/') + '?autoplay=1'}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeuroGammaDetails;