import React, { useEffect, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and paragraph
      gsap.fromTo(
        containerRef.current.querySelector('h2, p.text-zinc-300'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate each contact card with stagger
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current.querySelector('.grid'),
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-zinc-950 text-white py-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <TitleHeader title="Get In Touch with Me" sub="Contact Information" />

        <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Whether you're looking to collaborate on a project, have a question, want to commission work, or simply say hello — I’d love to hear from you!
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1 justify-center max-w-4xl mx-auto">
          {/* Email */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="hover:scale-105 transition-transform duration-300 shadow-xl rounded-2xl px-4 py-4 text-white bg-zinc-900 border border-zinc-700"
          >
            <p className="text-base font-semibold mb-2">📧 Email Me</p>
            <a
              href="mailto:markiglesia15@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              markiglesia15@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="hover:scale-105 transition-transform duration-300 shadow-xl rounded-2xl px-4 py-4 text-white bg-zinc-900 border border-zinc-700"
          >
            <p className="text-base font-semibold mb-2">📞 Call or Text</p>
            <a
              href="tel:+639270529068"
              className="inline-block bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              +63 927 052 9068
            </a>
          </div>

          {/* Messenger */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="hover:scale-105 transition-transform duration-300 shadow-xl rounded-2xl px-4 py-4 text-white bg-zinc-900 border border-zinc-700"
          >
            <p className="text-base font-semibold mb-2">💬 Messenger</p>
            <a
              href="https://m.me/shinkodotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Message Me on Messenger
            </a>
          </div>
        </div>

        <p className="text-sm text-zinc-500">
          I usually respond within 24 hours. Let’s create something meaningful together.
        </p>
      </div>

      {/* Optional Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10 blur-2xl opacity-30 pointer-events-none"></div>
    </section>
  )
}

export default Contact
