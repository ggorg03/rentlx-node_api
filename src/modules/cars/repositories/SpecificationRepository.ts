import { Repository } from "typeorm";

import AppDataSource from "../../../database";
import { Specification } from "../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;
  private static INSTANCE: SpecificationRepository;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  // eslint-disable-next-line prettier/prettier
  public async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
  }

  public async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });

    return specification;
  }
}

export { SpecificationRepository };
