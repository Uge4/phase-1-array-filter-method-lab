// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() )
}

findMatching(drivers, "Bobby")


function fuzzyMatch(drivers, partName){
    return drivers.filter(driver => driver.startsWith(partName))
    // return drivers.filter(driver => driver.indexof(name) !== name)
}

fuzzyMatch(drivers, "Sa")



const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]

function matchName(drivers, name){
    // return drivers.filter(driver => driver === name)
    return drivers.filter(driver => driver.name === name)
}


matchName(drivers2, "Bobby")