import React, { useEffect } from 'react';
import brochure from '../Fies/BROCHUREACTUALIZADO.pdf'

export const BotonDescargaPDF = ({ ruta = '/docs/brochure.pdf', texto = '📄 Brochure' }) => {

  // Inyectar la animación en el <head>
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulseGrow {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <a
      href={brochure}
      download
      style={{
        backgroundColor: '#F23005',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '6px',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'background 0.3s ease',
        display: 'inline-block',
        animation: 'pulseGrow 1.2s infinite',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C12700')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F23005')}
    >
      {texto}
    </a>
  );
};
