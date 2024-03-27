<script>
  import { particlesInit } from '@tsparticles/svelte';
  import { onMount, onDestroy } from 'svelte';
  import { loadSlim } from '@tsparticles/slim';
  import { confetti } from '@tsparticles/confetti';

  let ParticlesComponent;
  let intervalId;

  onMount(async () => {
    const module = await import('@tsparticles/svelte');
    ParticlesComponent = module.default;

    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    intervalId = setInterval(function () {
      const particleCount = 20;

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  let particlesConfig = {
    particles: {
      number: {
        value: 0,
      },
    },
    retina_detect: true,
  };

  void particlesInit(async engine => {
    await loadSlim(engine);
  });
</script>

<div class="fixed inset-0 z-[-1] overflow-hidden">
  <svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    options={particlesConfig}
  />
</div>
