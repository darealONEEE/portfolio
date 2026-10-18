import { useEffect, useRef, type PointerEvent } from "react"

import cvPdf from "@/imports/CV_-_DARYL_BO.pdf"

type CvModalProps = {
  onClose: () => void
}

export default function CvModal({ onClose }: CvModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const pointerStartedOutside = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    const trigger = document.activeElement

    const { overflow, paddingRight } = document.body.style

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    if (scrollbarWidth > 0) {
      const bodyPadding = parseFloat(
        getComputedStyle(document.body).paddingRight,
      )

      document.body.style.paddingRight = `${bodyPadding + scrollbarWidth}px`
    }

    document.body.style.overflow = "hidden"

    dialog.showModal()

    return () => {
      dialog.close()

      document.body.style.overflow = overflow

      document.body.style.paddingRight = paddingRight

      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true })
      }
    }
  }, [])

  const isOutsideDialog = (event: PointerEvent<HTMLDialogElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()

    return (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cv-dialog-title"
      className="cv-modal m-auto h-[calc(100dvh-1rem)] max-h-[900px] w-[calc(100%-1rem)] max-w-[1100px] overflow-hidden rounded-[14px] border border-[var(--border-subtle)] bg-[var(--page-bg)] p-0 text-[var(--text-primary)] sm:h-[calc(100dvh-3rem)] sm:w-[calc(100%-3rem)]"
      onClose={(event) => {
        if (!event.currentTarget.open) onClose()
      }}
      onPointerDown={(event) => {
        pointerStartedOutside.current = isOutsideDialog(event)
      }}
      onPointerUp={(event) => {
        if (pointerStartedOutside.current && isOutsideDialog(event)) {
          event.currentTarget.close()
        }

        pointerStartedOutside.current = false
      }}
      onPointerCancel={() => {
        pointerStartedOutside.current = false
      }}
    >
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] px-4 py-3 sm:px-6">
          <h2 id="cv-dialog-title" className="text-base font-medium sm:text-lg">
            CV Preview
          </h2>
          <div className="flex items-center gap-2">
            <a
              href={cvPdf}
              download="CV_-_DARYL_BO.pdf"
              className="cv-modal-download flex min-h-11 items-center gap-2 rounded-full bg-[var(--control-bg)] px-4 text-sm font-medium transition-colors hover:bg-[var(--control-hover)]"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className="cv-modal-close flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--control-bg)] px-3 text-sm font-medium transition-colors hover:bg-[var(--control-hover)]"
              aria-label="Close CV preview"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 bg-[#262626] p-1 sm:p-3">
          <iframe
            src={cvPdf}
            title="CV PDF preview"
            className="block size-full border-0 bg-white"
          />
        </div>
      </div>
    </dialog>
  )
}
