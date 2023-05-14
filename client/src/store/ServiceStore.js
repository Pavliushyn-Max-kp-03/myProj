import { makeAutoObservable } from "mobx";

export default class ServiceStore {
    constructor() {
        this._types = [
            /* { id: 1, name: "Fridges" },
            { id: 2, name: "Smartphones" },
            { id: 3, name: "TV" },
            { id: 4, name: "Notepads" },*/
        ];
        this._brands = [
            /* { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "HP" },
            { id: 4, name: "Xiaomi" },*/
        ];
        this._services = [
            /*{
                id: 1,
                name: "Change battery",
                price: 21000,
                img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
            },
            {
                id: 2,
                name: "Change battery1",
                price: 21000,
                img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
            },
            {
                id: 3,
                name: "Change battery",
                price: 21000,
                img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
            },
            {
                id: 4,
                name: "Change battery",
                price: 21000,
                img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
            },
            {
                id: 5,
                name: "Change battery",
                price: 21000,
                img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
            },
            {
                id: 6,
                name: "Change battery",
                price: 21000,
                img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
            },*/
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setServices(services) {
        this._services = services;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get services() {
        return this._services;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
