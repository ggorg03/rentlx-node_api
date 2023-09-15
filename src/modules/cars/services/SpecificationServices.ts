import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../repositories/ISpecificationRepository";
import { Specification } from "../entities/Specification";

interface ICreateRequest {
  name: string;
  description: string;
}

@injectable()
class SpecificationServices {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository,
  ) {}

  async list(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();

    return specifications;
  }

  async create({ name, description }: ICreateRequest): Promise<void> {
    const specification = await this.specificationRepository.findByName(name);

    if (specification) throw new Error("Specification already exists!");

    this.specificationRepository.create({ name, description });
  }
}

export { SpecificationServices };
