class User {
    protected constructor() {}

    private static _user: User;

    public static getUser() {
        if (!User._user) {
            User._user = new User();
        }

        return User._user;
    }

    private _nick: string;
    private _username: string;
    private _surname: string;
    private _age: number;
    private _token: string;

    public get nick() { return this._nick }
    public get username() { return this._username }
    public get surname() { return this._surname }
    public get age() { return this._age }
    public get token() { return this._token }

    public login = (nick: string, username: string, surname: string, age: number, token: string) => {
        this._nick = nick;
        this._username = username;
        this._surname = surname;
        this._age = age;
        this._token = token;
    }
}

const userOne = User.getUser();
const userTwo = User.getUser();

userOne.login("Janko", "Jan", "Kowalski", 19, "aa1");

console.log(userOne.nick);
console.log(userTwo.nick);