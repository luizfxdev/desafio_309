// Banco de dados de estrelas com coordenadas em anos-luz e informações
const starDatabase = {
  sol: {
    name: 'Sol',
    coords: [0, 0, 0], // Referência central
    info: {
      color: 'Amarelo (G2V)',
      constellation: 'N/A (Nossa estrela)',
      relevance: 'Estrela central do nosso Sistema Solar, fonte de vida na Terra',
      habitableZone: 'Possui 8 planetas, incluindo a Terra na zona habitável',
      sizeComparison: '1.0 (Referência)',
      distance: '0 anos-luz'
    }
  },
  proxima: {
    name: 'Proxima Centauri',
    coords: [1.295, -2.917, -3.148], // Coordenadas galácticas aproximadas em anos-luz
    info: {
      color: 'Vermelho (M5.5Ve)',
      constellation: 'Centaurus',
      relevance: 'Estrela mais próxima do Sol, anã vermelha com intensa atividade de erupções',
      habitableZone: 'Possui Proxima b, um exoplaneta potencialmente habitável na zona habitável',
      sizeComparison: '0.14 (14% do tamanho do Sol)',
      distance: '4.24 anos-luz'
    }
  },
  'alpha-a': {
    name: 'Alpha Centauri A',
    coords: [1.348, -2.902, -3.11],
    info: {
      color: 'Amarelo (G2V)',
      constellation: 'Centaurus',
      relevance: 'Componente principal do sistema triplo Alpha Centauri, muito similar ao Sol',
      habitableZone: 'Possível presença de planetas rochosos ainda não confirmados',
      sizeComparison: '1.22 (122% do tamanho do Sol)',
      distance: '4.37 anos-luz'
    }
  },
  'alpha-b': {
    name: 'Alpha Centauri B',
    coords: [1.34, -2.91, -3.115],
    info: {
      color: 'Laranja (K1V)',
      constellation: 'Centaurus',
      relevance: 'Segunda estrela do sistema Alpha Centauri, ligeiramente menor que o Sol',
      habitableZone: 'Busca por exoplanetas em andamento, zona habitável muito próxima da estrela',
      sizeComparison: '0.86 (86% do tamanho do Sol)',
      distance: '4.37 anos-luz'
    }
  },
  barnard: {
    name: 'Estrela de Barnard',
    coords: [1.827, -1.352, 5.004],
    info: {
      color: 'Vermelho (M4Ve)',
      constellation: 'Ophiuchus',
      relevance: 'Segunda estrela mais próxima do Sol, possui o maior movimento próprio conhecido',
      habitableZone: "Possui Barnard's Star b (controverso), super-Terra além da zona habitável",
      sizeComparison: '0.15-0.20 (15-20% do tamanho do Sol)',
      distance: '5.96 anos-luz'
    }
  },
  sirius: {
    name: 'Sirius A',
    coords: [-2.648, -7.186, 2.434],
    info: {
      color: 'Branco azulado (A1V)',
      constellation: 'Canis Major',
      relevance: 'Estrela mais brilhante no céu noturno, sistema binário com Sirius B (anã branca)',
      habitableZone: 'Sem planetas confirmados, sistema jovem e quente',
      sizeComparison: '1.71 (171% do tamanho do Sol)',
      distance: '8.60 anos-luz'
    }
  },
  betelgeuse: {
    name: 'Betelgeuse',
    coords: [-131.24, 166.08, -198.46],
    info: {
      color: 'Vermelho (M1-2Ia-Iab)',
      constellation: 'Orion',
      relevance: 'Supergigante vermelha, uma das maiores estrelas conhecidas, próxima de explodir como supernova',
      habitableZone: 'Sem zona habitável viável, estrela massiva em fase final de vida',
      sizeComparison: '887-955 (cerca de 900 vezes o tamanho do Sol)',
      distance: '548 anos-luz'
    }
  }
};

// Constante para conversão de anos-luz para quilômetros
const LIGHT_YEAR_TO_KM = 9.461e12; // 1 ano-luz = 9.461 trilhões de km

// Elementos DOM
const btnCalcular = document.getElementById('btn-calcular');
const btnVoltar = document.getElementById('btn-voltar');
const resultSection = document.getElementById('result-section');
const resultadoConteudo = document.getElementById('resultado-conteudo');
const estrelaPartida = document.getElementById('estrela-partida');
const estrelaDestino = document.getElementById('estrela-destino');

// Elementos de áudio
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const backgroundMusic = document.getElementById('background-music');

// Função para calcular distância euclidiana em 3D
function calculateEuclideanDistance(star1Coords, star2Coords) {
  const dx = star2Coords[0] - star1Coords[0];
  const dy = star2Coords[1] - star1Coords[1];
  const dz = star2Coords[2] - star1Coords[2];

  const distanceSquared = Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2);
  const distance = Math.sqrt(distanceSquared);

  return {
    distance,
    dx,
    dy,
    dz,
    distanceSquared
  };
}

// Função para formatar número em notação científica ou abreviada
function formatLargeNumber(num) {
  if (num >= 1e12) {
    return `${(num / 1e12).toFixed(2)} trilhões`;
  } else if (num >= 1e9) {
    return `${(num / 1e9).toFixed(2)} bilhões`;
  } else if (num >= 1e6) {
    return `${(num / 1e6).toFixed(2)} milhões`;
  }
  return num.toFixed(2);
}

