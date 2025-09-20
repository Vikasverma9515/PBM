// components/products/NeuroPro2Details.tsx

import Image from 'next/image';
import { useState } from 'react';
import { Clock, Zap, Sun, Brain, Users, Shield, ArrowRight, Play, Minus, Plus } from 'lucide-react';

interface NeuroPro2DetailsProps {
  activeTab: string;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const NeuroPro2Details: React.FC<NeuroPro2DetailsProps> = ({
  activeTab,
  expandedSection,
  toggleSection
}) => {
  // Neuro Pro 2 specific features (from the screenshot)
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-gray-600" />,
      title: "Medical grade technology",
      description: ""
    },
    {
      icon: <Users className="w-6 h-6 text-gray-600" />,
      title: "Ideal for practitioners, biohackers and meditators",
      description: ""
    },
    {
      icon: <Shield className="w-6 h-6 text-gray-600" />,
      title: "2-year warranty and 6-month return policy",
      description: ""
    }
  ];

  const renderTabContent = () => {
    if (activeTab === 'general') {
      return (
        <div className="space-y-12">
          {/* Overview & Benefits Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Image
                src="/neuro-pro-2-overview.jpg"
                alt="Neuro Pro 2 overview with phone app"
                width={600}
                height={500}
                className="rounded-2xl w-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Overview & benefits</h2>

              {/* Benefit Tags - Specific to Neuro Pro 2 */}
              <div className="flex flex-wrap gap-3">
                {["Focus", "Stress", "Memory", "Sleep", "Mental clarity", "Creativity", "Brain energy"].map((benefit) => (
                  <span key={benefit} className="px-4 py-2 border border-gray-400 rounded-full text-sm text-gray-700">
                    {benefit}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Like other Neuro devices, the Neuro Pro 2 <strong>enhances cognition, memory, and functional connectivity.</strong> However, the Neuro Pro 2 is significantly more powerful, customizable and features more Vie-LED modules than previous models.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The Neuro Pro 2 comes with the Neuro Pro App, giving you access to{' '}
                  <a href="https://www.vielight.com/protocols" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">8 advanced preset protocols</a>{' '}
                  that go beyond just Alpha and Gamma frequencies, along with nearly unlimited customization options.
                </p>
              </div>

              {/* Key Specs with Icons - Neuro Pro 2 specific */}
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
                  <span className="font-medium text-black">≈400% sunlight irradiance</span>
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
            </div>
          </div>

          {/* What's in the box - Neuro Pro 2 specific */}
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
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Numbered list specific to Neuro Pro 2 */}
                  <div className="space-y-6">
                    <p className="text-lg font-semibold text-black">Each device comes with:</p>

                    <div className="space-y-4">
                      {[
                        "1 Neuro Pro headset",
                        "1 Neuro Pro intranasal applicators",
                        "1 controller with side heat insulation",
                        "Neuro Pro 2 app",
                        "1 power adapter 5V 5A with AC input cable",
                        "1 power USB-Dc jacket adapter cable",
                        "1 power adapter for the smartphone"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#EA1934] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-black font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Components image with numbered callouts */}
                  <div className="relative">
                    <Image
                      src="/neuro-pro-2-components-layout.jpg"
                      alt="Neuro Pro 2 all components laid out with numbers"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User guides & tutorials - Neuro Pro 2 specific */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleSection('user-guides')}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-black">User guides & tutorials</h3>
              {expandedSection === 'user-guides' ? (
                <Minus className="w-6 h-6 text-black" />
              ) : (
                <Plus className="w-6 h-6 text-black" />
              )}
            </button>

            {expandedSection === 'user-guides' && (
              <div className="px-8 pb-8 space-y-8">
                {/* User guides section */}
                <div>
                  <h4 className="text-xl font-bold text-[#EA1934] mb-4">User guides</h4>
                  <p className="text-gray-700 mb-6">
                    Be sure to carefully review these guides in full before using the Neuro Pro 2 for the first time.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {[
                      "Neuro Pro 2 White user guide",
                      "Neuro Pro 2 Black user guide",
                      "Neuro Pro 2 WiFi Hub Guide",
                      "See protocols"
                    ].map((guide) => (
                      <button
                        key={guide}
                        className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {guide}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Video tutorials section */}
                <div>
                  <h4 className="text-xl font-bold text-[#EA1934] mb-6">Video tutorials</h4>

                  <div className="space-y-6">
                    {/* Setup Walkthrough Video */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-400">
                      <Image
                        src="/neuro-pro-2-setup-video-thumb.jpg"
                        alt="Neuro Pro 2 Setup Walkthrough"
                        width={800}
                        height={400}
                        className="w-full h-120 object-cover"
                      />
                      <div className="absolute top-8 left-8">
                        <div className="text-black space-y-4">
                          <div>
                            <h5 className="text-2xl font-bold leading-tight">Neuro Pro 2 | Setup</h5>
                            <h5 className="text-2xl font-bold leading-tight">Walkthrough</h5>
                          </div>
                          <button
                            onClick={() => window.open('https://youtu.be/3UDQxZBDe5k', '_blank')}
                            className="flex items-center space-x-3 bg-white bg-opacity-80 px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors border border-gray-400"
                          >
                            <Play className="w-5 h-5 text-black" />
                            <span className="font-medium text-black">Watch the video</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Access Gracefire Protocols Video */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-200">
                      <Image
                        src="/neuro-pro-2-protocols-video-thumb.jpg"
                        alt="Neuro Pro 2 Access Gracefire Protocols"
                        width={800}
                        height={400}
                        className="w-full h-120 object-cover"
                      />
                      <div className="absolute top-8 left-8">
                        <div className="text-black space-y-4">
                          <div>
                            <h5 className="text-2xl font-bold leading-tight">Neuro Pro 2 | Access</h5>
                            <h5 className="text-2xl font-bold leading-tight">Gracefire Protocols</h5>
                          </div>
                          <button
                            onClick={() => window.open('https://youtu.be/W8DwjwdBAbg', '_blank')}
                            className="flex items-center space-x-3 bg-white bg-opacity-80 px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors border border-gray-400"
                          >
                            <Play className="w-5 h-5 text-black" />
                            <span className="font-medium text-black">Watch the video</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'device') {
      return (
        <div className="space-y-12">
          {/* The ultimate at-home photobiomodulation device */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/neuro-pro-2-device-black-white.jpg"
                alt="Neuro Pro 2 device on person"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#EA1934]">The ultimate at-home photobiomodulation device</h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                Boost your mental wellness and performance with the only guided full brain photobiomodulation system that targets multiple brain networks with precision or full transcranial coverage.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sun className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Up to 400 mW/cm2 irradiance, 12,000 mW total power</p>
                    <p className="text-gray-600">– the highest in the industry by a significant margin.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">12 programmable and powerful Vie-LED modules</p>
                    <p className="text-gray-600">to target specific or all brain networks.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Featuring cross-frequency coupling</p>
                    <p className="text-gray-600">frequency sweeps and neural network synchronization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customize your brain's potential */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/neuro-pro-2-phone-control.jpg"
                alt="Person using Neuro Pro 2 app"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#EA1934]">Customize your brain's potential</h2>

              <p className="text-gray-700 leading-relaxed">
                The Neuro Pro 2 offers multiple customization options to tailor the device to your specific needs and goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="font-semibold text-black">12,000 mW total power | 400 mW/cm2 irradiance</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="font-semibold text-black">8 powerful preset protocols to modulate your brain, and the possibility to create your own</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="font-semibold text-black">Activate Neuro Pro modules in any combination, including synchronized patterns.</p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="font-semibold text-black">Fully customizable session length, power intensity, phase asynchrony, duty cycle, and frequency pulse capabilities between 1 and 10,000 Hz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Button */}
          <div className="text-center">
            <button className="bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Shop Neuro Pro 2 now
            </button>

          </div>
          {/* make the link button shopw neuro pro 2*/}

          {/* Ideal for neurofeedback providers */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Ideal for neurofeedback providers</h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Easily integrate the Neuro Pro 2 into your practice to enhance both modalities and optimize client outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Before */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/brain-icon-before.svg"
                    alt="Before icon"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#EA1934]">Before</h3>
                <p className="text-gray-700">Boost neuroplasticity and energy, preparing the brain for peak responsiveness.</p>
              </div>

              {/* During */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/brain-icon-during.png"
                    alt="During icon"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#EA1934]">During</h3>
                <p className="text-gray-700">Enhance focus and attention to maximize engagement and results.</p>
              </div>

              {/* After */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/brain-icon-after.png"
                    alt="After icon"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#EA1934]">After</h3>
                <p className="text-gray-700">Support relaxation and integration, helping clients solidify the benefits for lasting impact.</p>
              </div>
            </div>

            <button className="bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
              <span>Read Neuro Pro 2 Practitioners Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      );
    }

    if (activeTab === 'app') {
      return (
        <div className="space-y-12">
          {/* How to use the Neuro Pro App */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-black">How to use the Neuro Pro App</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Connect */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4">
                <div className="relative mx-auto w-48 h-80">
                  <Image
                    src="/neuro-pro-app-connect-screen.jpg"
                    alt="Connect app screen"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#EA1934]">Connect</h3>
                <p className="text-black font-semibold">Connect your Neuro Pro with the Neuro Pro app.</p>
                <p className="text-gray-700 text-sm">The Neuro Pro comes with a pre-synced smartphone and the Neuro Pro App pre-installed.</p>
              </div>

              {/* Customize */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4">
                <div className="relative mx-auto w-48 h-80">
                  <Image
                    src="/neuro-pro-app-customize-screen.jpg"
                    alt="Customize app screen"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#EA1934]">Customize</h3>
                <p className="text-black font-semibold">Customize parameters and adjust stimulation options to suit your needs.</p>
                <p className="text-gray-700 text-sm">The Neuro Pro 2 comes with 8 advanced pre-set neurofeedback protocols to choose from and guides to choose which suits you best.</p>
              </div>

              {/* Save */}
              <div className="bg-white rounded-2xl p-6 text-center space-y-4">
                <div className="relative mx-auto w-48 h-80">
                  <Image
                    src="/neuro-pro-app-save-screen.jpg"
                    alt="Save app screen"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#EA1934]">Save</h3>
                <p className="text-black font-semibold">Easily save and categorize different settings into profiles.</p>
                <p className="text-gray-700 text-sm">Load a given profile with a simple press of a button.</p>
              </div>
            </div>
          </div>

          {/* Preset protocols with image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden  text-white ">
              <Image
                src="/neuro-pro-protocols-devices.jpg"
                alt="Neuro Pro protocols devices"
                width={600}
                height={400}
                className="rounded-2xl"
              />

            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#EA1934]">Preset protocols</h2>
              <p className="text-gray-700 leading-relaxed">
                The Neuro Pro App features <strong>8 advanced preset protocols</strong>, designed by leading neuroscientists, that extend beyond just Alpha and Gamma frequencies.
              </p>
              <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                See protocols
              </button>
            </div>
          </div>

          {/* Manual features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/neuro-pro-manual-control-screen.jpg"
                alt="Manual features control screen"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#EA1934]">Manual features</h2>
              <p className="text-gray-700 leading-relaxed">
                Looking for more control? The Neuro Pro also offers manual exploration of brain networks and parameters, giving you the ability to customize:
              </p>

              <ul className="space-y-3">
                {[
                  "Pulse frequencies",
                  "Module activation",
                  "Point-to-point synchrony",
                  "Phase-locking"
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-black font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  // Add state for video modal at the top of your component
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {renderTabContent()}

      {/* How the Neuro Pro 2 works - Large hero video section */}
      <div className="rounded-2xl overflow-hidden ">
        <div className="relative">
          <Image
            src="/neuro-pro-2-brain-animation.jpg"
            alt="How the Neuro Pro 2 works"
            width={1200}
            height={500}
            className="w-full h-120 object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-start p-12">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                How the Neuro Pro 2<br />works
              </h2>
              <button
                onClick={() => setSelectedVideoUrl('https://youtu.be/8efsvKidLeQ')}
                className="flex items-center space-x-3 text-white bg-opacity-20 px-8 py-4 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors border border-white border-opacity-30"
              >
                <Play className="w-6 h-6" />
                <span className="font-semibold text-lg">Watch the video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video grid section */}
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Neuro Pro 2",
              subtitle: "Introduction Video",
              image: "/video-intro.jpg",
              url: "https://youtu.be/3UDQxZBDe5k"
            },
            {
              title: "Neuro Pro 2",
              subtitle: "Practitioner's Guide",
              image: "/video-practitioner.jpg",
              url: "https://youtu.be/Hn5dtkkQBL8"
            },
            {
              title: "Neuro Pro 2",
              subtitle: "Access Gracefire and Manchanda Protocols",
              image: "/video-protocols.jpg",
              url: "https://youtu.be/W8DwjwdBAbg"
            },
            {
              title: "Neuro Pro 2",
              subtitle: "Energy Footprint Demo",
              image: "/video-demo.jpg",
              url: "https://youtu.be/RZBBour-S1k"
            }
          ].map((video, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src={video.image}
                  alt={`${video.title} ${video.subtitle}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => setSelectedVideoUrl(video.url)}
                >
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6 space-y-3 ">
                <h3 className="font-bold text-black text-lg">{video.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{video.subtitle}</p>
                <button
                  onClick={() => setSelectedVideoUrl(video.url)}
                  className="flex items-center space-x-2 text-[#EA1934] font-medium hover:text-blue-700 transition-colors mt-4"
                >
                  <Play className="w-4 h-4" />
                  <span>Watch the video</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add to cart button */}
        <div className="text-center pt-8">
          {/* <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Add Vielight Neuro Pro 2 to cart
          </button> */}
        </div>
      </div>

      {/* Protocol description - Full background image with overlay text */}
      <div className="relative min-h-[500px] w-full">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/neuro-pro-protocols-phone.jpg"
            alt="9 powerful preset protocols"
            fill
            className="w-full h-120  object-cover rounded-2xl"
          />
        </div>

        {/* Overlay content positioned on the right */}
        <div className="relative z-10 flex items-center justify-end min-h-[500px] p-8">
          <div className="max-w-md space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-black">
              9 powerful preset protocols to modulate your brain
            </h2>

            <div className="space-y-4">
              <p className="text-gray-800 font-medium">
                The Neuro Pro App features an <strong>advanced preset protocol library designed by leading neuroscientists</strong>. These extend beyond just Alpha and Gamma frequencies to give you optimal results.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">
                    <strong>The Gracefire protocols</strong> unlock the power of neuromodulation
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">
                    <strong>The Machananda protocols</strong> elevate your meditation practice
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              See protocols
            </button>
          </div>
        </div>
      </div>

      {/* Community section - Standard two-column layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center ">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black">Join the Neuro Pro 2 community</h2>
          <p className="text-gray-700 text-lg">
            Owning a Neuro Pro 2 grants you <strong>free lifetime membership to the Neuro Pro community</strong>, along with the following benefits:
          </p>

          <div className="space-y-4">
            {[
              "Automatic software upgrades for seamless updates.",
              "2-year warranty coverage.",
              "10% discount on all Vielight products. (except the Neuro Pro 2)",
              "Community-based forum with Vielight staff for dedicated technical support.",
              "Access to exclusive insights, educational webinars, and discussions within the community."
            ].map((benefit) => (
              <div key={benefit} className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-[#EA1934] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative  min-h-[400px] w-full">
          <Image
            src="/community-member-happy.jpg"
            alt="Happy community member"
            width={500}
            height={400}
            className="w-full h-120  object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Research section - Full width with background */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/research-lab-background.jpg"
          alt="Research lab background"
          width={1200}
          height={600}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0  flex items-center p-12">
          <div className="max-w-3xl space-y-8 text-black">
            <h2 className="text-4xl font-bold leading-tight">Feel better with the Neuro Pro 2</h2>
            <p className="text-xl leading-relaxed">We have over 35 published and ongoing clinical trials with Vielight technology.</p>

            <div className="flex flex-wrap gap-4">
              {[
                "Alzheimer's disease (Dementia)",
                "Parkinson's disease",
                "PTSD",
                "Traumatic brain injury",
                "Autism",
                "Cognitive creativity",
                "Neuromodulation",
                "Cellular enhancement"
              ].map((condition) => (
                <span key={condition} className="px-5 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-sm font-medium">
                  {condition}
                </span>
              ))}
            </div>

            <button className="bg-white text-[#EA1934] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              See research
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        {[
          {
            question: "What are the Alpha and Gamma modes?",
            answer: "The Neuro Pro 2 grants access to both the Alpha and Gamma pulse rates. You can alternate between both modes depending on your needs.\n\nThe Gamma mode pulses near-infrared light energy at 40 Hz, which has a neuromodulating effect on Gamma brain waves. This increases focus, information processing, memory, and brain energy levels.\n\nThe Alpha mode pulses near-infrared light energy at 10 Hz, which has a neuromodulating effect on Alpha brain waves. This has effects on the brain's resting state, offering support for mindfulness, learning, relaxation, and sleep improvement."
          },
          {
            question: "How often should I use the Neuro Pro 2?",
            answer: "At first, you can use your Neuro Pro 2 every other day to six days a week, depending on your needs and health. It is timed for 20 minutes per session.\n\nSince everyone's sensitivity to photobiomodulation can vary, we recommend paying attention to how it affects you personally and adjust the frequency of use accordingly. With the wide range of options offered by the Neuro Pro 2, we've provided helpful educational and training materials in the \"User guides & tutorials\" section of this page.\n\nIf you have any additional questions about usage, you can get a free consultation with our experts."
          },
          {
            question: "Are there any contraindications or side effects?",
            answer: "Vielight products are safe and well-tolerated by most users. However, there are some contraindications and potential side effects to be aware of:\n\nContraindications:\nWe don't recommend using our devices if you have active brain bleeds or a history of seizures. Pregnant women should also consult with their healthcare provider before using photobiomodulation devices.\n\nSide effects:\nSome users may experience mild and temporary side effects, such as headaches, dizziness, or slight discomfort at the application site. These usually subside as the body adjusts to the therapy.\n\nIf you have any additional questions, feel free to reach out to us!"
          }
        ].map((faq, index) => (
          <div key={index} className="bg-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleSection(`faq-${index}`)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors text-left"
            >
              <h3 className="text-xl font-semibold text-black">{faq.question}</h3>
              <span className="text-3xl font-light">
                {expandedSection === `faq-${index}` ? '−' : '+'}
              </span>
            </button>

            {expandedSection === `faq-${index}` && (
              <div className="px-8 pb-8">
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className={
                      paragraph.includes(':') && paragraph.length < 50
                        ? 'font-semibold text-black text-xl'
                        : ''
                    }>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Final CTA button */}
        <div className="text-center pt-8">
          {/* <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Shop Neuro Pro 2 now
          </button> */}
        </div>
      </div>

      {/* YouTube Video Modal Popup */}
      {selectedVideoUrl && (
        <div className="fixed inset-0 bg-gray-300/40  flex items-center justify-center z-50 p-4">
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

export default NeuroPro2Details;