export function DownloadCV({ variant = 'primary', className = '' }) {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/cv/Nitish_Kalra_CV.pdf';
    link.download = 'Nitish_Kalra_CV.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (variant === 'primary') {
    return (
      <button
        onClick={handleDownload}
        className={`group inline-flex items-center gap-3 rounded-full bg-robb-purple px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-robb-purpleDark hover:shadow-xl ${className}`}
      >
        <span>Download CV</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        onClick={handleDownload}
        className={`group inline-flex items-center gap-2 rounded-full bg-robb-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-robb-purple ${className}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>Download CV</span>
        <span>→</span>
      </button>
    );
  }

  // Minimal variant (for work page)
  return (
    <button
      onClick={handleDownload}
      className={`group inline-flex items-center gap-2 text-robb-purple hover:text-robb-purpleDark transition ${className}`}
    >
      <span>Download CV</span>
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  );
}

