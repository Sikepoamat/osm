# Simple Reverse Proxy

A lightweight reverse proxy server built with Node.js and Express, designed for easy deployment on Vercel.

## Features

- Express.js based reverse proxy
- Request logging with timestamp
- SSL bypass capability
- IP-based routing
- Vercel deployment ready
- Clean and maintainable codebase
- In-memory caching system with 1-hour expiration
- Automatic memory usage monitoring
- Cache cleanup to prevent memory issues

## Installation

```bash
npm install
```

## Usage

### Local Development

Start the server locally:

```bash
node Server.js
 ```

The server will run on port 88 and 444 by default.

### API Endpoints
1. Home Route
   
   - Path: /
   - Method: GET
   - Response: Welcome message

2. Cache Proxy Route
   
   - Path: /:ip/cache/*
   - Method: GET
   - Parameters:
     - ip : Target IP address
     - cache/* : Cache path

### Deployment
Deploy to Vercel:

```bash
vercel
```

or click this button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GTPSHAX/simple-reverse-proxy)

## Project Structure

```plaintext
simple-reverse-proxy/
├── MainApp.js          # Main application setup
├── Server.js           # Local development server
├── middleware/
│   └── RequestLogger.js # Request logging middleware
├── routes/
│   ├── CacheProxy.js   # Proxy route handler
│   └── IndexRoute.js   # Index route handler
└── vercel.json         # Vercel deployment configuration
```

## Environment Variables

No environment variables are required for basic setup.

## Dependencies

- express: ^4.21.2
- node-fetch: ^2.7.0

## License

MIT License - See LICENSE file for details.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Author

GrowPlus Community

## Support

For issues and feature requests, please use the GitHub issues page .
