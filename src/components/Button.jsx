import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-editorial-stamp font-typewriter font-bold text-white border-2 border-editorial-ink hover:bg-editorial-darkBrown active:scale-95 shadow-md dark:border-editorial-cream',
  secondary:
    'bg-editorial-beige font-typewriter font-medium text-editorial-ink border-2 border-editorial-ink hover:bg-editorial-tan active:bg-editorial-tan dark:bg-editorial-darkBrown dark:text-editorial-cream dark:border-editorial-cream dark:hover:bg-editorial-brown',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center py-3 px-6 text-xs uppercase tracking-wider outline-offset-2 transition-all duration-200 active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
