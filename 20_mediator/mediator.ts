interface Mediator {
    Wyslij(wiadomosc: string, wspolpracownik: ObiektWspolpracownika): void;
}

class ObiektWspolpracownika {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public ObiektWspolpracownika(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class SpecyficznyObiekt1 extends ObiektWspolpracownika
{
    public Wyslij(wiadomosc: string): void {
        this.mediator.Wyslij(wiadomosc, this);
    }

    public Powiadom(wiadomosc: string): void {
        console.log("SpecyficznyObiekt1 dostaje wiadomość: " + wiadomosc);
    }
}

class SpecyficznyObiekt2 extends ObiektWspolpracownika
{
    public Wyslij(wiadomosc: string): void {
        this.mediator.Wyslij(wiadomosc, this);
    }

    public Powiadom(wiadomosc: string): void {
        console.log("SpecyficznyObiekt2 dostaje wiadomość: " + wiadomosc);
    }
}

class SpecyficznyMediator implements  Mediator
{
    private  _wspolpracownik1: SpecyficznyObiekt1;
    private  _wspolpracownik2: SpecyficznyObiekt2;

    public ObiektWspolpracownika1(value): SpecyficznyObiekt1 {
        this._wspolpracownik1 = value; 
        return this._wspolpracownik1;
    }

    public ObiektWspolpracownika2(value): SpecyficznyObiekt2 {
        this._wspolpracownik2 = value;
        return this._wspolpracownik2; 
    }

    public Wyslij(wiadomosc: string, wspolpracownik: ObiektWspolpracownika): void{
        if (wspolpracownik == this._wspolpracownik1) {
            this._wspolpracownik2.Powiadom(wiadomosc);
        } else {
            this._wspolpracownik1.Powiadom(wiadomosc);
        }
    }
}

const m: SpecyficznyMediator = new SpecyficznyMediator();

const k1: SpecyficznyObiekt1 = new SpecyficznyObiekt1(m);
const k2: SpecyficznyObiekt2 = new SpecyficznyObiekt2(m);

m.ObiektWspolpracownika1(k1);
m.ObiektWspolpracownika2(k2);

k1.Wyslij("Poproszę banana i jabłko");
k2.Wyslij("Niestety nie ma banana");
k1.Wyslij("W takim razie jabłko wystarczy");
k2.Wyslij("Proszę");
k1.Wyslij("Dziękuje");