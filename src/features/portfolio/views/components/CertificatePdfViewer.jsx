import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { RPLayout, RPPages, RPProvider } from '@react-pdf-kit/viewer'

export function CertificatePdfViewer({ certificate, language, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      className="certificate-viewer-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="certificate-viewer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-viewer-title"
      >
        <div className="certificate-viewer-header">
          <div>
            <p className="eyebrow">{language === 'pt' ? 'VISUALIZADOR DE PDF' : 'PDF VIEWER'}</p>
            <h2 id="certificate-viewer-title">{certificate.title}</h2>
          </div>
          <button
            className="certificate-viewer-close"
            type="button"
            onClick={onClose}
            aria-label={language === 'pt' ? 'Fechar certificado' : 'Close certificate'}
          >
            ×
          </button>
        </div>
        <div className="certificate-viewer-content">
          <RPProvider key={certificate.fileUrl} src={certificate.fileUrl}>
            <RPLayout toolbar style={{ height: '100%', width: '100%' }}>
              <RPPages />
            </RPLayout>
          </RPProvider>
        </div>
        <div className="certificate-viewer-footer">
          <span>{language === 'pt' ? 'Visualizador de PDF com zoom, navegação e busca.' : 'PDF viewer with zoom, navigation, and search.'}</span>
          <a className="text-link" href={certificate.fileUrl} target="_blank" rel="noreferrer">
            {language === 'pt' ? 'Abrir arquivo original' : 'Open original file'} ↗
          </a>
        </div>
      </section>
    </div>,
    document.body,
  )
}
