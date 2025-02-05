import React from 'react';
import { fetchPdf } from '../utils/fetchPdf';

interface DownloadPdfButtonProps {
  id: string;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ id }) => {
  const handleDownload = () => {
    fetchPdf(id);
  };

  return (
    <button onClick={handleDownload}>
      Descargar PDF
    </button>
  );
};

export default DownloadPdfButton;