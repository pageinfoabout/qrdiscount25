import React from 'react';
import './QRCodeDisplay.css';

interface QRCodeDisplayProps {
  qrDataUrl: string;
  name: string;
  email: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrDataUrl, name, email }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `qr-discount-${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="qr-display">
      <div className="qr-container">
        <h2 className="qr-title">Ваш QR-код готов!</h2>
        <p className="qr-subtitle">Покажите этот код для получения 25% скидки</p>
        
        <div className="qr-code-wrapper">
          <img src={qrDataUrl} alt="QR Code" className="qr-image" />
        </div>
        
        <div className="user-info">
          <p><strong>Имя:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
        
        <button onClick={handleDownload} className="download-btn">
          Скачать QR-код
        </button>
        
        <div className="success-message">
          <p>✅ Данные успешно сохранены в базе данных</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeDisplay; 