export interface action {
  type: string;
  payload: any;
}

export interface rootState {
  characters: Character[] | undefined;
  comicsById: Comic[] | undefined;
  seriesById: Series[] | undefined;
  storiesById: Story[] | undefined;
  filterSearchBy: string | undefined;
}

/* Character types */
export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

export interface Url {
  type: string;
  url: string;
}
export interface Image {
  path: string;
  extension: string;
}
export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}
export interface ComicSummary {
  resourceURI: string;
  name: string;
}
export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}
export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}
export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}
export interface EventSummary {
  resourceURI: string;
  name: string;
}
export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}
export interface SeriesSummary {
  resourceURI: string;
  name: string;
}
/* Character types */

/* Comic types */
export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: null;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  price: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  character: CharacterList;
  stories: StoryList;
  events: EventList;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}
export interface Url {
  type: string;
  url: string;
}
export interface ComicDate {
  type: string;
  date: Date;
}
export interface ComicPrice {
  type: string;
  price: number;
}
export interface CreatorList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorSummary[];
}
export interface CreatorSummary {
  resourceURI: string;
  name: string;
  role: string;
}
export interface CharacterList {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
}
export interface CharacterSummary {
  resourceURI: string;
  name: string;
  role: string;
}

/* Comic types */

/* Series types */
export interface Series {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  next: SeriesSummary;
  previous: SeriesSummary;
}
/* Comic types */

/* Story types */
export interface Story {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: Image | null;
  comics: ComicList;
  series: SeriesList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  originalissue: ComicSummary;
}
/* Story types */
