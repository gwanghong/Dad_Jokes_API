import { Request, Response } from 'express';
import { jokeByTypeService } from '../../services/joke/JokeByType.service';

export const jokeByTypeController = async (req: Request, res: Response) => {
  try {
    const findJoke = await jokeByTypeService(req.params.type, Number(req.query.limit));
    res.send(findJoke);
  } catch (err) {
    res.status(500).send(err);
  }
};
