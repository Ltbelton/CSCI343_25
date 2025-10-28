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
  new Destination("d1",  "co1", "Kyoto Temples",            100,  794, 4.8, "https://artifactstravel.com/wp-content/uploads/2024/06/Nanzenji2-copy-1.jpg"),
  new Destination("d2",  "co1", "Okinawa Beaches",           80, 1609, 4.7, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGsbwPa9MHmGswZM4bD5P7h2daa0NOcLm7A&s"),

  // Italy
  new Destination("d3",  "co2", "Amalfi Coast",              90,  190, 4.6, "https://www.grayline.com/wp-content/uploads/2025/01/Amalfi-coast-scaled.jpg"),
  new Destination("d4",  "co2", "Venice Canals",            110,  421, 4.5, "https://theromanguy.com/wp-content/uploads/Venice-canals-featured.jpeg"),

  // Mexico
  new Destination("d5",  "co3", "Cancún & Riviera Maya",    120, 1970, 4.6, "https://comercial-production-gx-cms-content-bucket.s3.amazonaws.com/concentrador-hoteles/destino/mobile/cancun.jpg"),
  new Destination("d6",  "co3", "Mexico City Historic C.",  100, 1325, 4.7, "https://whc.unesco.org/uploads/thumbs/site_0412_0001-1200-630-20091001123325.jpg"),

  // Greece
  new Destination("d7",  "co4", "Santorini (Oia/Fira)",      85,  120, 4.8, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-r-OGMYJ2HlAAwnI0YYjNBcDM93k6cUyWw&s"),
  new Destination("d8",  "co4", "Athens Acropolis",         100, -450, 4.6, "https://cdn.britannica.com/99/255999-159-73560D25/Parthenon-temple-at-the-Acropolis-of-Athens-Greece-built-5th-century-BC.jpg"),

  // Thailand
  new Destination("d9",  "co5", "Phuket Beaches",           130, 1785, 4.6, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6rMJLfcsr1HNryMbpveS9yJipNMu17ZgGw&s"),
  new Destination("d10", "co5", "Chiang Mai Old City",       95, 1296, 4.7, "https://www.aleenta.com/wp-content/uploads/City-Walls-Chiang-Mai.jpg"),

  // Australia
  new Destination("d11", "co6", "Great Barrier Reef",       140, 1770, 4.8, "https://thriftynomads.com/wp-content/uploads/2018/12/gbr.jpg"),
  new Destination("d12", "co6", "Sydney Harbour",           110, 1788, 4.7, "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/cf/69/07/sydney-harbour.jpg?w=900&h=500&s=1"),

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
