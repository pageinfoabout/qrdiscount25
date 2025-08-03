# Инструкции по развертыванию

## Настройка Supabase

1. **Создайте проект в Supabase:**
   - Перейдите на [supabase.com](https://supabase.com)
   - Создайте новый проект
   - Запишите URL проекта и anon key

2. **Настройте базу данных:**
   - Откройте SQL Editor в панели управления Supabase
   - Выполните SQL скрипт из файла `supabase-setup.sql`

3. **Обновите конфигурацию:**
   - Откройте файл `src/supabase.ts`
   - Замените URL и ключ на ваши данные:

```typescript
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
```

## Развертывание на Vercel

1. **Подготовьте проект:**
   ```bash
   npm run build
   ```

2. **Создайте аккаунт на Vercel:**
   - Перейдите на [vercel.com](https://vercel.com)
   - Подключите ваш GitHub репозиторий

3. **Настройте переменные окружения:**
   - В настройках проекта Vercel добавьте:
     - `REACT_APP_SUPABASE_URL` = ваш Supabase URL
     - `REACT_APP_SUPABASE_ANON_KEY` = ваш Supabase anon key

4. **Обновите конфигурацию для продакшена:**
   ```typescript
   const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'YOUR_SUPABASE_URL';
   const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';
   ```

## Развертывание на Netlify

1. **Подготовьте проект:**
   ```bash
   npm run build
   ```

2. **Создайте файл `netlify.toml`:**
   ```toml
   [build]
     publish = "build"
     command = "npm run build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Настройте переменные окружения в Netlify Dashboard**

## Локальная разработка

1. **Установите зависимости:**
   ```bash
   npm install
   ```

2. **Запустите проект:**
   ```bash
   npm start
   ```

3. **Откройте браузер:**
   - Перейдите на [http://localhost:3000](http://localhost:3000)

## Проверка работоспособности

1. **Тестирование формы:**
   - Введите корректные данные
   - Проверьте валидацию
   - Убедитесь, что QR-код генерируется

2. **Проверка базы данных:**
   - Откройте Supabase Dashboard
   - Проверьте таблицу `users`
   - Убедитесь, что данные сохраняются

3. **Тестирование уникальности:**
   - Создайте несколько QR-кодов
   - Проверьте, что каждый уникален

## Безопасность

- ✅ Используйте HTTPS в продакшене
- ✅ Настройте CORS в Supabase
- ✅ Ограничьте доступ к API ключам
- ✅ Регулярно обновляйте зависимости 