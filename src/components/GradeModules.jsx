import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "./ui/accordion.jsx";
import {
  grade9Content,
  grade10Content,
  grade11Content
} from "../data/mock.js";

function GradeBlock({ data, accent }) {
  const bg =
    accent === "slate"
      ? "bg-gradient-to-br from-slate-700 via-slate-800 to-cyan-900"
      : accent === "cyan"
      ? "bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-800"
      : "bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900";

  return (
    <section
      id={data.id}
      className={`${bg} py-20 px-4 text-white sm:px-6 lg:px-8`}
      aria-labelledby={`${data.id}-heading`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
            {data.badge}
          </div>
          <h2
            id={`${data.id}-heading`}
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
          >
            {data.title}
          </h2>
          <p className="text-base leading-relaxed text-cyan-100/90">
            {data.goal}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {data.modules.map((module) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-lg shadow-slate-900/30 ring-1 ring-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <AccordionTrigger className="px-5">
                    <div className="flex items-center">
                      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-base font-bold text-white">
                        {module.number}
                      </div>
                      <span className="text-left text-sm font-semibold text-slate-900">
                        {module.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <div className="space-y-3">
                      {module.bullets.map((bullet, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-2 mr-3 h-2 w-2 rounded-full bg-cyan-400" />
                          <p className="text-sm leading-relaxed text-slate-700">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-slate-900/40 p-6 shadow-xl shadow-slate-900/60 ring-1 ring-slate-700/80">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-cyan-100">
                Підсумок року
              </h3>
              <p className="text-sm leading-relaxed text-slate-100">
                {data.finalProjectDescription}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-cyan-500/40">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                {data.finalProjectTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cyan-50/95">
                Учні переходять від спостереження до створення власних рішень,
                які можна перетворити на конкурсні проєкти, НДР або перші
                стартап-ідеї.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GradeModules() {
  return (
    <>
      <GradeBlock data={grade9Content} accent="slate" />
      <GradeBlock data={grade10Content} accent="cyan" />
      <GradeBlock data={grade11Content} accent="dark" />
    </>
  );
}
