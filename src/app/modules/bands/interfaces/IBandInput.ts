import { IMember } from "./IMember";

export interface IBandInput {
  name: string;
  origin: string;
  members: IMember[];
  website: string;
  genresIds: string[];
}
