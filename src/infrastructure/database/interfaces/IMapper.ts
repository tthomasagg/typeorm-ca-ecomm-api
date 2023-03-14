export interface IMapper<Domain, Other> {
    toDomain: (data: Other) => Domain | null
    fromDomain: (data: Domain) => Other | null
}