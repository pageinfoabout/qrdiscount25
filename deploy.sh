#!/bin/bash

echo "🚀 Начинаем деплой QR Скидка проекта на Vercel..."
echo ""

# Проверяем, что мы в правильной папке
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Убедитесь, что вы в папке проекта."
    exit 1
fi

echo "📦 Устанавливаем зависимости..."
npm install

echo ""
echo "🔧 Инициализируем Git репозиторий..."
git init
git add .
git commit -m "Initial commit: QR Скидка проект"

echo ""
echo "✅ Готово! Теперь выполните следующие шаги:"
echo ""
echo "1. 🌐 Создайте репозиторий на GitHub:"
echo "   - Перейдите на github.com"
echo "   - Нажмите 'New repository'"
echo "   - Назовите: qr-discount"
echo "   - НЕ создавайте README (у нас уже есть)"
echo ""
echo "2. 📤 Загрузите код на GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/qr-discount.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 🗄 Настройте Supabase:"
echo "   - Создайте проект на supabase.com"
echo "   - Выполните SQL из файла supabase-setup.sql"
echo "   - Скопируйте URL и ключ API"
echo ""
echo "4. 🚀 Деплой на Vercel:"
echo "   - Перейдите на vercel.com"
echo "   - Импортируйте репозиторий"
echo "   - Добавьте переменные окружения"
echo "   - Нажмите Deploy"
echo ""
echo "📖 Подробная инструкция в файле VERCEL-DEPLOYMENT.md"
echo ""
echo "🎉 Удачи с деплоем!" 