import { Category } from "@/types/article";

export const categories: Category[] = [
  {
    id: "getting-started",
    name: "Getting started",
    articles: [
      {
        id: "meet-helpdesk",
        title: "Meet HelpDesk",
        category: "getting-started",
        content: `# Meet HelpDesk

A modern help center that delivers comprehensive documentation and support to your users with ease.

## What is HelpDesk?

HelpDesk is a beautifully designed documentation platform that makes it easy to create, organize, and share knowledge with your team and customers. Built with modern web technologies, it provides a seamless experience across all devices.

### Key Features

- **Smart Search** - Find answers instantly with real-time search
- **Organized Content** - Category-based navigation for easy discovery
- **Responsive Design** - Perfect experience on desktop, tablet, and mobile
- **Dark Theme** - Easy on the eyes with our elegant dark interface

## Getting Started

1. Browse categories in the left sidebar
2. Use the search bar to find specific topics
3. Click any article to view detailed content
4. Use the table of contents on the right to jump to sections

Start exploring our documentation to learn more about all the features available.`,
        relatedArticles: ["quickstart", "plans-credits"],
      },
      {
        id: "quickstart",
        title: "Quickstart",
        category: "getting-started",
        content: `# Quickstart Guide

Get up and running with HelpDesk in minutes.

## Step 1: Navigate the Interface

The interface is divided into three main sections:

- **Left Sidebar**: Browse categories and articles
- **Main Content**: Read article content
- **Right Sidebar**: Quick navigation within articles

## Step 2: Search for Content

Use the search bar at the top of the left sidebar to quickly find relevant articles. Search results update in real-time as you type.

## Step 3: Explore Categories

Categories are organized logically to help you find what you need:

\`\`\`
Getting Started → Basic concepts and introduction
Understanding the Platform → Deep dive into features
Best Practices → Tips and recommendations
Tutorials → Step-by-step guides
\`\`\`

## Step 4: Copy Content

Use the "Copy page" button to copy article content to your clipboard for easy sharing.

That's it! You're ready to explore all our documentation.`,
        relatedArticles: ["meet-helpdesk", "plans-credits"],
      },
      {
        id: "plans-credits",
        title: "Plans and Credits",
        category: "getting-started",
        content: `# Plans and Credits

Understand our pricing structure and credit system.

## Available Plans

### Free Plan
- Access to all public documentation
- Basic search functionality
- Community support

### Pro Plan
- Everything in Free
- Advanced search with filters
- Priority support
- Custom branding

### Enterprise Plan
- Everything in Pro
- Dedicated support team
- SLA guarantees
- Custom integrations

## Credit System

Credits are used for premium features:

| Feature | Credits |
|---------|---------|
| Advanced Search | 10 credits/month |
| Custom Exports | 5 credits/export |
| API Access | 100 credits/month |

## Managing Your Credits

View your credit balance in the account settings. Credits reset monthly for all subscription plans.`,
        relatedArticles: ["meet-helpdesk", "quickstart"],
      },
    ],
  },
  {
    id: "understanding-platform",
    name: "Understanding your platform",
    articles: [
      {
        id: "platform-interface",
        title: "Platform Interface",
        category: "understanding-platform",
        content: `# Platform Interface

Learn about the core interface components and how to use them effectively.

## Navigation Components

### Left Sidebar
The left sidebar contains:
- Category browser
- Article list
- Search functionality
- Category collapse/expand controls

### Main Content Area
Displays article content with support for:
- Headings and subheadings
- Paragraphs and lists
- Code blocks
- Tables
- Images

### Right Sidebar
Shows:
- Table of contents for current article
- Related articles
- Quick jump links

## Keyboard Shortcuts

Speed up your navigation with these shortcuts:

\`\`\`
Ctrl/Cmd + K - Open search
Ctrl/Cmd + / - Toggle sidebar
Esc - Close search or dialogs
\`\`\`

## Customization

Personalize your experience through the settings panel (coming soon).`,
        relatedArticles: ["core-services", "monitoring"],
      },
      {
        id: "core-services",
        title: "Core Services",
        category: "understanding-platform",
        content: `# Core Services

Overview of the core services that power the platform.

## Search Service

Our intelligent search service provides:
- Real-time filtering
- Fuzzy matching
- Category-aware results
- Highlighted matches

## Content Delivery

Fast and reliable content delivery through:
- CDN integration
- Optimized assets
- Lazy loading
- Progressive enhancement

## Analytics

Track user engagement with:
- Page views
- Search queries
- Popular articles
- User paths

## Authentication

Secure access control with:
- OAuth integration
- Role-based permissions
- Session management
- API key authentication`,
        relatedArticles: ["platform-interface", "monitoring"],
      },
      {
        id: "monitoring",
        title: "Monitoring & Observability",
        category: "understanding-platform",
        content: `# Monitoring & Observability

Keep track of your help center's performance and usage.

## Key Metrics

Monitor these essential metrics:

### Performance Metrics
- Page load time
- Time to interactive
- Search response time
- API latency

### Usage Metrics
- Daily active users
- Popular articles
- Search trends
- User feedback

## Alerts

Set up alerts for:
- High error rates
- Slow response times
- Unusual traffic patterns
- System outages

## Logging

Comprehensive logging for:
\`\`\`
[INFO] User searched for "authentication"
[DEBUG] Cache hit for article-123
[ERROR] Failed to load image: timeout
[WARN] Search query too broad
\`\`\``,
        relatedArticles: ["platform-interface", "core-services"],
      },
    ],
  },
  {
    id: "best-practices",
    name: "Best practices",
    articles: [
      {
        id: "optimize-search",
        title: "Optimize Search Usage",
        category: "best-practices",
        content: `# Optimize Search Usage

Make the most of our search functionality with these tips.

## Search Strategies

### Use Specific Keywords
Be specific in your search queries for better results:
- ✅ "authentication setup"
- ❌ "help"

### Use Filters
Narrow down results by category when available.

### Try Variations
If you don't find what you need, try:
- Synonyms
- Related terms
- Broader or narrower queries

## Advanced Search

Coming soon: Advanced search features including:
- Boolean operators (AND, OR, NOT)
- Exact phrase matching
- Date range filtering
- Custom field search`,
        relatedArticles: ["effective-prompting", "fixing-errors"],
      },
      {
        id: "effective-prompting",
        title: "Effective Documentation",
        category: "best-practices",
        content: `# Effective Documentation

Learn how to create clear, helpful documentation.

## Writing Guidelines

### Clear Headers
Use descriptive headers that explain what the section covers.

### Short Paragraphs
Keep paragraphs concise and focused on one idea.

### Code Examples
Always include code examples for technical content:

\`\`\`javascript
// Good: Clear and commented
const searchArticles = (query) => {
  return articles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase())
  );
};
\`\`\`

### Visual Aids
Use images, diagrams, and tables to illustrate complex concepts.

## Structure

Organize content with a clear hierarchy:
1. Introduction
2. Prerequisites
3. Step-by-step instructions
4. Examples
5. Troubleshooting
6. Next steps`,
        relatedArticles: ["optimize-search", "fixing-errors"],
      },
      {
        id: "fixing-errors",
        title: "Troubleshooting Guide",
        category: "best-practices",
        content: `# Troubleshooting Guide

Common issues and how to resolve them.

## Search Not Working

### Issue: No results found
**Solution:**
1. Check your spelling
2. Try broader terms
3. Browse categories manually

### Issue: Slow search
**Solution:**
- Clear browser cache
- Check internet connection
- Try again in a few moments

## Content Not Loading

### Issue: Article won't display
**Solution:**
\`\`\`bash
# Try these steps:
1. Refresh the page (Ctrl/Cmd + R)
2. Clear cache and cookies
3. Try a different browser
4. Contact support if issue persists
\`\`\`

## Navigation Issues

### Issue: Sidebar collapsed/missing
**Solution:** Use the menu toggle button in the top-left corner.

### Issue: Can't find an article
**Solution:** Use the search function or browse categories in the left sidebar.`,
        relatedArticles: ["optimize-search", "effective-prompting"],
      },
    ],
  },
  {
    id: "tutorials",
    name: "Tutorials",
    articles: [
      {
        id: "getting-around",
        title: "Getting Around",
        category: "tutorials",
        content: `# Getting Around the Help Center

A complete walkthrough of navigating the help center.

## Tutorial Overview

This tutorial will cover:
1. Using the sidebar navigation
2. Searching for content
3. Reading articles
4. Using the table of contents
5. Finding related content

## Step 1: Sidebar Navigation

The left sidebar is your main navigation tool:
- Click category names to expand/collapse them
- Click article titles to view content
- Active article is highlighted in yellow

## Step 2: Using Search

The search bar at the top of the sidebar lets you:
1. Type your query
2. See results update in real-time
3. Click any result to jump to that article

## Step 3: Reading Content

Articles support rich formatting:
- **Bold** and *italic* text
- Code blocks with syntax highlighting
- Tables for structured data
- Images and diagrams

## Step 4: Table of Contents

The right sidebar shows:
- All headings in the current article
- Click to jump to any section
- See your current position

## Step 5: Related Articles

Find related content at the bottom of each article or in the right sidebar.

Practice navigating now by clicking through different articles!`,
        relatedArticles: ["advanced-features"],
      },
      {
        id: "advanced-features",
        title: "Advanced Features",
        category: "tutorials",
        content: `# Advanced Features Tutorial

Discover powerful features to enhance your experience.

## Keyboard Navigation

Master these keyboard shortcuts:

| Shortcut | Action |
|----------|--------|
| Ctrl/Cmd + K | Open search |
| Ctrl/Cmd + / | Toggle sidebar |
| Esc | Close dialogs |
| ↑↓ | Navigate results |

## Copy to Clipboard

Use the "Copy page" button to:
1. Copy article URL
2. Share with team members
3. Bookmark for later
4. Reference in documentation

## Custom Views

Adjust your reading experience:
- Toggle sidebar for more reading space
- Use browser zoom for text size
- Fullscreen mode (F11) for distraction-free reading

## Search Operators

Advanced search coming soon with operators like:
\`\`\`
"exact phrase" - Match exact text
keyword1 keyword2 - Match all keywords
category:name - Search within category
\`\`\`

Stay tuned for more advanced features!`,
        relatedArticles: ["getting-around"],
      },
    ],
  },
];
