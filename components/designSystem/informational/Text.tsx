import type { ElementType, ReactNode } from 'react'
import { useRef } from 'react'

export type TextProps = {
  /**
   * The element used for the root node.
   */
  as?: ElementType
  /**
   * The className to apply.
   */
  className: string
  /**
   * The text to display.
   */
  children: ReactNode
}

export function Text({
  as: As = 'span',
  className,
  children,
}: TextProps) {

  const ref = useRef<HTMLElement>(null)

  return (
    <As
      className={className}
      ref={ref}
    >
      {children}
    </As>
  )
}
