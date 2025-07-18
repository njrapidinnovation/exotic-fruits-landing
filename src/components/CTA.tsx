import React from "react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-yellow-100/40 animate-fadeIn" id="cta">
      <div className="max-w-3xl mx-auto text-center rounded-3xl shadow-2xl bg-white/90 p-10 flex flex-col items-center animate-zoomIn">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slideInUp">
          Ready to Taste the Extraordinary?
        </h2>
        <p className="text-lg text-gray-700 mb-6 animate-fadeIn">
          Place your order, start a subscription, or join our fruit lover’s club for exclusive offers and updates.
        </p>
        <Button size="lg" className="text-lg px-8 py-4 mb-3 animate-zoomIn shadow-lg" asChild>
          <a href="#" aria-label="Order Now">Order Now</a>
        </Button>
        <span className="text-green-600 font-medium text-base mt-2 animate-fadeIn">Satisfaction Guaranteed 🍍</span>
      </div>
    </section>
  );
}
