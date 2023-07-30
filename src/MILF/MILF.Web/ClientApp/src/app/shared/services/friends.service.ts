import { friend } from "../models/friend.model";

export class friendsService {
    constructor() { }

    getFriends(): friend[] {
        // bogus data, use api in the future
        let friends: Array<friend> = [
            { name: 'Jim', onlineStatus: true },
            { name: 'Bob', onlineStatus: true },
            { name: 'Andrew', onlineStatus: true },
            { name: 'Milo', onlineStatus: true },
            { name: 'Matt', onlineStatus: false },
            { name: 'Brandon', onlineStatus: false },
            { name: 'Anthony', onlineStatus: false }
        ];

        return friends;
    }
}