// PM2 deployment config for the portfolio (Vite + React static build).
// Serves the production build from ./dist via `vite preview`.
//
// Usage:
//   npm run build                 # produce ./dist
//   pm2 start ecosystem.config.cjs
//   pm2 save                      # persist across reboots
//   pm2 logs portfolio
module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'npm',
      args: 'run preview -- --host 0.0.0.0 --port 4173',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 4173,
      },
    },
  ],
};
