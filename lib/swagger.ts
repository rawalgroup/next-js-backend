import { createSwaggerSpec } from "next-swagger-doc";

// Import the necessary modules for Swagger UI
// import "swagger-ui-themes/themes/3.x/theme-material.css";
// import "swagger-ui-themes/themes/3.x/theme-monokai.css";
// import "swagger-ui-react/swagger-ui.css";
// import "swagger-ui-react/swagger-ui-bundle.js";
// import "server-only";

export const getApiDocs = async () => {
  // Configure Swagger documentation
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
          // OAuth2: {
          //   type: "oauth2",
          //   flows: {
          //     authorizationCode: {
          //       authorizationUrl: "https://example.com/oauth/authorize",
          //       tokenUrl: "https://example.com/oauth/token",
          //       scopes: {
          //         read: "Grants read access",
          //         write: "Grants write access",
          //       },
          //     },
          //   },
          // },
        },
      },
      security: [],
    },
  });

  return spec;
};
