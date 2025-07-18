import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

const fruits = [
  {
    name: "Dragon Fruit",
    image: "/fruits/dragon-fruit.jpg",
    flavor: "Mildly sweet, crisp, refreshing",
    description: "Bright magenta with green scales, packed with antioxidants.",
  },
  {
    name: "Rambutan",
    image: "/fruits/rambutan.jpg",
    flavor: "Juicy, sweet-tart, lychee-like",
    description: "Hairy red skin, translucent flesh, vitamin C-rich.",
  },
  {
    name: "Mangosteen",
    image: "/fruits/mangosteen.jpg",
    flavor: "Rich, sweet, citrusy",
    description: "Purple rind, snow-white segments, the 'queen of fruits'.",
  },
  {
    name: "Kiwano (Horned Melon)",
    image: "/fruits/kiwano.jpg",
    flavor: "Crisp, tart, cucumber-banana",
    description: "Spiky orange skin, lime-green pulp, hydrating."
  },
  {
    name: "Passion Fruit",
    image: "/fruits/passion-fruit.jpg",
    flavor: "Tart, tropical, aromatic",
    description: "Wrinkled purple skin, golden pulp, vitamin-rich."
  }
];

export default function ProductHighlights() {
  return (
    <section className="py-16 px-4 bg-white animate-fadeIn" id="products">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slideInUp">
          Top-Selling Exotic Fruits
        </h2>
        <p className="text-lg text-gray-700 mb-2 animate-fadeIn">
          Experience our bestsellers, handpicked for peak flavor.
        </p>
      </div>
      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {fruits.map((fruit) => (
            <CarouselItem key={fruit.name} className="px-2 sm:basis-1/2 md:basis-1/3">
              <Card className="shadow-lg border-2 border-primary/10 hover:scale-105 transition-transform duration-300 animate-zoomIn">
                <CardHeader className="flex flex-col items-center pb-2">
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-32 h-32 rounded-2xl object-cover mb-2 shadow"
                  />
                  <CardTitle className="text-xl text-primary text-center">{fruit.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 text-center">{fruit.flavor}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                  <p className="mb-4 text-gray-700">{fruit.description}</p>
                  <Button variant="secondary" size="sm" className="w-full max-w-[140px] animate-fadeIn" asChild>
                    <a href="#cta">Add to Cart</a>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
