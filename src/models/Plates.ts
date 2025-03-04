
class Plates {
    id: number
    name: string
    description: string
    photo: string

    constructor(id: number,
        name: string,
        description: string,
        photo: string
    ){
        this.id = id;
        this.name = name;
        this.description = description
        this.photo = photo;
    }
}

export default Plates;