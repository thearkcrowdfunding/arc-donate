

## Project Structure

### Routes
- `/` - Root route (redirects to default locale)
- `/[locale]` - Main page with locale prefix
- `/[locale]/payment/success` - Payment success page
- `/[locale]/payment/cancel` - Payment cancellation page

### Key Directories
- `/messages/` - Translation files
- `/public/images/` - Static images
  - `/hero/` - Hero section images
  - `/help-cards/` - Card section images
  - `/testimonials/` - Testimonial images
- `/src/components/` - React components
- `/src/app/` - Next.js app router pages
- `/src/utils/` - Utility functions

## Configuration

### Payment Links
Update payment links in `src/lib/constants.ts`:
```typescript
export const STRIPE_PAYMENT_LINKS = {
  '15': 'your-stripe-link-15',
  '20': 'your-stripe-link-20',
  '30': 'your-stripe-link-30'
};

export const PAYPAL_SUBSCRIPTION_LINKS = {
  '15': 'your-paypal-link-15',
  '20': 'your-paypal-link-20',
  '30': 'your-paypal-link-30'
};
```

### Analytics
Configure GTM ID in `src/app/layout.tsx`

## Deployment

### Prerequisites
- Node.js 18.17 or later
- npm or yarn
- PostgreSQL (if using database features)

### Self-hosted Deployment
1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Docker Deployment
1. Build the Docker image:
```bash
docker build -t donation-platform .
```

2. Run the container:
```bash
docker run -p 3000:3000 donation-platform
```

### Nginx Configuration
Example nginx configuration for production:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run type checking
npm run type-check

# Run tests
npm test

# Build for production
npm run build
```
