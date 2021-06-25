# Week Planning

Frage an Ahmad und Cüneyt ob individual Coaching. Wenn ja, dann weiter an Sophie Peschel.

Content für nächste Woche:
## Festigen
  - Middleware (next)
  - Router/Controller
    Programmier-Methodik:
      - Single-File to Multi-File


## Neu
  - (11) Handling Errors:
    - Error handling middleware signature: `(err, req, res, next) => { ... }`
    - Changing response status: `res.status()`
    - Using the error handler: `next(err)`
    - Catching 404s with a default route:
      `app.use(<404 controller>)`

  - Introduction: Getting our Server Online
    - Environment Variables:
      - Development vs. Production
      - Project Organization VI: The `config` folder
      - Centralizing secrets in one place: `config/environment.js`

        ### Thought of TH:
          ```
          Discuss: Deployment Specific Configuration, Security and Dependencies

          What is deployment specific configuration?
            - fully qualified DNS-names, - but partial addresses may be a good idea
            - IP-addresses
            - Secrets

          So if secrets should never be stored in a software repository, how could they be shared?
          What about

          Is hardcoding deployment specific configuration a good idea?

          Why not?

          => Store secrets in a secret store, e. g. HashiCorp "Vault" (https://www.vaultproject.io/)
          ```

    - Deployment configuration:
      - Defining production secrets
      - Using our secrets in Heroku/Vercel

    - Deployment alternatives:
      - Heroku
      - Vercel
      - Self hosted

## By the Way
- Productivity
  - Keyboard Shortcuts
    - VS Code
    - Desktop Environment
    - Bash
