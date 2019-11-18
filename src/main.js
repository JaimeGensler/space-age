import { Human } from './human.js';
import $ from 'jquery';
import './styles.css';

function displayPlanetDetails(planet, human) {
  $('h2#planet-name').text(planet);
  $('p#planet-age').text(`Your age on ${planet} is: ${human.planetAge(planet)} years old.`);

  if (planet !== 'Earth') {
    $('p#planet-joke').text(`Your life expectancy on ${planet} is: 0 years! Humans can't live on ${planet}, silly!`);
    $('p#planet-life').text(`... but if they could, your remaining life expectancy would probably be about: ${human.yearsLeft(planet)}.`);
  } else {
    $('p#planet-joke').text(`Your remaining life expectancy on Earth is: ${human.yearsLeft('Earth')}.`);
    $('p#planet-life').text('');
  }
}

$(document).ready(function() {
  let newHuman;

  $('form#user-info').submit(function(event) {
    event.preventDefault();

    newHuman = new Human(0, $('input:radio[name=gender]:checked').val(), $('input:radio[name=ses]:checked').val());
    newHuman.setPreciseAge( parseInt($('input#month').val(),10), parseInt($('input#day').val(),10), parseInt($('input#year').val(),10) );
    displayPlanetDetails('Earth', newHuman);
    $('div#planet-info').show();
  });

  $('div.planet').click(function() {
    displayPlanetDetails(this.id, newHuman);
  });
});
