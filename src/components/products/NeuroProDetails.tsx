// components/products/NeuroAlphaDetails.tsx - Will have its own unique structure
import React from 'react';
import Image from 'next/image';

interface NeuroAlphaDetailsProps {
  activeTab: string;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
}

const NeuroProDetails: React.FC<NeuroAlphaDetailsProps> = ({ 
  activeTab, 
  expandedSection, 
  toggleSection 
}) => {
  
  if (activeTab === 'general') {
    return (
      <div className="space-y-12">
        {/* Neuro Alpha will have completely different sections */}
        {/* Maybe it has a different hero layout */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-purple-600">Neuro Alpha - Unique Experience</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This product will have its own unique content structure, different from Neuro Pro 2
          </p>
        </div>

        {/* Maybe it has a different feature showcase */}
        <div className="bg-purple-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Unique Neuro Alpha features */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto flex items-center justify-center">
                {/* Unique icon */}
              </div>
              <h3 className="text-xl font-bold">Alpha-Specific Feature 1</h3>
              <p className="text-gray-600">Unique to Neuro Alpha...</p>
            </div>
            {/* Add more unique sections */}
          </div>
        </div>

        {/* Maybe different expandable sections */}
        <div className="bg-purple-100 rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleSection('alpha-unique-section')}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-purple-200 transition-colors"
          >
            <h3 className="text-xl font-bold text-black">Alpha-Specific Information</h3>
            <span className="text-2xl">{expandedSection === 'alpha-unique-section' ? '−' : '+'}</span>
          </button>

          {expandedSection === 'alpha-unique-section' && (
            <div className="px-8 pb-8">
              <p className="text-gray-700">This section is unique to Neuro Alpha and has different content structure...</p>
              {/* Add Neuro Alpha specific content */}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (activeTab === 'device') {
    return (
      <div className="space-y-12">
        {/* Neuro Alpha device info - completely different layout */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Neuro Alpha Device Technology</h2>
          <p className="text-lg opacity-90">Different technology, different presentation...</p>
          {/* Unique device content for Neuro Alpha */}
        </div>
      </div>
    );
  }

  if (activeTab === 'app') {
    return (
      <div className="space-y-12">
        {/* Maybe Neuro Alpha doesn't even have an app, or has a different app structure */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Neuro Alpha Usage</h2>
          <p className="text-gray-700 mt-4">Different usage instructions for this product...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default NeuroProDetails;