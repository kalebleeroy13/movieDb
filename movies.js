let movies = [
  {
    title: "Jumanji",
   hasWatched: true,
   rating: 4.5
  },
   {
     title: "Get Out",
    hasWatched: true,
    rating: 5
    },
    {
    title: "Pocahontas",
     hasWatched: false,
     rating: 4
   }
]

// movies.forEach(function(movie){
//   let result = "You have ";
//   if(movie.hasWatched){
//     result += "watched ";
//   } else {
//     result += "not seen ";
//   }
//   result += "\"" + movie.title + "\" - ";
//   result += movie.rating + " stars";
//   console.log(result)
// })

movies.forEach(function(movie){
  console.log(buildString(movie));
});

function buildString(movie){
  let result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}
