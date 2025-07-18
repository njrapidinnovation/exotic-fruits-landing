import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Sophie L.",
    avatar: "/users/sophie.jpg",
    fallback: "SL",
    rating: 5,
    quote: "Absolutely mind-blowing flavors! Every box is an adventure. Delivery is fast and fruits are super fresh.",
  },
  {
    name: "Miguel R.",
    avatar: "/users/miguel.jpg",
    fallback: "MR",
    rating: 4,
    quote: "The rambutan and mangosteen were better than I ever had on vacation. Love the variety and service!",
  },
  {
    name: "Ava P.",
    avatar: "/users/ava.jpg",
    fallback: "AP",
    rating: 5,
    quote: "My family can’t wait for our monthly subscription box. Always fresh, always exciting!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "#facc15" : "#e5e7eb"}
          className="w-5 h-5"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5 animate-fadeIn" id="testimonials">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slideInUp">What Our Customers Say</h2>
        <p className="text-lg text-gray-700 animate-fadeIn">Freshness, flavor, and a world of delight—straight from our fans.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <Card key={t.name} className="rounded-2xl shadow-xl p-8 flex flex-col items-center gap-3 animate-zoomIn">
            <Avatar className="w-16 h-16 mb-2">
              <AvatarImage src={t.avatar} alt={t.name} />
              <AvatarFallback>{t.fallback}</AvatarFallback>
            </Avatar>
            <StarRating rating={t.rating} />
            <p className="text-gray-700 text-base italic mb-2">“{t.quote}”</p>
            <span className="font-semibold text-primary text-lg">{t.name}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
