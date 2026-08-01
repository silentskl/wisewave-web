"use client";

import { useState } from "react";

type Section = { title: string; paragraphs?: string[]; items?: string[] };
type LegalContent = {
  title: string;
  subtitle: string;
  updated: string;
  intro: string[];
  sections: Section[];
};

export default function LegalPage({ zh, en }: { zh: LegalContent; en: LegalContent }) {
  const [language, setLanguage] = useState<"zh" | "en">("zh");
  const content = language === "zh" ? zh : en;

  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="brand brand-image" href="/" aria-label="WiseWave home">
          <img
            src="/wisewave-logo-blue.png"
            alt="WiseWave — Intelligent, Fast, Reliable"
          />
        </a>
        <a href="/">{language === "zh" ? "返回首页" : "Back home"}</a>
        <button type="button" onClick={() => setLanguage(language === "zh" ? "en" : "zh")}>
          {language === "zh" ? "EN" : "中文"}
        </button>
      </header>
      <section className="legal-hero">
        <p className="section-kicker">WISEWAVE · LEGAL</p>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </section>
      <article className="legal-content">
        <p className="legal-updated">{content.updated}</p>
        {content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </article>
      <footer className="legal-footer">© 2026 WiseWave Pte. Ltd.</footer>
    </main>
  );
}
