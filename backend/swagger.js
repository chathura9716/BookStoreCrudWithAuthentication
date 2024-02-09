const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const express = require("express");
const router = express.Router();

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Your API Documentation",
    version: "1.0.0",
    description: "Documentation for your APIs",
  },
  servers: [
    {
      url: "http://localhost:1000/api/v1",
      description: "Development server",
    },
  ],
};
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to the API routes files
};
const swaggerSpec = swaggerJSDoc(options);

router.use("/api-docs", swaggerUI.serve);
router.get("/api-docs", swaggerUI.setup(swaggerSpec));

module.exports = router;
