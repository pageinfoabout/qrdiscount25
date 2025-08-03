import React, { useState } from 'react';
import { supabase } from './supabase';
import { generateUniqueQRCode } from './utils/qrGenerator';
import InitialButton from './components/InitialButton';
import UserForm from './components/UserForm';
import QRCodeDisplay from './components/QRCodeDisplay';
import './App.css';

type AppState = 'initial' | 'form' | 'qr-display';

interface QRData {
  qrDataUrl: string;
  name: string;
  email: string;
  uniqueId: string;
}

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('initial');
  const [isLoading, setIsLoading] = useState(false);
  const [qrData, setQrData] = useState<QRData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInitialClick = () => {
    setCurrentState('form');
    setError(null);
  };

  const handleFormSubmit = async (name: string, email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Генерируем уникальный QR-код
      const { qrDataUrl, uniqueId } = await generateUniqueQRCode();

      // Сохраняем данные в Supabase
      const { error: supabaseError } = await supabase
        .from('users')
        .insert([
          {
            id: uniqueId,
            name: name,
            email: email,
            qr_code: qrDataUrl,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        console.error('Ошибка сохранения в Supabase:', supabaseError);
        throw new Error('Не удалось сохранить данные. Попробуйте еще раз.');
      }

      // Сохраняем данные для отображения
      setQrData({
        qrDataUrl,
        name,
        email,
        uniqueId
      });

      setCurrentState('qr-display');
    } catch (err) {
      console.error('Ошибка:', err);
      setError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentState('initial');
    setQrData(null);
    setError(null);
  };

  const renderContent = () => {
    switch (currentState) {
      case 'initial':
        return <InitialButton onClick={handleInitialClick} />;
      
      case 'form':
        return (
          <UserForm 
            onSubmit={handleFormSubmit} 
            isLoading={isLoading} 
          />
        );
      
      case 'qr-display':
        return qrData ? (
          <QRCodeDisplay 
            qrDataUrl={qrData.qrDataUrl}
            name={qrData.name}
            email={qrData.email}
          />
        ) : null;
      
      default:
        return <InitialButton onClick={handleInitialClick} />;
    }
  };

  return (
    <div className="app">
      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button onClick={() => setError(null)} className="error-close">
            ✕
          </button>
        </div>
      )}
      
      {renderContent()}
      
      {currentState !== 'initial' && (
        <button onClick={handleReset} className="reset-btn">
          Начать заново
        </button>
      )}
    </div>
  );
};

export default App; 