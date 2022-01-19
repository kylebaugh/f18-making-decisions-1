// Set variables for character stats

let jonSnowAttack = 25;
let jonSnowHealth = 100
let jonSnowDefense = 0

let jamieLannisterAttack = 35;


// If/else if/else block to see who has the greater attack
if(jonSnowAttack > jamieLannisterAttack){
  console.log('Jon Snow has the greater attack')
}else if(jonSnowAttack === jamieLannisterAttack){
  console.log('The attacks are equally strong')
}else{
  console.log('Jamie Lannister has the greater attack')
}

// If/else block to see if Jon can survive an attack from Jamie
if(jonSnowHealth <= jamieLannisterAttack){
  console.log("Jon Snow has been slain. RIP bro.")
}else{
  jonSnowHealth -= jamieLannisterAttack
  console.log(`Jon's new heath is ${jonSnowHealth}`)
}

// Jon picks up a shield to help with his defense
jonSnowDefense += 25

// If/else block to see if Jon can survive Jamie's attack with the aid of his defense stat
if(jonSnowHealth <= (jamieLannisterAttack - jonSnowDefense)){
    console.log("Jon Snow has been slain. RIP bro.")
}else{
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
  console.log(`Jon's new heath is ${jonSnowHealth}`)
}

// Townsperson tosses Jon a health potion that can heal up to 50 points, but can't make total health go over 100

if(jonSnowHealth  = 50 >= 100){
    jonSnowHealth = 100
}else{
    jonSnowHealth += 50
}

console.log(`Jon's health is ${jonSnowHealth}`)

// Coin toss to see if Jamie will let Jon run away
let coinLandsHeads = false

if(coinLandsHeads === true){
  console.log('Jon runs away')
}else{
  console.log('The fight continues!')
}

// if(coinLandsHeads !== false){
//   console.log('The fight continues')
// }else{
//   console.log('Jon runs to safety')
// }


// For loop that runs 5 times, each time updating Jon's health
for(let i = 0; i < 5; i++){
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
  console.log(`Jon's health is now ${jonSnowHealth}`)
}

// While loop that runs until Jon is dead
while(jonSnowHealth > 0){
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
  console.log(`Jon's health is now ${jonSnowHealth}`)
  
  // Nested If statement that tells us when Jon finally kicks the bucket.
  if(jonSnowHealth <= 0){
    console.log('Jon Snow has been slain. Someone call the Red Priestess.')
  }
}

