"use client";

import React from "react";
import { Download } from "lucide-react";

const DownloadCv = () => {
    return (
        <a
            href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-5 py-3 text-sm font-bold text-[var(--site-text)] transition-colors hover:bg-[var(--site-panel)]"
        >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
        </a>
    )
}

export {DownloadCv}