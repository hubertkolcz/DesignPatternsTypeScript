interface Inwestor
{
    Aktualizuj(akcja: PapierWartosciowy): void;
}

abstract class PapierWartosciowy
{
    private _symbol: string;
    private _cena: number;
    private _inwestorzy: Array<Inwestor>  = new Array<Inwestor>();

    public PapierWartosciowy(symbol: string, cena: number) {
        this._symbol = symbol;
        this._cena = cena;
    }

    public Dolacz(inwestor: Inwestor): void {
        this._inwestorzy.push(inwestor);
    }

    public Odlacz(inwestor: Inwestor): void
    {
        this._inwestorzy.filter(item=>item !== inwestor);
    }

    public Powiadom(): void {
        this._inwestorzy.forEach (inwestor => inwestor.Aktualizuj(this));
    }

    get Cena(): number {
        return this._cena;
    }
    set Cena(value: number) {
        if (this._cena != value) {
            this._cena = value;
            this.Powiadom();
        }
    }

    get Symbol(): string {
        return this._symbol;
    }
    set Symbol(value: string) {
        this._symbol = value;
    }
}

class Amazon extends PapierWartosciowy
{
    constructor(symbol: string, cena: number) {
        super();
        this.Symbol = symbol;
        this.Cena = cena;
    }
}

class Inwestor implements Inwestor {
    private _imie: string;
    public papierWartosciowy: PapierWartosciowy;

    constructor(imie: string) {
        this._imie = imie;
    }

    public Aktualizuj(akcja: PapierWartosciowy): void {
        console.log(`Poinformowano ${this._imie} z ${akcja.Symbol}, zmiana wynosi: ${akcja.Cena}`);
    }
}

const amazon: Amazon = new Amazon("AWS", 340.00);
amazon.Dolacz(new Inwestor("Kazimierczyk"));
amazon.Dolacz(new Inwestor("Filipczyk"));

amazon.Cena = 220.50;
amazon.Cena = 312.50;
amazon.Cena = 450.50;
amazon.Cena = 340.50;
