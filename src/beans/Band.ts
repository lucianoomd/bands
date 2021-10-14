export default class Band {
  id?: string
  name?: string
  image?: string
  genre?: string
  biography?: string
  numPlays?: Number

  constructor(id = '0', name = '', image = '', genre = '', biography = '', numPlays = 0) {
    this.id = id,
    this.name = name,
    this.image = image,
    this.genre = genre,
    this.biography = biography
    this.numPlays = numPlays
  }
}