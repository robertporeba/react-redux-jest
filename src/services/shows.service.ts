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

const getShows = (pageNumber: number) => {
  return api.get<IShow[]>(`/shows/${pageNumber}/episodes`).then((response) => {
    console.log(JSON.stringify(response.data));
    return Promise.resolve(response.data);
  });
};

const getSingleEpisode = (id: number) => {
  return api.get<IShow>(`/episodes/${id}`).then((response) => {
    console.log(JSON.stringify(response.data));
    return Promise.resolve(response.data);
  });
};

export { getShows, getSingleEpisode };
