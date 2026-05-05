import React from 'react'
import { CheckCircle } from 'lucide-react'


import AboutPhoto from '../assets/about2.png'; 

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
           SHE Thrive is a faith-driven movement committed to restoring women and raising nation builders.
Built on the foundation of Isaiah 61:1–7, we are called to heal, equip, and raise women who will transform their lives, families, and communities.
  
          </p>
        </div>

        {/* Two-column: story + pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Image */}
          <div className="relative animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-100 aspect-[4/5] max-h-[540px]">
              <img
                src={AboutPhoto}
                alt="SHE Thrive women community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
            </div>

            {/* Floating stat card */}
            {/* <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <p className="font-serif text-4xl font-bold text-gradient leading-none">2023</p>
              <p className="text-gray-500 text-sm mt-1">Year SHE Thrive was founded</p>
            </div> */}

            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-pink-100 -z-10" />
            <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-purple-50 -z-10" />
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <h3 className="font-serif text-3xl font-bold text-purple-900 mb-4">
              OUR STORY.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              She Thrive International was born from a deep, personal conviction to see lives transformed and communities rebuilt.
              The journey began in Yaoundé -Cameroon, where our founder made it a personal mission to regularly visit orphanages. What started 
              as simple acts of kindness soon grew into a broader outreach extending to children living on the streets. Meals were prepared and shared in places like Avennue Kennedy, 
              creating moments of hope for those who needed it most.
             But beyond meeting immediate needs, a deeper question emerged: How can lasting change be created?
             This question sparked a vision to empower individuals not just with aid, but with opportunity. The initial idea was simple 
             yet powerful: help people start small businesses, support them in growing sustainably, and inspire them to extend that same support to others.
             However, this vision faced a significant obstacle limited financial resources.
             Rather than stopping the mission, this challenge led to innovation.
             Through research, international business grant opportunities were discovered. What began as a personal solution quickly 
             became a pathway for impact. Women were guided through the application process, and many successfully secured funding to launch and grow their businesses.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Why women?
              <br />
            Because empowering a woman is one of the most effective ways to transform a society. Women shape homes, nurture future leaders, and influence the direction 
            of communities. When a woman rises, her family rises and when families rise, nations are rebuilt.
            She Thrive International exists to champion this transformation.
            We are committed to equipping women with the tools, resources, and opportunities they need to thrive not just for themselves, but for generations to come.
            </p>

            {/* Pillars */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p} className="flex items-center gap-3 bg-purple-50 rounded-xl px-4 py-3">
                  <CheckCircle size={18} className="text-purple-600 shrink-0" />
                  <span className="text-sm font-medium text-purple-800">{p}</span>
                </div>
              ))}
            </div> */}
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
