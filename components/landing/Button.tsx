import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
    solid:
        'inline-flex items-center justify-center rounded-full font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    outline:
        'inline-flex ring-1 items-center justify-center rounded-full focus:outline-none',
    ghost:
        'inline-flex items-center justify-center font-semibold bg-transparent focus:outline-none transition-all',
}

const variantStyles = {
    solid: {
        slate:
            'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
        blue:
            'bg-[#3b82f6] text-white hover:bg-[#3b82f6] active:bg-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#0397d3] focus:ring-offset-2 text-white shadow-md transition duration-200 ease-in-out transform hover:scale-105',
        white:
            'bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 active:text-slate-600 focus-visible:outline-white',
    },
    outline: {
        slate:
            'ring-slate-200 text-slate-700 hover:ring-slate-300 hover:text-slate-900 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600',
        blue:
            'ring-blue-600 text-blue-600 hover:ring-blue-400 hover:text-blue-800 active:bg-blue-50 active:text-blue-600 focus-visible:outline-blue-600',
        white:
            'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    },
    ghost: {
        slate:
            'text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus-visible:outline-slate-900',
        blue:
            'text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-blue-600',
        white:
            'text-white hover:bg-white/10 active:bg-white/20 focus-visible:outline-white',
    },
}

type ButtonProps = {
    variant?: keyof typeof baseStyles
    color?: keyof (typeof variantStyles)['solid'] | keyof (typeof variantStyles)['outline']
    href?: string // Use href to render as a link
    isHeader?: boolean // New prop to control size and flash effect
    type?: 'button' | 'submit' | 'reset' // Default button type
    className?: string // Allow additional classes
    children: React.ReactNode // Ensure children are passed correctly
}

// We are going to split the logic for rendering either <Link> or <button> based on `href`
export function Button({
                           className,
                           variant = 'solid',
                           color = 'slate',
                           href,
                           isHeader = false,
                           type = 'button', // Default button type
                           children,
                           ...props
                       }: ButtonProps) {
    const sizeClass = !isHeader
        ? 'py-3 px-6 text-lg' // Larger button if not in the header
        : 'py-2 px-4 text-sm'; // Default size for header button

    const computedClassName = clsx(
        baseStyles[variant], // Apply the base styles based on variant
        variantStyles[variant]?.[color], // Apply the variant styles based on the color
        sizeClass, // Apply size conditionally based on isHeader
        !isHeader && color === 'blue' ? 'shiny-button' : '', // Only apply the shiny-button class if not in header
        className // Allow custom classes
    )

    // If `href` is provided, render a <Link> without the extra <a> tag
    if (href) {
        return (
            <Link href={href} className={computedClassName} {...props}>
                {children}
            </Link>
        )
    }

    // Otherwise, render a <button> with appropriate props
    return (
        <button type={type} className={computedClassName} {...props}>
            {children}
        </button>
    )
}
