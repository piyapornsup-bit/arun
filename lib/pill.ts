import { cva, type VariantProps } from 'class-variance-authority'

export const pill = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 select-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-sun-400 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-sun-600 text-white shadow-warm hover:bg-sun-700 hover:shadow-warm-hover active:translate-y-px',
        secondary:
          'border-2 border-sun-600 bg-surface text-sun-700 hover:bg-sun-50',
        ghost: 'text-ink hover:bg-sun-100 hover:text-sun-700',
        light: 'bg-surface text-sun-700 shadow-warm hover:bg-sun-50 hover:shadow-warm-hover',
      },
      size: {
        md: 'h-12 px-6 text-base',
        sm: 'h-11 px-4 text-sm',
        lg: 'h-14 px-8 text-lg',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type PillProps = VariantProps<typeof pill>
