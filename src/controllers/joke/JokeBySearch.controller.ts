import { Request, Response } from 'express';
import { jokeBySearchService } from '../../services/joke/JokeBySearch.service';

export const jokeBySearchController = async (req: Request, res: Response) => {
  try {
    const findJokes = await jokeBySearchService(req.query.term?.toString());
    res.send(findJokes);
  } catch (err) {
    res.status(500).send(err);
  }
};
