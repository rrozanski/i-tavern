import { Gender, HeroClass, Race } from '@/enums';

export interface Hero {
    id: number;
    name: string;
    gender: Gender;
    race: Race;
    class: HeroClass;
    abilities?: {
        dexterity: number;
        strength: number;
        wisdom: number;
    };
}
