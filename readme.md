# Сайт hustlahusky.me

## Начало работы

Эти инструкции помогут тебе получить копию проекта на локальную машину для разработки и/или тестирования. Смотри, как развернуть проект в живой системе, в разделе "Деплой".

### Необходимые условия окружения

Для запуска проекта в системе должны быть установлены:

- Node.js

### Установка

Клонируем репозиторий, собираем фронтэнд и запускаем приложение

```bash
git clone git@github.com:hustlahusky/hustlahusky.github.io.git hustlahusky && cd hustlahusky
npm install
npm start
```

### Проверка стиля кода

Линтеры проверяют код на соответствие стилю кода.
Запуск линтеров производится автоматически перед коммитом или командой:

```bash
npm run lint
```

## Разработано с использованием

* [Github Pages](https://github.com/)
* [TypeScript](http://www.typescriptlang.org)
* [Parcel](http://parceljs.org)
* [UIkit](https://getuikit.com/) - A lightweight and modular front-end framework for developing fast and powerful web interfaces.
