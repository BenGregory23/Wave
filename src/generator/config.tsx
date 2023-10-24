export const spriteSheetPath = "src/assets/tileset.png"

// World size in tiles
export const WORLD_X = 60
export const WORLD_Y = 34

// Tile size in pixels
export const TILESIZE = 16

// Directions
export const NORTH = 0
export const EAST  = 1
export const SOUTH = 2
export const WEST  = 3


// Tile types
export const TILE_GRASS    = 0
export const TILE_WATER    = 1
export const TILE_FOREST   = 2
export const TILE_COASTN   = 3
export const TILE_COASTE   = 4
export const TILE_COASTS   = 5
export const TILE_COASTW   = 6
export const TILE_COASTNE  = 7
export const TILE_COASTSE  = 8
export const TILE_COASTSW  = 9
export const TILE_COASTNW  = 10
export const TILE_COASTNE2 = 11
export const TILE_COASTSE2 = 12
export const TILE_COASTSW2 = 13
export const TILE_COASTNW2 = 14
export const TILE_ROCKN    = 15
export const TILE_ROCKE    = 16
export const TILE_ROCKS    = 17
export const TILE_ROCKW    = 18
export const TILE_ROCKNE   = 19
export const TILE_ROCKSE   = 20
export const TILE_ROCKSW   = 21
export const TILE_ROCKNW   = 22
export const TILE_FORESTN   = 23
export const TILE_FORESTE   = 24
export const TILE_FORESTS   = 25
export const TILE_FORESTW   = 26
export const TILE_FORESTNE  = 27
export const TILE_FORESTSE  = 28
export const TILE_FORESTSW  = 29
export const TILE_FORESTNW  = 30
export const TILE_FORESTNE2 = 31
export const TILE_FORESTSE2 = 32
export const TILE_FORESTSW2 = 33
export const TILE_FORESTNW2 = 34

export const  TileTypeConstantToNumber = (constant: string) => {
    switch(constant){
        case "TILE_GRASS":
            return TILE_GRASS
        case "TILE_WATER":
            return TILE_WATER
        case "TILE_FOREST":
            return TILE_FOREST
        case "TILE_COASTN":
            return TILE_COASTN
        case "TILE_COASTE":
            return TILE_COASTE
        case "TILE_COASTS":
            return TILE_COASTS
        case "TILE_COASTW":
            return TILE_COASTW
        case "TILE_COASTNE":
            return TILE_COASTNE
        case "TILE_COASTSE":
            return TILE_COASTSE
        case "TILE_COASTSW":
            return TILE_COASTSW
        case "TILE_COASTNW":
            return TILE_COASTNW
        case "TILE_COASTNE2":
            return TILE_COASTNE2
        case "TILE_COASTSE2":
            return TILE_COASTSE2
        case "TILE_COASTSW2":
            return TILE_COASTSW2
        case "TILE_COASTNW2":
            return TILE_COASTNW2
        case "TILE_ROCKN":
            return TILE_ROCKN
        case "TILE_ROCKE":
            return TILE_ROCKE
        case "TILE_ROCKS":
            return TILE_ROCKS
        case "TILE_ROCKW":
            return TILE_ROCKW
        case "TILE_ROCKNE":
            return TILE_ROCKNE
        case "TILE_ROCKSE":
            return TILE_ROCKSE
        case "TILE_ROCKSW":
            return TILE_ROCKSW
        case "TILE_ROCKNW":
            return TILE_ROCKNW
        case "TILE_FORESTN":
            return TILE_FORESTN
        case "TILE_FORESTE":
            return TILE_FORESTE
        case "TILE_FORESTS":
            return TILE_FORESTS
        case "TILE_FORESTW":
            return TILE_FORESTW
        case "TILE_FORESTNE":
            return TILE_FORESTNE
        case "TILE_FORESTSE":
            return TILE_FORESTSE
        case "TILE_FORESTSW":
            return TILE_FORESTSW
        case "TILE_FORESTNW":
            return TILE_FORESTNW
        case "TILE_FORESTNE2":
            return TILE_FORESTNE2
        case "TILE_FORESTSE2":
            return TILE_FORESTSE2
        case "TILE_FORESTSW2":
            return TILE_FORESTSW2
        case "TILE_FORESTNW2":
            return TILE_FORESTNW2
        default:
            return TILE_GRASS
    }
}

