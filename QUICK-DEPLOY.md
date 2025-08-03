# 🚀 Быстрый деплой на Vercel

## ⚡ Быстрый старт

1. **Запустите скрипт деплоя:**
   ```bash
   ./deploy.sh
   ```

2. **Следуйте инструкциям на экране**

## 📋 Пошаговая инструкция

### 1. GitHub
- Создайте репозиторий `qr-discount` на GitHub
- НЕ создавайте README (у нас уже есть)
- Скопируйте команды из скрипта

### 2. Supabase
- Создайте проект на [supabase.com](https://supabase.com)
- Выполните SQL из `supabase-setup.sql`
- Скопируйте URL и ключ API

### 3. Vercel
- Перейдите на [vercel.com](https://vercel.com)
- Импортируйте репозиторий
- Добавьте переменные окружения:
  ```
  REACT_APP_SUPABASE_URL=https://your-project.supabase.co
  REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
  ```
- Нажмите Deploy

## 🎯 Результат

Ваш сайт будет доступен по адресу: `https://qr-discount.vercel.app`

## 📖 Подробная инструкция

См. файл `VERCEL-DEPLOYMENT.md` для детального описания. 