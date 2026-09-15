"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { contact } from "@/content/contact";
import { withBasePath } from "@/lib/paths";

pdfjs.GlobalWorkerOptions.workerSrc = withBasePath("/pdf.worker.min.mjs");

const controlClassName =
  "font-mono text-meta uppercase tracking-meta text-silver transition-colors duration-500 ease-out hover:text-lavender-muted disabled:text-graphite";

export function ResumeViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const nextWidth = entries[0]?.contentRect.width ?? 0;
      setWidth(Math.floor(nextWidth));
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-baseline gap-x-8 gap-y-4">
        <a href={contact.mailto} className={controlClassName}>
          {contact.emailLabel}
        </a>
        <a
          href={withBasePath(contact.resume.href)}
          download={contact.resume.downloadName}
          className={controlClassName}
        >
          {contact.downloadLabel}
        </a>
        {pageCount > 1 ? (
          <div className="flex items-baseline gap-4">
            <button
              type="button"
              className={controlClassName}
              disabled={page <= 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
            >
              Prev
            </button>
            <span className="font-mono text-meta uppercase tracking-meta text-silver">
              {page} / {pageCount}
            </span>
            <button
              type="button"
              className={controlClassName}
              disabled={page >= pageCount}
              onClick={() =>
                setPage((current) => Math.min(pageCount, current + 1))
              }
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
      <div
        ref={containerRef}
        className="overflow-hidden border border-graphite bg-charcoal"
      >
        {failed ? (
          <p className="px-6 py-16 font-mono text-meta uppercase tracking-meta text-silver">
            {contact.resume.failed}{" "}
            <a
              href={withBasePath(contact.resume.href)}
              download={contact.resume.downloadName}
              className="text-lavender-muted"
            >
              {contact.downloadLabel}
            </a>
          </p>
        ) : (
          <Document
            file={withBasePath(contact.resume.href)}
            loading={
              <p className="px-6 py-16 font-mono text-meta uppercase tracking-meta text-silver">
                {contact.resume.loading}
              </p>
            }
            onLoadSuccess={({ numPages }) => {
              setPageCount(numPages);
              setFailed(false);
            }}
            onLoadError={() => setFailed(true)}
            onSourceError={() => setFailed(true)}
          >
            {width > 0 ? (
              <Page
                pageNumber={page}
                width={width}
                canvasBackground="#EDEAE3"
                renderAnnotationLayer={false}
                renderTextLayer={false}
                className="resume-page"
              />
            ) : null}
          </Document>
        )}
      </div>
    </div>
  );
}
