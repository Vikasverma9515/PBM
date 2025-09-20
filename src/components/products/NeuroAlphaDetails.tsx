import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Zap, Sun, Brain, Users, Shield, ArrowRight, Play, Minus, Plus } from 'lucide-react';

interface NeuroAlphaDetailsProps {
  activeTab: string;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const NeuroAlphaDetails: React.FC<NeuroAlphaDetailsProps> = ({
  activeTab,
  expandedSection,
  toggleSection,
}) => {
  // State for video modal
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-16">
      {/* Overview & Benefits Section - MOBILE RESPONSIVE */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <Image
            src="/neuro-gamma-4.png"
            alt="Vielight Neuro Gamma overview"
            width={600}
            height={500}
            className="rounded-xl sm:rounded-2xl w-full h-full"
          />
        </div>

        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">Overview and benefits</h2>

          {/* Benefit Tags - MOBILE RESPONSIVE */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['Sleep', 'Stress', 'Creativity'].map((benefit) => (
              <span
                key={benefit}
                className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-400 rounded-full text-xs sm:text-sm text-gray-700"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              This device has a neuromodulating effect on Alpha brain waves, which induces a more relaxed mental state. Alpha waves are linked to the brain's resting state and help with mental coordination, mindfulness, and learning. Athletes often cite the "flow" state, which has strong correlations with Alpha.
            </p>
          </div>

          {/* Key specs with icons - MOBILE RESPONSIVE */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
              <span className="font-medium text-black text-sm sm:text-base">20 minutes per session</span>
            </div>
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
              <span className="font-medium text-black text-sm sm:text-base">Results in 4 to 8 weeks</span>
            </div>
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
              <span className="font-medium text-black text-sm sm:text-base">~5000 mW power | 250 mW/cm2</span>
            </div>
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
              <span className="font-medium text-black text-sm sm:text-base">Adjustable to target any brain area</span>
            </div>
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
              <span className="font-medium text-black text-sm sm:text-base">Bypasses hair and enables full contact</span>
            </div>
          </div>

          {/* The Neuro offers a nasal gateway section - MOBILE RESPONSIVE */}
          <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
            <h3 className="text-lg sm:text-xl font-bold text-black">The Neuro offers a nasal gateway to the brain</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              The Vielight Neuro also offers <strong>patented intranasal photobiomodulation technology.</strong>
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              This is the best way to deliver near-infrared energy through the nose to the underside of the brain.
            </p>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start space-x-2.5 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-0.5 sm:mt-1">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  The olfactory bulb is directly connected to the brain regions responsible for keeping long-term memories
                </p>
              </div>

              <div className="flex items-start space-x-2.5 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-0.5 sm:mt-1">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  The ventromedial prefrontal cortex is vital for cognitive processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works - MOBILE RESPONSIVE */}
      <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
        <button
          onClick={() => toggleSection('how-it-works')}
          className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
        >
          <h3 className="text-lg sm:text-xl font-bold text-black">How it works</h3>
          {expandedSection === 'how-it-works' ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          )}
        </button>

        {expandedSection === 'how-it-works' && (
          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
              <p>
                The Neuro Alpha 4 has <strong>5 Vie-LED modules</strong> that emit pulsed 810nm near-infrared light at 10 Hz to stimulate the brain cells without generating heat.
              </p>
              <p>
                Although near-infrared light is mostly invisible, our design efficiently produces the <strong>highest amount of power in the industry</strong> (~300 mW/cm2 irradiance, 1000 mW per transcranial LED, 5000–6000 mW total). <a href="#" className="font-bold underline">See 3rd party testing report.</a>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* What's in the box - MOBILE RESPONSIVE */}
      <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
        <button
          onClick={() => toggleSection('whats-in-box')}
          className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
        >
          <h3 className="text-lg sm:text-xl font-bold text-black">What's in the box</h3>
          {expandedSection === 'whats-in-box' ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          )}
        </button>

        {expandedSection === 'whats-in-box' && (
          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">Each device comes with:</p>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
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

      {/* Additional info & user guide - MOBILE RESPONSIVE */}
      <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
        <button
          onClick={() => toggleSection('additional-info')}
          className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
        >
          <h3 className="text-lg sm:text-xl font-bold text-black">Additional info & user guide</h3>
          {expandedSection === 'additional-info' ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
          )}
        </button>

        {expandedSection === 'additional-info' && (
          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Manufacturer</span>
                    <span className="text-sm sm:text-base">Vielight Inc</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">LED Power</span>
                    <span className="text-sm sm:text-base">1000 mW per module</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Power Density | Irradiance</span>
                    <div className="text-left sm:text-right text-xs sm:text-sm space-y-1">
                      <p>100-150 mW/cm² (3) : Rear Transcranial LEDs</p>
                      <p>75-125 mW/cm² (1) : Frontal Transcranial LED</p>
                      <p>25-50 mW/cm² (1) : Intranasal LED</p>
                      <p>(Potential 300 mW/cm² but safety-limited)</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Est. Irradiance Area</span>
                    <span className="text-xs sm:text-sm">400cm² (+/- 50cm²) including intranasal module footprint</span>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Targeted Brain Network</span>
                    <div className="text-left sm:text-right text-xs sm:text-sm space-y-1">
                      <p>Default Mode Network</p>
                      <p>Modules are adjustable to target different areas</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Head Size Suitability</span>
                    <span className="text-xs sm:text-sm">Minimum age: 5 years old based on published study data</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Medical Grade Certification</span>
                    <span className="text-sm sm:text-base">ISO13485 and MDSAP</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2 space-y-1 sm:space-y-0">
                    <span className="font-semibold text-sm sm:text-base">Safety Certification</span>
                    <span className="text-sm sm:text-base">TÜV Rheinland</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 pt-4 sm:pt-6">
                <button className="bg-[#EA1934] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-sm lg:text-base">
                  See user guide
                </button>
                <button className="bg-[#EA1934] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-sm lg:text-base">
                  See info sheet
                </button>
                <button className="bg-[#EA1934] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-sm lg:text-base">
                  See research
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Section - MOBILE RESPONSIVE */}
      <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200">
        <div className="relative">
          <Image
            src="/neuro-4-video-bg.jpg"
            alt="What is the Vielight Neuro 4?"
            width={1200}
            height={400}
            className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-6 lg:p-8 xl:p-12">
            <div className="text-black space-y-3 sm:space-y-4 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                What is the Vielight<br />Neuro 4?
              </h2>
              <button
                onClick={() => setSelectedVideoUrl('https://youtu.be/iWA-goXrORU')}
                className="flex items-center space-x-2 sm:space-x-3 text-black bg-white bg-opacity-20 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors border border-black border-opacity-30 text-sm sm:text-base lg:text-lg"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span className="font-semibold">Watch the video</span>
              </button>
            </div>
          </div>
        </div>
              </div>

      {/* Three Video Cards - MOBILE RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          {
            title: "Vielight Neuro 4",
            subtitle: "Set Up Guide",
            image: "/video-setup-guide.jpg",
            url: "https://youtu.be/CEcv7ciIFmA"
          },
          {
            title: "Can light penetrate the skull?",
            subtitle: "Real human skull demo",
            image: "/video-skull-demo.jpg", 
            url: "https://youtu.be/RZBBour-S1k"
          },
          {
            title: "The inventor and scientists",
            subtitle: "The science behind the Vielight Neuro",
            image: "/inventor.png",
            url: "https://youtu.be/sNVp-Q20U9o"
          }
        ].map((video, index) => (
          <div key={index} className="bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1">
            <div className="relative">
              <Image
                src={video.image}
                alt={video.title}
                width={400}
                height={250}
                className="w-full h-32 sm:h-40 lg:h-48 object-cover"
              />
              <div 
                className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => setSelectedVideoUrl(video.url)}
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
              <div>
                <h3 className="font-bold text-black text-sm sm:text-base lg:text-lg">{video.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{video.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedVideoUrl(video.url)}
                className="flex items-center space-x-1.5 sm:space-x-2 text-black bg-white bg-opacity-80 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full hover:bg-opacity-90 transition-colors border border-gray-300 text-xs sm:text-sm"
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Watch the video</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section - MOBILE RESPONSIVE */}
      <div className="space-y-3 sm:space-y-4">
        {/* FAQ 1 */}
        <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq-difference')}
            className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black pr-4">What is the difference with other Neuro models?</h3>
            <span className="text-2xl sm:text-3xl font-light flex-shrink-0">
              {expandedSection === 'faq-difference' ? '−' : '+'}
            </span>
          </button>

          {expandedSection === 'faq-difference' && (
            <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <p>The main difference among Neuro devices is which pulse rates it grants access to:</p>
                <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 pl-4">
                  <li>The Neuro Alpha 4 pulses near-infrared light energy at 10 Hz, which has a neuromodulating effect on Alpha brain waves.</li>
                  <li>The Neuro Gamma 4 pulses near-infrared light energy at 40 Hz, which has a neuromodulating effect on Gamma brain waves.</li>
                  <li>The Neuro Duo 4 grants access to both the Alpha and Gamma pulse rates.</li>
                </ul>
                <p>The Alpha induces a more relaxed mental state while the Gamma induces a more focused mental state. The Neuro Duo 4 allows you to access both pulse rates.</p>
              </div>
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq-usage')}
            className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black pr-4">How often should I use the Neuro Alpha 4?</h3>
            <span className="text-2xl sm:text-3xl font-light flex-shrink-0">
              {expandedSection === 'faq-usage' ? '−' : '+'}
            </span>
          </button>

          {expandedSection === 'faq-usage' && (
            <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <p>At first, you can use your Neuro Alpha 4 every other day to six days a week, depending on your needs and health. It is timed for 20 minutes per session.</p>
                <p>Our general recommendation is to use it daily. The Neuro Alpha 4 is best used in the evening or before sleep.</p>
                <p>If you have any additional questions about usage, you can <a href="#" className="text-blue-600 underline">get a free consultation with our experts</a>.</p>
              </div>
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq-side-effects')}
            className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black pr-4">Are there any contraindications or side effects?</h3>
            <span className="text-2xl sm:text-3xl font-light flex-shrink-0">
              {expandedSection === 'faq-side-effects' ? '−' : '+'}
            </span>
          </button>

          {expandedSection === 'faq-side-effects' && (
            <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <p>Vielight products are safe and well-tolerated by most users. However, there are some contraindications and potential side effects to be aware of:</p>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="font-semibold text-black text-sm sm:text-base">Contraindications:</p>
                  <p>We don't recommend using our devices if you have active brain bleeds or a history of seizures. Pregnant women should also consult with their healthcare provider before using photobiomodulation devices.</p>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <p className="font-semibold text-black text-sm sm:text-base">Side effects:</p>
                  <p>Some users may experience mild and temporary side effects, such as headaches, dizziness, or slight discomfort at the application site. These usually subside as the body adjusts to the therapy.</p>
                </div>

                <p>If you have any additional questions, feel free to <a href="#" className="text-blue-600 underline">reach out to us</a>!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Section - MOBILE RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Vielight Card */}
        <div className="border-4 border-[#EA1934] rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-white">
          <div className="relative mb-4 sm:mb-6">
            <Image
              src="/vielight-brain-visualization.jpg"
              alt="Vielight brain visualization"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl"
            />
          </div>
          <div className="text-center space-y-3 sm:space-y-4 p-2 sm:p-3">
            <div className="text-[#EA1934] text-lg sm:text-xl lg:text-2xl font-bold">VIELIGHT</div>
            <div className="space-y-2 sm:space-y-3 text-gray-700">
              <p className="text-xs sm:text-sm lg:text-base"><strong>200-300% sunlight irradiance</strong></p>
              <p className="text-xs sm:text-sm lg:text-base"><strong>Patented intranasal applicator</strong></p>
              <p className="text-xs sm:text-sm lg:text-base"><strong>Full contact with scalp</strong></p>
              <p className="text-xs sm:text-sm lg:text-base"><strong>Modular design for a better fit</strong></p>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-black">$1,799</div>
          </div>
        </div>

        {/* Them Card */}
        <div className="border-2 border-gray-300 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-gray-50">
          <div className="relative mb-4 sm:mb-6">
            <Image
              src="/competitor-device.jpg"
              alt="Competitor device"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl"
            />
          </div>
          <div className="text-center space-y-3 sm:space-y-4 p-2 sm:p-3">
            <div className="text-gray-600 text-lg sm:text-xl lg:text-2xl font-bold">Them</div>
            <div className="space-y-2 sm:space-y-3 text-gray-600">
              <p className="text-xs sm:text-sm lg:text-base">≤4-10% sunlight irradiance</p>
              <p className="text-xs sm:text-sm lg:text-base">No intranasal applicator</p>
              <p className="text-xs sm:text-sm lg:text-base">No full contact</p>
              <p className="text-xs sm:text-sm lg:text-base">Non-adjustable</p>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-700">
              +$3,200 <span className="text-[#EA1934] text-sm sm:text-base lg:text-lg">+78% ▲</span>
            </div>
          </div>
        </div>
      </div>

      {/* Research Section - MOBILE RESPONSIVE */}
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
        <Image
          src="/research-lab-background.jpg"
          alt="Research lab with person using Neuro Alpha"
          width={1200}
          height={500}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-6 lg:space-y-8 text-black">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">Feel better with the Neuro Alpha 4</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              We have over 35 published and ongoing clinical trials with Vielight technology.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              {[
                "Cognitive creativity",
                "Cellular enhancement", 
                "PTSD",
                "Neuromodulation"
              ].map((condition) => (
                <span key={condition} className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-xs sm:text-sm font-medium">
                  {condition}
                </span>
              ))}
            </div>

            <button className="bg-[#EA1934] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-700 transition-colors">
              See research
            </button>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal Popup - MOBILE RESPONSIVE */}
      {selectedVideoUrl && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 max-w-sm sm:max-w-3xl lg:max-w-5xl w-full max-h-[90vh]">
            <div className="flex justify-end mb-1 sm:mb-2">
              <button
                onClick={() => setSelectedVideoUrl(null)}
                className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl lg:text-3xl px-2 sm:px-3 lg:px-4 py-1 sm:py-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>
            </div>
            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/') + '?autoplay=1'}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg sm:rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeuroAlphaDetails;


// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Clock, Zap, Sun, Brain, Users, Shield, ArrowRight, Play, Minus, Plus } from 'lucide-react';

// interface NeuroAlphaDetailsProps {
//   activeTab: string;
//   expandedSection: string | null;
//   toggleSection: (section: string) => void;
// }

// const NeuroAlphaDetails: React.FC<NeuroAlphaDetailsProps> = ({
//   activeTab,
//   expandedSection,
//   toggleSection,
// }) => {
//   // State for video modal
//   const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

//   return (
//     <div className="space-y-16">
//       {/* Overview & Benefits Section */}
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <div className="relative ">
//           <Image
//             src="/neuro-gamma-4.png"
//             alt="Vielight Neuro Gamma overview"
//             width={600}
//             height={500}
//             className="rounded-2xl w-full h-full "
//           />
//         </div>

//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-black">Overview and benefits</h2>

//           {/* Benefit Tags */}
//           <div className="flex flex-wrap gap-3">
//             {['Sleep','Stress','Creativity'].map((benefit) => (
//               <span
//                 key={benefit}
//                 className="px-4 py-2 border border-gray-400 rounded-full text-sm text-gray-700"
//               >
//                 {benefit}
//               </span>
//             ))}
//           </div>

//           <div className="space-y-4">
//             <p className="text-gray-700 leading-relaxed">
//              This device has a neuromodulating effect on Alpha brain waves, which induces a more relaxed mental state. Alpha waves are linked to the brain’s resting state and help with mental coordination, mindfulness, and learning. Athletes often cite the “flow” state, which has strong correlations with Alpha.
//             </p>
//           </div>

//           {/* Key specs with icons */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <Clock className="w-5 h-5 text-gray-600" />
//               <span className="font-medium text-black">20 minutes per session</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Brain className="w-5 h-5 text-gray-600" />
//               <span className="font-medium text-black">Results in 4 to 8 weeks</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Sun className="w-5 h-5 text-gray-600" />
//               <span className="font-medium text-black">~5000 mW power | 250 mW/cm2</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Zap className="w-5 h-5 text-gray-600" />
//               <span className="font-medium text-black">Adjustable to target any brain area</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Users className="w-5 h-5 text-gray-600" />
//               <span className="font-medium text-black">Bypasses hair and enables full contact</span>
//             </div>
//           </div>

//           {/* The Neuro offers a nasal gateway section */}
//           <div className="space-y-4 pt-6">
//             <h3 className="text-xl font-bold text-black">The Neuro offers a nasal gateway to the brain</h3>
//             <p className="text-gray-700">
//               The Vielight Neuro also offers <strong>patented intranasal photobiomodulation technology.</strong>
//             </p>
//             <p className="text-gray-700">
//               This is the best way to deliver near-infrared energy through the nose to the underside of the brain.
//             </p>

//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 flex items-center justify-center mt-1">
//                   <Brain className="w-5 h-5 text-gray-600" />
//                 </div>
//                 <p className="text-gray-700">
//                   The olfactory bulb is directly connected to the brain regions responsible for keeping long-term memories
//                 </p>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="w-6 h-6 flex items-center justify-center mt-1">
//                   <Zap className="w-5 h-5 text-gray-600" />
//                 </div>
//                 <p className="text-gray-700">
//                   The ventromedial prefrontal cortex is vital for cognitive processes
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* How it works - Expandable section */}
//       <div className="bg-gray-200 rounded-2xl overflow-hidden">
//         <button
//           onClick={() => toggleSection('how-it-works')}
//           className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//         >
//           <h3 className="text-xl font-bold text-black">How it works</h3>
//           {expandedSection === 'how-it-works' ? (
//             <Minus className="w-6 h-6 text-black" />
//           ) : (
//             <Plus className="w-6 h-6 text-black" />
//           )}
//         </button>

//         {expandedSection === 'how-it-works' && (
//           <div className="px-8 pb-8">
//             <div className="space-y-4 text-gray-700">
//               <p>
//                 The Neuro Alpha 4 has <strong>5 Vie-LED modules</strong>  that emit pulsed 810nm near-infrared light at 10 Hz  to stimulate the brain cells without generating heat.
//               </p>
//               <p>
//                 Although near-infrared light is mostly invisible, our design efficiently produces the <strong>highest amount of power in the industry</strong> (~300 mW/cm2 irradiance, 1000 mW per transcranial LED, 5000–6000 mW total). <a href="#" className="font-bold underline">See 3rd party testing report.</a>
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* What's in the box - Expandable section */}
//       <div className="bg-gray-200 rounded-2xl overflow-hidden">
//         <button
//           onClick={() => toggleSection('whats-in-box')}
//           className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//         >
//           <h3 className="text-xl font-bold text-black">What's in the box</h3>
//           {expandedSection === 'whats-in-box' ? (
//             <Minus className="w-6 h-6 text-black" />
//           ) : (
//             <Plus className="w-6 h-6 text-black" />
//           )}
//         </button>

//         {expandedSection === 'whats-in-box' && (
//           <div className="px-8 pb-8">
//             <p className="text-gray-700 mb-6">Each device comes with:</p>
//             <ul className="space-y-2 text-gray-700">
//               <li>• 1 Neuro headset</li>
//               <li>• 1 Neuro intranasal applicator</li>
//               <li>• 1 charger</li>
//               <li>• 1 device pouch</li>
//               <li>• 1 silicon sleeve</li>
//               <li>• 1 carry case</li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Additional info & user guide - Expandable section */}
//       <div className="bg-gray-200 rounded-2xl overflow-hidden">
//         <button
//           onClick={() => toggleSection('additional-info')}
//           className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//         >
//           <h3 className="text-xl font-bold text-black">Additional info & user guide</h3>
//           {expandedSection === 'additional-info' ? (
//             <Minus className="w-6 h-6 text-black" />
//           ) : (
//             <Plus className="w-6 h-6 text-black" />
//           )}
//         </button>

//         {expandedSection === 'additional-info' && (
//           <div className="px-8 pb-8">
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Manufacturer</span>
//                     <span>Vielight Inc</span>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">LED Power</span>
//                     <span>1000 mW per module</span>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Power Density | Irradiance</span>
//                     <div className="text-right text-sm">
//                       <p>100-150 mW/cm² (3) : Rear Transcranial LEDs</p>
//                       <p>75-125 mW/cm² (1) : Frontal Transcranial LED</p>
//                       <p>25-50 mW/cm² (1) : Intranasal LED</p>
//                       <p>(Potential 300 mW/cm² but safety-limited)</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Est. Irradiance Area</span>
//                     <span>400cm² (+/- 50cm²) including intranasal module footprint</span>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Targeted Brain Network</span>
//                     <div className="text-right text-sm">
//                       <p>Default Mode Network</p>
//                       <p>Modules are adjustable to target different areas</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Head Size Suitability</span>
//                     <span>Minimum age: 5 years old based on published study data</span>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Medical Grade Certification</span>
//                     <span>ISO13485 and MDSAP</span>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span className="font-semibold">Safety Certification</span>
//                     <span>TÜV Rheinland</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4 pt-6">
//                 <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                   See user guide
//                 </button>
//                 <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                   See info sheet
//                 </button>
//                 <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                   See research
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Video Section - What is the Vielight Neuro 4? */}
//       <div className="rounded-2xl overflow-hidden bg-gray-200">
//         <div className="relative">
//           <Image
//             src="/neuro-4-video-bg.jpg"
//             alt="What is the Vielight Neuro 4?"
//             width={1200}
//             height={400}
//             className="w-full h-96 object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-start p-12">
//             <div className="text-black space-y-6">
//               <h2 className="text-4xl font-bold leading-tight">
//                 What is the Vielight<br />Neuro 4?
//               </h2>
//               <button
//                 onClick={() => setSelectedVideoUrl('https://youtu.be/iWA-goXrORU')}
//                 className="flex items-center space-x-3 text-black bg-white bg-opacity-20 px-8 py-4 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors border border-black border-opacity-30"
//               >
//                 <Play className="w-6 h-6" />
//                 <span className="font-semibold text-lg">Watch the video</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Three Video Cards */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {[
//           {
//             title: "Vielight Neuro 4",
//             subtitle: "Set Up Guide",
//             image: "/video-setup-guide.jpg",
//             url: "https://youtu.be/CEcv7ciIFmA"
//           },
//           {
//             title: "Can light penetrate the skull?",
//             subtitle: "Real human skull demo",
//             image: "/video-skull-demo.jpg", 
//             url: "https://youtu.be/RZBBour-S1k"
//           },
//           {
//             title: "The inventor and scientists",
//             subtitle: "The science behind the Vielight Neuro",
//             image: "/inventor.png",
//             url: "https://youtu.be/sNVp-Q20U9o"
//           }
//         ].map((video, index) => (
//           <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden">
//             <div className="relative">
//               <Image
//                 src={video.image}
//                 alt={video.title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div 
//                 className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
//                 onClick={() => setSelectedVideoUrl(video.url)}
//               >
//                 <Play className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               <div>
//                 <h3 className="font-bold text-black text-lg">{video.title}</h3>
//                 <p className="text-gray-600">{video.subtitle}</p>
//               </div>
//                             <button
//                 onClick={() => setSelectedVideoUrl(video.url)}
//                 className="flex items-center space-x-2 text-black bg-white bg-opacity-80 px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors border border-gray-300 text-sm"
//               >
//                 <Play className="w-4 h-4" />
//                 <span>Watch the video</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add to Cart Button */}
//       <div className="text-center">
//         {/* <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
//           Add Vielight Neuro Gamma 4 to cart
//         </button> */}
//       </div>

//       {/* FAQ Section */}
//       <div className="space-y-4">
//   {/* FAQ 1 */}
//   <div className="bg-gray-200 rounded-2xl overflow-hidden">
//     <button
//       onClick={() => toggleSection('faq-difference')}
//       className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
//     >
//       <h3 className="text-xl font-semibold text-black">What is the difference with other Neuro models?</h3>
//       <span className="text-3xl font-light">
//         {expandedSection === 'faq-difference' ? '−' : '+'}
//       </span>
//     </button>

//     {expandedSection === 'faq-difference' && (
//       <div className="px-8 pb-8">
//         <div className="space-y-4 text-gray-700">
//           <p>The main difference among Neuro devices is which pulse rates it grants access to:</p>
//           <ul className="list-disc list-inside space-y-2">
//             <li>The Neuro Alpha 4 pulses near-infrared light energy at 10 Hz, which has a neuromodulating effect on Alpha brain waves.</li>
//             <li>The Neuro Gamma 4 pulses near-infrared light energy at 40 Hz, which has a neuromodulating effect on Gamma brain waves.</li>
//             <li>The Neuro Duo 4 grants access to both the Alpha and Gamma pulse rates.</li>
//           </ul>
//           <p>The Alpha induces a more relaxed mental state while the Gamma induces a more focused mental state. The Neuro Duo 4 allows you to access both pulse rates.</p>
//         </div>
//       </div>
//     )}
//   </div>

//   {/* FAQ 2 */}
//   <div className="bg-gray-200 rounded-2xl overflow-hidden">
//     <button
//       onClick={() => toggleSection('faq-usage')}
//       className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
//     >
//       <h3 className="text-xl font-semibold text-black">How often should I use the Neuro Gamma 4?</h3>
//       <span className="text-3xl font-light">
//         {expandedSection === 'faq-usage' ? '−' : '+'}
//       </span>
//     </button>

//     {expandedSection === 'faq-usage' && (
//       <div className="px-8 pb-8">
//         <div className="space-y-4 text-gray-700">
//           <p>At first, you can use your Neuro Gamma 4 every other day to six days a week, depending on your needs and health. It is timed for 20 minutes per session.</p>
//           <p>Our general recommendation is to use it daily. The Neuro Gamma 4 is best used in the morning or early afternoon.</p>
//           <p>If you have any additional questions about usage, you can <a href="#" className="text-blue-600 underline">get a free consultation with our experts</a>.</p>
//         </div>
//       </div>
//     )}
//   </div>

//   {/* FAQ 3 */}
//   <div className="bg-gray-200 rounded-2xl overflow-hidden">
//     <button
//       onClick={() => toggleSection('faq-side-effects')}
//       className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
//     >
//       <h3 className="text-xl font-semibold text-black">Are there any contraindications or side effects?</h3>
//       <span className="text-3xl font-light">
//         {expandedSection === 'faq-side-effects' ? '−' : '+'}
//       </span>
//     </button>

//     {expandedSection === 'faq-side-effects' && (
//       <div className="px-8 pb-8">
//         <div className="space-y-4 text-gray-700">
//           <p>Vielight products are safe and well-tolerated by most users. However, there are some contraindications and potential side effects to be aware of:</p>
          
//           <div className="space-y-2">
//             <p className="font-semibold text-black">Contraindications:</p>
//             <p>We don't recommend using our devices if you have active brain bleeds or a history of seizures. Pregnant women should also consult with their healthcare provider before using photobiomodulation devices.</p>
//           </div>

//           <div className="space-y-2">
//             <p className="font-semibold text-black">Side effects:</p>
//             <p>Some users may experience mild and temporary side effects, such as headaches, dizziness, or slight discomfort at the application site. These usually subside as the body adjusts to the therapy.</p>
//           </div>

//           <p>If you have any additional questions, feel free to <a href="#" className="text-blue-600 underline">reach out to us</a>!</p>
//         </div>
//       </div>
//     )}
//   </div>
// </div>

//       {/* Comparison Section - Vielight vs Them */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Vielight Card */}
//         <div className="border-4 border-[#EA1934] rounded-2xl p-2 bg-white">
//           <div className="relative mb-6">
//             <Image
//               src="/vielight-brain-visualization.jpg"
//               alt="Vielight brain visualization"
//               width={400}
//               height={200}
//               className="w-full h-70 object-cover rounded-xl"
//             />
//           </div>
//           <div className="text-center space-y-4">
//             <div className="text-[#EA1934] text-2xl font-bold">VIELIGHT</div>
//             <div className="space-y-3 text-gray-700">
//               <p><strong>200-300% sunlight irradiance</strong></p>
//               <p><strong>Patented intranasal applicator</strong></p>
//               <p><strong>Full contact with scalp</strong></p>
//               <p><strong>Modular design for a better fit</strong></p>
//             </div>
//             <div className="text-2xl font-bold text-black">$1,799</div>
//           </div>
//         </div>

//         {/* Them Card */}
//         <div className="border-2 border-gray-300 rounded-2xl p-2 bg-gray-50">
//           <div className="relative mb-6">
//             <Image
//               src="/competitor-device.jpg"
//               alt="Competitor device"
//               width={400}
//               height={200}
//               className="w-full h-70 object-cover rounded-xl"
//             />
//           </div>
//           <div className="text-center space-y-4">
//             <div className="text-gray-600 text-2xl font-bold">Them</div>
//             <div className="space-y-3 text-gray-600">
//               <p>≤4-10% sunlight irradiance</p>
//               <p>No intranasal applicator</p>
//               <p>No full contact</p>
//               <p>Non-adjustable</p>
//             </div>
//             <div className="text-2xl font-bold text-gray-700">
//               +$3,200 <span className="text-[#EA1934] text-lg">+78% ▲</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Research Section */}
//       <div className="relative rounded-2xl overflow-hidden">
//         <Image
//           src="/research-lab-background.jpg"
//           alt="Research lab with person using Neuro Gamma"
//           width={1200}
//           height={500}
//           className="w-full h-[500px] object-cover"
//         />
//         <div className="absolute inset-0  flex items-center p-12">
//           <div className="max-w-2xl space-y-8 text-black">
//             <h2 className="text-4xl font-bold leading-tight">Feel better with the Neuro Alpha 4</h2>
//             <p className="text-xl leading-relaxed">
//               We have over 35 published and ongoing clinical trials with Vielight technology. 
            
//             </p>

//             <div className="flex flex-wrap gap-4">
//               {[
                
                
                
//                 "Cognitive creativity",
//                 "Cellular  enhancement",
//                 "PTSD",
                
//                 "Neuromodulation"
//               ].map((condition) => (
//                 <span key={condition} className="px-5 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-sm font-medium">
//                   {condition}
//                 </span>
//               ))}
//             </div>

//             <button className="bg-[#EA1934] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
//               See research
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* YouTube Video Modal Popup */}
//       {selectedVideoUrl && (
//         <div className="fixed inset-0 bg-gray-400/55 bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-2 max-w-5xl w-full max-h-[90vh]">
//             <div className="flex justify-end mb-2">
//               <button
//                 onClick={() => setSelectedVideoUrl(null)}
//                 className="text-gray-500 hover:text-gray-700 text-3xl px-4 py-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="aspect-video rounded-xl overflow-hidden">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={selectedVideoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/') + '?autoplay=1'}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//                 className="rounded-xl"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NeuroAlphaDetails;