// Tile edges

export const GRASS    = 0
export const WATER    = 1
export const FOREST   = 2
export const COAST_N  = 3
export const COAST_E  = 4
export const COAST_S  = 5
export const COAST_W  = 6
export const FOREST_N = 7
export const FOREST_E = 8
export const FOREST_S = 9
export const FOREST_W = 10
export const ROCK_N   = 11
export const ROCK_E   = 12
export const ROCK_S   = 13
export const ROCK_W   = 14
export const ROCK     = 15


//Dictionary of all tile types and tile edges, on the directions [North, East, South, West]
export const tileRules: {[key: string]: number[]} = {
    TILE_GRASS: [GRASS, GRASS, GRASS, GRASS],
    TILE_WATER: [WATER, WATER, WATER, WATER],
    TILE_FOREST: [FOREST, FOREST, FOREST, FOREST],
    TILE_COASTN: [GRASS, COAST_N, WATER, COAST_N],
    TILE_COASTE: [COAST_E, GRASS, COAST_E, WATER],
    TILE_COASTS: [WATER, COAST_S, GRASS, COAST_S],
    TILE_COASTW: [COAST_W, WATER, COAST_W, GRASS],
    TILE_COASTNE: [GRASS, GRASS, COAST_E, COAST_N],
    TILE_COASTSE: [COAST_E, GRASS, GRASS, COAST_S],
    TILE_COASTSW: [COAST_W, COAST_S, GRASS, GRASS],
    TILE_COASTNW: [GRASS, COAST_N, COAST_W, GRASS],
    TILE_COASTNE2: [COAST_E, COAST_N, WATER, WATER],
    TILE_COASTSE2: [WATER, COAST_S, COAST_E, WATER],
    TILE_COASTSW2: [WATER, WATER, COAST_W, COAST_S],
    TILE_COASTNW2: [COAST_W, WATER, WATER, COAST_N],
    TILE_ROCKN: [ROCK, ROCK_N, GRASS, ROCK_N],
    TILE_ROCKE: [ROCK_E, ROCK, ROCK_E, GRASS],
    TILE_ROCKS: [GRASS, ROCK_S, ROCK, ROCK_S],
    TILE_ROCKW: [ROCK_W, GRASS, ROCK_W, ROCK],
    TILE_ROCKNE: [ROCK_E, ROCK_N, GRASS, GRASS],
    TILE_ROCKSE: [GRASS, ROCK_S, ROCK_E, GRASS],
    TILE_ROCKSW: [GRASS, GRASS, ROCK_W, ROCK_S],
    TILE_ROCKNW: [ROCK_W, GRASS, GRASS, ROCK_N],
    TILE_FORESTN: [FOREST, FOREST_N, GRASS, FOREST_N],
    TILE_FORESTE: [FOREST_E, FOREST, FOREST_E, GRASS],
    TILE_FORESTS: [GRASS, FOREST_S, FOREST, FOREST_S],
    TILE_FORESTW: [FOREST_W, GRASS, FOREST_W, FOREST],
    TILE_FORESTNE: [FOREST_E, FOREST_N, GRASS, GRASS],
    TILE_FORESTSE: [GRASS, FOREST_S, FOREST_E, GRASS],
    TILE_FORESTSW: [GRASS, GRASS, FOREST_W, FOREST_S],
    TILE_FORESTNW: [FOREST_W, GRASS, GRASS, FOREST_N],
    TILE_FORESTNE2: [FOREST, FOREST, FOREST_E, FOREST_N],
    TILE_FORESTSE2: [FOREST_E, FOREST, FOREST, FOREST_S],
    TILE_FORESTSW2: [FOREST_W, FOREST_S, FOREST, FOREST],
    TILE_FORESTNW2: [FOREST, FOREST_N, FOREST_W, FOREST],
};




