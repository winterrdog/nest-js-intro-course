import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwaggerDocs(app: INestApplication<any>) {
    // setup config
    const swaggerDocsConfig = new DocumentBuilder()
        .setTitle("nestjs-intro-api")
        .setDescription("An intro dive into creating nest apis with docs")
        .setVersion("1.0.0")
        .build();

    // tie config to app
    const docs = SwaggerModule.createDocument(app, swaggerDocsConfig);

    // set docs endpoint
    SwaggerModule.setup("/api/docs", app, docs);
}
