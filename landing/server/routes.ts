import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle beta access requests
  app.post('/api/beta-request', async (req, res) => {
    try {
      const { name, email, company, useCase, consent } = req.body;
      
      // Validate request data
      if (!name || !email || !company || !useCase || !consent) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Here you would typically store this information in a database
      // For now, just log it and return success
      console.log('Beta access request received:', { name, email, company, useCase });
      
      // In a real implementation, you might want to:
      // 1. Send an email notification to the team
      // 2. Send a confirmation email to the user
      // 3. Store the request in a database
      
      return res.status(200).json({ message: 'Request received successfully' });
    } catch (error) {
      console.error('Error processing beta request:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // API route to handle newsletter subscriptions
  app.post('/api/newsletter-subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // Here you would typically add the email to your newsletter service
      console.log('Newsletter subscription:', { email });
      
      return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error processing newsletter subscription:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
