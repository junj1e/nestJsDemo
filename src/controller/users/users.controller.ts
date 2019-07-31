import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Users } from '../../interface/users.interface';
import { UsersService } from '../../service/users/users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async findAll(): Promise<Users[]> {
		return await this.usersService.findAll();
	}

	@Get(':id')
	findOne(@Param() params): string {
		return `${params.id}返回所有成功`;
	}

	@Post()
	async createSingle(@Body() body) {
		return await this.usersService.create(body);
	}
}
