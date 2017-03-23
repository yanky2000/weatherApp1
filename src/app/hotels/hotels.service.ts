import { Injectable } from '@angular/core';

@Injectable()
export class HotelsService {


  getHotels() {
    return HOTELS
  }

  getHotel(id:number) {
    return HOTELS.find(hotel => hotel.id === id)
  }
}

const HOTELS = [
  { 
    id:1,
    name: "Milan Marriott Hotel",
    imageUrl:"../assets/images/milan_hotel2.png",
    imageUrl2:"../assets/images/r1.jpg",
    address: "Via Giorgio Washington 66",
    city: "Milan",
    tel: "555-555-5555",
    weather: {
      temperature: 38,
      water: 35
    },
    likes: 45,
    followers: 28
  },
  { 
    id:2,
    name: "Lolita B and B",
    imageUrl:"../assets/images/barcelona_hotel.jpg",
    imageUrl2:"../assets/images/r1.jpg",
    address: "Carrer Provença 181, 2-2",
    city: "Barcelona",
    tel: "666-666-66666",
    weather: {
      temperature: 40,
      water: 33
    },
    likes: 22,
    followers: 2
  },

  { 
    id:3,
    name: "The Ritz-Carlton",
    address: "Schubertring 5-7",
    imageUrl:"../assets/images/vienna_hotel.jpg",
    imageUrl2:"../assets/images/r1.jpg",
    city: "Vienna",
    tel: "444-4444-44444",
    weather: {
      temperature: 29,
      water: 25
    },
    likes: 122,
    followers: 228
  },
  { 
    id:4,
    name: "The Vijitt Resort Phuket",
    address: "6 Moo 2, Viset Road",
    city: "Phuket",
    imageUrl:"../assets/images/phuket_hotel.jpg",
    imageUrl2:"../assets/images/r1.jpg",
    tel: "666-556-1234",
    weather: {
      temperature: 33,
      water: 27
    },
    likes: 1,
    followers: 2
  },


  ]