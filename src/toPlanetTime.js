export function toPlanetTime(planet, days) {
  const planets = {
    Mercury: 88,
    Venus: 225,
    Earth: 365,
    Mars: 687,
    Jupiter: 4332,
    Saturn: 10759,
    Uranus: 30688,
    Neptune: 60200
  }

  return (Math.round( (days/planets[planet])*100 )/100);
}
