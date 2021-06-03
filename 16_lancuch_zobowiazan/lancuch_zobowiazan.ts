class Faktura {
    public Numer: number;
    public Wartosc: number;
    public Cel: string;

    constructor(numer: number, wartosc: number, cel: string)
    {
        this.Numer = numer;
        this.Wartosc = wartosc;
        this.Cel = cel;
    }
}

abstract class Przelozony {
    protected przelozony: Przelozony;

    public UstawPrzelozonego(przelozony: Przelozony): void {
        this.przelozony = przelozony;
    }

    public abstract RozpatrzFakture(faktura: Faktura): void;
}

class Menager extends Przelozony {
    public RozpatrzFakture(faktura: Faktura): void {
        if (faktura.Wartosc < 10000.0) {
            console.log(`Menager zaakceptowano fakture o numerze ${faktura.Numer}`);
        } else if (this.przelozony != null) {
            this.przelozony.RozpatrzFakture(faktura);
        }
    }
}

class Kierownik extends Przelozony {
    public RozpatrzFakture(faktura: Faktura): void{
        if (faktura.Wartosc < 20000.0) {
            console.log(`Kierownik zaakceptowano fakture o numerze ${faktura.Numer}`);
        } else if (this.przelozony != null) {
            this.przelozony.RozpatrzFakture(faktura);
        }
    }
}

class Prezes extends Przelozony
{
    public RozpatrzFakture(faktura: Faktura): void{
        if (faktura.Wartosc < 30000.0) {
            console.log(`Prezes zaakceptowano fakture o numerze ${faktura.Numer}`);
        } else {
            console.log(`Faktura o numerze ${faktura.Numer} wymaga konsultacji!`);
        }
    }
}

// Ustaw łańcuch odpowiedzialnosci
const marcin: Przelozony = new Menager();
const luiza: Przelozony = new Kierownik();
const marek: Przelozony = new Prezes();

marcin.UstawPrzelozonego(luiza);
luiza.UstawPrzelozonego(marek);

// Wygeneruj i rozpatrz faktury
let p: Faktura = new Faktura(1021, 5050.00, `Delegacja`);
marcin.RozpatrzFakture(p);

p = new Faktura(1022, 11820.00, `Impreza świąteczna`);
marcin.RozpatrzFakture(p);

p = new Faktura(1023, 35733.00, `System analityczny`);
marcin.RozpatrzFakture(p);
