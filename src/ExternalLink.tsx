import type { AnchorHTMLAttributes } from 'react'

const NEW_TAB_HINT = 'opens in a new tab'

// A link that opens in a new tab. The behavior is announced to screen readers through visually
// hidden text (see .sr-only), or appended to the name when the caller supplies its own aria-label.
export default function ExternalLink({ children, 'aria-label': ariaLabel, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel ? `${ariaLabel} (${NEW_TAB_HINT})` : undefined}>
      {children}
      {!ariaLabel && <span className="sr-only"> ({NEW_TAB_HINT})</span>}
    </a>
  )
}
