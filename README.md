# gg-ukit

### Разработка

Используется Node.js 20 (версия указана в `.nvmrc`) и Yarn Classic.

```bash
nvm use
yarn install --frozen-lockfile
yarn ts-check
yarn build
```

`yarn dev` (или `yarn storybook`) запускает Storybook 8.6 на порту 6006.
`yarn build-storybook` собирает статическую версию в `storybook-static/`.

Storybook использует React 17 и Webpack 5. Папки `public/` и `src/styles/woff/`
подключены через `staticDirs` в `.storybook/main.js`.
Документация компонентов включена через тег `autodocs`, общая страница — `src/stories/Introduction.mdx`.
Для собственных страниц документации используются блоки из `@storybook/blocks`.

Для проверки историй включён `skipLibCheck`: типы интерфейса Storybook используют API
более новых типов React. При сборке библиотеки эта настройка отключена в
`tsconfig-compile.json`, поэтому её декларации проверяются полностью.

Ветка Storybook 8.6 сохраняет совместимость с Node 20.15 и Yarn Classic.
Storybook 9 требует Yarn 4+, а Storybook 10 — также Node 20.19+.
При React 17 сборщик может предупреждать об отсутствии `useInsertionEffect`:
Storybook проверяет его наличие и использует запасной вариант.
Сборка также предупреждает о размере файлов интерфейса Storybook.

### Порядок для следующего релиза:
1. Поднять version в корневом package.json
2. Выполнить yarn build
3. Проверить содержимое пакета: cd build && npm pack --dry-run
4. Выполнить из корня yarn publish-pkg
