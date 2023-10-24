import {expect, test} from 'vitest'
import Tile from '../src/generator/classes/Tile'

test('Should create a Tile', () => {
    const tile = new Tile(0,0)
    expect(tile).toBeDefined()
})

test('Should get the entropy of a tile', () => {
    const tile = new Tile(0,0)
    expect(tile.getEntropy()).toBe(35)
})

test('Should get the possibilities of a tile', () => {
    const tile = new Tile(0,0)
    expect(tile.getPossibilities()).toBeDefined()
})

test('Should constrain a Tile once and return true', () => {
    const tile = new Tile(0,0)
    const tile2 = new Tile(0,2)
    tile.addNeighbor(tile2, 0)
    expect(tile.constrain(tile2.getPossibilities(), 0)).toBe(true)
})

test("Should constrain a Tile once and return false", () => {
    const tile = new Tile(0,0)
    expect(tile.constrain(tile.getPossibilities(), 0)).toBe(false)
})