// Função para exibir o resultado completo
function displayResult(star1Key, star2Key) {
  const star1 = starDatabase[star1Key];
  const star2 = starDatabase[star2Key];

  // Calcular distância euclidiana
  const result = calculateEuclideanDistance(star1.coords, star2.coords);
  const distanceLightYears = result.distance;
  const distanceKm = distanceLightYears * LIGHT_YEAR_TO_KM;

  // Construir HTML do resultado
  let html = `
        <div class="calc-step">
            <h3>📍 Estrelas Selecionadas</h3>
            <p><strong>Partida:</strong> ${star1.name}</p>
            <p><strong>Coordenadas:</strong> (${star1.coords[0]}, ${star1.coords[1]}, ${star1.coords[2]}) anos-luz</p>
            <p><strong>Destino:</strong> ${star2.name}</p>
            <p><strong>Coordenadas:</strong> (${star2.coords[0]}, ${star2.coords[1]}, ${star2.coords[2]}) anos-luz</p>
        </div>
        
        <div class="calc-step">
            <h3>🧮 Cálculo Passo a Passo</h3>
            <p><strong>Fórmula da Distância Euclidiana 3D:</strong></p>
            <p>d = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]</p>
            <br>
            <p><strong>Diferenças nas coordenadas:</strong></p>
            <p>Δx = ${star2.coords[0]} - (${star1.coords[0]}) = ${result.dx.toFixed(3)}</p>
            <p>Δy = ${star2.coords[1]} - (${star1.coords[1]}) = ${result.dy.toFixed(3)}</p>
            <p>Δz = ${star2.coords[2]} - (${star1.coords[2]}) = ${result.dz.toFixed(3)}</p>
            <br>
            <p><strong>Quadrados das diferenças:</strong></p>
            <p>(Δx)² = (${result.dx.toFixed(3)})² = ${Math.pow(result.dx, 2).toFixed(3)}</p>
            <p>(Δy)² = (${result.dy.toFixed(3)})² = ${Math.pow(result.dy, 2).toFixed(3)}</p>
            <p>(Δz)² = (${result.dz.toFixed(3)})² = ${Math.pow(result.dz, 2).toFixed(3)}</p>
            <br>
            <p><strong>Soma dos quadrados:</strong></p>
            <p>${Math.pow(result.dx, 2).toFixed(3)} + ${Math.pow(result.dy, 2).toFixed(3)} + ${Math.pow(
    result.dz,
    2
  ).toFixed(3)} = ${result.distanceSquared.toFixed(3)}</p>
            <br>
            <p><strong>Raiz quadrada:</strong></p>
            <p>d = √${result.distanceSquared.toFixed(3)} = ${distanceLightYears.toFixed(4)} anos-luz</p>
        </div>
        
        <div class="final-result">
            <h3>✨ Resultado Final</h3>
            <p><strong>1. Distância Euclidiana Real:</strong></p>
            <p class="value">${distanceLightYears.toFixed(4)} unidades de coordenadas</p>
            
            <p><strong>2. Distância em Anos-Luz:</strong></p>
            <p class="value">${distanceLightYears.toFixed(2)} anos-luz</p>
            
            <p><strong>3. Distância em Quilômetros:</strong></p>
            <p class="value">${formatLargeNumber(distanceKm)} km</p>
            <p style="font-size: 12px; color: #a1a1aa; margin-top: 5px;">
                (${distanceKm.toExponential(2)} km em notação científica)
            </p>
        </div>
        
        <div class="star-info">
            <h3>🌟 Informações sobre ${star2.name}</h3>
            <p><strong>Cor e Tipo:</strong> ${star2.info.color}</p>
            <p><strong>Constelação:</strong> ${star2.info.constellation}</p>
            <p><strong>Distância Real do Sol:</strong> ${star2.info.distance}</p>
            <p><strong>Tamanho comparado ao Sol:</strong> ${star2.info.sizeComparison}</p>
            <p><strong>Aspectos Relevantes:</strong> ${star2.info.relevance}</p>
            <p><strong>Zona Habitável e Planetas:</strong> ${star2.info.habitableZone}</p>
        </div>
    `;

  resultadoConteudo.innerHTML = html;
  resultSection.classList.add('show');

  // Scroll suave até o resultado
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Event listener para botão CALCULAR
btnCalcular.addEventListener('click', () => {
  const star1Key = estrelaPartida.value;
  const star2Key = estrelaDestino.value;

  if (star1Key === star2Key) {
    alert('Por favor, selecione duas estrelas diferentes!');
    return;
  }

  displayResult(star1Key, star2Key);
});

// Event listener para botão VOLTAR
btnVoltar.addEventListener('click', () => {
  resultSection.classList.remove('show');
  resultadoConteudo.innerHTML = '';

  // Scroll suave para o topo do container
  document.querySelector('.container').scrollTo({ top: 0, behavior: 'smooth' });
});

// Permitir cálculo ao pressionar Enter nos selects
estrelaPartida.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    btnCalcular.click();
  }
});

estrelaDestino.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    btnCalcular.click();
  }
});

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  if (backgroundMusic) {
    backgroundMusic.play();
    playAudioBtn.disabled = true;
    pauseAudioBtn.disabled = false;
  }
});

pauseAudioBtn.addEventListener('click', () => {
  if (backgroundMusic) {
    backgroundMusic.pause();
    playAudioBtn.disabled = false;
    pauseAudioBtn.disabled = true;
  }
});

// Inicializar estado dos botões de áudio
if (backgroundMusic) {
  pauseAudioBtn.disabled = true;
}
