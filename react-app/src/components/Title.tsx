function Title() {
  // JSX code
  // React lo que hace es agarrar todas estas etiquetas y convertirlas en código JavaScript, que va a ser interpretado por el navegador.
  const name = "Walter";
  if (name) {
    return <h1>Hola {name}</h1>;
  } else {
    return <h1>Hola desconocido</h1>;
  }
  // Toda esta implementación se puede convertir en un componente para después reutilizarlo en otras partes de la aplicación.
}

export default Title;
