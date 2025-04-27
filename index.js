// BOTFURIA - Estrutura de Chatbot em JavaScript

// Estado inicial da conversa
let estadoConversa = 'menu-principal';

// Armazena as mensagens do usuário caso escolha "Outro"
const mensagensOutro = [];

// Perguntas principais
const perguntasMenu = {
  'menu-principal': {
    pergunta: 'Olá, furioso(a)! O que você gostaria de descobrir sobre nós? 🐾🔥',
    opcoes: [
      '1. Curiosidades sobre a FURIA',
      '2. Calendário de jogos',
      '3. Resultados e estatísticas',
      '4. Quiz, qual seu nível de torcedor?',
      '5. Conhecendo jogadores',
      '6. Conteúdos e mídias',
      '7. Estilo e lifestyle',
      '8. Outro'
    ]
  },
  'curiosidades': {
    pergunta: 'O que você gostaria de descobrir? 🎯',
    opcoes: [
      '1. Você sabia que o arT tem o estilo de jogo mais agressivo?',
      '2. Quer descobrir a origem do nome FURIA?',
      '3. Quer conhecer os bordões mais usados pela comunidade?'
    ]
  },
  'calendario': {
    pergunta: 'Sobre o calendário, o que você quer ver? 🗓️',
    opcoes: [
      '1. Quando é o próximo jogo da FURIA?',
      '2. Ver o calendário completo do mês'
    ]
  },
  'resultados': {
    pergunta: 'Qual informação você quer sobre nossos resultados? 🎮',
    opcoes: [
      '1. Resultados dos últimos jogos',
      '2. Número de vitórias este mês',
      '3. Jogador com mais kills no último mapa'
    ]
  },
  'quiz': {
    pergunta: 'Quer participar de um quiz rápido para testar seu nível de torcida? 🏆🔥',
    opcoes: [
      'Sim',
      'Não'
    ]
  },
  'jogadores': {
    pergunta: 'Sobre qual jogador você quer saber mais? 👤',
    opcoes: [
      '1. KSCERATO',
      '2. yuurih',
      '3. arT'
    ]
  },
  'midias': {
    pergunta: 'Que tipo de conteúdo você quer ver? 🎥',
    opcoes: [
      '1. Bastidores das viagens e treinos',
      '2. Melhores jogadas do time',
      '3. Documentário da FURIA'
    ]
  },
  'estilo': {
    pergunta: 'Sobre nosso estilo, o que você quer explorar? ✨',
    opcoes: [
      '1. Novas coleções de roupas',
      '2. Wallpapers e artes exclusivas',
      '3. Grito oficial da torcida'
    ]
  }
};

// Função para enviar mensagem do bot
function enviarMensagem(mensagem, opcoes = []) {
  console.log('BOT:', mensagem);
  if (opcoes.length > 0) {
    opcoes.forEach(opcao => console.log(opcao));
  }
}

// Função para receber resposta do usuário
function receberResposta(resposta) {
  resposta = resposta.trim().toLowerCase();

  if (estadoConversa === 'menu-principal') {
    if (resposta >= 1 && resposta <= 8) {
      switch (resposta) {
        case '1': estadoConversa = 'curiosidades'; break;
        case '2': estadoConversa = 'calendario'; break;
        case '3': estadoConversa = 'resultados'; break;
        case '4': estadoConversa = 'quiz'; break;
        case '5': estadoConversa = 'jogadores'; break;
        case '6': estadoConversa = 'midias'; break;
        case '7': estadoConversa = 'estilo'; break;
        case '8': estadoConversa = 'outro'; break;
      }
      if (estadoConversa !== 'outro') {
        enviarMensagem(perguntasMenu[estadoConversa].pergunta, perguntasMenu[estadoConversa].opcoes);
      } else {
        enviarMensagem('Pode digitar sua pergunta! 🐾');
      }
    } else {
      enviarMensagem('Escolha um número de 1 a 8, por favor. 🙏');
    }
  } else if (estadoConversa === 'outro') {
    mensagensOutro.push(resposta);
    enviarMensagem('Recebemos sua sugestão! 🐾 Voltando ao menu principal.');
    estadoConversa = 'menu-principal';
    enviarMensagem(perguntasMenu['menu-principal'].pergunta, perguntasMenu['menu-principal'].opcoes);
  } else {
    if (resposta === 'não' || resposta === 'nao') {
      estadoConversa = 'menu-principal';
      enviarMensagem(perguntasMenu['menu-principal'].pergunta, perguntasMenu['menu-principal'].opcoes);
    } else if (resposta === 'sim' || (resposta >= 1 && resposta <= 3)) {
      enviarMensagem('Ótimo! Em breve vamos mostrar essa informação aqui! 🔥');
      estadoConversa = 'menu-principal';
      enviarMensagem(perguntasMenu['menu-principal'].pergunta, perguntasMenu['menu-principal'].opcoes);
    } else {
      enviarMensagem('Por favor, responda com um número válido ou "Sim"/"Não".');
    }
  }
}

// Iniciar a conversa
enviarMensagem(perguntasMenu['menu-principal'].pergunta, perguntasMenu['menu-principal'].opcoes);

// Exemplo de uso no console:
// receberResposta('1');
// receberResposta('2');
