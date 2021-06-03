class Kontekst {
}

interface WyrazenieAbstrakcyjne {
    Interpretuj(kontekst: Kontekst): void;
}

class WyrazenieTerminalne implements WyrazenieAbstrakcyjne
{
    public Interpretuj(kontekst: Kontekst): void {
        console.log("Wywołano WyrazenieTerminalne.Interpretuj()");
    }
}

class WyrazenieNieterminalne implements WyrazenieAbstrakcyjne
{
    public Interpretuj(kontekst: Kontekst): void {
        console.log("Wywołano WyrazenieNieterminalne.Interpretuj()");
    }
}

const kontekst: Kontekst = new Kontekst();
const wyrazenia: Array<WyrazenieAbstrakcyjne> = new Array();

wyrazenia.push(new WyrazenieTerminalne());
wyrazenia.push(new WyrazenieNieterminalne());
wyrazenia.push(new WyrazenieTerminalne());
wyrazenia.push(new WyrazenieTerminalne());

wyrazenia.forEach (wyrazenie => wyrazenie.Interpretuj(kontekst));