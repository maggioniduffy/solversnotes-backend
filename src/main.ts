import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  app.enableCors({
    origin: "https://solversnotes.vercel.app", // Allow only your frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Allow cookies if needed
  });

  app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Origin", "https://solversnotes.vercel.app");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
      res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
      res.header("Access-Control-Allow-Credentials", "true");
      return res.sendStatus(204);
    }
    next();
  });

  await app.listen(port ?? 5000);

  logger.log(`Application running on port ${port}`);
}
bootstrap();
