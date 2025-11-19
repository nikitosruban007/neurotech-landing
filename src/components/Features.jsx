import React from "react";
import { Brain, Activity, Cpu, Sparkles } from "lucide-react";
import { featuresContent } from "../data/mock.js";
import { Card, CardContent } from "./ui/card.jsx";

const iconMap = {
  Brain,
  Activity,
  Cpu,
  Sparkles
};

export function Features() {
  return (
    <section
      id={featuresContent.id}
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="features-heading"
            className="mb-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            {featuresContent.title}
          </h2>
          <p className="text-lg leading-relaxed text-slate-700">
            {featuresContent.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuresContent.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card
                key={item.id}
                className="flex h-full flex-col border-slate-100 bg-slate-50/70 shadow-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-cyan-500/30 ring-1 ring-slate-700">
            <img
              src={featuresContent.bottomImage}
              alt="Візуалізація нейроданих і біосигналів"
              className="h-64 w-full object-cover sm:h-72 lg:h-80"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-6 pb-6 pt-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Від теорії до живих даних
              </p>
              <p className="mt-1 text-sm text-slate-100">
                Учні працюють з реальними часовими рядами, біометрією та
                адаптивними інтерфейсами, перетворюючи абстрактні формули на
                зрозумілі графіки й візуальні образи.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
