import { CanActivate, ExecutionContext, Injectable, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log('>>>>>>>>>>>1111111111111111');
    return false;
  }

  // async _canActivate(context: ExecutionContext): Promise<boolean> {
  //   const request = context.switchToHttp().getRequest<Request>();
  //   const { authorization } = request.headers;
  //   const user = await this.authService.authorize(
  //     authorization,
  //     request.header(CurrentUser.LOCALE_HEADER),
  //     request.header(CurrentUser.ORG_ROLES_HEADER) ? JSON.parse(request.header(CurrentUser.ORG_ROLES_HEADER)) : null,
  //     request.header(CurrentUser.REQ_ID_HEADER)
  //   );

  //   // @ts-ignore
  //   request.user = user;

  //   return !!user;
  // }
}

export const PreAuthenticate = () => UseGuards(AuthGuard);
