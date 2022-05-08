import { faker } from '@faker-js/faker';

const database = () => {
    let userCard = [];
 
    for (let i = 0; i < 50; i++) {
        const colorName = ['RED', 'GREEN', 'BLUE']
        const data = new Date()

        const id = faker.random.alphaNumeric(15)
        const color = colorName[faker.datatype.number({ min: 0, max: 2 })]
        const name = faker.fake(`${faker.name.lastName()} ${faker.name.findName()}`)
        const speed = faker.datatype.number({ min: 10, max: 200, precision: 0.01 })
        const time = `${data.getMinutes()}:${data.getSeconds()}.${data.getMilliseconds()}`
 
        userCard.push({
            "id": id,
            "color": color,
            "name": name,
            "speed": speed,
            "time": time
        })
    }
 
    return  userCard ;
}

export default database;
