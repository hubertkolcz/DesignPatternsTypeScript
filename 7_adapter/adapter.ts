abstract class Sensor {
    private temperatura: number;
    public GetTemperatura(): number {
        return this.temperatura;
    };
}

class FahrenheitSensor {
    private temperatura : number = 99.4;

    public GetTemperatura(): number{
        return this.temperatura;
    }
}

class Adapter extends Sensor {
    private fs: FahrenheitSensor;

    constructor(fs: FahrenheitSensor) {
        super();
        this.fs = fs;
    }


    public GetTemperatura(): number {
        return (this.fs.GetTemperatura() - 32.0) * 5.0 / 9.0;
    }
}


const celsjusz = new Adapter(new FahrenheitSensor());

console.log(`Fahrenheit Sensor pokazuje temperature w Celsjuszach: ${celsjusz.GetTemperatura()} °C`);