interface IteratorElementow<T> {
    aktualny(): T;
    nastepny(): T;
    klucz(): number;
    walidacja(): boolean;
    przewin(): void;
}

interface Agregator {
    getIterator(): IteratorElementow<string>;
}
class IteratorPoAlfabecie implements IteratorElementow<string> {
    private kolekcja: KolekcjaWyrazow;
    private pozycja: number = 0;
    private odwroc: boolean = false;

    constructor(kolekcja: KolekcjaWyrazow, odwroc: boolean = false) {
        this.kolekcja = kolekcja;
        this.odwroc = odwroc;

        if (odwroc) {
            this.pozycja = kolekcja.getCount() - 1;
        }
    }

    public przewin() {
        this.pozycja = this.odwroc ?
            this.kolekcja.getCount() - 1 :
            0;
    }

    public aktualny(): string {
        return this.kolekcja.getItems()[this.pozycja];
    }

    public klucz(): number {
        return this.pozycja;
    }

    public nastepny(): string {
        const item = this.kolekcja.getItems()[this.pozycja];
        this.pozycja += this.odwroc ? -1 : 1;
        return item;
    }

    public walidacja(): boolean {
        if (this.odwroc) {
            return this.pozycja >= 0;
        }

        return this.pozycja < this.kolekcja.getCount();
    }
}

class KolekcjaWyrazow implements Agregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): IteratorElementow<string> {
        return new IteratorPoAlfabecie(this);
    }

    public getReverseIterator(): IteratorElementow<string> {
        return new IteratorPoAlfabecie(this, true);
    }
}

const kolekcja = new KolekcjaWyrazow();
kolekcja.addItem('Pierwszy');
kolekcja.addItem('Drugi');
kolekcja.addItem('Trzeci');

const iterator = kolekcja.getIterator();

console.log('Straight traversal:');
while (iterator.walidacja()) {
    console.log(iterator.nastepny());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = kolekcja.getReverseIterator();
while (reverseIterator.walidacja()) {
    console.log(reverseIterator.nastepny());
}