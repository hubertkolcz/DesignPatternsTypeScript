class Kontekst {
    private Strategia: Strategia;

    constructor(Strategia: Strategia) {
        this.Strategia = Strategia;
    }

    public ustawStrategie(Strategia: Strategia) {
        this.Strategia = Strategia;
    }

    public wykonajZadanie(): void {
        console.log('Kontekst: Posortowanie danych używając odpowiedniej Strategii');
        const wynik = this.Strategia.wykonaj(['a', 'b', 'c', 'd', 'e']);
        console.log(wynik.join(','));
    }
}

interface Strategia {
    wykonaj(dane: string[]): string[];
}

class StrategiaA implements Strategia {
    public wykonaj(dane: string[]): string[] {
        return dane.sort();
    }
}

class StrategiaB implements Strategia {
    public wykonaj(dane: string[]): string[] {
        return dane.reverse();
    }
}

const kontekst = new Kontekst(new StrategiaA());
console.log('Klient: Strategia - normalne sortowanie');
kontekst.wykonajZadanie();

console.log('');

console.log('Klient: Strategia - sortowanie odwrotne');
kontekst.ustawStrategie(new StrategiaB());
kontekst.wykonajZadanie();