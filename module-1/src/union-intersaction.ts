//enum
enum Level {
    mid= "mid",
    senior= "senior",
    lead= "lead",
}

type NoobDeveloper = {
    name: string;
}

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
}

type NextLevelDeveloper = JuniorDeveloper & {
    leaderShip: string;
    level: Level
}

//Union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Sakib',
    expertise: 'React',
    experience: 2
}

//Intersection type
const midLevelDeveloper: NextLevelDeveloper = {
    name: 'Sakib',
    expertise: 'React, Typescript',
    experience: 2,
    leaderShip: 'Team Lead',
    level: Level.mid
}
