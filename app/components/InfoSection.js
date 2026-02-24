'use client'

import { CONFIG } from '../../config'
import { useState } from 'react'

function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />')
}

export default function InfoSection() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="py-20 pb-32 bg-secondary text-white relative" id="info">
      <div className="container mx-auto px-5 max-w-4xl">
        <h2 className="font-heading text-2xl md:text-4xl font-light text-center mb-8 md:mb-12 italic px-4">
          Te contamos todos los detalles…
        </h2>

        <div className="space-y-4">
          {/* Dress Code */}
          <div className="border-b border-white/30">
            <button
              onClick={() => toggleSection('dressCode')}
              className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                {CONFIG.dressCode.title}
              </span>
              <span className="text-2xl transform transition-transform duration-300" style={{
                transform: openSection === 'dressCode' ? 'rotate(90deg)' : 'rotate(0deg)'
              }}>
                ›
              </span>
            </button>
            {openSection === 'dressCode' && (
              <div className="px-4 pb-6 animate-fade-in">
                <div 
                  className="text-sm md:text-base leading-relaxed font-light [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(CONFIG.dressCode.description) }}
                />
              </div>
            )}
          </div>

          {/* Children */}
          <div className="border-b border-white/30">
            <button
              onClick={() => toggleSection('children')}
              className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                {CONFIG.children.title}
              </span>
              <span className="text-2xl transform transition-transform duration-300" style={{
                transform: openSection === 'children' ? 'rotate(90deg)' : 'rotate(0deg)'
              }}>
                ›
              </span>
            </button>
            {openSection === 'children' && (
              <div className="px-4 pb-6 animate-fade-in">
                <div 
                  className="text-sm md:text-base leading-relaxed font-light [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(CONFIG.children.description) }}
                />
              </div>
            )}
          </div>

          {/* Gift */}
          <div className="border-b border-white/30">
            <button
              onClick={() => toggleSection('gift')}
              className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
                {CONFIG.gift.title}
              </span>
              <span className="text-2xl transform transition-transform duration-300" style={{
                transform: openSection === 'gift' ? 'rotate(90deg)' : 'rotate(0deg)'
              }}>
                ›
              </span>
            </button>
            {openSection === 'gift' && (
              <div className="px-4 pb-6 animate-fade-in">
                <div 
                  className="text-sm md:text-base leading-relaxed font-light mb-6 [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(CONFIG.gift.description) }}
                />
                
                {/* Primera cuenta */}
                <div className="bg-background/95 p-5 rounded-lg mb-4 text-left text-text">
                  <p className="text-xs font-semibold mb-3 italic tracking-wider text-white">
                    CUENTA EN {CONFIG.gift.account1.currency}:
                  </p>
                  <p className="mb-2 text-sm">
                    <span className="font-light text-textLight">Nombre del Titular:</span><br />
                    <span className="font-medium text-text">{CONFIG.gift.account1.accountHolder}</span>
                  </p>
                  <p className="mb-2 text-sm">
                    <span className="font-light text-textLight">CBU:</span><br />
                    <span className="font-medium text-text">{CONFIG.gift.account1.accountNumber}</span>
                  </p>
                  <p className="mb-2 text-sm">
                    <span className="font-light text-textLight">Alias:</span><br />
                    <span className="font-medium text-text">{CONFIG.gift.account1.alias}</span>
                  </p>
                  <p className="text-sm font-semibold text-text">
                    {CONFIG.gift.account1.bank}
                  </p>
                </div>

                {/* Segunda cuenta (si está habilitada) */}
                {CONFIG.gift.account2?.enabled && (
                  <div className="bg-background/95 p-5 rounded-lg text-left text-text">
                    <p className="text-xs font-semibold mb-3 italic tracking-wider text-white">
                      CUENTA EN {CONFIG.gift.account2.currency}:
                    </p>
                    <p className="mb-2 text-sm">
                      <span className="font-light text-textLight">Nombre del Titular:</span><br />
                      <span className="font-medium text-text">{CONFIG.gift.account2.accountHolder}</span>
                    </p>
                    <p className="mb-2 text-sm">
                      <span className="font-light text-textLight">CBU:</span><br />
                      <span className="font-medium text-text">{CONFIG.gift.account2.accountNumber}</span>
                    </p>
                    <p className="mb-2 text-sm">
                      <span className="font-light text-textLight">Alias:</span><br />
                      <span className="font-medium text-text">{CONFIG.gift.account2.alias}</span>
                    </p>
                    <p className="text-sm font-semibold text-text">
                      {CONFIG.gift.account2.bank}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0C240 80 480 80 720 40C960 0 1200 0 1440 40V80H0V0Z" fill="#faf8f5"/>
        </svg>
      </div>
    </section>
  )
}
