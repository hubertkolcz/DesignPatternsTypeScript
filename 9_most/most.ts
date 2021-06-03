abstract class Implementacja{
    public abstract MetodaImplementacji(): void;
}

class Abstrakcja{
    protected implementacja: Implementacja;

    set Implementacja(value: Implementacja){
        this.implementacja = value;
    }

    public MetodaImplementacji(): void{
        this.implementacja.MetodaImplementacji();
    }
}

class AbstrakcjaPochodna extends Abstrakcja{
    public MetodaImplementacji(): void{
        this.implementacja.MetodaImplementacji();
    }
}

class SpecyficznaImplementacja extends Implementacja{
    public MetodaImplementacji(): void {
        console.log("SpecyficznaImplementacja MetodaImplementacji");
    }
}

class JakasInnaImplementacja extends Implementacja{
    public MetodaImplementacji(): void {
        console.log("JakasInnaImplementacja MetodaImplementacji");
    }
}

const ab: Abstrakcja = new AbstrakcjaPochodna();

ab.Implementacja = new SpecyficznaImplementacja();
ab.MetodaImplementacji();

ab.Implementacja = new JakasInnaImplementacja();
ab.MetodaImplementacji();