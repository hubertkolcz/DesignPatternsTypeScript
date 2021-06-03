abstract class ElementKompozytu {
    protected nazwa: string;

    constructor(nazwa: string) {
        this.nazwa = nazwa;
    }

    public abstract Dodaj(c: ElementKompozytu): void;
    public abstract Usun(c: ElementKompozytu): void;
    public abstract Pokaz(poziom: number): void;
}

class Kompozyt extends ElementKompozytu {
    private _dzieci: Array<ElementKompozytu>  = new Array<ElementKompozytu>();

    constructor(nazwa: string) {
        super(nazwa);
    }

    public Dodaj(element: ElementKompozytu): void {
        this._dzieci.push(element);
    }

    public Usun(element: ElementKompozytu): void {
        this._dzieci.filter(item=>item !== element);
    }

    public Pokaz(poziom: number): void {
        console.log('-'.repeat(poziom) + this.nazwa);
        this._dzieci.forEach(element => element.Pokaz(poziom + 2));
    }
}

class Lisc extends ElementKompozytu {
    constructor(nazwa: string) {
        super(nazwa);
    }

    public Dodaj(c: ElementKompozytu): void {
        console.log("Nie można dodać do liscia");
    }

    public Usun(c: ElementKompozytu): void {
        console.log("Nie można usunąć z liścia");
    }

    public Pokaz(poziom: number): void {
        console.log('-'.repeat(poziom) + this.nazwa);
    }
}

let root: Kompozyt = new Kompozyt("root");
root.Dodaj(new Lisc("Lisc A"));
root.Dodaj(new Lisc("Lisc B"));

let comp: Kompozyt = new Kompozyt("Kompozyt X");
comp.Dodaj(new Lisc("Lisc XA"));
comp.Dodaj(new Lisc("Lisc XB"));

root.Dodaj(comp);
root.Dodaj(new Lisc("Lisc C"));

let leaf: Lisc = new Lisc("Lisc D");
root.Dodaj(leaf);
root.Usun(leaf);

root.Pokaz(1);

