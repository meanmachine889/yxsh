"use client";

const RESUME_DRIVE_LINK =
  "https://drive.google.com/file/d/1gcJPKYqwmLngCaruuUED1utYBywRZB6k/view?usp=drive_link";

export default function ResumeViewer() {
  return (
    <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
      <div className="w-full aspect-[8.5/11] rounded-lg overflow-hidden border border-[#2a2a2a]">
        <object
          data="/resume.pdf#view=FitH"
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 text-[#888]">
            <p className="text-sm">PDF viewer not supported in this browser.</p>
            <a
              href={RESUME_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-[#444] hover:border-white text-[#aaa] hover:text-white transition-colors px-4 py-2 rounded font-[family-name:var(--font-geist-mono)]"
            >
              View on Google Drive
            </a>
          </div>
        </object>
      </div>
      <a
        href="/resume.pdf"
        download
        className="text-xs border border-[#444] hover:border-white text-[#aaa] hover:text-white transition-colors px-4 py-2 rounded font-[family-name:var(--font-geist-mono)] mb-4"
      >
        Download Resume
      </a>
    </div>
  );
}
