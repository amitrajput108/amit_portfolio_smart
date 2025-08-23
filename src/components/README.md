# Portfolio Contact Form with Email Integration

This portfolio includes a fully functional contact form that sends emails to both you and the person contacting you.

## Features

- **Real-time email notifications** when someone contacts you
- **Auto-reply emails** to people who contact you
- **Beautiful HTML email templates** with your branding
- **Form validation** and error handling
- **Success/error feedback** for users

## Setup Instructions

### 1. Email Configuration

1. **For Gmail users:**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: Go to Google Account Settings > Security > App passwords
   - Create a new app password for "Mail"

2. **Update the `.env` file:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   TO_EMAIL=amitkumar7775433@gmail.com
   ```

3. **For other email providers:**
   - **Outlook/Hotmail:** `smtp-mail.outlook.com`, port 587
   - **Yahoo:** `smtp.mail.yahoo.com`, port 587
   - **Custom SMTP:** Use your provider's SMTP settings

### 2. Running the Application

1. **Development mode (recommended):**
   ```bash
   npm run dev:full
   ```
   This runs both the frontend (port 3000) and backend server (port 3001).

2. **Separate terminals:**
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   npm run server
   ```

### 3. Testing the Contact Form

1. Fill out the contact form on your website
2. Check your email for the notification
3. The sender will receive an auto-reply confirmation

## Email Templates

The system sends two types of emails:

### 1. Notification Email (to you)
- **Subject:** "New Contact Form Submission from [Name]"
- **Contains:** Full contact details and message
- **Features:** Direct reply button, professional formatting

### 2. Auto-reply Email (to sender)
- **Subject:** "Thank you for contacting me!"
- **Contains:** Confirmation message and copy of their original message
- **Features:** Professional branding, sets expectations for response time

## Customization

### Email Templates
Edit the HTML templates in `server/email.js` to match your branding:
- Colors and styling
- Your name and contact information
- Response time expectations
- Social media links

### SMTP Settings
The system supports any SMTP provider. Update the `.env` file with your provider's settings.

### Security Features
- Input validation and sanitization
- Rate limiting (can be added)
- Secure email transmission
- Environment variable protection

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check your email and app password
   - Ensure 2FA is enabled for Gmail
   - Verify SMTP settings

2. **"Connection refused"**
   - Check if the backend server is running
   - Verify port 3001 is available
   - Check firewall settings

3. **Emails not received**
   - Check spam/junk folders
   - Verify the TO_EMAIL address
   - Test with a different email provider

### Testing Email Configuration:
The server automatically tests the email configuration on startup. Check the console for any errors.

## Production Deployment

For production deployment:

1. **Environment Variables:**
   - Set all `.env` variables in your hosting platform
   - Never commit the `.env` file to version control

2. **CORS Configuration:**
   - Update the CORS settings in `server/server.js` for your domain

3. **SSL/TLS:**
   - Ensure your hosting platform supports HTTPS
   - Update API endpoints to use HTTPS

## Support

If you need help setting up the email functionality:
1. Check the console for error messages
2. Verify your email provider's SMTP settings
3. Test with a simple email client first
4. Contact me through the form once it's working! 😊