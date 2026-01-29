// src/mockData.js

export const citiesData = [
  {
    id: 1,
    name: "Warszawa",
    tempC: 18,
    condition: "Częściowe zachmurzenie",
    icon: "⛅",
    clouds: 45, // Stopień zachmurzenia [cite: 15]
    windSpeed: 12, // Prędkość wiatru [cite: 14]
    windDir: "Pn-Wsch", // Kierunek wiatru [cite: 14]
    precipProb: 10, // Prawdopodobieństwo opadów (%) [cite: 13]
    precipType: "brak", // Rodzaj opadów [cite: 13]
    precipAmount: 0, // Ilość opadów (mm/m2) [cite: 13]
    forecast: [ // Prognoza na 5 dni [cite: 12]
      { day: "Pon", temp: 19, icon: "☀️" },
      { day: "Wt", temp: 20, icon: "☀️" },
      { day: "Śr", temp: 17, icon: "⛅" },
      { day: "Czw", temp: 15, icon: "🌧️" },
      { day: "Pt", temp: 16, icon: "⛅" }
    ]
  },
  {
    id: 2,
    name: "Kraków",
    tempC: 22,
    condition: "Słonecznie",
    icon: "☀️",
    clouds: 5,
    windSpeed: 8,
    windDir: "Pd",
    precipProb: 0,
    precipType: "brak",
    precipAmount: 0,
    forecast: [
      { day: "Pon", temp: 23, icon: "☀️" },
      { day: "Wt", temp: 24, icon: "☀️" },
      { day: "Śr", temp: 22, icon: "☀️" },
      { day: "Czw", temp: 21, icon: "⛅" },
      { day: "Pt", temp: 19, icon: "🌧️" }
    ]
  },
  {
    id: 3,
    name: "Gdańsk",
    tempC: 14,
    condition: "Deszczowo",
    icon: "🌧️",
    clouds: 90,
    windSpeed: 35,
    windDir: "Zach",
    precipProb: 85,
    precipType: "mżawka",
    precipAmount: 4.5,
    forecast: [
      { day: "Pon", temp: 13, icon: "🌧️" },
      { day: "Wt", temp: 14, icon: "🌧️" },
      { day: "Śr", temp: 12, icon: "🌧️" },
      { day: "Czw", temp: 15, icon: "⛅" },
      { day: "Pt", temp: 16, icon: "☀️" }
    ]
  },
  {
    id: 4,
    name: "Wrocław",
    tempC: 25,
    condition: "Upał",
    icon: "🔥",
    clouds: 0,
    windSpeed: 5,
    windDir: "Pd-Wsch",
    precipProb: 5,
    precipType: "brak",
    precipAmount: 0,
    forecast: [
      { day: "Pon", temp: 26, icon: "☀️" },
      { day: "Wt", temp: 27, icon: "☀️" },
      { day: "Śr", temp: 28, icon: "☀️" },
      { day: "Czw", temp: 24, icon: "⛈️" },
      { day: "Pt", temp: 20, icon: "⛅" }
    ]
  },
  {
    id: 5,
    name: "Zakopane",
    tempC: 8,
    condition: "Mgła",
    icon: "🌫️",
    clouds: 100,
    windSpeed: 10,
    windDir: "Pn",
    precipProb: 30,
    precipType: "śnieg z deszczem",
    precipAmount: 1.2,
    forecast: [
      { day: "Pon", temp: 7, icon: "🌫️" },
      { day: "Wt", temp: 6, icon: "🌧️" },
      { day: "Śr", temp: 9, icon: "⛅" },
      { day: "Czw", temp: 10, icon: "☀️" },
      { day: "Pt", temp: 11, icon: "☀️" }
    ]
  }
];