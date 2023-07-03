const db = require("../db")
const { Moon } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))


const main = async () => {
    const moons = [
        
             {
              name: "The Moon",
              mass: "73.46 x 10^21 kg",
              diameter: "2159 miles",
              dist_from_planet: "238,000 miles",
              has_water: "Yes",
              surface_temperature: "120°C daytime to -130°C night",
              gravity: "0.16 G",
              velocity: "1.1 km/s",
              home_planet: "Earth"
            },

            {
              name: "Phobos",
              mass: "10.6 x 10^15 kg",
              diameter: "14 miles",
              dist_from_planet: "5989 km",
              has_water: "No",
              surface_temperature: "-4°C",
              gravity: ".0057 m/s²",
              velocity: "2.13 km/s",
              home_planet: "Mars"
            },

            {
              name: "Deimos",
              mass: "1.4762 x 10^15 kg",
              diameter: "7.5 miles",
              dist_from_planet: "14,583 miles",
              has_water: "No",
              surface_temperature: "-40°C",
              gravity: "0.003 m/s²",
              velocity: " 1.35 km/s",
              home_planet: "Mars"
            },

            {
              name: "Europa",
              mass: "4.8 x 10^22 kg",
              diameter: "1,940 miles",
              dist_from_planet: "414,000 miles",
              has_water: "Yes (under ice crust)",
              surface_temperature: "-260°F",
              gravity: "0.134g",
              velocity: "13.74 km/s",
              home_planet: "Jupiter"
            },

            {
              name: "Ganymede",
              mass: "1.4819 x 10^23 kg",
              diameter: "3,273 miles",
              dist_from_planet: "665,000 miles",
              has_water: "Yes (subsurface ocean)",
              surface_temperature: "-171°C",
              gravity: "0.146g",
              velocity: "10.88 km/s",
              home_planet: "Jupiter"
            },

            {
              name: "Callisto",
              mass: "1.0759 x 10^23 kg",
              diameter: "2,996 miles",
              dist_from_planet: "1,168,000 miles",
              has_water: "Yes (subsurface ocean)",
              surface_temperature: "-143°C",
              gravity: "0.126g",
              velocity: "8.2 km/s",
              home_planet: "Jupiter"
            },

            {
              name: "Titan",
              mass: "1.3452 x 10^23 kg",
              diameter: "3,200 miles",
              dist_from_planet: "759,200 miles",
              has_water: "Yes (lakes and seas of liquid methane/ethane)",
              surface_temperature: "-290°F",
              gravity: "0.138g",
              velocity: "5.57 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Rhea",
              mass: "2.306 x 10^21 kg",
              diameter: "949 miles",
              dist_from_planet: "327,500 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-288°F",
              gravity: "0.23g",
              velocity: "8.48 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Tethys",
              mass: "6.174 x 10^20 kg",
              diameter: "660 miles",
              dist_from_planet: "183,100 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-298°F",
              gravity: "0.145g",
              velocity: "11.35 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Dione",
              mass: "1.095 x 10^21 kg",
              diameter: "698 miles",
              dist_from_planet: "234,500 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-306°F",
              gravity: "0.232g",
              velocity: "10.03 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Enceladus",
              mass: "1.08 x 10^20 kg",
              diameter: "313 miles",
              dist_from_planet: "147,900 miles",
              has_water: "Yes (subsurface ocean)",
              surface_temperature: "-330°F",
              gravity: "0.113g",
              velocity: "12.6 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Iapetus",
              mass: "1.805 x 10^21 kg",
              diameter: "912 miles",
              dist_from_planet: "2,212,889 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-322°F",
              gravity: "0.223g",
              velocity: "3.26 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Mimas",
              mass: "3.75 x 10^19 kg",
              diameter: "246 miles",
              dist_from_planet: "115,280 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-327°F",
              gravity: "0.063g",
              velocity: "14.28 km/s",
              home_planet: "Saturn"
            },

            {
              name: "Miranda",
              mass: "6.59 x 10^19 kg",
              diameter: "293 miles",
              dist_from_planet: "79,300 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-187°C",
              gravity: "0.079g",
              velocity: "6.71 km/s",
              home_planet: "Uranus"
            },

            {
              name: "Ariel",
              mass: "1.27 x 10^21 kg",
              diameter: "721 miles",
              dist_from_planet: "118,700 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-351°F",
              gravity: "0.267g",
              velocity: "5.51 km/s",
              home_planet: "Uranus"
            },

            {
              name: "Umbriel",
              mass: "1.27 x 10^21 kg",
              diameter: "727 miles",
              dist_from_planet: "265,400 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-353°F",
              gravity: "0.236g",
              velocity: "4.67 km/s",
              home_planet: "Uranus"
            },

            {
              name: "Titania",
              mass: "3.4 x 10^21 kg",
              diameter: "981 miles",
              dist_from_planet: "435,900 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-355°F",
              gravity: "0.379g",
              velocity: "3.64 km/s",
              home_planet: "Uranus"
            },

            {
              name: "Oberon",
              mass: "3.03 x 10^21 kg",
              diameter: "957 miles",
              dist_from_planet: "362,600 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-355°F",
              gravity: "0.346g",
              velocity: "3.15 km/s",
              home_planet: "Uranus"
            },

            {
              name: "Halimede",
              mass: "16 x 10^16kg",
              diameter: "62 Km",
              dist_from_planet: "17,000,000 km",
              has_water: "Yes",
              surface_temperature: "-391°F",
              gravity: ".006 m/s²",
              velocity: ".631 km/s",
              home_planet: "Neptune"
            },

            {
              name: "Sao",
              mass: "4 x 10^16 kg",
              diameter: "40 km",
              dist_from_planet: "13,811,839 miles",
              has_water: "Yes",
              surface_temperature: "-391°F",
              gravity: "0.0123 m/s²",
              velocity: "0.552 km/s",
              home_planet: "Neptune"
            },

            {
              name: "Psamathe",
              mass: "4 x 10^16 kg",
              diameter: "40 km",
              dist_from_planet: "45,000,000 km",
              has_water: "Yes",
              surface_temperature: "-391°F",
              gravity: ".003 m/s²",
              velocity: "0.371 km/s",
              home_planet: "Neptune"
            },

            {
              name: "Laomedia",
              mass: "8.99 x 10^16 kg",
              diameter: "42 km",
              dist_from_planet: "14,643,855 miles",
              has_water: "Yes",
              surface_temperature: "-391°F",
              gravity: "0.014 m/s²",
              velocity: "1866.50 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Neso",
              mass: "1.6 x 10^17 kg",
              diameter: "60 km",
              dist_from_planet: "30,624,279 miles",
              has_water: "Yes",
              surface_temperature: "-391°F",
              gravity: "0.012 m/s²",
              velocity: "1208.80 km/h",
              home_planet: "Neptune"
            },

            {
              name: "Charon",
              mass: "1.586 x 10^21 kg",
              diameter: "751 miles",
              dist_from_planet: "12,207 miles",
              has_water: "Possible subsurface ocean",
              surface_temperature: "-375°F",
              gravity: "0.278g",
              velocity: "0.21 km/s",
              home_planet: "Pluto"
            },

            {
              name: "Styx",
              mass: "7.5 x 10^15 kg",
              diameter: "6 to 15 miles",
              dist_from_planet: "58,000 miles",
              has_water: "Yes",
              surface_temperature: "-375°F to -400°F",
              gravity: "Unknown",
              velocity: "Unknown",
              home_planet: "Pluto"
            },

            {
              name: "Nix",
              mass: "4.6 x 10^16 kg",
              diameter: "85.1 miles",
              dist_from_planet: "48,700 km",
              has_water: "Yes",
              surface_temperature: "-375°F to -400°F",
              gravity: "0.00016319g",
              velocity: "One orbit in 24.8 days",
              home_planet: "Pluto"
            },

            {
              name: "Kerberos",
              mass: "1.65 x 10^16 kg",
              diameter: "34 km",
              dist_from_planet: "57,783 km",
              has_water: "Yes",
              surface_temperature: "-375°F to -400°F",
              gravity: "Uknown",
              velocity: "One orbit in 32.16 days",
              home_planet: "Pluto"
            },

            {
              name: "Hydra",
              mass: "4.2 x 10^17 kg",
              diameter: "167 km",
              dist_from_planet: " 59,000 km",
              has_water: "Yes",
              surface_temperature: "-418°F",
              gravity: "0.051 m/s²",
              velocity: "443.7km/h",
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