import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ChassiMiddleware implements NestMiddleware {
  validate(value: string): boolean {
    value = value.replace(/\s|-/g, '');

    const regexChassi = /^[a-hj-npr-zA-HJ-NPR-Z0-9]{13}[0-9]{4}$/;

    if (!regexChassi.test(value)) {
      return false;
    }
    return true;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { chassi } = req.body;
    if (chassi) {
      if (this.validate(chassi)) {
        next();
      } else {
        return res.status(400).json({ message: 'Invalid chassi' });
      }
    } else if (!chassi) {
      next();
    }
  }
}
