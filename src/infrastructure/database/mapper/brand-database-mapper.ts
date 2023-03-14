import {IMapper} from "../interfaces/IMapper";
import {Brand} from "../../../domain/brand";
import {Brands} from "../entities";

export class BrandDatabaseMapper implements IMapper<Brand, Brands> {
    fromDomain(data: Brand): Brands {
        const brand = new Brands()
        brand.name = data.name
        return brand;
    }

    toDomain(data: Brands): Brand {
        return new Brand(data.id, data.name);
    }

}