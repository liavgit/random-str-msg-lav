const messages = [
    "Soy existoso o exitosa",
    "Agradezco todo lo que tengo",
    "Me acepto",
    "Soy suficiente!",
    "Soy feliz",
    "Tengo paz",
    "Soy luz",
    "Resplandezco!",
    "Tengo una excelente salud"
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };