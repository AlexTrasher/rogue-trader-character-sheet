interface Stats {
    shorthand: string,
    label: string,
    value: number,
    bonus?: number
}
export const statsData:Stats[] = [
    { 
        shorthand: "WS",
        label: "Weapon Skill",
        value: 40,
        bonus: 4,
    },  
    { 
        shorthand: "BS",
        label: "Ballistic Skill",
        value: 40,
        bonus: 4,
    },
    { 
        shorthand: "STR",
        label: "Strength",
        value: 36,
        bonus: 3,
    },
    { 
        shorthand: "TGH",
        label: "Toughness",
        value: 35,
        bonus: 3,
    },
    { 
        shorthand: "AGI",
        label: "Agility",
        value: 37,
        bonus: 3,
    },
    { 
        shorthand: "INT",
        label: "Intelligence",
        value: 33,
        bonus: 3,
    },
    { 
        shorthand: "PER",
        label: "Perception",
        value: 35,
        bonus: 3,
    },
    {   
        shorthand: "WP",
        label: "Willpower",
        value: 36,
    },
    { 
        shorthand: "FEL",
        label: "Fellowship",
        value: 39,
        bonus: 3,
    },
]
