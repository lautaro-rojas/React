# React

- [React](#react)
  - [Steps to setup a react project](#steps-to-setup-a-react-project)
    - [Vite](#vite)
    - [Bootstrap](#bootstrap)
  - [Explication](#explication)
  - [Public libraries](#public-libraries)

## Steps to setup a react project

### [Vite](https://vite.dev/)

Vite will help us build the project structure faster than `create-react-app`.

```bash
npm create vite@latest [projectname] || npm create vite@latest [projectname] -- --template react
# Vite instructions and installations...
cd [projectname]
npm install
npm run dev
```

### [Bootstrap](https://getbootstrap.com/)

Bootstrap is a CSS framework that will help us make the components we create look much better.

```bash
npm i bootstrap@latest
```

## Explication

| State | Props |
| :--- | :--- |
| Internal data | Arguments |
| The state can cahnge | The properties can't change |
| Re render | Re render |

When the property or status changes, a ReRender will be triggered.

## Public libraries

1. Bootstrap -> react.bootstrap
    Entrega un listado de componentes que podemos utilizar asignándole clases de CSS a nuestros elementos.
2. Tailwind -> Dasy UI
    En lugar de entreganos componentes nos va a entregar unas utility classes para que nosotros le asignemos un estilo a nuestros componentes.
3. Bulma CSS -> react.bulma
4. Chakra UI
    Se creó específicamente para usarla con react. También nos entrega un listado de componentes.