import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, GhibliFilmModel, GhibliPeopleModel } from "../models.js";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  async getFilms() {
    return await this.get<GhibliFilmModel[]>('films')
  }

  getPeople() {
    return this.get<GhibliPeopleModel[]>('people')
  }
}