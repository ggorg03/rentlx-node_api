import fs from "fs";
import { parse as csvParse } from "csv-parse";

import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

interface ICreateRequest {
  name: string;
  description: string;
}

class CategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async list(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }

  // eslint-disable-next-line prettier/prettier
  public async createCategory({ name, description }: ICreateRequest): Promise<void> {
    const category = await this.categoriesRepository.findByName(name);

    if (category) throw new Error("Category already exists!");

    this.categoriesRepository.create({ name, description });
  }

  public async importCategories(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.forEach(async (category) => {
      try {
        await this.createCategory(category);
      } catch (error) {
        // ignore error
      }
    });
  }

  private loadCategories(file: Express.Multer.File): Promise<ICreateRequest[]> {
    return new Promise((resolve, reject) => {
      const categories: ICreateRequest[] = [];

      const stream = fs.createReadStream(file.path);
      const parser = csvParse({
        delimiter: ",",
      });

      stream.pipe(parser);

      parser
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
}

export { CategoriesService };
