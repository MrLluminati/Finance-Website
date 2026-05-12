# Technical Architecture

## 1. Recommended Initial Stack

The project should start with a modern but beginner-manageable stack.

| Layer | Recommended Tool | Reason |
|---|---|---|
| Frontend | Next.js | SEO-friendly, scalable, employable skill |
| Language | TypeScript | Safer code, better portfolio value |
| Styling | Tailwind CSS | Fast UI development and consistent design |
| Content | MDX or structured JSON | Easy low-cost publishing |
| Charts | Recharts or Chart.js | Free and React-friendly |
| Hosting | Vercel/free-tier equivalent | Simple deployment |
| Auth later | Supabase Auth | Low-cost SaaS foundation |
| Database later | Supabase Postgres | Easy relational database |
| Version Control | GitHub | Portfolio and collaboration proof |

---

## 2. Proposed Folder Structure

```txt
finance-website/
  app/
    page.tsx
    layout.tsx
    globals.css
    markets/
    stocks/
    learn/
    tools/
    news/
    about/
    contact/
    disclaimer/
    privacy-policy/
    terms/

  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx
    home/
      Hero.tsx
      MarketSnapshot.tsx
      LatestInsights.tsx
      ToolsPreview.tsx
    cards/
      ArticleCard.tsx
      CompanyCard.tsx
      ToolCard.tsx
    calculators/
      SipCalculator.tsx
      CagrCalculator.tsx
      EmiCalculator.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx

  content/
    articles/
    companies/
    glossary/

  data/
    companies.ts
    sectors.ts
    sample-market.ts

  lib/
    calculations/
      sip.ts
      cagr.ts
      emi.ts
    utils.ts
    seo.ts

  docs/
    PROJECT_PLAN.md
    ROADMAP.md
    COMPLIANCE_AND_DATA_POLICY.md
    TECHNICAL_ARCHITECTURE.md

  public/
    images/
    icons/

  package.json
  README.md
```

---

## 3. Page Architecture

## Public Pages

- `/` Homepage
- `/markets` Markets overview
- `/stocks` Company directory
- `/stocks/[slug]` Company profile
- `/learn` Learning hub
- `/learn/[slug]` Article/explainer page
- `/tools` Finance tools index
- `/tools/sip-calculator`
- `/tools/cagr-calculator`
- `/tools/emi-calculator`
- `/news` Insights/news page
- `/about`
- `/contact`
- `/disclaimer`
- `/privacy-policy`
- `/terms`

## Future Auth Pages

- `/login`
- `/signup`
- `/dashboard`
- `/dashboard/watchlist`
- `/dashboard/portfolio`
- `/dashboard/notes`

---

## 4. Data Strategy by Phase

### Phase 1

Use local static data files.

Examples:

- `data/companies.ts`
- `data/sectors.ts`
- `data/sample-market.ts`

This keeps hosting free and avoids early database complexity.

### Phase 2

Add structured content through MDX or CMS-like local files.

### Phase 3

Add Supabase or another database/auth system.

Suggested future tables:

```sql
users
watchlists
watchlist_items
portfolios
portfolio_holdings
portfolio_transactions
saved_articles
user_notes
```

---

## 5. Component Strategy

Build reusable components from the beginning.

### Layout Components

- Header
- Footer
- Navigation
- Page container
- Section wrapper

### Finance Components

- Market card
- Index card
- Company card
- News card
- Calculator form
- Result summary
- Data table
- Chart block

### Utility Components

- Button
- Badge
- Tabs
- Search input
- Filter dropdown
- Empty state
- Loading state

---

## 6. Calculator Logic Strategy

Keep finance calculations in separate utility files instead of mixing them inside UI components.

Example:

```txt
lib/calculations/sip.ts
lib/calculations/cagr.ts
lib/calculations/emi.ts
```

This improves testability and portfolio quality.

---

## 7. SEO Strategy

Every important page should have:

- title;
- meta description;
- canonical URL later;
- Open Graph tags later;
- structured heading hierarchy;
- readable slug;
- last updated date for content pages.

Priority SEO pages:

- finance calculators;
- beginner guides;
- company explainers;
- glossary pages.

---

## 8. Deployment Strategy

Start with free deployment.

Recommended flow:

1. Push code to GitHub.
2. Connect repository to Vercel.
3. Deploy from `main` branch.
4. Use preview deployments for pull requests later.

---

## 9. Future API Strategy

Do not overbuild API routes initially.

Later possible APIs:

- `/api/watchlist`
- `/api/portfolio`
- `/api/articles`
- `/api/company/[slug]`
- `/api/tools/calculate`

---

## 10. Engineering Standards

- Use meaningful commit messages.
- Use TypeScript types for finance data.
- Keep calculation logic separate.
- Avoid hardcoding repeated UI.
- Keep components small.
- Maintain documentation.
- Add issues for each major feature.
- Do not commit secrets or API keys.

---

## 11. Learning Value

This project should demonstrate:

- React/Next.js routing;
- component architecture;
- responsive UI;
- TypeScript;
- finance calculators;
- data modeling;
- SEO;
- authentication later;
- database integration later;
- SaaS dashboard architecture later.

This makes it valuable both as a real product and as a job-oriented portfolio project.
