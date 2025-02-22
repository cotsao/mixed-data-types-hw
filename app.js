/* Cody Tsao
SEI 7.06
Mixed Data Types */

// 1. Data Types

/* 
A light switch that can be either on or off.
Boolean, lightswitch = true or false
A user's email address.
String, string just contains email address
A spaceship with a hull, laser blasters, tractor beam, and warp drive.
Object, variables for each spaceship component
A list of student names from our class.
Array, each index contains a name
A list of student names from our class, each with a location.
Array of Objects, each index contains the object that contains a string w/ the location
A list of student names from our class, each with a location and each with a list of favorite tv shows.
Object of  array of Objects, each index contains an object with each of the required information
 */

//2. Take it Easy
/* 1 */
const arr = ["red", "yellow", "orange", "green", "blue", "purple"]
/* 2 */
console.log(arr[4])
/* 3 */
const cody = {
    favoriteFood: "Ice Cream",
    hobby: "Gaming",
    currentLocation: "Santa Cruz",
    favoriteDataType: "Array"
}
/* 4 */
console.log(cody.hobby)

//3. Crazy Object!
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }
 
  console.log(crazyObject.taco[1].salsa[crazyObject.taco[1].salsa.length -1])
  console.log(crazyObject.larry.quotes[0])
  console.log(crazyObject.larry.characters[2].favourtieHobby)
  console.log(crazyObject.larry.nicknames[1])
  console.log(crazyObject.larry.characters[1])

  //4. Object-ception
  const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

 //5. Bond Films
 const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];
  const bondTitles = []
  for ( let i = 0; i < bondFilms.length; i++)
  {
      bondTitles.push(bondFilms[i].title)
  }
console.log(bondTitles)
//6
const oddBonds = []
for (let i=0 ; i<bondFilms.length; i++)
{
    if ( bondFilms[i].year % 2 != 0)
    {
        oddBonds.push(bondFilms[i])
    }
}
console.log(oddBonds)
//7
sum = 0
for (let i = 0; i <bondFilms.length;i++)
{
    temp = bondFilms[i].gross.replace("$", '').replace(/,/g, '')
    sum += parseInt(temp)
    
}
console.log("Gross total = " + sum)

//8
const countArr = []
const newSet = new Set()
for( let i = 0; i <bondFilms.length; i++) //get number of unique actors
{
    newSet.add(bondFilms[i].actor)
}
const setArr = Array.from(newSet) //convert newset to array
for (let i = 0; i <newSet.size; i++) //create an object in the array for each unique actor
{
    countArr.push({actor: '', count:0})
}
for (let i = 0; i <countArr.length; i++) //set unique actors to array
{   
        countArr[i].actor = setArr.pop() 
}
for (let i = 0; i < bondFilms.length; i++) // store count per actor to array
{
    for (let j=0; j < countArr.length; j++)
    {
        if( countArr[j].actor === bondFilms[i].actor)
        {
            countArr[j].count++
        }
    }
}
function getLowestActor (array){ 
    let min = Number.MAX_VALUE
    let index = 0
    for (let i = 0; i <array.length; i++)
    {
        if (array[i].count <= min)
        {
            index = i
            min = countArr[i].count
        }
    }
    return array[index].actor
}
function logLowestActorObj ( str, obj )
{   let int = 0
    for (let i =0; i < obj.length; i++)
    {
        if (obj[i].actor === str)
        {
            int = i
        }
    }
    return obj[int]
}
console.log(logLowestActorObj (getLowestActor(countArr), bondFilms) )
