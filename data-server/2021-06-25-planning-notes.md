# Week Planning

Content für nächste Woche:
## Festigen
  - Middleware (next)
  - Router/Controller
  - Error-Handling
    Programmier-Methodik:
      - Single-File to Multi-File

## Deployment
  - Introduction: Getting our Server Online
    - Environment Variables:
      - Development vs. Production
      - Project Organization VI: The `config` folder
      - Centralizing secrets in one place: `config/environment.js`

        ### Thought of TH:
          ```
          Discuss: Deployment Specific Configuration, Security and Dependencies

          What is deployment specific configuration?
            - DNS-names
            - IP-addresses
            - Secrets

          So if secrets should never be stored in a software repository, how could they be shared?
          What about

          Is hardcoding deployment specific configuration a good idea?

          Why not?
          => Store secrets in a secret store, e. g. HashiCorp "Vault" (https://www.vaultproject.io/)
          => alternative "admin tool" (e. g. Ansible)
          ```

## By the Way
- Productivity
  - Keyboard Shortcuts
    - VS Code
    - Desktop Environment
    - Bash
