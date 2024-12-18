<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dédicace à Fadouma la Sorcière</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom, #001f3f, #00132a);
      color: white;
      text-align: center;
      position: relative;
      height: 100vh;
    }

    #center-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      z-index: 10;
    }

    #button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1.5rem;
      border: none;
      background: #ff4136;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    #button:hover {
      background: #ff725c;
    }

    .snowflake {
      position: absolute;
      top: -10px;
      color: white;
      font-size: 1.5rem;
      animation: fall linear infinite;
    }

    @keyframes fall {
      0% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(110vh);
      }
    }

    #name-display {
      display: none;
      font-size: 2.5rem;
      font-weight: bold;
      animation: fadeIn 1s;
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</head>
<body>
  <div id="center-text">
    <p>Vous savez c'est qui la plus grosse menteuse des 3A ?</p>
    <button id="button">Je veux savoir</button>
  </div>

  <div id="name-display">Fadouma</div>

  <audio id="reveal-sound" src="nimco-happy-isii-nafta-love-you-more-than-my-life-best-song-official-vid_VMxHIjXx.mp3"></audio>

  <script>
    const button = document.getElementById('button');
    const nameDisplay = document.getElementById('name-display');
    const revealSound = document.getElementById('reveal-sound');

    // Create snowflakes
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = getRandomMathSymbol();
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(snowflake);

      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });
    }

    function getRandomMathSymbol() {
      const symbols = ['∑', '√', 'π', '∞', '∆', '∫', '∂', '≈', '∇'];
      return symbols[Math.floor(Math.random() * symbols.length)];
    }

    setInterval(createSnowflake, 200);

    // Button functionality
    button.addEventListener('click', () => {
      button.style.display = 'none';
      nameDisplay.style.display = 'block';
      revealSound.play();
      confettiEffect();
    });

    // Confetti effect
    function confettiEffect() {
      const duration = 2 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  </script>

  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
</body>
</html>
