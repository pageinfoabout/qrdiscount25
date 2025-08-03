import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

export const generateUniqueQRCode = async (): Promise<{ qrDataUrl: string; uniqueId: string }> => {
  // Создаем уникальный ID с временной меткой и случайными символами
  const timestamp = Date.now();
  const randomId = uuidv4();
  const uniqueId = `${timestamp}-${randomId}`;
  
  // Создаем уникальную строку для QR-кода
  const qrData = `DISCOUNT25-${uniqueId}`;
  
  try {
    // Генерируем QR-код как Data URL
    const qrDataUrl = await QRCode.toDataURL(qrData, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'H'
    });
    
    return { qrDataUrl, uniqueId };
  } catch (error) {
    console.error('Ошибка генерации QR-кода:', error);
    throw new Error('Не удалось сгенерировать QR-код');
  }
}; 