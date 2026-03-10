// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
    const SciFi=movies.filter((movieObj)=>movieObj.genre==="Sci-Fi");
    console.log(SciFi);
    
//     2. map() to return:
//             "Inception (8.8)"
    let answer=movies.map((movieObj)=>`${movieObj.title} (${movieObj.rating})`);
    console.log(answer);
    
//     3. reduce() to find average movie rating
    const ratingSum=movies.reduce((acc,movieObj)=>acc+movieObj.rating,0);
    console.log(ratingSum/movies.length);
    
//     4. find() movie "Joker"
    let joker=movies.find(movieObj=>movieObj.title==="Joker");
    console.log(joker);
    
//     5. findIndex() of "Avengers"
    let avenger=movies.findIndex(movieObj=>movieObj.title==="Avengers");
    console.log(avenger);
