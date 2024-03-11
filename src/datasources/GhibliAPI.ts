import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, GhibliFilmModel, GhibliPeopleModel, TrackModel } from "../models.js";

export class GhibliAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/";

  getFilms() {
    return this.get<GhibliFilmModel[]>('films')
  }

  getPeople() {
    return this.get<GhibliPeopleModel[]>('people')
  }
}