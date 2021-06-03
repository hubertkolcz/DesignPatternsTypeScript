class Prototyp {
    public prymitywny: any;
    public komponent: object;
    public referencja: komponentReferencjaWsteczna;

    public klonuj(): this {
        const klonuj = Object.create(this);

        klonuj.komponent = Object.create(this.komponent);
        klonuj.referencja = {
            ...this.referencja,
            prototyp: { ...this },
        };

        return klonuj;
    }
}

class komponentReferencjaWsteczna {
    public prototyp;

    constructor(prototyp: Prototyp) {
        this.prototyp = prototyp;
    }
}

function klient() {
    const p1 = new Prototyp();
    p1.prymitywny = 245;
    p1.komponent = new Date();
    p1.referencja = new komponentReferencjaWsteczna(p1);

    const p2 = p1.klonuj();
    if (p1.prymitywny === p2.prymitywny) {
        console.log('Pole prymitywnych wartosci zostalo dodane do klonuj!');
    } else {
        console.log('Pole prymitywnych wartosci nie zostalo dodane!');
    }
    if (p1.komponent === p2.komponent) {
        console.log('Prosty komponent nie zostal skopiowany');
    } else {
        console.log('Prosty komponent zostal skopiowany');
    }

    if (p1.referencja === p2.referencja) {
        console.log('Komponent z referencja wsteczna nie zostal skopiowany');
    } else {
        console.log('Komponent z referencja wsteczna zostal skopiowany');
    }

    if (p1.referencja.prototyp === p2.referencja.prototyp) {
        console.log('Komponent z referencja wsteczna jest podlaczony do wyjsciowego obiektu');
    } else {
        console.log('Komponent z referencja wsteczna jest podlaczony do klonowania');
    }
}

klient();