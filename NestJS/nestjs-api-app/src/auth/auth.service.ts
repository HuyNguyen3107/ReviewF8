import { ForbiddenException, Injectable } from "@nestjs/common";
import {User, Note} from '@prisma/client'
import { PrismaService } from "../prisma/prisma.service";
import { AuthDTO } from "./dto";
import * as argon from 'argon2';
import { JwtService } from "@nestjs/jwt";

@Injectable({})

export class AuthService {
    constructor(private prismaService: PrismaService,
        private jwtService: JwtService
    ) {

    }
    async register(authDTO: AuthDTO) {    
        const hassedPassword = await argon.hash(authDTO.password);
        try {
            const user = await this.prismaService.user.create({
                data: {
                    email: authDTO.email,
                    hashedPassword: hassedPassword,
                    firstName: 'John',
                    lastName: 'Doe',
                },
                select: {
                    id: true,
                    email: true,
                    createdAt: true,
                }   
            });
            return await this.signJwtToken(user.id, user.email); 
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ForbiddenException('Email already exists');
            }

        }
    }

    async login(authDTO: AuthDTO) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: authDTO.email
            }
        });
        if (!user) {
            throw new ForbiddenException('Invalid credentials');
        }
        const isPasswordValid = await argon.verify(user.hashedPassword, authDTO.password);
        if (!isPasswordValid) {
            throw new ForbiddenException('Invalid credentials');
        }
        delete user.hashedPassword;
        return await this.signJwtToken(user.id, user.email);
    }

     async signJwtToken(userId: number, email: string): Promise<{
        accessToken: string
     }> {
        const payload = { sub: userId, email: email };
        const jwtString = await this.jwtService.signAsync(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '10m'
        });
        return { accessToken: jwtString};
    }
}