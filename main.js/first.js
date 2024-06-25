
// const obj = new Object ();
// console.log(obj);
// const obj = {
//     name: "My fav playlist",
//     rating: 3,
//     tracks: ["Track1", "Track2", "Track3"],
//     trackCount: 3,
//      addTrack(newTrack){
//         this.tracks.push(newTrack)
//      },
     
//      updateTrackCount(){
//         this.trackCount = this.tracks.length;
//      },
//      getRating(){
//         return this.rating;
//      },
//      updateRating( changedRating){
//         this.rating = changedRating ;
        
//      }
     
// };

// obj.rating=1;
// obj.artist = "Serduchka";
// obj.licence = true;


const newObj = {
    name: "My fav playlist",
        rating: 3,
        tracks: ["Track1", "Track2", "Track3"],
        trackCount: 3, 
}


const keys = Object.keys(newObj);
const values = Object.values(newObj);
console.log(keys);
