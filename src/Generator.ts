import { Contact } from '../data/Contact'
import * as fs from 'fs'

export class Generator {
  contactsData: Object[]
  
  constructor() {
    this.contactsData = []
  }

  generateContactsData(count: number) {
    for (let i = 0; i<count; i++) {
      this.contactsData.push(new Contact)
    }
    console.log(`New contacts generated: ${this.contactsData.length}`)
  }
  makeCSV(data: Object[]) {
    let headers = Object.keys(data[0]).join(',') + '\n'
    let values = data.map((v) => Object.values(v).map((v) => v.replace(/,/g, " ")).join(',')).join('\n') 
    let xls = headers + values
    fs.writeFileSync('data.csv', xls, {encoding: 'utf-8', flag: 'w'})
    console.log(`data.csv file was created`)
  }
}