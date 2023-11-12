hljs.highlightAll();

window.onload = function () {
  Particles.init({
    selector: '.background',
  });
};

const primary = '#04cfd8';
const secondary = '#f2035b';
const light = '#ffe6ef';

const particles = Particles.init({
  selector: '.background',
  color: [primary, secondary, '#000000'],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: [light, primary, secondary],
        maxParticles: 43,
        connectParticles: false,
      },
    },
  ],
});
