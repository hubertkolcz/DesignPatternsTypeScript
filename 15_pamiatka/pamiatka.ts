class Pamiatka {
    private _stan: string;

    constructor(stan: string) {
        this._stan = stan;
    }

    get Stan(): string {
        return this._stan;
    }
}

class Zarzadzajacy{
    private _pamiatka: Pamiatka;

    get Pamiatka(): Pamiatka {
        return this._pamiatka;
    }

    set Pamiatka(value) {
        this._pamiatka = value;
    }
}

class Inicjator {
    private _stan: string;

    get Stan(): string {
        return this._stan;
    }

    set Stan(value) {
        this._stan = value;
        console.log("Stan = " + this._stan);
    }

    public UtworzPamiatke(): Pamiatka {
        return (new Pamiatka(this._stan));
    }

    public UstawPamiatke(pamiatka: Pamiatka): void {
        console.log("Przywracanie stanu...");
        this.Stan = pamiatka.Stan;
    }
}

const i: Inicjator = new Inicjator();
i.Stan = "Włącz";

const z: Zarzadzajacy = new Zarzadzajacy();
z.Pamiatka = i.UtworzPamiatke();

i.Stan = "Wyłącz";

i.UstawPamiatke(z.Pamiatka);