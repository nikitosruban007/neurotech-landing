import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerContent } from "../data/mock.js";

export function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-12 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-sm font-bold text-white shadow-lg shadow-cyan-500/40">
                {footerContent.brand.short}
              </div>
              <span className="text-base font-semibold text-white">
                {footerContent.brand.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {footerContent.brand.description}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              Швидкі посилання
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-slate-300">
              {footerContent.quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="w-max text-left hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Контакти</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a
                  href={`mailto:${footerContent.contacts.email}`}
                  className="hover:text-cyan-400"
                >
                  {footerContent.contacts.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a
                  href={`tel:${footerContent.contacts.phone.replace(/\s/g, "")}`}
                  className="hover:text-cyan-400"
                >
                  {footerContent.contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-400" />
                <span>{footerContent.contacts.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
