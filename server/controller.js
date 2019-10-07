
const data = [
    {
      id: 1,
      artist_name: "Lil Wayne",
      artist_photo: '/photos/lilwayne.jpg',
      real_name: "Dwayne Michael Carter Jr.",
      hometown: "New Orleans, LA",
      age: 37,
      music_type: "Southern Hip-Hop",
      quote: "Above the law, but under the influence",
      album_photo1: "/photos/carter5.jpeg",
      title: "Carter V",
      release: "September 28th, 2018",
      album_photo2: "/photos/iamnotahumanbeing.jpg",
      title2: "I Am Not A Human Being II",
      release2: "March 22nd, 2013",
      album_photo3: "/photos/carter4.jpeg", 
      title3: "Carter IV",
      release3: "August 29th, 2011",
      bio: "Rapper Lil Wayne was born Dwayne Michael Carter Jr. on September 27, 1982, in New Orleans, Louisiana. Lil Wayne has been creating music since he was a child, and is considered among today's most talented rappers. He grew up in Hollygrove, one of New Orleans' poorest neighborhoods.",
      comments: ''
    },
    {
      id: 2,
      artist_name: "Gucci Mane",
      artist_photo: '/photos/guccimane1.jpg',
      real_name: "Radric Delantic Davis",
      hometown: "Birmingham, AL",
      age: 39,
      music_type: "Trap",
      quote: "I sell so many chickens, think I work for Kroger",
      album_photo1: "/photos/delusionsGM.jpg",
      title: "Delusions of Grandeur",
      release: "June 21st, 2019",
      album_photo2: "/photos/evilgenius.jpg",
      title2: "Evil Genius",
      release2: "December 7th, 2018",
      album_photo3: "/photos/elgato.jpg", 
      title3: "El Gato: The Human Glacier",
      release3: "December 22, 2017",
      bio: "Radric Delantic Davis with stage name Gucci Mane was born in Bessemer, Alabama, on 12 February 1980. His parents separated and he was raised by his mother. At the age of nine, he moved to Atlanta with his mother. He demonstrated a flair for penning verses as a child but took to rapping when he was 14 years old.",
      comments: ''
    },
    {
      id: 3,
      artist_name: "Young Thug",
      artist_photo: '/photos/youngthug.jpg',
      real_name: "Jeffery Lamar Williams",
      hometown: "Atlanta, GA",
      age: 28,
      music_type: "hip-hop",
      quote: "I got hundreds sittin' on hundreds, that blue cheese, im not ranchin",
      album_photo1: "/photos/somuchfun.jpeg",
      title: "So Much Fun",
      release: "August 16th, 2019",
      album_photo2: "/photos/slimelanguage.jpeg",
      title2: "Slime Language",
      release2: "August 17th, 2018",
      album_photo3: "/photos/superslimey.jpg", 
      title3: "Super Slimey",
      release3: "October 20th, 2017",
      bio: "Jeffery Lamar Williams, known professionally as Young Thug, is an American rapper, singer, and songwriter. Known for his eccentric vocal style and fashion, he first received attention for his collaborations with rappers Rich Homie Quan, Birdman, and Gucci Mane.",
      comments: ''
    },
    {
      id: 4,
      artist_name: "Future",
      artist_photo: '/photos/future.jpeg',
      real_name: "Nayvadius DeMun Wilburn",
      hometown: "Atlanta, GA",
      age: 35,
      music_type: "trap",
      quote: "they tried to make me a pop star, and they made a monster",
      album_photo1: "/photos/saveme.jpg",
      title: "SAVE ME",
      release: "June 7th, 2019",
      album_photo2: "/photos/thewizrd.jpg",
      title2: "The Wizrd",
      release2: "January 18th, 2019",
      album_photo3: "/photos/beastmode2.jpg", 
      title3: "BeastMode II",
      release3: "July 6th, 2018",
      bio: "Nayvadius DeMun Wilburn, known professionally as Future, is an American rapper, singer, songwriter, and record producer. Born and raised in Atlanta, Georgia, Wilburn first became involved in music as part of the Dungeon Family collective, where he was nicknamed 'the Future'",
      comments: ''
    },
    {
    id: 5,
      artist_name: "Chief Keef",
      artist_photo: '/photos/chiefkeef.jpg',
      real_name: "Keith Farrelle Cozart",
      hometown: "Chicago, IL",
      age: 24,
      music_type: "trap",
      quote: "Mayonnaise colored Benz, I push miracle whips",
      album_photo1: "/photos/theleek8.png",
      title: "The Leek(Vol. 8)",
      release: "July 26th, 2019",
      album_photo2: "/photos/glotoven.jpg",
      title2: "GloToven",
      release2: "March 15th, 2019",
      album_photo3: "/photos/theleek7.jpg", 
      title3: "The Leek (Vol. 7)",
      release3: "January 18th, 2019",
      bio: "Keith Farrelle Cozart, better known by his stage name Chief Keef, is an American rapper and record producer. Keef's music first became popular among high school students from Chicago's South Side during his teen years in the early 2010s.",
      comments: ''
    }
];

module.exports ={
  get(req, res){
    res.status(200).send(data) 
  },
  addPost(req, res){
    const { addOn } = req.body;
    data.push(addOn);
    res.status(200).send(data);
  }
}