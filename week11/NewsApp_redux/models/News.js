class News {
    constructor(
      id,
      headline,
      date,       
      author,
      agency,      
      description,
      imageUrl,   
      category     
    ) {
      this.id = String(id);
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.description = description;
      this.imageUrl = imageUrl;
      this.category = category;
    }
  
    toString() {
      return `${this.headline} • ${this.agency} • ${this.author} • ${this.date}`;
    }
  }
  
  export default News;