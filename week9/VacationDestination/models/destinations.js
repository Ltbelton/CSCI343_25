class Destination {
  constructor(id, countryId, name, capacity, yearEstablished, rating, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.capacity = capacity;
    this.yearEstablished = yearEstablished;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} (est. ${this.yearEstablished}) – Capacity: ${this.capacity}, Rating: ${this.rating}`;
  }
}

export default Destination;
