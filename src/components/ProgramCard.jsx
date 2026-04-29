import React from 'react'
import { ArrowRight, Users } from 'lucide-react'
import Button from './Button'

const ProgramCard = ({ program, onJoin }) => {
  const { title, tagline, description, audience, outcomes, image, color } = program

  const isPurple = color === 'purple'

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-100 border border-gray-100 hover:-translate-y-1 transition-all duration-400 flex flex-col">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isPurple ? 'from-purple-950/70' : 'from-pink-900/70'} to-transparent`} />

        {/* Icon badge */}
        <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg ${isPurple ? 'bg-purple-600' : 'bg-pink-500'} text-white`}>
          {program.icon}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="font-serif text-2xl font-bold text-white leading-tight">{title}</h3>
          <p className={`text-sm font-medium mt-0.5 ${isPurple ? 'text-purple-200' : 'text-pink-200'}`}>{tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">

        <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>

        {/* Outcomes */}
        <ul className="space-y-2 mb-5">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex items-center gap-2.5 text-sm text-gray-700">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isPurple ? 'bg-purple-500' : 'bg-pink-500'}`} />
              {outcome}
            </li>
          ))}
        </ul>

        {/* Audience */}
        <div className={`flex items-start gap-2 rounded-xl px-4 py-3 mb-6 text-sm ${isPurple ? 'bg-purple-50' : 'bg-pink-50'}`}>
          <Users size={15} className={`shrink-0 mt-0.5 ${isPurple ? 'text-purple-600' : 'text-pink-600'}`} />
          <span className={`font-medium ${isPurple ? 'text-purple-800' : 'text-pink-800'}`}>
            {audience}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Button
            variant={isPurple ? 'primary' : 'pink'}
            size="md"
            className="w-full"
            onClick={() => onJoin && onJoin(program)}
          >
            Join {title}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
