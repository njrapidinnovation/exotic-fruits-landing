import React from "react";

export default function About() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-yellow-50/60 to-pink-50/30 animate-fadeIn" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission & Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            At ExoticFruits, our passion is bringing the world's rarest, most flavorful fruits to your home. We partner with trusted growers who share our commitment to sustainable, ethical agriculture.
          </p>
          <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-4">
            <li>Fair-trade sourcing from family-owned orchards</li>
            <li>Stringent quality checks—only the freshest make the cut</li>
            <li>Direct relationships ensure traceability and freshness</li>
          </ul>
          <p className="text-base text-gray-500">
            Founded by a lifelong fruit enthusiast, ExoticFruits is on a mission to share nature’s most extraordinary flavors with adventurous eaters everywhere.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center relative animate-zoomIn">
          <img
            src="/founder-exotic-fruits.jpg"
            alt="Founder of Exotic Fruits"
            className="w-64 h-64 object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
          {/* Decorative orchard background */}
          <img
            src="/orchard-bg.jpg"
            alt="Exotic orchard background"
            className="absolute -z-10 opacity-30 rounded-3xl blur-lg top-10 left-10 w-80 h-80 object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
