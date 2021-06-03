interface FabrykaAbstrakcyjna {
    stworzProduktA(): AbstrakcyjnyProduktA;

    stworzProduktB(): AbstrakcyjnyProduktB;
}

class Fabryka1 implements FabrykaAbstrakcyjna {
    public stworzProduktA(): AbstrakcyjnyProduktA {
        return new ProduktA1();
    }

    public stworzProduktB(): AbstrakcyjnyProduktB {
        return new ProduktB1();
    }
}

class Fabryka2 implements FabrykaAbstrakcyjna {
    public stworzProduktA(): AbstrakcyjnyProduktA {
        return new ProduktA2();
    }

    public stworzProduktB(): AbstrakcyjnyProduktB {
        return new ProduktB2();
    }
}

interface AbstrakcyjnyProduktA {
    zadanieProduktuA(): string;
}

class ProduktA1 implements AbstrakcyjnyProduktA {
    public zadanieProduktuA(): string {
        return 'Wynik Produktu A1';
    }
}

class ProduktA2 implements AbstrakcyjnyProduktA {
    public zadanieProduktuA(): string {
        return 'Wynik Produktu A2';
    }
}

interface AbstrakcyjnyProduktB {
    zadanieProduktuB(): string;

    inneZadanieProduktuB(kolaborant: AbstrakcyjnyProduktA): string;
}

class ProduktB1 implements AbstrakcyjnyProduktB {

    public zadanieProduktuB(): string {
        return 'Wynik Produktu B1';
    }

    public inneZadanieProduktuB(kolaborant: AbstrakcyjnyProduktA): string {
        const result = kolaborant.zadanieProduktuA();
        return `Wynik Produktu B1 kolaborującego z (${result})`;
    }
}

class ProduktB2 implements AbstrakcyjnyProduktB {

    public zadanieProduktuB(): string {
        return 'Wynik Produktu B2.';
    }

    public inneZadanieProduktuB(kolaborant: AbstrakcyjnyProduktA): string {
        const result = kolaborant.zadanieProduktuA();
        return `Wynik Produktu B2 kolaborującego z (${result})`;
    }
}

function klient(fabryka: FabrykaAbstrakcyjna) {
    const ProduktA = fabryka.stworzProduktA();
    const ProduktB = fabryka.stworzProduktB();

    console.log(ProduktB.zadanieProduktuB());
    console.log(ProduktB.inneZadanieProduktuB(ProduktA));
}

console.log('Klient: Testowanie kodu klienckiego z typem: Fabryka1');
klient(new Fabryka1());

console.log('');

console.log('Klient: Testowanie kodu klienckiego z typem: Fabryka2');
klient(new Fabryka2());