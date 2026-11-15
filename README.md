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

### Порядок для следующего релиза:
1. Поднять version в корневом package.json
2. Выполнить yarn build
3. Проверить содержимое пакета: cd build && npm pack --dry-run
4. Выполнить из корня yarn publish-pkg
