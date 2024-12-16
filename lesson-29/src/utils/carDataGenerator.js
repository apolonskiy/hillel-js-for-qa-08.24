const dataSamples = [
  { brand: "Ford", model: "Fiesta" },
  { brand: "Audi", model: "TT" },
  { brand: "BMW", model: "X6" },
  { brand: "Porshe", model: "911" },
  { brand: "Fiat", model: "Panda" }
];

export const getRandomCarData = () => {
  const milesRandom = Math.floor(Math.random() * 1000000) - 1;
  const randomCar = dataSamples[Math.floor(Math.random()*dataSamples.length)] 
  return { mileage: String(milesRandom), ...randomCar };
}