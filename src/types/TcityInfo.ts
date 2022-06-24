export type TCityInfo = {
    name: string;
    main: {
        feels_like: number;
        temp: number;
        temp_max: number;
        temp_min: number;
        pressure: number;
        humidity: number;
    }
    sys: {
        sunrise: number;
        sunset: number;
    }
    wind: {
        deg: number;
        speed: number;
    }
}