export const tileWeights : {[key : string] : number} = {
    TILE_GRASS    : 16,
    TILE_WATER    : 6,
    TILE_FOREST   : 5,
    TILE_COASTN   : 5,
    TILE_COASTE   : 5,
    TILE_COASTS   : 5,
    TILE_COASTW   : 5,
    TILE_COASTNE  : 5,
    TILE_COASTSE  : 5,
    TILE_COASTSW  : 5,
    TILE_COASTNW  : 5,
    TILE_COASTNE2 : 2,
    TILE_COASTSE2 : 2,
    TILE_COASTSW2 : 2,
    TILE_COASTNW2 : 2,
    TILE_FORESTN  : 4,
    TILE_FORESTE  : 4,
    TILE_FORESTS  : 4,
    TILE_FORESTW  : 4,
    TILE_FORESTNE : 4,
    TILE_FORESTSE : 4,
    TILE_FORESTSW : 4,
    TILE_FORESTNW : 4,
    TILE_FORESTNE2: 2,
    TILE_FORESTSE2: 2,
    TILE_FORESTSW2: 2,
    TILE_FORESTNW2: 2,
    TILE_ROCKN    : 4,
    TILE_ROCKE    : 4,
    TILE_ROCKS    : 4,
    TILE_ROCKW    : 4,
    TILE_ROCKNE   : 4,
    TILE_ROCKSE   : 4,
    TILE_ROCKSW   : 4,
    TILE_ROCKNW   : 4,
}

export const ModifyTileWeights = (tileType : string, value : number) => {
    tileWeights[tileType] = Number(value)
}




// make an array with objects having a key and a value
export const tileSprites = [
    {
        key : TILE_GRASS,
        value : [16,0]
    },
    {
        key : TILE_WATER,
        value : [128, 176]
    },
    {
        key : TILE_FOREST,
        value : [16, 128]
    },
    {
        key : TILE_COASTN,
        value : [128, 160]
    },
    {
        key : TILE_COASTE,
        value : [144, 176]
    },
    {
        key : TILE_COASTS,
        value : [128, 192]
    },
    {
        key : TILE_COASTW,
        value : [112, 176]
    },
    {
        key : TILE_COASTNE,
        value : [144, 160]
    },
    {
        key : TILE_COASTSE,
        value : [144, 192]
    },
    {
        key : TILE_COASTSW,
        value : [112, 192]
    },
    {
        key : TILE_COASTNW,
        value : [112, 160]
    },
    {
        key : TILE_COASTNE2,
        value : [176, 160]
    },
    {
        key : TILE_COASTSE2,
        value : [176, 176]
    },
    {
        key : TILE_COASTSW2,
        value : [160, 176]
    },
    {
        key : TILE_COASTNW2,
        value : [160, 160]
    },
    {
        key : TILE_FORESTN,
        value : [16, 144]
    },
    {
        key : TILE_FORESTE,
        value : [0, 128]
    },
    {
        key : TILE_FORESTS,
        value : [16, 112]
    },
    {
        key : TILE_FORESTW,
        value : [32, 128]
    },
    {
        key : TILE_FORESTNE,
        value : [0, 144]
    },
    {
        key : TILE_FORESTSE,
        value : [0, 112]
    },
    {
        key : TILE_FORESTSW,
        value : [32, 112]
    },
    {
        key : TILE_FORESTNW,
        value : [32, 144]
    },
    {
        key : TILE_FORESTNE2,
        value : [96, 128]
    },
    {
        key : TILE_FORESTSE2,
        value : [96, 112]
    },
    {
        key : TILE_FORESTSW2,
        value : [112, 112]
    },
    {
        key : TILE_FORESTNW2,
        value : [112, 128]
    },
    {
        key : TILE_ROCKN,
        value : [16, 96]
    },
    {
        key : TILE_ROCKE,
        value : [0, 80]
    },
    {
        key : TILE_ROCKS,
        value : [16, 64]
    },
    {
        key : TILE_ROCKW,
        value : [32, 80]
    },
    {
        key : TILE_ROCKNE,
        value : [0, 96]
    },
    {
        key : TILE_ROCKSE,
        value : [0, 64]
    },
    {
        key : TILE_ROCKSW,
        value : [32, 64]
    },
    {
        key : TILE_ROCKNW,
        value : [32, 96]
    },
]
