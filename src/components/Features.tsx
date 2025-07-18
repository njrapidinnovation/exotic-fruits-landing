import React from "react";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: (
      <span className="text-3xl">🌎</span>
    ),
    title: "Fresh, Hand-Picked Worldwide",
    description: "We source the rarest, freshest fruits directly from local growers across the globe, hand-selecting each one for quality."
  },
  {
    icon: (
      <span className="text-3xl">🚚</span>
    ),
    title: "Farm-to-Door Delivery",
    description: "Enjoy seamless, eco-friendly delivery straight to your doorstep, preserving peak freshness and flavor."
  },
  {
    icon: (
      <span className="text-3xl">🥝</span>
    ),
    title: "Nutrient-Rich & Rare Varieties",
    description: "From antioxidant-packed dragon fruit to tangy rambutan, discover fruits packed with unique nutrients and flavors."
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5 animate-fadeIn" id="features">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <Badge className="mb-2 mx-auto" variant="secondary">Why Choose Us?</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 animate-slideInUp">Our Exotic Advantages</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fadeIn">
          Only the best, most unusual fruits make it to your table. Here’s why you’ll love us.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 animate-zoomIn"
          >
            <div className="bg-primary/10 rounded-full p-5 mb-1 text-primary text-4xl">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-xl text-primary mb-1 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
