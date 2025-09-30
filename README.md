# 🌟 Calculadora de Distâncias Estelares

![Stars](https://img.shields.io/badge/Stars-7%20Estrelas-yellow)
![Distance](https://img.shields.io/badge/Distance-Euclidiana%203D-orange)
![Data](https://img.shields.io/badge/Data-Real%20Astronomy-red)

> Uma aplicação web interativa para calcular distâncias reais entre estrelas usando coordenadas galácticas 3D e a fórmula da distância euclidiana.

## 🚀 Demonstração

Acesse o projeto: [Desafio 309 - Calculadora Estelar](https://github.com/luizfxdev/desafio_309)

## ✨ Características

### 🎯 Funcionalidades Principais

- **Cálculo de Distância Euclidiana 3D** entre estrelas usando coordenadas galácticas reais
- **7 Estrelas Reais** incluídas no banco de dados:
  - ☀️ Sol (referência)
  - 🔴 Proxima Centauri
  - ⭐ Alpha Centauri A
  - ⭐ Alpha Centauri B
  - 🔴 Estrela de Barnard
  - ⚪ Sirius A
  - 🔴 Betelgeuse

### 📊 Resultados Detalhados

O sistema fornece:

1. **Distância Euclidiana Real** - Cálculo passo a passo mostrando todas as operações matemáticas
2. **Distância em Anos-Luz** - Medida astronômica padrão
3. **Distância em Quilômetros** - Formato abreviado (trilhões, bilhões, milhões)
4. **Informações Astronômicas** baseadas em dados reais:
   - Cor e classificação espectral
   - Constelação
   - Aspectos relevantes da estrela
   - Existência de planetas em zona habitável
   - Tamanho comparado ao Sol
   - Distância real do Sol

### 🎨 Interface Moderna

- Design espacial com tema de cores quentes (vermelho, laranja, amarelo)
- Vídeo background em full HD (1920x1080)
- Animações de glow nos botões
- Layout responsivo para todos os dispositivos
- Controles de áudio para música ambiente
- Scroll customizado com gradientes

## 🔬 Dados Científicos Reais

### Coordenadas Galácticas

Todas as coordenadas estelares são baseadas em dados astronômicos reais:

```javascript
// Exemplo: Proxima Centauri
coords: [1.295, -2.917, -3.148] // anos-luz (x, y, z)
```

### Informações Validadas

As informações sobre cada estrela foram compiladas de fontes científicas confiáveis:

- **Classificação Espectral**: Sistema de Harvard (O, B, A, F, G, K, M)
- **Distâncias**: Dados do Gaia DR3 e catálogos astronômicos
- **Exoplanetas**: Confirmados pelo NASA Exoplanet Archive
- **Tamanhos**: Medições interferométricas e cálculos de raio estelar

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript (ES6+)** - Lógica e cálculos matemáticos
- **Dados Astronômicos Reais** - Coordenadas galácticas validadas

## 🎵 Trilha Sonora

A aplicação utiliza **"Space Oddity" de David Bowie** como música ambiente, criando uma experiência imersiva perfeita para explorar o universo! 🚀

Controle a reprodução através dos botões de áudio no canto superior direito da tela.

## 📐 Fórmula Utilizada

A distância euclidiana em espaço tridimensional é calculada por:

```
d = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]
```

Onde:
- `(x₁, y₁, z₁)` = Coordenadas da estrela de partida
- `(x₂, y₂, z₂)` = Coordenadas da estrela de destino
- `d` = Distância euclidiana em anos-luz

## 📂 Estrutura do Projeto

```
desafio_309/
│
├── index.html              # Estrutura HTML
├── styles.css              # Estilos e animações
├── script.js               # Lógica e cálculos
│
├── assets/
│   ├── background.mp4      # Vídeo de fundo espacial
│   └── theme.mp3 # Música ambiente (opcional)
│
└── README.md               # Documentação
```

## 🚀 Como Executar

1. **Clone o repositório**
```bash
git clone https://github.com/luizfxdev/desafio_309.git
cd desafio_309
```

2. **Adicione os arquivos de mídia**
   - Coloque seu vídeo espacial em `assets/background.mp4`
   - Adicione "Space Oddity" de David Bowie em `assets/theme.mp3`

3. **Abra no navegador**
```bash
# Simplesmente abra o index.html no seu navegador
# Ou use um servidor local como Live Server (VS Code)
```

## 🎮 Como Usar

1. Selecione a **Estrela de Partida** no primeiro dropdown
2. Selecione a **Estrela de Destino** no segundo dropdown
3. Clique em **CALCULAR** para ver os resultados
4. Explore o cálculo detalhado e as informações astronômicas
5. Use **VOLTAR** para fazer novos cálculos
6. Controle a música ambiente com os botões 🎵 e ⏸️

## 📚 Fontes de Dados

As informações astronômicas foram compiladas de:

- **NASA Exoplanet Archive** - Dados de exoplanetas
- **Gaia DR3** - Coordenadas e distâncias estelares precisas
- **SIMBAD Astronomical Database** - Classificações espectrais
- **Catálogos Hipparcos/Tycho** - Dados astrométricos
- **Papers científicos revisados por pares** - Informações sobre zonas habitáveis

## 🎯 Objetivos do Desafio

Este projeto foi desenvolvido para:

- ✅ Demonstrar aplicação prática de geometria espacial 3D
- ✅ Trabalhar com dados astronômicos reais
- ✅ Criar interface moderna e responsiva
- ✅ Implementar animações CSS avançadas
- ✅ Fornecer educação científica acessível

## 🌌 Curiosidades Astronômicas

### Proxima Centauri
- Estrela mais próxima do Sol (4.24 anos-luz)
- Possui um planeta potencialmente habitável: Proxima b
- É uma anã vermelha com intensa atividade de erupções

### Betelgeuse
- Supergigante vermelha cerca de 900 vezes maior que o Sol
- Está em fase final de vida, podendo explodir como supernova
- Distância: aproximadamente 548 anos-luz

### Sirius A
- Estrela mais brilhante no céu noturno
- Sistema binário com Sirius B (anã branca)
- 1.71 vezes o tamanho do Sol

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Adicionar mais estrelas ao banco de dados

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**LuizFXdev**
- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [Luiz FX](https://linkedin.com/in/luizfxdev)

## 🙏 Agradecimentos

- Comunidade astronômica por disponibilizar dados abertos
- NASA e ESA pelos catálogos estelares
- Todos que contribuem para a ciência cidadã

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

🚀 **Explore o universo através da matemática!**
