import { gsap } from 'gsap';
import React from 'react';

export const initParticles = () => {
  const particlesContainer = document.querySelector('#particles-container');
  if (!particlesContainer) return;


  const particleContainers: HTMLDivElement[] = [];

  const randomShadowSize = gsap.utils.random(0.1, 1, 0.1, true);
  const randomXPosition = gsap.utils.random(0, 28, 1, true);
  const randomYPosition = gsap.utils.random(0, 100, 1, true);

  for (let i = 0; i < 50; i++) {
    let particleHexColor;
    const particleColor = gsap.utils.random(['green', 'blue']);
    const shadowSize = randomShadowSize();

    const newParticleContainer = document.createElement('div');
    const newParticle = document.createElement('div');
    newParticleContainer.classList.add('particle-container');
    newParticle.classList.add('particle-item');

    newParticle.setAttribute('data-depth', shadowSize.toString());
    newParticleContainer.setAttribute('data-depth', shadowSize.toString());

    if (particleColor === 'green') {
      particleHexColor = '#58d72c';
    } else {
      particleHexColor = '#2cd7bd';
    }

    if (i > 25) {
      newParticleContainer.style.right = randomXPosition() + '%';
    } else {
      newParticleContainer.style.left = randomXPosition() + '%';
    }
    newParticleContainer.style.top = randomYPosition() + '%';
    newParticle.style.boxShadow = `0 0 ${shadowSize / 2}rem ${
      shadowSize / 4
    }rem #fff, 0 0 ${shadowSize * 1.5}rem ${
      shadowSize * 0.7
    }rem ${particleHexColor}`;

    particleContainers.push(newParticleContainer);
   

    gsap.fromTo(
      newParticle,
      {
        x: '-12',
        opacity: 1,
      },
      {
        x: '-12',
        opacity: 0,
        duration: gsap.utils.random(1, 3, 0.1),
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      }
    );

    newParticleContainer.appendChild(newParticle);
  }

  particlesContainer.innerHTML = '';

  particleContainers.forEach((particleContainer) => {
    gsap.fromTo(
      particleContainer,
      {
        rotation: 0,
      },
      {
        rotation: 360,
        duration: gsap.utils.random(5, 8, 0.5),
        repeat: -1,
        ease: 'none',
      }
    );

    particlesContainer.appendChild(particleContainer);
  });

  // @ts-ignore
  document.onmousemove = handleMouseMove;

  const windowWidth = window.innerWidth;

  function handleMouseMove(event: React.MouseEvent | undefined) {
    if (!event) return;

    let eventDoc, doc, body;

    event = event || window.event;

    if (event.pageX === null && event.clientX !== null) {
      // @ts-ignore
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    particleContainers.forEach((particle) => {
      if (!event || !particlesContainer || !particle.dataset.depth) return;

      const progressX = (event.pageX / windowWidth) * 100 - 50;
      const progressY =
        (event.pageY / particlesContainer.clientHeight) * 100 - 50;

      gsap.to(particle, {
        x: progressX * parseFloat(particle.dataset.depth),
        y: progressY * parseFloat(particle.dataset.depth),
      });
    });
  }
};
