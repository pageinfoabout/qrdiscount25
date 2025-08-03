import React from 'react';
import './InitialButton.css';

interface InitialButtonProps {
  onClick: () => void;
}

const InitialButton: React.FC<InitialButtonProps> = ({ onClick }) => {
  return (
    <div className="initial-container">
      <div className="content-wrapper">
        <div className="logo-section">
          <div className="logo-icon">🎯</div>
          <h1 className="main-title">QR Скидка</h1>
        </div>
        <div className="subtitle-section">
          <p className="main-subtitle">Получите уникальную скидку 25% на музыкальное продюсирование</p>
          <p className="main-subtitle">от Ивана Горского</p>
        </div>
        
        <div className="cta-section">
          <button onClick={onClick} className="discount-btn">
            <span className="btn-text">Получи 25% скидку</span>
            <span className="btn-icon">🎁</span>
          </button>
          <p className="cta-note">Быстро • Безопасно • Бесплатно</p>
        </div>
      </div>
    </div>
  );
};

export default InitialButton; 