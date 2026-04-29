import React from 'react'
import { CheckCircle } from 'lucide-react'

const pillars = [
  'Skills & Vocational Training',
  'Leadership Development',
  'Community & Mentorship',
  'Micro-finance Access',
]

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-max">

        {/* Top label */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-xs font-medium text-pink-600 uppercase tracking-widest mb-3">
            Who We Are
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 mb-5">
            About SHE Thrive
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            SHE Thrive is a  movement commited to restoring women and raising nation builders.
             we are called to heal, equip, and raise women who will
            transform their lives, families and communities.
          </p>
        </div>

        {/* Two-column: story + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Image */}
          <div className="relative animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-100 aspect-[4/5] max-h-[540px]">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="SHE Thrive women community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <p className="font-serif text-4xl font-bold text-gradient leading-none">2023</p>
              <p className="text-gray-500 text-sm mt-1">Year SHE Thrive was founded</p>
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-pink-100 -z-10" />
            <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-purple-50 -z-10" />
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <h3 className="font-serif text-3xl font-bold text-purple-900 mb-4">
              More than an NGO — a movement for women's dignity and power.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded in Douala in 2023, SHE Thrive was born from a simple but radical belief:
              that when a woman is equipped, supported, and seen — she doesn't just change her
              own life. She changes her family, her community, and her nation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today we operate across Yaoundé, Douala, and Bafoussam, running training programs,
              leadership fellowships, and community networks that have touched the lives of
              over 500 women — and we are just getting started.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p} className="flex items-center gap-3 bg-purple-50 rounded-xl px-4 py-3">
                  <CheckCircle size={18} className="text-purple-600 shrink-0" />
                  <span className="text-sm font-medium text-purple-800">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
          <div className="relative bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-8 sm:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block text-xs font-medium text-purple-300 uppercase tracking-widest mb-4">
              Our Vision
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              To see enpowered women rising as leaders, restorers, and nation builders.
            </h3>
            <p className="text-purple-200 leading-relaxed text-sm">
              We envision a continent where gender is no barrier — where women lead boardrooms,
              communities, governments, and households with dignity, confidence, and resources.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl p-8 sm:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <span className="inline-block text-xs font-medium text-pink-200 uppercase tracking-widest mb-4">
              Our Mission
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              Equip. Empower. Elevate.
            </h3>
            <p className="text-pink-100 leading-relaxed text-sm">
              To equip and support women through empowerment programs and strong community systems that
              produce lasting transformation.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
