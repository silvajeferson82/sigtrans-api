import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class CarsMiddleware implements NestMiddleware {
  chassiValidate(value: string): boolean {
    value = value.replace(/\s|-/g, '');

    const regexChassi = /^[a-hj-npr-zA-HJ-NPR-Z0-9]{13}[0-9]{4}$/;

    if (!regexChassi.test(value)) {
      return false;
    }
    return true;
  }

  placaValidate(value: string): boolean {
    const regexMercosulPattern = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

    if (!regexMercosulPattern.test(value)) {
      return false;
    }
    return true;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { placa, chassi } = req.body;

    if (this.placaValidate(placa)) {
      if (this.chassiValidate(chassi)) {
        next();
      } else {
        return res.status(400).json({ message: 'Invalid chassi' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid placa' });
    }
  }
}
