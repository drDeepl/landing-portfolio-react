# Template For React Project

## Project Architecture

```textplain
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── assets/      # Статичные ресурсы (иконки, изображения)
├── src/
│ ├── api/         # Работа с api запросами
│ ├── assets/      # Локальные медиа-ресурсы (изображения, шрифты)
│ ├── components/  # Переиспользуемые универсальные UI компоненты
│ ├── config/      # Конфигурация прилжоения
│ ├── context/     # Реализация React Context для управления состоянием
│ ├── features/    # Директория для группировки по функциональным областям
│ ├── hooks/       # Глобальные кастомные хуки
│ ├── layouts/     # Макеты(слои) для страниц
│ ├── pages/       # Общие\универсальные страницы
│ ├── store/       # Глобальное хранилище
│ ├── routes/      # Конфигурация маршрутов
│ ├── styles/      # Глобальные стили, темы, CSS-переменные
│ ├── utils/       # Утилиты (хелперы, форматтеры)
│ ├── App.ts
│ ├── index.ts
│ ├── serviceWorker.ts
│ └── setupTests.ts
├── .env
├── .gitignore
├── package.json
├── README.md
└── package-lock.json
└── tsconfig.app.json
└── tsconfig.json
└── vite.config.json
└── vite.node.json
```
