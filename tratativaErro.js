// Nome: Marcos Sousa  Data de criacao: 25/05/2023


/**
 * Instruções:
 * O script recebe um valor 'isAccountant' e um valor 'blocoNome'.
 * Dependendo do valor de 'isAccountant', o script realiza diferentes verificações.
 * Se 'isAccountant' for igual a "1", o script percorre o array 'tratativa' e verifica se o valor da propriedade 'bloco' corresponde a 'blocoNome'.
 * Se for encontrado um correspondente, o script retorna a frase correspondente ao 'blocoNome'.
 * Se 'isAccountant' for igual a "2", o script também percorre o array 'tratativa' e verifica se o valor da propriedade 'bloco' corresponde a 'blocoNome'.
 * Se for encontrado um correspondente, o script retorna uma mensagem com base na frase correspondente ao 'blocoNome', removendo os primeiros 45 caracteres.
 * Se 'isAccountant' não for igual a "1" nem a "2", o script retorna uma mensagem de agradecimento.
 */

const fun = (isAccountant, blocoNome) => {
  // Declaração de uma variável chamada 'tratativa' que contém um array de objetos
  var tratativa = [
    { bloco: "nome", frase: "Ops! Parece que você digitou erroneamente seu nome." },
    { bloco: "cpf", frase: "Ops! Parece que você digitou erroneamente seu CPF." },
    { bloco: "cnpj", frase: "Ops! Parece que você digitou erroneamente seu CNPJ." },
    { bloco: "cep", frase: "Ops! Parece que você digitou erroneamente seu CEP." }
  ];

  switch (isAccountant) {
    case "1":
      // Percorre o array 'tratativa' usando um loop 'for'
      for (var i = 0; i < tratativa.length; i++) {
        // Verifica se o valor da propriedade 'bloco' do objeto atual é igual a 'blocoNome'
        if (tratativa[i].bloco == blocoNome) {
          // Retorna a frase correspondente ao 'blocoNome' encontrado
          return tratativa[i].frase;
        }else{
          return "Não consegui entender 😕"
        }
      }
      
    case "2":
      // Percorre o array 'tratativa' usando um loop 'for'
      for (var i = 0; i < tratativa.length; i++) {
        // Verifica se o valor da propriedade 'bloco' do objeto atual é igual a 'blocoNome'
        if (tratativa[i].bloco == blocoNome) {
          // Retorna uma mensagem com base na frase correspondente ao 'blocoNome', removendo os primeiros 45 caracteres
          return "Poxa, ainda não consegui identificar seu" + tratativa[i].frase.substring(45);
        }else{
          return "Não consegui entender 😕"
        }
      }

    default:
      // Retorna uma mensagem de agradecimento se 'isAccountant' não for igual a "1" nem a "2"
      return "Agradecemos o seu contato!!";
  }
};

// Exemplo de uso
//console.log(fun("1", "pato"));
