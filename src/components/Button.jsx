import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  href,
  target,
}) => {
  const base =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-700 to-pink-600 text-white hover:from-purple-800 hover:to-pink-700 shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5 focus:ring-purple-500',
    secondary:
      'border-2 border-purple-700 text-purple-700 bg-transparent hover:bg-purple-700 hover:text-white focus:ring-purple-500',
    white:
      'bg-white text-purple-800 hover:bg-purple-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-white',
    ghost:
      'text-purple-700 underline underline-offset-4 hover:text-pink-600 focus:ring-purple-400',
    pink:
      'bg-gradient-to-r from-pink-500 to-pink-700 text-white hover:from-pink-600 hover:to-pink-800 shadow-lg hover:shadow-pink-300 hover:-translate-y-0.5 focus:ring-pink-500',
  }

  const sizes = {
    sm:  'text-sm px-5 py-2',
    md:  'text-sm px-7 py-3',
    lg:  'text-base px-9 py-4',
    xl:  'text-lg px-11 py-5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
