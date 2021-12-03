import { Generator } from './src/Generator'

let g = new Generator
g.generateContactsData(50)
g.makeCSV(g.contactsData)