const db = require("../db")
const { Moon } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))


const main = async () => {
    const moons = [
        
             {
              name: "Moon",
              mass: "73.46 x 10²¹ kg",
              diameter: "3,474 km",
              dist_from_planet: "383,025 km",
              has_water: "Yes",
              surface_temperature: "120°C daytime to -130°C night",
              gravity: "1.569 m/s² ",
              velocity: "3,960 km/h",
              home_planet: "Earth"
            },

            {
              name: "Phobos",
              mass: "10.6 x 10¹⁵ kg",
              diameter: "22.53 km",
              dist_from_planet: "5,989 km",
              has_water: "No",
              surface_temperature: "-4°C",
              gravity: ".0057 m/s²",
              velocity: "7,668 km/h",
              home_planet: "Mars"
            },

            {
              name: "Deimos",
              mass: "1.4762 x 10¹⁵ kg",
              diameter: "12.07 km",
              dist_from_planet: "23,469 km",
              has_water: "No",
              surface_temperature: "-40°C",
              gravity: "0.003 m/s²",
              velocity: " 4,860 km/h",
              home_planet: "Mars"
            },

            {
              name: "Europa",
              mass: "4.8 x 10²² kg",
              diameter: "3,122 km",
              dist_from_planet: "666,270 km",
              has_water: "Yes (under ice crust)",
              surface_temperature: "-162°C",
              gravity: "1.314 m/s²",
              velocity: "49,464 km/h",
              home_planet: "Jupiter"
            },

            {
              name: "Ganymede",
              mass: "1.4819 x 10²³ kg",
              diameter: "5,267 km",
              dist_from_planet: "1,070,217 km",
              has_water: "Yes (subsurface ocean)",
              surface_temperature: "-171°C",
              gravity: "1.431 m/s²",
              velocity: "39,168 km/h",
              home_planet: "Jupiter"
            },

            {
              name: "Callisto",
              mass: "1.0759 x 10²³ kg",
              diameter: "4,821 km",
              dist_from_planet: "1,879,720 km",
              has_water: "Yes (subsurface ocean)",
              surface_temperature: "-143°C",
              gravity: "1.235 m/s²",
              velocity: "29,520 km/h",
              home_planet: "Jupiter"
            },

            {
              name: "Titan",
              mass: "1.3452 x 10²³ kg",
              diameter: "5,145 km",
              dist_from_planet: "1,221,818 km",
              has_water: "Yes (lakes and seas of liquid methane/ethane)",
              surface_temperature: "-178°C",
              gravity: "1.353 m/s²",
              velocity: "20,052 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Rhea",
              mass: "2.306 x 10²¹ kg",
              diameter: "1,527 km",
              dist_from_planet: "527,062 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-177°C",
              gravity: "2.255 m/s²",
              velocity: "30,528 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Tethys",
              mass: "6.174 x 10²⁰ kg",
              diameter: "1,062 km",
              dist_from_planet: "294,671 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-183°C",
              gravity: "1.421 m/s²",
              velocity: "40,860 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Dione",
              mass: "1.095 x 10²¹ kg",
              diameter: "1,123 km",
              dist_from_planet: "377,392 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-187°C",
              gravity: "2.275 m/s²",
              velocity: "36,108 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Enceladus",
              mass: "1.08 x 10²⁰ kg",
              diameter: "503 km",
              dist_from_planet: "238,022 km",
              has_water: "Yes (subsurface ocean)",
              surface_temperature: "-201°C",
              gravity: "1.108  m/s²",
              velocity: "45,360 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Iapetus",
              mass: "1.805 x 10²¹ kg",
              diameter: "1,467 km",
              dist_from_planet: "3,561,312 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-196°C",
              gravity: "2.186  m/s²",
              velocity: "11,736 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Mimas",
              mass: "3.75 x 10¹⁹ kg",
              diameter: "395 km",
              dist_from_planet: "185,525 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-199°C",
              gravity: "0.617 m/s²",
              velocity: "51,408 km/h",
              home_planet: "Saturn"
            },

            {
              name: "Miranda",
              mass: "6.59 x 10¹⁹ kg",
              diameter: "471 km",
              dist_from_planet: "127,621 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-187°C",
              gravity: "0.774 m/s²",
              velocity: "24,156 km/h",
              home_planet: "Uranus"
            },

            {
              name: "Ariel",
              mass: "1.27 x 10²¹ kg",
              diameter: "1,160 km",
              dist_from_planet: "191,029 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-212°C",
              gravity: "2.618 m/s²",
              velocity: "19,836 km/h",
              home_planet: "Uranus"
            },

            {
              name: "Umbriel",
              mass: "1.27 x 10²¹ kg",
              diameter: "1,169 km",
              dist_from_planet: "427,121 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-213°C",
              gravity: "2.314 m/s²",
              velocity: "16,812 km/h",
              home_planet: "Uranus"
            },

            {
              name: "Titania",
              mass: "3.4 x 10²¹ kg",
              diameter: "1,578 km",
              dist_from_planet: "701,515 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-215°C",
              gravity: "3.716 m/s²",
              velocity: "13,104 km/h",
              home_planet: "Uranus"
            },

            {
              name: "Oberon",
              mass: "3.03 x 10²¹ kg",
              diameter: "1,540 km",
              dist_from_planet: "583,550 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-215°C",
              gravity: "3.393 m/s²",
              velocity: "11,340 km/h",
              home_planet: "Uranus"
            },

            {
              name: "Halimede",
              mass: "16 x 10¹⁶ kg",
              diameter: "62 Km",
              dist_from_planet: "17,000,000 km",
              has_water: "Yes",
              surface_temperature: "-235°C",
              gravity: "0.006 m/s²",
              velocity: "2,271.6 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Sao",
              mass: "4 x 10¹⁶ kg",
              diameter: "40 km",
              dist_from_planet: "22,228,083 km",
              has_water: "Yes",
              surface_temperature: "-235°C",
              gravity: "0.0123 m/s²",
              velocity: "1,987.2 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Psamathe",
              mass: "4 x 10¹⁶ kg",
              diameter: "40 km",
              dist_from_planet: "45,000,000 km",
              has_water: "Yes",
              surface_temperature: "-235°C",
              gravity: "0.003 m/s²",
              velocity: "1,335.6 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Laomedia",
              mass: "8.99 x 10¹⁶ kg",
              diameter: "42 km",
              dist_from_planet: "23,567,088 km",
              has_water: "Yes",
              surface_temperature: "-235°C",
              gravity: "0.014 m/s²",
              velocity: "1,866.50 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Neso",
              mass: "1.6 x 10¹⁷ kg",
              diameter: "60 km",
              dist_from_planet: "49,285,183 km",
              has_water: "Yes",
              surface_temperature: "-235°C",
              gravity: "0.012 m/s²",
              velocity: "1,208.80 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Charon",
              mass: "1.586 x 10²¹ kg",
              diameter: "1,208 km",
              dist_from_planet: "19,645 km",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-226°C",
              gravity: "2.726 m/s²",
              velocity: "756 km/h",
              home_planet: "Pluto"
            },

            {
              name: "Styx",
              mass: "7.5 x 10¹⁵ kg",
              diameter: "9 to 24 km",
              dist_from_planet: "93,342 km",
              has_water: "Yes",
              surface_temperature: "-226°C to -240°C",
              gravity: "Unknown",
              velocity: "Unknown",
              home_planet: "Pluto"
            },

            {
              name: "Nix",
              mass: "4.6 x 10¹⁶ kg",
              diameter: "137 km",
              dist_from_planet: "48,700 km",
              has_water: "Yes",
              surface_temperature: "-226°C to -240°C",
              gravity: "0.0016 m/s²",
              velocity: "514 km/h",
              home_planet: "Pluto"
            },

            {
              name: "Kerberos",
              mass: "1.65 x 10¹⁶ kg",
              diameter: "34 km",
              dist_from_planet: "57,783 km",
              has_water: "Yes",
              surface_temperature: "-226°C to -240°C",
              gravity: "Uknown",
              velocity: "396 km/h",
              home_planet: "Pluto"
            },

            {
              name: "Hydra",
              mass: "4.2 x 10¹⁷ kg",
              diameter: "167 km",
              dist_from_planet: " 59,000 km",
              has_water: "Yes",
              surface_temperature: "-250°C",
              gravity: "0.051 m/s²",
              velocity: "443.7 km/h",
              home_planet: "Pluto"
            }
          
          

    ]


    await Moon.insertMany(moons)

}

const run =  async() =>{
    await main()
    db.close()
}
run()