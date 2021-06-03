class Bank{
    public PosiadaWystarczajaceOszczednosci(klient: Klient, wartoscZayptaniaKredytowego: number): boolean{
        console.log("Sprawdzanie banku dla " + klient.Imie);
        return true;
    }
}

class Kredyt{
    public PosiadaDobraHistorieKredytowa(klient: Klient): boolean{
        console.log("Sprawdzanie historii kredytowej dla " + klient.Imie);
        return true;
    }
}

class Pozyczka{
    public NiePosiadaNieOplaconychPozyczek(klient: Klient): boolean{
        console.log("Sprawdzanie historii pożyczek dla " + klient.Imie);
        return true;
    }
}

class Klient{
    private _imie: string;

    constructor(imie: string){
        this._imie = imie;
    }

    get Imie(){ 
        return this._imie; 
    }
}

class Hipoteka{
    private _bank: Bank = new Bank();
    private _pozyczka: Pozyczka = new Pozyczka();
    private _kredyt: Kredyt = new Kredyt();

    public CzyKwalifikujeSie(klient: Klient, wartoscZayptaniaKredytowego: number): boolean{
        console.log(`${klient.Imie} wysłał zapytanie o kredyt hipoteczny o wartosci ${wartoscZayptaniaKredytowego}\n`);

        let kwalifikujeSie: boolean = true;

        if (!this._bank.PosiadaWystarczajaceOszczednosci(klient, wartoscZayptaniaKredytowego))
        {
            kwalifikujeSie = false;
        }
        else if (!this._pozyczka.NiePosiadaNieOplaconychPozyczek(klient))
        {
            kwalifikujeSie = false;
        }
        else if (!this._kredyt.PosiadaDobraHistorieKredytowa(klient))
        {
            kwalifikujeSie = false;
        }

        return kwalifikujeSie;
    }
}

const hipoteka: Hipoteka = new Hipoteka();

// Sprawdzanie czy klient kwalifikuje się
const klient: Klient = new Klient("Jan Drążkowski");
const kwalifikujeSie: boolean = hipoteka.CzyKwalifikujeSie(klient, 125000);

console.log("\n" + klient.Imie + " zakwalifikował się w systemie jako " + (kwalifikujeSie ? "Zakceptowany" : "Odrzucony"));