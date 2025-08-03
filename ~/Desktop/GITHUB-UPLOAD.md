# 📤 Загрузка на GitHub - Пошаговая инструкция

## 🎯 Что нужно сделать

### Шаг 1: Создание репозитория
1. Перейдите на [github.com](https://github.com)
2. Нажмите **"New repository"**
3. Назовите: `qr-discount`
4. Оставьте **Public**
5. НЕ создавайте README (у нас уже есть)
6. Нажмите **"Create repository"**

### Шаг 2: Загрузка файлов через веб-интерфейс

#### 2.1 Создайте папку `src`
- Нажмите **"Add file"** → **"Create new file"**
- В поле имени напишите: `src/index.tsx`
- Скопируйте содержимое файла `src/index.tsx` из проекта
- Нажмите **"Commit new file"**

#### 2.2 Создайте остальные файлы
Повторите для каждого файла:

**Основные файлы:**
- `package.json`
- `tsconfig.json`
- `README.md`
- `LICENSE`
- `supabase-setup.sql`

**Папка src:**
- `src/index.css`
- `src/App.tsx`
- `src/App.css`
- `src/supabase.ts`

**Папка src/components:**
- `src/components/InitialButton.tsx`
- `src/components/InitialButton.css`
- `src/components/UserForm.tsx`
- `src/components/UserForm.css`
- `src/components/QRCodeDisplay.tsx`
- `src/components/QRCodeDisplay.css`

**Папка src/utils:**
- `src/utils/qrGenerator.ts`

**Папка public:**
- `public/index.html`

### Шаг 3: Проверка
После загрузки всех файлов:
- Перейдите на страницу репозитория
- Убедитесь, что все файлы загружены
- Скопируйте URL репозитория

## 🎉 Готово!

Теперь у вас есть репозиторий на GitHub с полным кодом проекта!

---

**Следующий шаг:** Используйте файл `VERCEL-DEPLOY.md` для деплоя на Vercel 