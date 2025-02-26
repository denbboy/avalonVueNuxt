# Используем официальный Node.js образ
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем Nuxt-приложение
RUN npm run build

# Указываем финальный минимальный образ
FROM node:18-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранный проект из builder
COPY --from=builder /app ./

# Открываем порт (если нужно)
EXPOSE 3000

# Запускаем Nuxt в продакшен-режиме
CMD ["npm", "run", "preview"]
