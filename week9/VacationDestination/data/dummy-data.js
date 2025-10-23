import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("co1", "Japan",      "#ff6b6b"),
  new Country("co2", "Italy",      "#4dabf7"),
  new Country("co3", "Mexico",     "#51cf66"),
  new Country("co4", "Greece",     "#74c0fc"),
  new Country("co5", "Thailand",   "#f59f00"),
  new Country("co6", "Australia",  "#845ef7"),
  new Country("co7", "Spain",      "#ffa94d"),
  new Country("co8", "France",     "#748ffc"),
  new Country("co9", "Brazil",     "#40c057"),
  new Country("co10","South Africa","#e599f7"),
];

export const DESTINATIONS = [
  // Japan
  new Destination("d1",  "co1", "Kyoto Temples",            100,  794, 4.8, "https://example.com/japan-kyoto.jpg"),
  new Destination("d2",  "co1", "Okinawa Beaches",           80, 1609, 4.7, "https://example.com/japan-okinawa.jpg"),

  // Italy
  new Destination("d3",  "co2", "Amalfi Coast",              90,  190, 4.6, "https://example.com/italy-amalfi.jpg"),
  new Destination("d4",  "co2", "Venice Canals",            110,  421, 4.5, "https://example.com/italy-venice.jpg"),

  // Mexico
  new Destination("d5",  "co3", "Cancún & Riviera Maya",    120, 1970, 4.6, "https://example.com/mexico-cancun.jpg"),
  new Destination("d6",  "co3", "Mexico City Historic C.",  100, 1325, 4.7, "https://example.com/mexico-cdmx.jpg"),

  // Greece
  new Destination("d7",  "co4", "Santorini (Oia/Fira)",      85,  120, 4.8, "https://example.com/greece-santorini.jpg"),
  new Destination("d8",  "co4", "Athens Acropolis",         100, -450, 4.6, "https://example.com/greece-athens.jpg"),

  // Thailand
  new Destination("d9",  "co5", "Phuket Beaches",           130, 1785, 4.6, "https://example.com/thailand-phuket.jpg"),
  new Destination("d10", "co5", "Chiang Mai Old City",       95, 1296, 4.7, "https://example.com/thailand-chiangmai.jpg"),

  // Australia
  new Destination("d11", "co6", "Great Barrier Reef",       140, 1770, 4.8, "https://example.com/australia-gbr.jpg"),
  new Destination("d12", "co6", "Sydney Harbour",           110, 1788, 4.7, "https://example.com/australia-sydney.jpg"),

  // Spain
  new Destination("d13", "co7", "Barcelona (Sagrada Família)", 95, 1329, 4.7, "https://example.com/spain-barcelona.jpg"),
  new Destination("d14", "co7", "Mallorca Beaches",            85, 123,4.6, "https://example.com/spain-mallorca.jpg"),

  // France
  new Destination("d15", "co8", "Paris (Eiffel/Seine)",     100,  508, 4.7, "https://example.com/france-paris.jpg"),
  new Destination("d16", "co8", "French Riviera (Nice)",     90,  350, 4.6, "https://example.com/france-nice.jpg"),

  // Brazil
  new Destination("d17", "co9", "Rio de Janeiro (Copacabana)", 120, 1565, 4.6, "https://example.com/brazil-rio.jpg"),
  new Destination("d18", "co9", "Foz do Iguaçu Falls",         110, 1549, 4.8, "https://example.com/brazil-iguazu.jpg"),

  // South Africa
  new Destination("d19", "co10", "Cape Town (Table Mountain)", 100, 1652, 4.7, "https://example.com/sa-cape-town.jpg"),
  new Destination("d20", "co10", "Kruger National Park",       130, 1898, 4.8, "https://example.com/sa-kruger.jpg"),
];
