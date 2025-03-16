# Используем Node.js образ на базе Alpine
FROM node:16-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Строим проект
RUN npm run build

# Устанавливаем переменные окружения
ENV HOST 0.0.0.0
ENV PORT 3000

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "preview"]
