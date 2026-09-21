// Link text ending in a decorative "→": the arrow is hidden from screen readers so they don't
// announce "right arrow".
export default function LinkLabel({ text }: { text: string }) {
  const match = text.match(/^(.*?)\s*→$/)
  if (!match) return <>{text}</>
  return (
    <>
      {match[1]}
      <span aria-hidden="true" style={{ marginLeft: '0.3em' }}>
        →
      </span>
    </>
  )
}

// Accessible name for repeated links such as "view on github →": the visible text (minus the
// arrow) plus the item it belongs to, so a links list can tell them apart.
export const linkName = (label: string, context: string) => `${label.replace(/\s*→$/, '')} – ${context}`
