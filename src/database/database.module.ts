import { Module } from "@nestjs/common";
import { UserProvider } from "./providers/migrations.provider";
const providers = [
    ...UserProvider ];
@Module({
providers:providers,
exports:providers
})
export class DatabaseModule{};