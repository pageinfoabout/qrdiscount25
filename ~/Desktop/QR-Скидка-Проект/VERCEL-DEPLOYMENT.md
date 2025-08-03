# 🚀 Деплой на Vercel - Пошаговая инструкция

## 📋 Предварительные требования

- ✅ GitHub аккаунт
- ✅ Vercel аккаунт (можно создать через GitHub)
- ✅ Настроенный Supabase проект

## 🔧 Шаг 1: Подготовка проекта

### 1.1 Создание Git репозитория

```bash
# Перейдите в папку проекта
cd ~/Desktop/QR-Скидка-Проект

# Инициализируйте Git
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: QR Скидка проект"
```

### 1.2 Создание репозитория на GitHub

1. Перейдите на [github.com](https://github.com)
2. Нажмите "New repository"
3. Назовите репозиторий: `qr-discount`
4. Оставьте его публичным
5. НЕ создавайте README (у нас уже есть)
6. Нажмите "Create repository"

### 1.3 Загрузка кода на GitHub

```bash
# Добавьте удаленный репозиторий (замените YOUR_USERNAME на ваше имя пользователя)
git remote add origin https://github.com/YOUR_USERNAME/qr-discount.git

# Отправьте код на GitHub
git branch -M main
git push -u origin main
```

## 🌐 Шаг 2: Настройка Supabase

### 2.1 Создание проекта Supabase

1. Перейдите на [supabase.com](https://supabase.com)
2. Нажмите "New Project"
3. Выберите организацию
4. Назовите проект: `qr-discount`
5. Создайте пароль для базы данных
6. Выберите регион (ближайший к вам)
7. Нажмите "Create new project"

### 2.2 Настройка базы данных

1. В панели Supabase перейдите в "SQL Editor"
2. Скопируйте и выполните SQL из файла `supabase-setup.sql`:

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

### 2.3 Получение ключей API

1. В панели Supabase перейдите в "Settings" → "API"
2. Скопируйте:
   - **Project URL** (например: `https://your-project.supabase.co`)
   - **anon public** ключ

## 🚀 Шаг 3: Деплой на Vercel

### 3.1 Создание аккаунта Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "Continue with GitHub"
3. Авторизуйтесь через GitHub

### 3.2 Импорт проекта

1. В Vercel нажмите "New Project"
2. Выберите репозиторий `qr-discount`
3. Нажмите "Import"

### 3.3 Настройка переменных окружения

В разделе "Environment Variables" добавьте:

```
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

**Важно:** Замените `your-project` и `your-anon-key-here` на ваши реальные данные из Supabase.

### 3.4 Настройка проекта

- **Framework Preset:** Create React App
- **Root Directory:** `./` (оставьте пустым)
- **Build Command:** `npm run build` (по умолчанию)
- **Output Directory:** `build` (по умолчанию)
- **Install Command:** `npm install` (по умолчанию)

### 3.5 Деплой

1. Нажмите "Deploy"
2. Дождитесь завершения сборки (обычно 2-3 минуты)
3. Получите URL вашего сайта (например: `https://qr-discount.vercel.app`)

## 🔧 Шаг 4: Обновление конфигурации

### 4.1 Обновление supabase.ts

Обновите файл `src/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key-here';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface UserData {
  id: string;
  name: string;
  email: string;
  qr_code: string;
  created_at: string;
}
```

### 4.2 Обновление README.md

Обновите URL в README.md:

```markdown
## 🚀 Демо

Приложение доступно по адресу: `https://your-project.vercel.app`
```

### 4.3 Отправка изменений

```bash
# Добавьте изменения
git add .

# Создайте коммит
git commit -m "Update configuration for Vercel deployment"

# Отправьте на GitHub
git push
```

## ✅ Шаг 5: Проверка работы

1. Откройте ваш сайт по адресу Vercel
2. Проверьте все функции:
   - ✅ Начальная страница загружается
   - ✅ Форма работает
   - ✅ QR-коды генерируются
   - ✅ Данные сохраняются в Supabase
   - ✅ QR-коды скачиваются

## 🔄 Автоматические обновления

После настройки:
- Каждый push в ветку `main` автоматически деплоится
- Vercel создает preview для pull requests
- Все изменения сразу доступны на сайте

## 🛠 Устранение проблем

### Проблема: "Build failed"
- Проверьте переменные окружения
- Убедитесь, что все зависимости установлены
- Проверьте логи сборки в Vercel

### Проблема: "Supabase connection failed"
- Проверьте правильность URL и ключа
- Убедитесь, что таблица создана
- Проверьте настройки CORS в Supabase

### Проблема: "QR codes not generating"
- Проверьте консоль браузера на ошибки
- Убедитесь, что все npm пакеты установлены

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи в Vercel Dashboard
2. Проверьте консоль браузера
3. Убедитесь, что все шаги выполнены правильно

---

🎉 **Поздравляем! Ваш проект успешно деплоен на Vercel!** 