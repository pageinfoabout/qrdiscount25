# QR Скидка - Генератор QR-кодов для музыкального продюсирования

🎵 **Веб-приложение для генерации уникальных QR-кодов со скидкой 25% на музыкальное продюсирование от Ивана Горского**

## 🚀 Демо

Приложение доступно по адресу: `http://localhost:3001`

## ✨ Особенности

- 🎯 **Современный дизайн** с градиентным фоном и анимациями
- 📱 **Адаптивная верстка** для всех устройств
- 🔐 **Уникальные QR-коды** для каждого пользователя
- 💾 **Интеграция с Supabase** для хранения данных
- 📥 **Скачивание QR-кодов** в формате PNG
- ✅ **Валидация форм** с красивыми сообщениями об ошибках
- 🎨 **Плавные анимации** и переходы между состояниями

## 🛠 Технологии

- **Frontend:** React 18 + TypeScript
- **Стилизация:** CSS3 с современными эффектами (backdrop-filter, градиенты)
- **База данных:** Supabase
- **QR-коды:** qrcode.js
- **Уникальные ID:** uuid
- **Анимации:** CSS animations и transitions

## 📦 Установка и запуск

### Предварительные требования

- Node.js (версия 16 или выше)
- npm или yarn
- Аккаунт Supabase

### Шаги установки

1. **Клонируйте репозиторий:**
```bash
git clone https://github.com/your-username/qr-discount.git
cd qr-discount
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Настройте Supabase:**
   - Создайте проект на [supabase.com](https://supabase.com)
   - Выполните SQL скрипт из файла `supabase-setup.sql`
   - Обновите конфигурацию в `src/supabase.ts`

4. **Запустите проект:**
```bash
npm start
```

5. **Откройте браузер:**
   - Перейдите на [http://localhost:3001](http://localhost:3001)

## 🗄 Настройка базы данных

Выполните следующий SQL скрипт в Supabase SQL Editor:

```sql
-- Создание таблицы users для хранения данных пользователей и QR-кодов
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  qr_code TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Создание индекса для быстрого поиска по email
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Создание индекса для сортировки по дате создания
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at DESC);
```

## 📁 Структура проекта

```
qr-discount/
├── public/
│   └── index.html                 # HTML шаблон
├── src/
│   ├── components/
│   │   ├── InitialButton.tsx      # Начальная кнопка
│   │   ├── InitialButton.css      # Стили начальной кнопки
│   │   ├── UserForm.tsx           # Форма пользователя
│   │   ├── UserForm.css           # Стили формы
│   │   ├── QRCodeDisplay.tsx      # Отображение QR-кода
│   │   └── QRCodeDisplay.css      # Стили QR-кода
│   ├── utils/
│   │   └── qrGenerator.ts         # Генерация QR-кодов
│   ├── App.tsx                    # Основной компонент
│   ├── App.css                    # Стили приложения
│   ├── index.tsx                  # Точка входа
│   ├── index.css                  # Глобальные стили
│   └── supabase.ts                # Конфигурация Supabase
├── package.json                   # Зависимости
├── tsconfig.json                  # Конфигурация TypeScript
├── supabase-setup.sql             # SQL для настройки БД
└── README.md                      # Документация
```

## 🎨 Дизайн

### Цветовая схема
- **Основной градиент:** От синего к фиолетовому и розовому
- **Акцентный цвет:** Оранжево-красный для кнопок
- **Текст:** Белый с тенями для читаемости

### Анимации
- **Плавающие элементы:** Логотип и заголовок
- **Hover эффекты:** Кнопки и интерактивные элементы
- **Переходы:** Плавные переходы между состояниями

## 🔧 Конфигурация

### Переменные окружения

Создайте файл `.env.local` в корне проекта:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Настройка Supabase

Обновите файл `src/supabase.ts`:

```typescript
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your_supabase_url';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your_supabase_anon_key';
```

## 🚀 Развертывание

### Vercel

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения
3. Деплой произойдет автоматически

### Netlify

1. Подключите репозиторий к Netlify
2. Добавьте переменные окружения
3. Настройте build команду: `npm run build`

## 📱 Адаптивность

Приложение оптимизировано для:
- 📱 Мобильные устройства (320px+)
- 📱 Планшеты (768px+)
- 💻 Десктопы (1024px+)

## 🔒 Безопасность

- ✅ Валидация данных на клиенте и сервере
- ✅ Безопасное хранение в Supabase
- ✅ Уникальные QR-коды для каждого пользователя
- ✅ Защита от SQL-инъекций

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для получения дополнительной информации.

## 👨‍💻 Автор

**Иван Горский** - Музыкальный продюсер

- 🎵 Специализация: Музыкальное продюсирование
- 📧 Email: gorskii241152003@gmail.com
- 🌐 Сайт: [Скоро будет]

## 🙏 Благодарности

- Supabase за отличную платформу
- React команде за фреймворк
- Сообществу open source за инструменты

---

⭐ **Если проект вам понравился, поставьте звездочку!** 