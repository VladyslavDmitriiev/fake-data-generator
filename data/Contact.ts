import * as faker from 'faker'

export class Contact {
  firstName: string
  middleName?: string
  lastName: string
  jobTitle: string
  company: string
  phoneNumberMobile: string
  phoneNumberLandline?: string
  phoneNumberFax?: string
  email: string
  addressHomeCity: string
  addressHomeStreet: string
  addressHomeZip: string
  addressWorkCity: string
  addressWorkStreet: string
  addressWorkZip: string
  addressOtherCity: string
  addressOtherStreet: string
  addressOtherZip: string
  eventBirthday: string
  eventAnniversary: string
  eventOther: string
  website: string
  gender: string
  notes: string

  constructor() {
    this.firstName = faker.name.firstName()
    this.middleName = faker.name.middleName()
    this.lastName = faker.name.lastName()
    this.jobTitle = faker.name.jobTitle()
    this.company = faker.company.companyName()
    this.phoneNumberMobile = faker.phone.phoneNumber(faker.phone.phoneNumberFormat())
    this.phoneNumberLandline = faker.phone.phoneNumber(faker.phone.phoneNumberFormat())
    this.phoneNumberFax = faker.phone.phoneNumber(faker.phone.phoneNumberFormat())
    this.email = faker.internet.email()
    this.addressHomeCity = faker.address.city()
    this.addressHomeStreet = faker.address.streetAddress()
    this.addressHomeZip = faker.address.zipCode()
    this.addressWorkCity = faker.address.city()
    this.addressWorkStreet = faker.address.streetAddress()
    this.addressWorkZip = faker.address.zipCode()
    this.addressOtherCity = faker.address.city()
    this.addressOtherStreet = faker.address.streetAddress()
    this.addressOtherZip = faker.address.zipCode()
    this.eventBirthday = faker.date.past(20).toLocaleDateString()
    this.eventAnniversary = faker.date.recent(90).toISOString().split('T')[0]
    this.eventOther = faker.date.soon(90).toDateString()
    this.website = faker.internet.domainName()
    this.gender = faker.name.gender()
    this.notes = faker.random.words(20)
  }
}