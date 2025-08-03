import React, { useState } from 'react';
import './UserForm.css';

interface UserFormProps {
  onSubmit: (name: string, email: string) => void;
  isLoading: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, isLoading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!email.trim()) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Введите корректный email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(name.trim(), email.trim());
    }
  };

  return (
    <div className="user-form-container">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">🎁</div>
          <h2 className="form-title">Получите 25% скидку</h2>
          <p className="form-subtitle">Введите ваши данные для получения уникального QR-кода</p>
        </div>
        
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <span className="label-icon">👤</span>
              Имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Введите ваше имя"
              disabled={isLoading}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <span className="label-icon">📧</span>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Введите ваш email"
              disabled={isLoading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <span>Создаем QR-код...</span>
              </div>
            ) : (
              <>
                <span>Получить QR-код</span>
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </form>
        
        <div className="form-footer">
          <div className="security-note">
            <span className="security-icon">🔒</span>
            <span>Ваши данные защищены и не будут переданы третьим лицам</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm; 