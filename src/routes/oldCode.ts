// export type props = {
//     MovieId: string;
// };

// export type CurrentData = {
//   details: MovieDetailsType
//   people: CurrentMoviePeople
// }

// //MovieDetailsType
// export interface MovieDetailsType {
//     adult:                 boolean;
//     backdrop_path:         string;
//     belongs_to_collection: BelongsToCollection;
//     budget:                number;
//     genres:                Genre[];
//     homepage:              string;
//     id:                    number;
//     imdb_id:               string;
//     original_language:     string;
//     original_title:        string;
//     overview:              string;
//     popularity:            number;
//     poster_path:           string;
//     production_companies:  ProductionCompany[];
//     production_countries:  any//ProductionCountry[]; //temporary solution, to be fixed
//     release_date:          Date;
//     revenue:               number;
//     runtime:               number;
//     spoken_languages:      any //SpokenLanguage[]; //temporary solution, to be fixed
//     status:                string;
//     tagline:               string;
//     title:                 string;
//     video:                 boolean;
//     vote_average:          number;
//     vote_count:            number;
// }

// export interface BelongsToCollection {
//     id:            number;
//     name:          string;
//     poster_path:   string;
//     backdrop_path: string;
// }

// export interface Genre {
//     id:   number;
//     name: string;
// }

// export interface ProductionCompany {
//     id:             number;
// }

// //CAST
// export interface CurrentMoviePeople {
//     id:   number;
//     cast: Cast[];
//     crew: Cast[];
// }

// //look in CurrentMovieCast.cast for someone with role "director"
// //look in CurrentMovieCast.cast for someone with role "writer"


// export interface Cast {
//     adult:                boolean;
//     gender:               number;
//     id:                   number;
//     known_for_department: Department;
//     name:                 string;
//     original_name:        string;
//     popularity:           number;
//     profile_path:         null | string;
//     cast_id?:             number;
//     character?:           string;
//     credit_id:            string;
//     order?:               number;
//     department?:          Department;
//     job?:                 string;
// }

// export enum Department {
//     Acting = "Acting",
//     Art = "Art",
//     Camera = "Camera",
//     Crew = "Crew",
//     Directing = "Directing",
//     Editing = "Editing",
//     Production = "Production",
//     Sound = "Sound",
//     VisualEffects = "Visual Effects",
//     Writing = "Writing",
// }



// let { movieId } = useParams(); //what is this?
// const currentData = useLoaderData() as CurrentData;

// function find(job: string): string {
//   //we are looking through an array
//   //currentData.people.cast is an array of objects
//   let Name = ""
//   for (const element of currentData.people.crew) {
//     console.log("line 54, element" + element)
//     //now we are looking in every object (element <-> current Object)

//       if (element.job && element.job == job) {
//         Name = element.department
//         console.log("Line 58 : Name = " + Name)

//       return Name
//     }
//   }
//   Name = Name
//   console.log("line 64 , Name" + Name)
//   return Name
// }