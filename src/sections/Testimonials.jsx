import React, { useState, useEffect, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials as defaultTestimonials } from '../constants/index.js'
import { Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(defaultTestimonials)
  const [formData, setFormData] = useState({
    name: '',
    mentions: '',
    review: '',
    imgPath: '',
    rating: 0
  })

  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              // markers: true, // Uncomment for debugging
            },
          }
        )
      }
    })
  }, [testimonials]) // re-run animation when testimonials list changes (e.g. after submit)

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'imgPath' && files.length > 0) {
      const imageURL = URL.createObjectURL(files[0])
      setFormData({ ...formData, imgPath: imageURL })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.review && formData.rating > 0) {
      setTestimonials([formData, ...testimonials])
      setFormData({
        name: '',
        mentions: '',
        review: '',
        imgPath: '',
        rating: 0
      })
    }
  }

  return (
    <section
      id="testimonials"
      className="flex-center section-padding bg-zinc-950 text-white mt-20"
    >
      <div className="w-full h-full md:px-10 px-5 mt-10 max-w-7xl mx-auto">
        <TitleHeader title="What People Say About Me?" sub="Feedback Highlights" />

        {/* Testimonials List */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.imgPath || '/images/default-avatar.png'}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-zinc-600"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-zinc-400">{testimonial.mentions}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">"{testimonial.review}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < testimonial.rating ? '#facc15' : 'none'}
                    stroke="#facc15"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="review-form bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-8 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold mb-10 text-white">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded bg-zinc-800 border border-zinc-600 text-white placeholder-gray-400"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="mentions"
              placeholder="Your Title or Role (optional)"
              className="p-3 rounded bg-zinc-800 border border-zinc-600 text-white placeholder-gray-400"
              value={formData.mentions}
              onChange={handleInputChange}
            />
            <textarea
              name="review"
              placeholder="Write your review here..."
              className="p-3 rounded bg-zinc-800 border border-zinc-600 text-white placeholder-gray-400 min-h-[100px]"
              value={formData.review}
              onChange={handleInputChange}
              required
            />

            {/* Star Rating */}
            <div className="flex gap-2 items-center">
              <span className="text-zinc-400">Your Rating:</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="cursor-pointer"
                    fill={i < formData.rating ? '#facc15' : 'none'}
                    stroke="#facc15"
                    onClick={() => handleStarClick(i + 1)}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded text-white font-semibold"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
