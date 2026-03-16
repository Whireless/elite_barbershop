import { animate, stagger, onScroll, utils } from 'animejs';

// Блок "Обо мне"

animate('.about__info', {
  opacity: [0, 1],
  x: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -260px',
    leave: 'center top',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

// Блок с ценами

animate('.services__suptitle', {
  opacity: [0, 1],
  y: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -200px',
    leave: 'center -70px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.services__title', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -295px',
    leave: 'center -165px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.services__list').forEach(list => {
  animate(list, {
    opacity: [0, 1],
    scale: [0.4, 1],
    autoplay: onScroll({
      enter: 'center -375px',
      leave: 'center -250px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

animate('.services__booking-link', {
  opacity: [0, 1],
  y: ['40%', 0],
  autoplay: onScroll({
    enter: 'center -310px',
    leave: 'center -260px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

// Блок с описанием преимуществ

animate('.advantages__info', {
  opacity: [0, 1],
  x: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -270px',
    leave: 'center -80px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.advantages__list', {
  opacity: [0, 1],
  x: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -270px',
    leave: 'center -80px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

// Блок с барберами

animate('.barbers__suptitle', {
  opacity: [0, 1],
  y: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -200px',
    leave: 'center -70px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.barbers__title', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -295px',
    leave: 'center -165px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.barbers__item').forEach(barber => {
  animate(barber, {
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -220px',
      leave: 'center -40px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

// Блок с галереей

animate('.gallery__suptitle', {
  opacity: [0, 1],
  y: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -200px',
    leave: 'center -70px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.gallery__item').forEach(item => {
  animate(item, {
    scale: [0.3, 1],
    y: ['100%', 0],
    autoplay: onScroll({
      enter: 'center -550px',
      leave: 'center -340px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

// Блок с контактами

animate('.contacts__title', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -310px',
    leave: 'center -210px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.contacts__info', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -370px',
    leave: 'center -190px',
    alternate: true,
    sync: true,
    // debug: true,
  })
});

if (window.matchMedia("(min-width: 768px)").matches) {
  animate('.about__images', {
    opacity: [0, 1],
    x: ['-100%', 0],
    autoplay: onScroll({
      enter: 'center -260px',
      leave: 'center top',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
}
