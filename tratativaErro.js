/*variável de entrada: isAccountant, blocoNome
 *variável de saída: messageError

/**
 * Instruções:
 *  o código verifica o valor de isAccountant. Se for menor ou igual a 1, ele percorre o array tratativa em busca de um objeto
 *  cuja propriedade bloco corresponda a blocoNome. Se encontrado, retorna a frase correspondente. Se não encontrado, retorna uma
 *  mensagem genérica de tentar novamente. Se isAccountant for maior que 1, retorna uma mensagem de agradecimento.
 */

/* 
Nome: Marcos Sousa
Data de criacao: 25/05/2023
*/



const run = (isAccountant, blocoNome) => {
  // Declaração de uma variável chamada 'tratativa' que contém um array de objetos
  var tratativa = [
    { bloco: "nome", frase: "Ops! Parece que você digitou seu nome incorretamente.",  },
    { bloco: "cpf", frase: "Ops! Parece que você digitou seu CPF incorretamente." },
    { bloco: "cnpj", frase: "Ops! Parece que você digitou seu CNPJ incorretamente." },
    { bloco: "cep", frase: "Ops! Parece que você digitou seu CEP incorretamente." }
  ];

  // Verifica se o valor de 'isAccountant' é menor ou igual a 1
  if (isAccountant <= 1) {
    // Percorre o array 'tratativa' usando um loop 'for'
    for (var i = 0; i < tratativa.length; i++) {
      // Verifica se o valor da propriedade 'bloco' do objeto atual é igual a 'blocoNome'
      if (tratativa[i].bloco == blocoNome) {
        // Retorna a frase correspondente ao 'blocoNome' encontrado
        return tratativa[i].frase;
      } else {
        // Retorna uma mensagem genérica de tentar novamente se 'blocoNome' não for encontrado
        return "Tente novamente 😕";
      }
    }
  } else {
    // Retorna uma mensagem de agradecimento se 'isAccountant' for maior que 1
    return "Agradecemos o seu contato!!";
  }
};
