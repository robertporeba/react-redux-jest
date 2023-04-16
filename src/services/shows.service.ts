import api from "../utils/axios";

export interface IShow {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
    };
  };
}

export interface ISearchShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: null;
  };
  webChannel: null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}

const getShows = (pageNumber: number) => {
  return api.get<IShow[]>(`/shows/${pageNumber}/episodes`).then((response) => {
    return Promise.resolve(response.data);
  });
};

const getSingleEpisode = (id: number) => {
  return api.get<IShow>(`/episodes/${id}`).then((response) => {
    return Promise.resolve(response.data);
  });
};

const getShowsBySearch = (searchString: string) => {
  return api
    .get<ISearchShow>(`/singlesearch/shows?q=${searchString}`)
    .then((response) => {
      return Promise.resolve(response.data);
    });
};

export { getShows, getSingleEpisode, getShowsBySearch };
