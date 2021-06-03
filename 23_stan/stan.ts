class KontekstStanu {
    private stan: Stan;

    constructor(stan: Stan) {
        this.zmianaStanu(stan);
    }

    public zmianaStanu(stan: Stan): void {
        console.log(`KontekstStanu: Zmiana na ${(<any>stan).constructor.name}.`);
        this.stan = stan;
        this.stan.ustawKontekst(this);
    }

    public request1(): void {
        this.stan.obsluga1();
    }

    public request2(): void {
        this.stan.obsluga2();
    }
}

abstract class Stan {
    protected kontekst: KontekstStanu;

    public ustawKontekst(kontekst: KontekstStanu) {
        this.kontekst = kontekst;
    }

    public abstract obsluga1(): void;

    public abstract obsluga2(): void;
}

class StanA extends Stan {
    public obsluga1(): void {
        console.log('StanA obsluguje request 1.');
        console.log('StanA chce zmienić stan kontekstu.');
        this.kontekst.zmianaStanu(new StanB());
    }

    public obsluga2(): void {
        console.log('StanA obsluguje request 2.');
    }
}

class StanB extends Stan {
    public obsluga1(): void {
        console.log('StanB obsługuje request 1.');
    }

    public obsluga2(): void {
        console.log('StanB obsługuje request 2.');
        console.log('StanB chce zmienić stan kontekstu.');
        this.kontekst.zmianaStanu(new StanA());
    }
}

const kontekst = new KontekstStanu(new StanA());
kontekst.request1();
kontekst.request2();