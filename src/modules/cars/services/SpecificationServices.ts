import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../repositories/ISpecificationRepository";

class SpecificationServices {
  constructor(private specificationRepository: ISpecificationRepository) {}

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = this.specificationRepository.findByName(name);

    if (specification) throw new Error("Specification already exists!");

    this.specificationRepository.create({ name, description });
  }
}

export { SpecificationServices };
