abstract class KlasaAbstrakcyjna {
    public abstract ZrobCos(): void;
    public abstract JakasInnaMetoda(): void;

    public MetodaSzablonowa(): void {
        this.ZrobCos();
        this.JakasInnaMetoda();
        console.log("");
    }
}

class SpecyficznaKlasaA extends KlasaAbstrakcyjna {
    public ZrobCos(): void {
        console.log("SpecyficznaKlasaA.ZrobCos()");
    }
    public JakasInnaMetoda(): void {
        console.log("SpecyficznaKlasaA.JakasInnaMetoda()");
    }
}

class SpecyficznaKlasaB extends KlasaAbstrakcyjna {
    public ZrobCos(): void
    {
        console.log("SpecyficznaKlasaB.ZrobCos()");
    }
    public JakasInnaMetoda(): void
    {
        console.log("SpecyficznaKlasaB.JakasInnaMetoda()");
    }
}

const aA: KlasaAbstrakcyjna = new SpecyficznaKlasaA();
aA.MetodaSzablonowa();

const aB: KlasaAbstrakcyjna = new SpecyficznaKlasaB();
aB.MetodaSzablonowa();