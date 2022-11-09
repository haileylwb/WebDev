const ORGANISM_LIST = [
    "Air;None;None", "Earth;None;None", "Fire;None;None", "Water;None;None", "Alcohol;Fire;Water", "Dust;Air;Earth", "Energy;Air;Fire", "Lava;Earth;Fire", "Swamp;Earth;Water", "Mud;Dust;Water", "Life;Energy;Swamp", "Bacteria;Life;Swamp", "Fire Elemental;Fire;Life", "Stone;Air;:Lava", "Metal;Stone;Fire", "Electricity;Energy;Metal", "Oxygen;Water;Electricity"
];

const ORGANISM_OFFSET = 4;
const NAME = 0, PARENT_1 = 1, PARENT_2 = 2;
const NONE = "None";

function getOrganismName(organism){
    return organism.split(";") [NAME];
}
function getFirstParent(organism){
    return organism.split(";") [PARENT_1];
}
function getSecondParent(organism){
    return organism.split(";") [PARENT_2];
}
function getOrganismData(organism, idx){
    return organism.split(";") [idx];
}
function areParents(organism, parent1, parent2){
    return (getOrganismData(organism, PARENT_1) == getOrganismData(parent1, NAME) || getOrganismData(organism, PARENT_1) == getOrganismData(parent2, NAME)) && (getOrganismData(organism, PARENT_2) == getOrganismData(parent1, NAME) || getOrganismData(organism, PARENT_2) == getOrganismData(parent2, NAME)) 
    
}

function findOrganism(orgname){
    for(var i in ORGANISM_LIST){
        if (getOrganismData(ORGANISM_LIST[i], NAME) == orgname)
            return ORGANISM_LIST[i];
    }
}

function findCombo(org1, org2){
    for (var i in ORGANISM_LIST){
        if (areParents(ORGANISM_LIST[i], prg1, org2))
            return ORGANISM_LIST[i];
    }
    return NONE;
}
