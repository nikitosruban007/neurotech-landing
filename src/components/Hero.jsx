import React from "react";
import { ArrowRight } from "lucide-react";
import { heroContent } from "../data/mock.js";
import { Button } from "./ui/button.jsx";

export function Hero() {
  function handleClick() {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-cyan-900/80" />
      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-28 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/60 bg-slate-900/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100 backdrop-blur-md animate-[fadeInUp_0.6s_ease-out]">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
            {heroContent.badge}
          </div>

          <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl animate-[fadeInUp_0.7s_ease-out]">
            {heroContent.title}
          </h1>
          <p className="mb-3 text-xl font-semibold text-cyan-100/90 sm:text-2xl animate-[fadeInUp_0.8s_ease-out]">
            {heroContent.subtitle}
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-100/90 animate-[fadeInUp_0.9s_ease-out]">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl rounded-2xl bg-slate-900/60 p-6 shadow-xl shadow-cyan-900/30 ring-1 ring-red-400/60 animate-[fadeInUp_1s_ease-out]">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-300">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                {heroContent.problemCard.title}
              </div>
              <p className="mb-3 text-sm text-slate-100">
                {heroContent.problemCard.text}
              </p>
              <p className="text-xs italic text-cyan-200">
                {heroContent.problemCard.note}
              </p>
            </div>

            <div className="animate-[fadeInUp_1.1s_ease-out]">
              <Button
                size="lg"
                onClick={handleClick}
                className="group bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/40 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Дізнатися більше
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-1 justify-center lg:mt-0">
          <div className="relative h-[420px] w-full max-w-md rounded-[32px] bg-slate-900/70 p-3 shadow-2xl shadow-cyan-900/40 ring-1 ring-slate-700/80 backdrop-blur-xl">
            <div className="h-full w-full overflow-hidden rounded-[28px] bg-slate-900/80">
              <img
                src="/images/eye-neuro.png"
                alt="Вплив цифрових сигналів на мозок"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl bg-slate-900/80 p-4 text-xs text-slate-200 shadow-lg shadow-slate-900/80 ring-1 ring-slate-700/80">
              <p className="font-semibold text-cyan-200">
                Цифрова перевантаженість як нейропроблема
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                Учні досліджують, як сигнали від гаджетів, соцмереж та ігор
                змінюють увагу, сон і рівень стресу, використовуючи опитування,
                біометрію та інструменти аналізу даних.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-[11px] font-medium text-slate-200/80">
        <span className="mb-2">Прокрутіть вниз</span>
        <span className="flex h-10 w-px animate-bounce bg-cyan-300/80" />
      </div>
    </section>
  );
}
