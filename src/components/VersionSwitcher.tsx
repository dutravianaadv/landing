import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { versions } from '../data/versions'

type VersionSwitcherProps = {
  current: number
  /** Conteúdo do logo exibido no botão */
  children: ReactNode
  /** Classes de cada versão do mockup, para o menu seguir o próprio design system */
  className?: string
  menuClassName?: string
  itemClassName?: string
  activeItemClassName?: string
  mutedClassName?: string
}

/** Logo clicável que abre um menu com todas as versões do mockup. Compartilhado entre as versões. */
function VersionSwitcher({
  current,
  children,
  className = '',
  menuClassName = '',
  itemClassName = '',
  activeItemClassName = '',
  mutedClassName = '',
}: VersionSwitcherProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative min-w-0">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Trocar a versão do mockup"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={`inline-flex min-w-0 max-w-full items-center gap-2 ${className}`}
      >
        {children}
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute left-0 top-full z-50 mt-3 w-[min(18rem,calc(100vw-2rem))] p-2 ${menuClassName}`}
        >
          <p className={`px-3 pb-2 pt-1 text-xs ${mutedClassName}`}>Versões do mockup</p>
          {versions.map(({ id, path, name, description }) => {
            const isCurrent = id === current
            return (
              <a
                key={id}
                role="menuitem"
                href={`${import.meta.env.BASE_URL}${path}`}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-3 px-3 py-2.5 ${itemClassName} ${isCurrent ? activeItemClassName : ''}`}
              >
                <span className="min-w-0">
                  <span className="block text-sm">
                    v{id} · {name}
                  </span>
                  <span className={`block text-xs ${mutedClassName}`}>{description}</span>
                </span>
                {isCurrent && <Check className="size-4 shrink-0" strokeWidth={1.5} />}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default VersionSwitcher
