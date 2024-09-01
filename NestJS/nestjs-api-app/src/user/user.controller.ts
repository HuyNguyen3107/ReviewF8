import { Controller, Get, Req, UseGuards } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { MyJwtGuard } from "../auth/guard";
import { GetUser } from "../auth/decorator";
import { User } from "@prisma/client";

@Controller('user')
export class UserController {

    @UseGuards(MyJwtGuard)
    @Get("me")
    me(@GetUser() user: User) {
        return user;
    }
}