import { useEffect, useRef, type PointerEvent } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
      aria-labelledby="project-detail-title"
      aria-describedby="project-detail-summary"
      className="project-modal m-auto w-[calc(100%-2rem)] max-w-[1040px] max-h-[calc(100dvh-2rem)] overflow-hidden rounded-[20px] border border-black/15 bg-[#f7f7f7] p-0 text-[#222] sm:w-[calc(100%-4rem)] sm:max-h-[calc(100dvh-4rem)]"
      onClose={(event) => {
        // Strict Mode can reopen the dialog before a cleanup close event is delivered.
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
      <div className="flex max-h-[calc(100dvh-2rem-2px)] flex-col sm:max-h-[calc(100dvh-4rem-2px)]">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-black/15 px-5 py-3 sm:px-8 sm:py-4">
          <p className="text-sm font-medium">Project details</p>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="project-modal-close flex min-h-11 items-center gap-3 rounded-full bg-[#e9e9e9] px-4 text-sm font-medium transition-colors hover:bg-[#dedede]"
            aria-label="Close project details"
          >
            Close <span aria-hidden="true" className="text-xl leading-none">×</span>
          </button>
        </header>

        <div
          tabIndex={0}
          role="region"
          aria-label="Project image and details"
          className="project-modal-content grid min-h-0 flex-1 grid-cols-2 overscroll-contain"
        >
          <div className="min-h-0 overflow-y-auto overscroll-contain border-r border-black/15">
            <div className="p-3 sm:p-5 lg:p-8">
              <p className="text-sm font-medium text-[#555]">{project.format}</p>
              <h2 id="project-detail-title" className="mt-3 text-2xl font-normal leading-[1.08] tracking-tight sm:text-3xl lg:text-[44px]">
                {project.title}
              </h2>
              <p id="project-detail-summary" className="mt-6 text-[15px] leading-relaxed">
                {project.summary}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#444]">
                {project.description}
              </p>

              <div className="mt-7 border-t border-black/15 pt-5">
                <h3 className="text-base font-medium">A closer look</h3>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[#444] marker:text-[#222]">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto overscroll-contain bg-[#e9e9e9]">
            <img src={project.image} alt={project.imageAlt} className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </dialog>
  );
}
