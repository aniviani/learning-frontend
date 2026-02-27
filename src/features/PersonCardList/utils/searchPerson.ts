import { type IPerson } from "../PersonCardList";

export const searchPersons = (params: {searchFirstname: string; people: IPerson[]}): IPerson[] => {
    const searchedPersons = params.people.filter((person) => person.firstname.includes(params.searchFirstname))
    return searchedPersons
} 