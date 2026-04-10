import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EntityNotFoundExceptionInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    return next.handle().pipe(
      catchError((error: unknown) => {
        if (this.isEntityNotFoundError(error)) {
          return throwError(() => new NotFoundException('Entity not found'));
        }

        return throwError(() => error);
      }),
    );
  }

  private isEntityNotFoundError(error: unknown): boolean {
    return error instanceof Error && error.name === 'EntityNotFoundError';
  }
}
