import { Module } from '@nestjs/common';
const repositories=[];
@Module({
    imports:repositories,
    exports:repositories
})
export class RespositoryModule {};