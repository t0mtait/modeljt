teams = [
    ["Celtics", 0.3], 
    ["Thunder", 0.0], 
    ["Nuggets", 0.0], 
    ["Knicks", 0.0], 
    ["Mavericks", 0.0], 
    ["Timberwolves", 0.0],
    ["76ers", 0.08], 
    ["Bucks", 0.0], 
    ["Pacers", 0.0],
    ["Kings", 0.0],
    ["Grizzlies", 0.0], 
    ["Pelicans", 0.0], 
    ["Lakers", 0.19],
    ["Clippers", 0.0],
    ["Heat", 0.0], # literally worse at home
    ["Magic", 0.0], 
    ["Cavs", 0.0],
    ["Suns", 0.0],
    ["Rockets", 0.31],
    ["Warriors", 0.0], 
    ["Raptors", 0.06],
    ["Hawks", 0.15],
    ["Bulls", 0.0],
    ["Spurs", 0.0], 
    ["Jazz", 0.0],
    ["Hornets", 0.0],
    ["Wizards", 0.0],
    ["Pistons", 0.01], 
    ["Blazers", 0.0],
    ["Nets", 0.0]
]


away = input("Enter away team: ")
awayIp = float(input("Enter total PER of injured players: "))
home = input("Enter home team: ")
homeIp = float(input("Enter total PER of injured players: "))

for index,value in enumerate(teams):
    if away == value[0]:
        awayPr = (30-index) * 65
        awayApr = awayPr - (awayIp * 5)
    if home == value[0]:
        homePr = (30-index) * 65
        homeApr = homePr - (homeIp * 5)
        homeBonus = homeApr * value[1]


print("\n{away} ({awayPr}PR) @ {home} ({homePr}PR)".format(away=away, awayPr=awayPr, home=home, homePr=homePr))

print("\n{away} receive an injury penalty of {awayIp}".format(away=away, awayIp=awayIp*5))
print("{home} receive an injury penalty of {homeIp}".format(home=home, homeIp=homeIp*5))

print("\n{home} receive a home court advantage of {homeBonus}".format(home=home, homeBonus=homeBonus))
homeApr += homeBonus
print("\nFinal ratings: {away} ({awayApr}APR) @ {home} ({homeApr}APR)".format(away=away, awayApr=awayApr, home=home, homeApr=homeApr))

if homeApr > awayApr:
    print( "\nThe {home} are favored by {diff} points".format(home=home, diff=round((homeApr-awayApr)/100,1)) )

elif awayApr > homeApr:
    print("\nThe {away} are favored by {diff} points".format(away=away, diff=round((awayApr-homeApr)/100,1)) )
