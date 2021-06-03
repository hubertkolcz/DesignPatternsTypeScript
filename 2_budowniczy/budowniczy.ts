class Odtwarzacz{
    private _nazwa: string = "";
    public UstawNazwe(nazwa: string): void{
        this._nazwa = nazwa;
    }
    public Pokaz(): void {
        console.log("\n" + this._nazwa);
    }
}
abstract class BudowniczyOdtwarzaczy{
    public abstract ZbudujOdtwarzacz(): void;
    public abstract ZwrocOdtwarzacz(): Odtwarzacz;
}
class KreatorOdtwarzaczaFlash extends BudowniczyOdtwarzaczy{
    private _odtwarzacz: Odtwarzacz = new Odtwarzacz() ;
    public KreatorOdtwarzaczaFlash(){
        this._odtwarzacz = new Odtwarzacz();
    }
    public ZbudujOdtwarzacz(): void{
        this._odtwarzacz.UstawNazwe("Odtwarzacz Flash");
    }
    public ZwrocOdtwarzacz(): Odtwarzacz{
        return this._odtwarzacz;
    }
}
class KreatorOdtwarzaczaHTML extends BudowniczyOdtwarzaczy{
    private _odtwarzacz: Odtwarzacz = new Odtwarzacz();
    public KreatorOdtwarzaczaHTML(){        
        this._odtwarzacz = new Odtwarzacz();
    }
    public ZbudujOdtwarzacz(): void{        
        this._odtwarzacz.UstawNazwe("Odtwarzacz HTML");
    }
    public ZwrocOdtwarzacz(): Odtwarzacz{       
        return this._odtwarzacz;
    }
}
class Generator{
    public Skladaj(budowniczy: BudowniczyOdtwarzaczy): void{
        budowniczy.ZbudujOdtwarzacz();
    }
}

const kreatorOdtwarzaczaHTML: KreatorOdtwarzaczaHTML = new KreatorOdtwarzaczaHTML();
const kreatorOdtwarzaczaFlash: KreatorOdtwarzaczaFlash = new KreatorOdtwarzaczaFlash();
const generator: Generator = new Generator();
let odtwarzacz: Odtwarzacz;
generator.Skladaj(kreatorOdtwarzaczaHTML);
kreatorOdtwarzaczaHTML.ZwrocOdtwarzacz().Pokaz();
generator.Skladaj(kreatorOdtwarzaczaFlash);
kreatorOdtwarzaczaFlash.ZwrocOdtwarzacz().Pokaz();