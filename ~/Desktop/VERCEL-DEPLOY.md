# 🚀 Деплой на Vercel - Пошаговая инструкция

## 🎯 Предварительные требования

- ✅ GitHub репозиторий с кодом (создан по инструкции GITHUB-UPLOAD.md)
- ✅ Supabase проект (настроен)

## 🔧 Шаг 1: Настройка Supabase

### 1.1 Создайте проект Supabase
1. Перейдите на [supabase.com](https://supabase.com)
2. Нажмите **"New Project"**
3. Выберите организацию
4. Назовите проект: `qr-discount`
5. Создайте пароль для базы данных
6. Выберите регион (ближайший к вам)
7. Нажмите **"Create new project"**

### 1.2 Настройте базу данных
1. В панели Supabase перейдите в **"SQL Editor"**
2. Нажмите **"New query"**
3. Скопируйте и вставьте SQL из файла `supabase-setup.sql`:

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

4. Нажмите **"Run"**

### 1.3 Получите ключи API
1. В панели Supabase перейдите в **"Settings"** → **"API"**
2. Скопируйте:
   - **Project URL** (например: `https://your-project.supabase.co`)
   - **anon public** ключ

## 🚀 Шаг 2: Деплой на Vercel

### 2.1 Создайте аккаунт Vercel
1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите **"Continue with GitHub"**
3. Авторизуйтесь через GitHub

### 2.2 Импортируйте проект
1. В Vercel нажмите **"New Project"**
2. Найдите репозиторий `qr-discount` в списке
3. Нажмите **"Import"**

### 2.3 Настройте переменные окружения
В разделе **"Environment Variables"** добавьте:

**Первая переменная:**
- **Name:** `REACT_APP_SUPABASE_URL`
- **Value:** `https://your-project.supabase.co` (замените на ваш URL)

**Вторая переменная:**
- **Name:** `REACT_APP_SUPABASE_ANON_KEY`
- **Value:** ваш anon ключ из Supabase

### 2.4 Настройте проект
- **Framework Preset:** Create React App
- **Root Directory:** оставьте пустым
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

### 2.5 Запустите деплой
1. Нажмите **"Deploy"**
2. Дождитесь завершения сборки (2-3 минуты)
3. Получите URL вашего сайта

## ✅ Шаг 3: Проверка работы

1. Откройте ваш сайт по адресу Vercel
2. Проверьте все функции:
   - ✅ Начальная страница загружается
   - ✅ Форма работает
   - ✅ QR-коды генерируются
   - ✅ Данные сохраняются в Supabase
   - ✅ QR-коды скачиваются

## 🎉 Готово!

**Ваш сайт работает по адресу:** `https://qr-discount.vercel.app`

### Что получилось:
- 🌐 Сайт работает 24/7
- 🔒 Безопасное SSL соединение
- 📱 Адаптивный дизайн
- 💾 Данные сохраняются в Supabase
- 🔐 Уникальные QR-коды для каждого пользователя

## 🔄 Автоматические обновления

После настройки:
- Каждый push в ветку `main` автоматически деплоится
- Vercel создает preview для pull requests
- Все изменения сразу доступны на сайте

---

**🎯 Время выполнения:** ~20 минут  
**💰 Стоимость:** Бесплатно навсегда  
**🔄 Автообновления:** Да** 