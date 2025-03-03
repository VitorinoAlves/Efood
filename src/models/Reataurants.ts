class Restaurants{
    id: number
    name: string
    description: string
    rate: string
    photo: string
    tags: string[]

    constructor(id: number,
        name: string,
        description: string,
        rate: string,
        photo: string,
        tags: string[]
    ){
        this.id = id;
        this.name = name;
        this.description = description
        this.rate = rate;
        this.photo = photo;
        this.tags = tags
    }
}

export default Restaurants;