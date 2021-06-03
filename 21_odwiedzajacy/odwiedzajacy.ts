interface ElementGeneral {
    Akceptuj(odwiedzajacy: Odwiedzajacy): void;
}

class SpecyficznyElement implements ElementGeneral {
    public Akceptuj(odwiedzajacy: Odwiedzajacy): void {
        odwiedzajacy.OdwiedzSpecyficznyElement(this);
    }

    public ZrobCos(): string {
      return 'SpecyficznyElement';
    }
}

class InnySpecyficznyElement implements ElementGeneral {
    public Akceptuj(odwiedzajacy: Odwiedzajacy): void {
        odwiedzajacy.OdwiedzInnySpecyficznyElement(this);
    }

    public ZrobCos(): string {
      return 'InnySpecyficznyElement';
    }
}

interface Odwiedzajacy
{
    OdwiedzSpecyficznyElement(specyficznyElement: SpecyficznyElement): void;
    OdwiedzInnySpecyficznyElement(innySpecyficznyElement: InnySpecyficznyElement): void;
}

class SpecyficznyOdwiedzajacy implements Odwiedzajacy
{
    public OdwiedzSpecyficznyElement(specyficznyElement: SpecyficznyElement): void {
        console.log(`${specyficznyElement.ZrobCos()} odwiedzony przez SpecyficznyOdwiedzajacy`);
    }

    public OdwiedzInnySpecyficznyElement(innySpecyficznyElement: InnySpecyficznyElement): void {
      console.log(`${innySpecyficznyElement.ZrobCos()} odwiedzony przez SpecyficznyOdwiedzajacy`);
    }
}

class InnySpecyficznyOdwiedzajacy implements Odwiedzajacy {
    public OdwiedzSpecyficznyElement(specyficznyElement: SpecyficznyElement): void {
      console.log(`${specyficznyElement.ZrobCos()} odwiedzony przez InnySpecyficznyOdwiedzajacy`);
    }

    public OdwiedzInnySpecyficznyElement(innySpecyficznyElement: InnySpecyficznyElement ): void {
      console.log(`${innySpecyficznyElement.ZrobCos()} odwiedzony przez InnySpecyficznyOdwiedzajacy`);
    }
}

class Struktura {
    private elementy: Array<ElementGeneral> = new Array<ElementGeneral>();

    public Dolacz(element: ElementGeneral): void {
        this.elementy.push(element);
    }

    public Odlacz(element: ElementGeneral): void {
        this.elementy = this.elementy.filter(item=>item !== element);
    }

    public Akceptuj(odwiedzajacy: Odwiedzajacy): void {
      this.elementy.forEach(element => element.Akceptuj(odwiedzajacy));
    }
}

const o: Struktura = new Struktura();
o.Dolacz(new SpecyficznyElement());
o.Dolacz(new InnySpecyficznyElement());

const v1: SpecyficznyOdwiedzajacy = new SpecyficznyOdwiedzajacy();
const v2: InnySpecyficznyOdwiedzajacy = new InnySpecyficznyOdwiedzajacy();

o.Akceptuj(v1);
o.Akceptuj(v2);