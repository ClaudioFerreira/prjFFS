export class Service {

    constructor(_id = '', title = '', description = '')
    {
        this._id = _id;
        this.title = title;
        this.description = description;
    }

    _id: string;
    title: string;
    description: string;
}
