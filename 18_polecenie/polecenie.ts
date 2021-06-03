abstract class Polecenie {
    protected odbiorca: Odbiorca;
    constructor(odbiorca: Odbiorca) {
        this.odbiorca = odbiorca;
    }

    public abstract Wykonaj(): void;
}

class SpecyficznePolecenie extends Polecenie {
    public SpecyficznePolecenie(odbiorca: Odbiorca) {
        // this.super();
    }

    public Wykonaj(): void {
        this.odbiorca.Uruchom();
    }
}

class Odbiorca {
    public Uruchom(): void {
        console.log("Wywołano Odbiorca.Uruchom()");
    }
}

class ObiektWywolujacy {
    private _polecenie: Polecenie;

    public UstawPolecenie(polecenie: Polecenie): void {
        this._polecenie = polecenie;
    }

    public WykonajPolecenie(): void {
        this._polecenie.Wykonaj();
    }
}

const odbiorca: Odbiorca = new Odbiorca();
const polecenie: Polecenie = new SpecyficznePolecenie(odbiorca);
const wywolujacy: ObiektWywolujacy = new ObiektWywolujacy();

wywolujacy.UstawPolecenie(polecenie);
wywolujacy.WykonajPolecenie();