import React from "react";
import { aboutContent } from "../data/mock.js";

export function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start">
        <div className="relative w-full max-w-lg lg:order-2">
          <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/40 blur-2xl" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-blue-300/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-cyan-500/30 ring-1 ring-slate-700">
            <img
              src={aboutContent.image}
              alt="Поєднання мозку та цифрових технологій"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl lg:order-1">
          <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-800">
            {aboutContent.badge}
          </div>
          <h2
            id="about-heading"
            className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            {aboutContent.title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-700">
            {aboutContent.description}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {aboutContent.items.map((item) => (
              <div
                key={item.number}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-base font-bold text-white">
                  {item.number}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cyan-700">
                  {item.grade}
                </p>
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
