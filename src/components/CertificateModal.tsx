import { useEffect, useRef, type PointerEvent } from "react";

export type Certificate = {
  year: string;
  name: string;
  source: string;
  desc: string;
  image: string;
  imageAlt: string;
};

type CertificateModalProps = {
  certificate: Certificate;
  onClose: () => void;
};

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerStartedOutside = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const trigger = document.activeElement;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      const bodyPadding = parseFloat(getComputedStyle(document.body).paddingRight);
      document.body.style.paddingRight = `${bodyPadding + scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, []);

  const isOutsideDialog = (event: PointerEvent<HTMLDialogElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom;
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="certificate-dialog-title"
      className="certificate-modal m-auto w-[calc(100%-1.5rem)] max-w-[1200px] max-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-[14px] border border-white/20 bg-[#222] p-0 text-white sm:w-[calc(100%-3rem)] sm:max-h-[calc(100dvh-3rem)]"
      onClose={(event) => {
        if (!event.currentTarget.open) onClose();
      }}
      onPointerDown={(event) => {
        pointerStartedOutside.current = isOutsideDialog(event);
      }}
      onPointerUp={(event) => {
        if (pointerStartedOutside.current && isOutsideDialog(event)) {
          event.currentTarget.close();
        }
        pointerStartedOutside.current = false;
      }}
      onPointerCancel={() => { pointerStartedOutside.current = false; }}
    >
      <div className="flex max-h-[calc(100dvh-1.5rem-2px)] flex-col sm:max-h-[calc(100dvh-3rem-2px)]">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/20 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="text-xs text-white/70">Certificate</p>
            <h2 id="certificate-dialog-title" className="truncate text-sm font-medium sm:text-base">
              {certificate.name}
            </h2>
          </div>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="certificate-modal-close flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-white/35 bg-white/10 px-3 text-sm font-medium transition-colors hover:bg-white/20"
            aria-label={`Close ${certificate.name} certificate`}
          >
            Close
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-auto overscroll-contain bg-[#161616] p-2 sm:p-4">
          <img
            src={certificate.image}
            alt={certificate.imageAlt}
            className="mx-auto block h-auto max-h-[calc(100dvh-8rem)] w-auto max-w-full object-contain sm:max-h-[calc(100dvh-10rem)]"
          />
        </div>
      </div>
    </dialog>
  );
}
