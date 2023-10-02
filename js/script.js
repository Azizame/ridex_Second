
const mediaQuery = window.matchMedia('(max-width: 425px)')
const mediaQueryMiddle = window.matchMedia('(max-width: 1000)')
if (mediaQuery.matches) {
  var splide = new Splide('.splide', { 
    type: 'slide',
    perPage: 2, 
} );

splide.mount();
}else if((mediaQueryMiddle.matches)){ 
  var splide = new Splide('.splide', { 
    type: 'slide',
    perPage: 3, 
} );

splide.mount();
}else{
  var splide = new Splide('.splide', { 
    type: 'slide',
    perPage: 4, 
} );
splide.mount();
}