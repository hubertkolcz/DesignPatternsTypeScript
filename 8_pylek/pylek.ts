class Pylek {
    private wspoldzielonyStan: any;

    constructor(wspoldzielonyStan: any) {
        this.wspoldzielonyStan = wspoldzielonyStan;
    }

    public operacja(stan): void {
        const s = JSON.stringify(this.wspoldzielonyStan);
        const u = JSON.stringify(stan);
        console.log(`Pylek: Wspoldzielone (${s}) i unikalne (${u}) stany.`);
    }
}
class FabrykaPylku {
    private pylki: {[klucz: string]: Pylek} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.pylki[this.getKey(state)] = new Pylek(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }
    public getFlyweight(wspoldzielonyStan: string[]): Pylek {
        const klucz = this.getKey(wspoldzielonyStan);

        if (!(klucz in this.pylki)) {
            console.log('FabrykaPylku: Nie mozna znalezc pylku, tworzenie nowego');
            this.pylki[klucz] = new Pylek(wspoldzielonyStan);
        } else {
            console.log('FabrykaPylku: Ponowne uzycie istniejacego pylku.');
        }

        return this.pylki[klucz];
    }

    public zwrocPylki(): void {
        const zlicz = Object.keys(this.pylki).length;
        console.log(`\nFlyweightFactory: Mam ${zlicz} pylki:`);
        for (const klucz in this.pylki) {
            console.log(klucz);
        }
    }
}

const fabryka = new FabrykaPylku([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
]);
fabryka.zwrocPylki();

function dodajSamochodDoBazy(
    ff: FabrykaPylku, platki: string, wlasciciel: string,
    marka: string, model: string, kolor: string,
) {
    console.log('\Klient: Dodanie samochodu do bazy.');
    const pylek = ff.getFlyweight([marka, model, kolor]);

    pylek.operacja([platki, wlasciciel]);
}

dodajSamochodDoBazy(fabryka, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

dodajSamochodDoBazy(fabryka, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

fabryka.zwrocPylki();