import { NestFactory } from "@nestjs/core";
import { setupSwaggerDocs } from "./app.docs-setup";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // adding validation to app
    app.useGlobalPipes(new ValidationPipe());

    setupSwaggerDocs(app);

    await app.listen(3000);
}
bootstrap();
