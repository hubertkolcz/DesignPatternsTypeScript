abstract class Folder {
    public abstract PobierzDane(): string;
}

class KonkretnyFolder extends Folder {
    private Dane: string;

    constructor() {
        super();
        console.log("KonkretnyFolder: Uruchomiony");
        this.Dane = "Bardzo ważne dane";
    }

    public PobierzDane(): string {
        return this.Dane;
    }
}

class Pelnomocnik extends Folder {
    private _konkretnyFolder: KonkretnyFolder;
    private _autoryzowany: boolean;
    private _haslo: string = "dobrehaslo";

    constructor(haslo: string) {
        super();
        if (this._haslo == haslo) {
            this._autoryzowany = true;
            console.log("Pelnomocnik: Uruchomony");
        }
    }

    public PobierzDane(): string{
        if (this._autoryzowany) {
            if (this._konkretnyFolder == null) {
                this._konkretnyFolder = new KonkretnyFolder();
            }
            return "Dane z pełnomocnika to " + this._konkretnyFolder.PobierzDane();
        } else {
            return "Pelnomocnik: Odmowa dostępu";
        }
    }

}

const pelnomocnik1: Pelnomocnik = new Pelnomocnik("zlehaslo");
console.log(pelnomocnik1.PobierzDane());

const pelnomocnik2: Pelnomocnik = new Pelnomocnik("dobrehaslo");
console.log(pelnomocnik2.PobierzDane());