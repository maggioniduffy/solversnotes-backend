import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  app.enableCors({
    origin: ["https://solversnotes.vercel.app", "http://localhost:3000"], // Allow frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies if needed
  });
  await app.listen(port ?? 5000);

  logger.log(`Application running on port ${port}`);
}
bootstrap();
