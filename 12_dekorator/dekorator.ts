abstract class PrzedmiotBiblioteki
{
    private _liczbaKopii: number;
    get LiczbaKopii(): number {
        return this._liczbaKopii;
    }
    set LiczbaKopii(value: number) {
        this._liczbaKopii = value;
    }

    public abstract Pokaz(): void;
}

class Ksiazka extends PrzedmiotBiblioteki {
    private _autor: string;
    private _tytul: string;

    constructor(autor: string, tytul: string, liczbaKopii: number) {
        super();
        this._autor = autor;
        this._tytul = tytul;
        this.LiczbaKopii = liczbaKopii;
    }

    public Pokaz(): void
    {
        console.log(`\nKsiazka ------ `);
        console.log(` Autor: ${this._autor}`);
        console.log(` Tytul: ${this._tytul}`);
        console.log(` # Kopie: ${this.LiczbaKopii}`);
    }
}

class Film extends PrzedmiotBiblioteki {
    private _rezyser: string;
    private _tytul: string;
    private _czasTrwania: number;

    constructor(rezyser: string, tytul: string, liczbaKopii: number, czasTrwania: number) {
        super();
        this._rezyser = rezyser;
        this._tytul = tytul;
        this.LiczbaKopii = liczbaKopii;
        this._czasTrwania = czasTrwania;
    }

    public Pokaz(): void {
        console.log(`\nFilm ----- `);
        console.log(` Rezyser: $${this._rezyser}`);
        console.log(` Tytul: ${this._tytul}`);
        console.log(` # Kopie: ${this.LiczbaKopii}`);
        console.log(` Czas trwania: ${this._czasTrwania}\n`);
    }
}

abstract class Dekorator extends PrzedmiotBiblioteki
{
    protected przedmiotBiblioteki: PrzedmiotBiblioteki;

    constructor(przedmiotBiblioteki: PrzedmiotBiblioteki) {
        super();
        this.przedmiotBiblioteki = przedmiotBiblioteki;
    }

    public Pokaz(): void {
        this.przedmiotBiblioteki.Pokaz();
    }
}

class Wypozyczalny extends Dekorator
{
    protected czytelnicy: Array<string>  = new Array<string>();

    constructor(przedmiotBiblioteki: PrzedmiotBiblioteki) {
        super(przedmiotBiblioteki);
    }

    public WypozyczPrzedmiot(name: string): void {
        this.czytelnicy.push(name);
        this.przedmiotBiblioteki.LiczbaKopii--;
    }

    public ZwrocPrzedmiot(name: string): void {
        this.czytelnicy.filter(item=>item !== name);
        this.przedmiotBiblioteki.LiczbaKopii++;
    }

    public Pokaz(): void {
        super.Pokaz();
        this.czytelnicy.forEach(czytelnik => console.log(` czytelnik: ` + czytelnik));
    }
}

// Stwórz ksiazke
let ksiazka: Ksiazka = new Ksiazka(`Worley`, `Inside ASP.NET`, 10);
ksiazka.Pokaz();

// Stwórz film
let film: Film = new Film(`Spielberg`, `Jaws`, 23, 92);
film.Pokaz();

// Udekoruj film w funkcjonalność wypożyczania, potem wypozycz i pokaz
console.log(`\nDodawnie funkcjonalnosci wypozycznia do filmu:`);

let dostepnyFilm: Wypozyczalny = new Wypozyczalny(film);
dostepnyFilm.WypozyczPrzedmiot(`Czytelnik #1`);
dostepnyFilm.WypozyczPrzedmiot(`Czytelnik #2`);

dostepnyFilm.Pokaz();