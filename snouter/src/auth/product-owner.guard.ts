// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class ProductOwnerGuard implements CanActivate {
//   constructor(private jwtService: JwtService) {}

//   canActivate(context: ExecutionContext): boolean {
//     const request = context.switchToHttp().getRequest();
//     const product = request.params.id;
//     const user = this.jwtService.verify(
//       request.headers.authorization.split(' ')[1],
//     );

//     return user && product && user.id === product.sellerId;
//   }
// }
