import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';


@Controller('profiles')
export class ProfilesController {




@Get('id') 
findOne(@Query('id') id: string) {
  return [{id: id, name: 'John Doe'}];
}



@Post('create') 
create(@Body() profile: CreateProfileDto) {
  return{ 
 name: profile.name, age: profile.age,
 email: profile.email
  };
}
}
