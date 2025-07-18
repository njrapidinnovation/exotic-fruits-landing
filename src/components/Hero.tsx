import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto py-12 md:py-20 px-4 gap-10 md:gap-20 animate-fadeIn" id="hero">
      <div className="flex-1 flex flex-col items-start justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 animate-slideInUp">
          Taste the World’s Rarest Flavors
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl animate-fadeIn">
          Discover, savor, and enjoy exotic fruits delivered fresh to your doorstep. Hand-picked from orchards worldwide for the adventurous palate.
        </p>
        <Button size="lg" className="text-lg px-8 py-4 animate-zoomIn shadow-lg" asChild>
          <a href="#cta">Shop Now</a>
        </Button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/hero-exotic-fruits.png"
          alt="Assorted Exotic Fruits"
          className="w-full max-w-[430px] h-auto drop-shadow-xl rounded-3xl animate-zoomIn"
          loading="eager"
        />
        {/* For animation, consider adding a subtle floating/fadeIn effect */}
      </div>
      {/* Decorative background elements */}
      <div className="absolute -z-10 left-0 top-0 w-full h-full pointer-events-none">
        <div className="w-56 h-56 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-full blur-3xl absolute top-10 left-0 animate-float" />
        <div className="w-40 h-40 bg-gradient-to-tr from-yellow-200/40 to-pink-200/10 rounded-full blur-2xl absolute bottom-10 right-10 animate-float-slow" />
      </div>
    </section>
  );
}
