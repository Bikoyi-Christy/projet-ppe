import naruto from './assets/naruto.jpg'
import Onepiece from './assets/onepiece.jpg'
import shamanking from './assets/shamanking.jpg'


let Bibliotheque = [
    {
        name: "Naruto",
        category: "manga",
        cover: naruto,
        availlable : true
    },
 
    {
        name: "One Piece",
        category: "manga",
        cover: Onepiece,
        availlable : true
    },
 
    {
        name: "Shaman King",
        category: "manga",
        cover: shamanking,
        availlable : true 
    }
 ]


 for (let i in Bibliotheque ) {

    console.log(Bibliotheque)

 }

 export default Bibliotheque;