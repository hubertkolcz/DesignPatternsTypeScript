abstract class Kreator {
    public abstract matodaWytworcza(): Produkt;

    public jakiesZadanie(): string {
        const produkt = this.matodaWytworcza();
        return `Kreator: Ten sam kod Kreatora pracowal wlasnie z ${produkt.zadanie()}`;
    }
}

class KreatorA extends Kreator {
    public matodaWytworcza(): Produkt {
        return new ProduktA();
    }
}

class KreatorB extends Kreator {
    public matodaWytworcza(): Produkt {
        return new ProduktB();
    }
}

interface Produkt {
    zadanie(): string;
}

class ProduktA implements Produkt {
    public zadanie(): string {
        return '{Wynik Produktu A}';
    }
}

class ProduktB implements Produkt {
    public zadanie(): string {
        return '{Wynik Produktu B}';
    }
}

function clientCode(kreator: Kreator) {
    console.log('Klient: Nie znam klasy Kreatora, ale ciagle dzialam');
    console.log(kreator.jakiesZadanie());
}

console.log('App: Uruchamiam z Kreatorem A.');
clientCode(new KreatorA());
console.log('');

console.log('App: Uruchamiam z Kreatorem B.');
clientCode(new KreatorB());