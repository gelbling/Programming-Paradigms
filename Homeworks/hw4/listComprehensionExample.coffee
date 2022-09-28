
# array that stores player statistics objects objects
# adr = average death rate
playerStats = [

    {gamerTag: 'KSCERATO', kills: 55, deaths: 28, adr: 99.8, rating: 1.64}
    {gamerTag: 'saffee', kills: 41, deaths: 30, adr: 73.3, rating: 1.27}
    {gamerTag: 'yurrih', kills: 38, deaths: 33, adr: 78.2, rating: 1.11}
    {gamerTag: 'arT', kills: 34, deaths: 38, adr: 79.6, rating: 1.09}
    {gamerTag: 'drop', kills: 30, deaths: 33, adr: 70.9, rating: 0.91}

]

# create a variable to store the player's gamer tags that have more than 35 kills
mostKills = (player.gamerTag for player in playerStats when player.kills > 35)

# display the array of the players with most kills
console.log mostKills 

