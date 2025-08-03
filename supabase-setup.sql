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

-- Добавление комментариев к таблице
COMMENT ON TABLE users IS 'Таблица для хранения данных пользователей и их QR-кодов';
COMMENT ON COLUMN users.id IS 'Уникальный идентификатор пользователя';
COMMENT ON COLUMN users.name IS 'Имя пользователя';
COMMENT ON COLUMN users.email IS 'Email пользователя';
COMMENT ON COLUMN users.qr_code IS 'Data URL QR-кода';
COMMENT ON COLUMN users.created_at IS 'Дата и время создания записи'; 