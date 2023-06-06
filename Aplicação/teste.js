// Tabuleiro do jogo
const tabuleiro = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];
  
  // Função para exibir o tabuleiro no console
  function exibirTabuleiro() {
    for (let i = 0; i < 3; i++) {
      let linha = '';
      for (let j = 0; j < 3; j++) {
        linha += tabuleiro[i][j] + ' ';
      }
      console.log(linha);
    }
  }
  
  // Função para verificar se um jogador venceu
  function verificarVencedor(jogador) {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
      if (
        tabuleiro[i][0] === jogador &&
        tabuleiro[i][1] === jogador &&
        tabuleiro[i][2] === jogador
      ) {
        return true;
      }
    }
  
    // Verificar colunas
    for (let j = 0; j < 3; j++) {
      if (
        tabuleiro[0][j] === jogador &&
        tabuleiro[1][j] === jogador &&
        tabuleiro[2][j] === jogador
      ) {
        return true;
      }
    }
  
    // Verificar diagonais
    if (
      tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador
    ) {
      return true;
    }
    if (
      tabuleiro[0][2] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][0] === jogador
    ) {
      return true;
    }
  
    return false;
  }
  
  // Função principal do jogo
  function jogoDaVelha() {
    let jogadorAtual = 'X';
    let jogadas = 0;
  
    while (true) {
      exibirTabuleiro();
  
      const linha = parseInt(prompt('Digite a linha (0-2):'));
      const coluna = parseInt(prompt('Digite a coluna (0-2):'));
  
      if (tabuleiro[linha][coluna] === '-') {
        tabuleiro[linha][coluna] = jogadorAtual;
        jogadas++;
  
        if (verificarVencedor(jogadorAtual)) {
          console.log(`O jogador ${jogadorAtual} venceu!`);
          break;
        } else if (jogadas === 9) {
          console.log('Empate!');
          break;
        }
  
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
      } else {
        console.log('Jogada inválida! Tente novamente.');
      }
    }
  }
  
  // Iniciar o jogo
  console.log('Bem-vindo ao Jogo da Velha!');
  jogoDaVelha();
  
