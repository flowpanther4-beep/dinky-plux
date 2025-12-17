export const quotes = [
  {
    id: 'mlk',
    text: 'Tengo un sueño en el que mis cuatro hijos vivirán en una nación donde no serán juzgados por el color de su piel sino por su carácter.',
    author: 'Martin Luther King Jr.',
    hint: 'Lideró marchas por los derechos civiles en los años 60.',
    options: ['Nelson Mandela', 'Martin Luther King Jr.', 'Maya Angelou'],
  },
  {
    id: 'frida',
    text: 'Pies, ¿para qué los quiero si tengo alas para volar?',
    author: 'Frida Kahlo',
    hint: 'Pintora mexicana conocida por sus autorretratos.',
    options: ['Frida Kahlo', 'Diego Rivera', 'Remedios Varo'],
  },
  {
    id: 'einstein',
    text: 'La imaginación es más importante que el conocimiento.',
    author: 'Albert Einstein',
    hint: 'Revolucionó la física con la teoría de la relatividad.',
    options: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr'],
  },
  {
    id: 'sorjuana',
    text: 'Hombres necios que acusáis a la mujer sin razón...',
    author: 'Sor Juana Inés de la Cruz',
    hint: 'Monja y escritora novohispana, autora de sonetos y ensayos.',
    options: ['Sor Juana Inés de la Cruz', 'Gabriela Mistral', 'Alfonsina Storni'],
  },
  {
    id: 'cortazar',
    text: 'Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.',
    author: 'Julio Cortázar',
    hint: 'Narrador argentino; escribió "Rayuela".',
    options: ['Jorge Luis Borges', 'Julio Cortázar', 'Mario Vargas Llosa'],
  },
  {
    id: 'khaled',
    text: 'No puedes matar un sueño. Sólo puedes posponerlo.',
    author: 'Khaled Hosseini',
    hint: 'Autor de "Cometas en el cielo".',
    options: ['Paulo Coelho', 'Khaled Hosseini', 'Haruki Murakami'],
  },
  {
    id: 'sagan',
    text: 'Somos polvo de estrellas que piensa acerca de las estrellas.',
    author: 'Carl Sagan',
    hint: 'Divulgador científico y astrónomo.',
    options: ['Carl Sagan', 'Stephen Hawking', 'Neil deGrasse Tyson'],
  },
];

export const getRandomQuote = (previousId) => {
  const available = quotes.filter((quote) => quote.id !== previousId);
  return available[Math.floor(Math.random() * available.length)];
};
