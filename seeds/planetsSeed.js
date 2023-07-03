const db = require("../db");
const { Planet } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const planets = [
    {
      name: `Mercury`,
      mass: `3.30 x 10^23 kg`,
      diameter: `4879.4 km`,
      dist_from_sun: `46406000 km`,
      terrain: `Large areas of smooth terrain, there are also cliffs, some hundreds of miles long and soaring up to a mile high`,
      surface: `silicate rocks`,
      surface_temperature: `167°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `3.7 m/s²`,
      velocity: `170505 km/h`,
      moons: [],
      mapData: {
        coordinates: {
          longitude: `10`,
          latitude: `10`,
        },
      },
    },
    {
      name: `Venus`,
      mass: `4.87 x 10^24 kg`,
      diameter: `12104 km`,
      dist_from_sun: `108000000 km`,
      terrain: `Solid surface covered in dome-like volcanoes, rifts, and mountains, with expansive volcanic plains and vast, ridged plateaus`,
      surface: `iron core and a rocky mantle`,
      surface_temperature: `475°C`,
      has_water: `no`,
      has_aliens: `possibly`,
      gravity: `8.87 m/s²`,
      velocity: `126077 km/h`,
      moons: [],
      mapData: {
        coordinates: {
          longitude: `20`,
          latitude: `20`,
        },
      },
    },
    {
      name: `Earth`,
      mass: `5.97219 x 10^24 kg`,
      diameter: `12742  km`,
      dist_from_sun: `152000000 km`,
      terrain: `Mountains, hills, plateaus, plains and oceans`,
      surface: `minerals, rocks, soil and water`,
      surface_temperature: `-25°C to 45°C`,
      has_water: `no`,
      has_aliens: `possibly`,
      gravity: `8.87 m/s²`,
      velocity: `126077 km/h`,
      moons: [],
      mapData: {
        coordinates: {
          longitude: `30`,
          latitude: `30`,
        },
      },
    },
    {
      name: `Mars`,
      mass: `6.39 x 10^23 kg`,
      diameter: `6779 km`,
      dist_from_sun: `250000000 km`,
      terrain: `Rocky, with canyons, volcanoes, dry lake beds and craters all over it`,
      surface: `iron, nickel, and sulfur`,
      surface_temperature: `-153°C to 20°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `3.71 m/s²`,
      velocity: `86871 km/h`,
      moons: [`Phobos`, `Deimos`],
      mapData: {
        coordinates: {
          longitude: `40`,
          latitude: `40`,
        },
      },
    },
    {
      name: `Jupiter`,
      mass: `1.898 x 10^27 kg`,
      diameter: `139820 km`,
      dist_from_sun: `741000000 km`,
      terrain: `gas`,
      surface: `hydrogen and helium`,
      surface_temperature: `-145°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `24.79 m/s²`,
      velocity: `47051 km/h`,
      moons: [`Europa`, `Ganymede`, `Callisto`],
      mapData: {
        coordinates: {
          longitude: `50`,
          latitude: `50`,
        },
      },
    },
    {
      name: `Saturn`,
      mass: `5.683 x 10^26 kg`,
      diameter: `116460 km`,
      dist_from_sun: `1462000000 km`,
      terrain: `gas`,
      surface: `hydrogen and helium`,
      surface_temperature: `-140°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `10.44 m/s²`,
      velocity: `34821 km/h`,
      moons: [
        `Titan`,
        `Rhea`,
        `Tethys`,
        `Dione`,
        `Enceladus`,
        `Lapetus`,
        `Mimas`,
      ],
      mapData: {
        coordinates: {
          longitude: `60`,
          latitude: `60`,
        },
      },
    },
    {
      name: `Uranus`,
      mass: `8.681 x 10^25 kg`,
      diameter: `50724 km`,
      dist_from_sun: `2937000000 km`,
      terrain: `gas merging into liquid`,
      surface: `hydrogen, helium, and methane`,
      surface_temperature: `-195°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `8.87 m/s²`,
      velocity: `24607 km/h`,
      moons: [`Miranda`, `Ariel`, `Umbriel`, `Titania`, `Oberon`],
      mapData: {
        coordinates: {
          longitude: `70`,
          latitude: `70`,
        },
      },
    },
    {
      name: `Neptune`,
      mass: `1.024 x 10^26 kg`,
      diameter: `49244 km`,
      dist_from_sun: `4473000000 km`,
      terrain: `gas merging into icy liquid`,
      surface: `hydrogen, helium, and methane`,
      surface_temperature: `-200°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `11.15 m/s²`,
      velocity: `19547 km/h`,
      moons: [`Halimede`, `Sao`, `Psamathe`, `Laomedeia`, `Neso`],
      mapData: {
        coordinates: {
          longitude: `80`,
          latitude: `80`,
        },
      },
    },
    {
      name: `Pluto`,
      mass: `1.303 x 10^22 kg`,
      diameter: `2376 km`,
      dist_from_sun: `5900000000 km`,
      terrain: `mountains, valleys, plains, and craters`,
      surface: `methane and nitrogen frost`,
      surface_temperature: `-230°C`,
      has_water: `yes`,
      has_aliens: `possibly`,
      gravity: `0.62 m/s²`,
      velocity: `17096 km/h`,
      moons: [`Charon`, `Styx`, `Nix`, `Kerberos`, `Hydra`],
      mapData: {
        coordinates: {
          longitude: `90`,
          latitude: `90`,
        },
      },
    },
  ];
  await Planet.insertMany(planets);
  console.log(`Created planets!`);
};

const run = async () => {
  await main();
  db.close();
};

run();
