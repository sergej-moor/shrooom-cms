const crypto = require("crypto");

export default ({ env }) => ({
  // ...
  "import-export-entries": {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        jwtSecret:
          env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
      },
    },
  },
});
