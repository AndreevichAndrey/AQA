export interface IPlant {
    name: string;
    grow(): void;
    photosynthesis(): void;
}

export interface IFruit {
    produceFruit(): void;
}

export interface IAroma {
    smell(): void;
}
