import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class PlacaMiddleware implements NestMiddleware {
  validate(value: string): boolean {
    const regexMercosulPattern = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

    if (!regexMercosulPattern.test(value)) {
      return false;
    }
    return true;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { placa } = req.body;
    if (placa) {
      if (this.validate(placa)) {
        next();
      } else {
        return res.status(400).json({ message: 'Invalid placa' });
      }
    } else {
      next();
    }
  }
}
