const QUESTIONS = [
  {
    "id": 1,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Financial Statements (Sch. III)",
    "q": "Schedule III of Companies Act 2013 relates to:",
    "opts": [
      "Financial Statements",
      "Prospectus",
      "Share Capital",
      "Dividend"
    ],
    "ans": "A",
    "exp": "Schedule III prescribes the format of financial statements (Balance Sheet, Statement of P&L)."
  },
  {
    "id": 2,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Prospectus (Ch. III)",
    "q": "Fine under Section 26(9) for prospectus issued in contravention:",
    "opts": [
      "Rs 50,000",
      "Rs 1,00,000",
      "Rs 5,00,000",
      "Rs 10,00,000"
    ],
    "ans": "C",
    "exp": "Section 26(9): fine which may extend to Rs 5 lakh for mis-statement/contravention in prospectus."
  },
  {
    "id": 3,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Public Issue (Ch. IV)",
    "q": "Minimum application money for public issue as per Companies Act 2013:",
    "opts": [
      "5% of nominal value",
      "10% of nominal value",
      "25% of nominal value",
      "50% of nominal value"
    ],
    "ans": "C",
    "exp": "Section 39(3): minimum 25% of nominal value must be received as application money."
  },
  {
    "id": 4,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Private Placement (Ch. III)",
    "q": "Under Section 42, private placement offer can be made to max persons in a FY:",
    "opts": [
      "50",
      "200",
      "500",
      "1000"
    ],
    "ans": "B",
    "exp": "Section 42(2): maximum 200 persons (excluding QIBs/employees) in aggregate per financial year."
  },
  {
    "id": 5,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Shelf Prospectus (Ch. III)",
    "q": "Section for 'shelf prospectus' valid for 1 year from first offer:",
    "opts": [
      "Section 31",
      "Section 32",
      "Section 33",
      "Section 34"
    ],
    "ans": "A",
    "exp": "Section 31: shelf prospectus for financial institutions/banks, valid 1 year from date of first offer."
  },
  {
    "id": 6,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Share Capital (Ch. IV)",
    "q": "Section 43: Share capital of company limited by shares consists of:",
    "opts": [
      "Equity & Preference shares",
      "Equity shares only",
      "Preference shares only",
      "Debentures & shares"
    ],
    "ans": "A",
    "exp": "Section 43: two classes - equity share capital and preference share capital."
  },
  {
    "id": 7,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Private Placement (Ch. III)",
    "q": "Money received on private placement must be kept in:",
    "opts": [
      "Separate bank account",
      "Company's general account",
      "Escrow account",
      "Any scheduled bank"
    ],
    "ans": "A",
    "exp": "Section 42(4): consideration must be kept in a separate bank account in a scheduled bank."
  },
  {
    "id": 8,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Public Issue (Ch. III)",
    "q": "Section 23: Public company may issue securities through:",
    "opts": [
      "Public offer only",
      "Private placement only",
      "Rights issue only",
      "Public offer, private placement, rights issue, bonus issue"
    ],
    "ans": "D",
    "exp": "Section 23: all four methods are permitted for public companies."
  },
  {
    "id": 9,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Securities Regulation (Ch. III)",
    "q": "Section empowering SEBI for listed companies' securities/dividend:",
    "opts": [
      "Section 24",
      "Section 25",
      "Section 26",
      "Section 27"
    ],
    "ans": "A",
    "exp": "Section 24: SEBI administers the provisions of Chapters III and IV for listed companies."
  },
  {
    "id": 10,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Preference Shares (Ch. IV)",
    "q": "Redemption of preference shares under Section 55:",
    "opts": [
      "Out of profits only",
      "Out of fresh issue proceeds only",
      "Out of profits or fresh issue proceeds",
      "Out of reserves only"
    ],
    "ans": "C",
    "exp": "Section 55: redemption from profits available for dividend OR proceeds of a fresh issue."
  },
  {
    "id": 11,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Rights Issue (Ch. IV)",
    "q": "Rights issue offer must remain open for minimum:",
    "opts": [
      "7 days",
      "15 days",
      "21 days",
      "30 days"
    ],
    "ans": "B",
    "exp": "Section 62(1)(a)(i): minimum 15 days, maximum 30 days."
  },
  {
    "id": 12,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Share Capital Reduction (Ch. IV)",
    "q": "Section 66: Reduction of share capital requires:",
    "opts": [
      "Special resolution + Tribunal confirmation",
      "Board resolution only",
      "Special resolution only",
      "Ordinary resolution"
    ],
    "ans": "A",
    "exp": "Section 66: special resolution plus NCLT confirmation is mandatory."
  },
  {
    "id": 13,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Dividend (Ch. VIII)",
    "q": "Section 123: Dividend can be declared from:",
    "opts": [
      "Current year profits only",
      "Free reserves only",
      "Current profits OR free reserves",
      "Capital reserves"
    ],
    "ans": "C",
    "exp": "Section 123(1): dividend from current-year profits or free reserves (after transferring depreciation)."
  },
  {
    "id": 14,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Directors (Ch. XI)",
    "q": "Section 149: Certain public companies must have at least:",
    "opts": [
      "1 woman director",
      "2 woman directors",
      "1 independent director",
      "2 independent directors"
    ],
    "ans": "A",
    "exp": "Section 149(1): listed/public companies with paid-up capital Rs 100 cr+ (or turnover Rs 300 cr+) must have at least 1 woman director."
  },
  {
    "id": 15,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Internal Audit (Ch. X)",
    "q": "Section 138: Class of companies requiring internal auditor:",
    "opts": [
      "All companies",
      "Listed companies only",
      "Prescribed class of companies",
      "Private companies only"
    ],
    "ans": "C",
    "exp": "Section 138: class of companies prescribed by Rules must appoint an internal auditor."
  },
  {
    "id": 16,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "CSR (Ch. IX)",
    "q": "CSR Committee composition if no independent director is required:",
    "opts": [
      "Must have 1 independent director",
      "2 or more directors without independent director",
      "At least 2 persons with 1 independent director",
      "Any 3 directors with 1 independent director"
    ],
    "ans": "B",
    "exp": "Section 135(9): if not required to have an ID, CSR Committee = 2 or more directors."
  },
  {
    "id": 17,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "NCLT (Ch. XXVII)",
    "q": "Appeal from NCLT order lies to:",
    "opts": [
      "High Court",
      "NCLAT",
      "Supreme Court",
      "Central Government"
    ],
    "ans": "B",
    "exp": "Section 421: appeal to NCLAT within 45 days."
  },
  {
    "id": 18,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Prospectus (Ch. III)",
    "q": "Red Herring Prospectus (RHP) - what is NOT included vs the final prospectus?",
    "opts": [
      "Price band",
      "Company name",
      "Objects of issue",
      "Promoter details"
    ],
    "ans": "A",
    "exp": "RHP contains all details except price and number of securities (filed before price discovery)."
  },
  {
    "id": 19,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Directors (Ch. XI)",
    "q": "Independent Director tenure - max consecutive terms:",
    "opts": [
      "1 term of 5 years",
      "2 terms of 5 years each",
      "3 terms of 3 years each",
      "No limit"
    ],
    "ans": "B",
    "exp": "Section 149(10): maximum 2 consecutive terms of 5 years each."
  },
  {
    "id": 20,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Board Meetings (Ch. XII)",
    "q": "Minimum Board meetings per year:",
    "opts": [
      "2",
      "4",
      "6",
      "12"
    ],
    "ans": "B",
    "exp": "Section 173(1): minimum 4 meetings per year, maximum gap of 120 days."
  },
  {
    "id": 21,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Ratio Analysis",
    "q": "Current Ratio = Current Assets / Current Liabilities. If CR = 2:1 and CA = Rs 10L, then CL =",
    "opts": [
      "Rs 2L",
      "Rs 5L",
      "Rs 4L",
      "Rs 8L"
    ],
    "ans": "B",
    "exp": "CR = CA/CL -> 2 = 10/CL -> CL = Rs 5 lakh."
  },
  {
    "id": 22,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Cash Flow Statement",
    "q": "Interest paid is classified under which activity in Cash Flow Statement?",
    "opts": [
      "Operating",
      "Investing",
      "Financing",
      "Non-cash"
    ],
    "ans": "C",
    "exp": "Ind AS 7: interest paid = financing activity (IFRS allows operating or financing)."
  },
  {
    "id": 23,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Depreciation",
    "q": "Depreciation as per Schedule II is based on:",
    "opts": [
      "Historical cost",
      "Fair value",
      "Revalued amount",
      "Market value"
    ],
    "ans": "A",
    "exp": "Schedule II: depreciation on historical cost over the useful life of the asset."
  },
  {
    "id": 24,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Partnership",
    "q": "Gaining ratio on change of profit-sharing ratio =",
    "opts": [
      "New ratio - Old ratio",
      "Old ratio - New ratio",
      "Sacrifice ratio",
      "Capital ratio"
    ],
    "ans": "A",
    "exp": "Gaining ratio = New share - Old share (when positive)."
  },
  {
    "id": 25,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "ESOP",
    "q": "ESOP expense is recognized over:",
    "opts": [
      "Vesting period",
      "Exercise period",
      "Grant date",
      "Financial year"
    ],
    "ans": "A",
    "exp": "Ind AS 102: expense recognized over the vesting period (service condition)."
  },
  {
    "id": 26,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Ind AS",
    "q": "Ind AS 116 (Leases) - lessee recognizes:",
    "opts": [
      "Only finance leases",
      "Right-of-use asset & lease liability for ALL leases",
      "Operating leases off-balance sheet",
      "No change from Ind AS 17"
    ],
    "ans": "B",
    "exp": "Ind AS 116: single lessee model - ROU asset + lease liability (exemptions: short-term/low-value leases)."
  },
  {
    "id": 27,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Cash Flow Statement",
    "q": "Dividend RECEIVED in Cash Flow Statement is classified as:",
    "opts": [
      "Operating",
      "Investing",
      "Financing",
      "Non-cash"
    ],
    "ans": "B",
    "exp": "Ind AS 7: dividend received = investing activity (return on investment)."
  },
  {
    "id": 28,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Leadership Theories",
    "q": "Fayol's 14 Principles - 'Unity of Command' means:",
    "opts": [
      "One plan, one boss",
      "One employee, one boss",
      "One department, one head",
      "One organization, one head"
    ],
    "ans": "B",
    "exp": "Each employee receives orders from only ONE superior."
  },
  {
    "id": 29,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Motivation",
    "q": "Maslow's Hierarchy - correct order (bottom to top):",
    "opts": [
      "Physiological > Safety > Social > Esteem > Self-actualization",
      "Safety > Physiological > Social > Esteem > Self-actualization",
      "Physiological > Social > Safety > Esteem > Self-actualization",
      "Esteem > Safety > Physiological > Social > Self-actualization"
    ],
    "ans": "A",
    "exp": "Classic 5-level pyramid of needs."
  },
  {
    "id": 30,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "HRD",
    "q": "HRD goals include all EXCEPT:",
    "opts": [
      "Develop capabilities",
      "Improve performance",
      "Reduce headcount",
      "Build culture"
    ],
    "ans": "C",
    "exp": "HRD goals: capability development, performance improvement, culture building - not headcount reduction."
  },
  {
    "id": 31,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Communication",
    "q": "Communication process steps in correct order:",
    "opts": [
      "Sender > Encoding > Channel > Decoding > Receiver > Feedback",
      "Sender > Channel > Encoding > Decoding > Receiver > Feedback",
      "Encoding > Sender > Channel > Decoding > Receiver > Feedback",
      "Sender > Encoding > Decoding > Channel > Receiver > Feedback"
    ],
    "ans": "A",
    "exp": "Standard Shannon-Weaver communication model."
  },
  {
    "id": 32,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "MBO",
    "q": "MBO (Management by Objectives) - first step:",
    "opts": [
      "Set objectives",
      "Cascade objectives",
      "Review performance",
      "Define organizational goals"
    ],
    "ans": "D",
    "exp": "MBO: 1) define org goals -> 2) set objectives -> 3) cascade -> 4) review."
  },
  {
    "id": 33,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Leadership",
    "q": "Transformational leadership includes all EXCEPT:",
    "opts": [
      "Idealized influence",
      "Inspirational motivation",
      "Transactional rewards",
      "Intellectual stimulation"
    ],
    "ans": "C",
    "exp": "4 I's: Idealized influence, Inspirational motivation, Intellectual stimulation, Individualized consideration."
  },
  {
    "id": 34,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Financial Markets",
    "q": "Money market instruments include all EXCEPT:",
    "opts": [
      "Treasury Bills",
      "Commercial Paper",
      "Certificate of Deposit",
      "Equity Shares"
    ],
    "ans": "D",
    "exp": "Money market = short-term debt (<1 year); equity shares belong to the capital market."
  },
  {
    "id": 35,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "WACC",
    "q": "WACC formula uses:",
    "opts": [
      "Book value weights",
      "Market value weights",
      "Face value weights",
      "Intrinsic value weights"
    ],
    "ans": "B",
    "exp": "WACC uses market-value weights of equity, debt and preferred stock."
  },
  {
    "id": 36,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Capital Budgeting",
    "q": "NPV vs IRR conflict for mutually exclusive projects - choose based on:",
    "opts": [
      "Higher IRR",
      "Higher NPV",
      "Shorter payback",
      "Higher PI"
    ],
    "ans": "B",
    "exp": "NPV is superior for mutually exclusive projects (reinvestment assumed at WACC)."
  },
  {
    "id": 37,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "CAPM",
    "q": "CAPM: R = Rf + beta(Rm - Rf). If Rf = 6%, beta = 1.2, Rm = 12%, required return =",
    "opts": [
      "12.2%",
      "13.2%",
      "14.2%",
      "15.2%"
    ],
    "ans": "B",
    "exp": "6% + 1.2(12% - 6%) = 6% + 7.2% = 13.2%."
  },
  {
    "id": 38,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Regulators",
    "q": "Which regulator oversees pension funds in India?",
    "opts": [
      "RBI",
      "SEBI",
      "PFRDA",
      "IRDAI"
    ],
    "ans": "C",
    "exp": "PFRDA regulates NPS, APY and pension funds under the PFRDA Act, 2013."
  },
  {
    "id": 39,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Financial Markets",
    "q": "Green Bond proceeds are used for:",
    "opts": [
      "Any business purpose",
      "Environmentally sustainable projects",
      "Social welfare projects",
      "Infrastructure only"
    ],
    "ans": "B",
    "exp": "Green Bonds fund climate/environmental projects (ICMA Green Bond Principles)."
  },
  {
    "id": 40,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Regulators",
    "q": "Account Aggregator framework is regulated by:",
    "opts": [
      "RBI",
      "SEBI",
      "PFRDA",
      "IRDAI"
    ],
    "ans": "A",
    "exp": "RBI: Account Aggregator (NBFC-AA) licence under Master Direction 2016."
  },
  {
    "id": 41,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Marginal Costing",
    "q": "Break-even point (units) =",
    "opts": [
      "Fixed Cost / (Selling Price - Variable Cost)",
      "Variable Cost / Contribution",
      "Fixed Cost / P/V Ratio",
      "Total Cost / Selling Price"
    ],
    "ans": "A",
    "exp": "BEP (units) = Fixed Cost / Contribution per unit."
  },
  {
    "id": 42,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Standard Costing",
    "q": "Material Price Variance =",
    "opts": [
      "(Std Price - Actual Price) * Actual Qty",
      "(Std Qty - Actual Qty) * Std Price",
      "(Std Price - Actual Price) * Std Qty",
      "(Actual Price - Std Price) * Actual Qty"
    ],
    "ans": "A",
    "exp": "MPV = (SP - AP) x AQ; favourable if SP > AP."
  },
  {
    "id": 43,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Variance Analysis",
    "q": "Labour Efficiency Variance =",
    "opts": [
      "(Std Hours - Actual Hours) * Std Rate",
      "(Actual Hours - Std Hours) * Actual Rate",
      "(Std Rate - Actual Rate) * Std Hours",
      "(Actual Rate - Std Rate) * Actual Hours"
    ],
    "ans": "A",
    "exp": "LEV = (SH - AH) x SR; favourable if SH > AH."
  },
  {
    "id": 44,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Lean Tools",
    "q": "Kaizen Costing focuses on:",
    "opts": [
      "Cost reduction during manufacturing",
      "Cost reduction during design",
      "Continuous cost reduction during production",
      "Target costing for new products"
    ],
    "ans": "C",
    "exp": "Kaizen = continuous incremental improvement/cost reduction during the production phase."
  },
  {
    "id": 45,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Budgetary Control",
    "q": "Flexible budget recognizes the difference between:",
    "opts": [
      "Fixed and variable costs",
      "Actual and budgeted output",
      "Planned and actual sales",
      "Standard and actual costs"
    ],
    "ans": "B",
    "exp": "Flexible budget adjusts for the actual activity (output) level."
  },
  {
    "id": 46,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Lean",
    "q": "Value Stream Mapping (VSM) purpose:",
    "opts": [
      "Cost reduction only",
      "Identify waste & improve flow",
      "Inventory management",
      "Quality control"
    ],
    "ans": "B",
    "exp": "VSM visualizes material/information flow to identify non-value-added activities."
  },
  {
    "id": 47,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Target Costing",
    "q": "Target Cost =",
    "opts": [
      "Target Price - Target Profit",
      "Standard Cost + Variance",
      "Actual Cost + Margin",
      "Market Price - Discount"
    ],
    "ans": "A",
    "exp": "Target costing: market-driven price - desired profit = target cost."
  },
  {
    "id": 48,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "IS-LM",
    "q": "IS curve slopes downward because:",
    "opts": [
      "Higher interest rate > lower investment > lower output",
      "Higher income > higher money demand",
      "Lower interest rate > higher money supply",
      "Higher prices > lower real money supply"
    ],
    "ans": "A",
    "exp": "Investment is a function of the interest rate: r up -> I down -> Y down."
  },
  {
    "id": 49,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "Multiplier",
    "q": "Investment multiplier k = 1/(1 - MPC). If MPC = 0.75, k =",
    "opts": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ans": "C",
    "exp": "k = 1/(1 - 0.75) = 1/0.25 = 4."
  },
  {
    "id": 50,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Money Supply",
    "q": "Money multiplier =",
    "opts": [
      "1/CRR",
      "(1 + CRR)/CRR",
      "(1 + c)/(c + r)",
      "c/(c + r)"
    ],
    "ans": "C",
    "exp": "Money multiplier = (1 + currency ratio) / (currency ratio + reserve ratio)."
  },
  {
    "id": 51,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "BoP",
    "q": "Current Account includes:",
    "opts": [
      "FDI flows",
      "Portfolio investment",
      "Trade in goods & services",
      "External commercial borrowings"
    ],
    "ans": "C",
    "exp": "Current A/c: trade in goods & services, primary income, secondary income."
  },
  {
    "id": 52,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Monetary Policy",
    "q": "RBI's inflation target under Flexible Inflation Targeting:",
    "opts": [
      "2% +/- 2%",
      "4% +/- 2%",
      "5% +/- 1%",
      "6% +/- 2%"
    ],
    "ans": "B",
    "exp": "FIT: 4% CPI inflation with a +/-2% tolerance band (2%-6%)."
  },
  {
    "id": 53,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Fiscal Policy",
    "q": "FRBM / Union Budget - fiscal deficit target for the Centre (2025-26):",
    "opts": [
      "3% of GDP",
      "4.4% of GDP",
      "5.9% of GDP",
      "6.4% of GDP"
    ],
    "ans": "B",
    "exp": "Union Budget 2025-26 set the Centre's fiscal deficit at 4.4% of GDP (medium-term path below 4.5%)."
  },
  {
    "id": 54,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS Architecture",
    "q": "CRA (Central Recordkeeping Agency) in NPS is responsible for:",
    "opts": [
      "Fund management",
      "Recordkeeping, administration, customer service",
      "Investment decisions",
      "Regulation"
    ],
    "ans": "B",
    "exp": "CRA (NSDL e-Gov / KFin) handles recordkeeping, PRAN, contributions, withdrawals and customer service."
  },
  {
    "id": 55,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "Atal Pension Yojana - minimum age to join:",
    "opts": [
      "18 years",
      "20 years",
      "25 years",
      "30 years"
    ],
    "ans": "A",
    "exp": "APY entry age 18-40 years; guaranteed pension Rs 1,000-5,000/month."
  },
  {
    "id": 56,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "PRAN (Permanent Retirement Account Number) is:",
    "opts": [
      "12-digit alphanumeric",
      "10-digit numeric",
      "15-digit alphanumeric",
      "16-digit numeric"
    ],
    "ans": "A",
    "exp": "PRAN is a 12-digit unique identifier (e.g., 1100XXXXXXXXXX)."
  },
  {
    "id": 57,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "NPS Tier-I account - partial withdrawal before 60 years:",
    "opts": [
      "Not allowed",
      "Up to 25% after 3 years",
      "Up to 50% after 5 years",
      "Fully after 10 years"
    ],
    "ans": "B",
    "exp": "Partial withdrawal: up to 25% of contributions, permitted after 3 years for specified purposes."
  },
  {
    "id": 58,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "Vatsalya",
    "q": "NPS Vatsalya (2024) is for:",
    "opts": [
      "Senior citizens",
      "Minors (children)",
      "Government employees",
      "Unorganized sector"
    ],
    "ans": "B",
    "exp": "NPS Vatsalya: pension account for minors, operated by parents/guardians."
  },
  {
    "id": 59,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "NPS equity allocation cap for Government sector (default):",
    "opts": [
      "50%",
      "75%",
      "85%",
      "100%"
    ],
    "ans": "B",
    "exp": "Government sector: maximum 75% equity under Active Choice; auto-choice caps vary by age."
  },
  {
    "id": 60,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "APY - Government co-contribution for eligible subscribers:",
    "opts": [
      "50% of contribution",
      "Rs 1,000 per year",
      "50% of contribution up to Rs 1,000/year",
      "No co-contribution"
    ],
    "ans": "C",
    "exp": "APY: 50% of contribution or Rs 1,000/year, whichever is lower, for 5 years (income <= Rs 1.5L)."
  },
  {
    "id": 61,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "NPS Tier-II account - tax treatment on withdrawal:",
    "opts": [
      "Tax-free",
      "Taxed at slab rate",
      "Taxed at 20%",
      "Exempt up to Rs 1L"
    ],
    "ans": "B",
    "exp": "Tier-II: no contribution tax benefit; withdrawal taxed at applicable slab rate."
  },
  {
    "id": 62,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Annual Return (Ch. VII)",
    "q": "Section 92: Annual Return must be filed within:",
    "opts": [
      "30 days of AGM",
      "60 days of AGM",
      "90 days of AGM",
      "180 days of AGM"
    ],
    "ans": "B",
    "exp": "Section 92(4): filing within 60 days from the AGM (Form MGT-7)."
  },
  {
    "id": 63,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Standard Costing",
    "q": "Material Usage Variance formula:",
    "opts": [
      "(Std Qty - Actual Qty) * Actual Price",
      "(Std Qty - Actual Qty) * Std Price",
      "(Actual Qty - Std Qty) * Std Price",
      "(Std Price - Actual Price) * Std Qty"
    ],
    "ans": "B",
    "exp": "MUV = (SQ - AQ) x SP; favourable if SQ > AQ."
  },
  {
    "id": 64,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Derivatives",
    "q": "Which is NOT a derivative instrument?",
    "opts": [
      "Forward",
      "Future",
      "Option",
      "Mutual Fund Unit"
    ],
    "ans": "D",
    "exp": "Derivatives derive value from an underlying: forward, future, option, swap. A mutual fund unit is not a derivative."
  },
  {
    "id": 65,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "OPC (Ch. II)",
    "q": "One Person Company - maximum members:",
    "opts": [
      "1",
      "2",
      "5",
      "200"
    ],
    "ans": "A",
    "exp": "Section 2(62) & 3(1)(c): an OPC has only one member (a natural person)."
  },
  {
    "id": 66,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "ESOP",
    "q": "ESOP is offered at Rs 75 when market value of the share is Rs 90; market price on the date of exercise is Rs 84. What is the fair value of the option recorded in the books?",
    "opts": [
      "Rs 75",
      "Rs 9",
      "Rs 15",
      "Rs 6",
      "Rs 84"
    ],
    "ans": "C",
    "exp": "Fair value at grant = market price (90) - exercise price (75) = Rs 15."
  },
  {
    "id": 67,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Ratio Analysis",
    "q": "Which of the following is a type of liquidity ratio?",
    "opts": [
      "Debt-Equity Ratio",
      "Acid Test Ratio",
      "ROCE Ratio",
      "Interest Coverage Ratio",
      "ROA Ratio"
    ],
    "ans": "B",
    "exp": "Acid test (quick) ratio = liquid assets / current liabilities - a liquidity ratio."
  },
  {
    "id": 68,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Motivation",
    "q": "Which motivation theory is based on the concept of homeostasis?",
    "opts": [
      "Two Factor Theory",
      "Equity Theory",
      "ERG Theory",
      "Drive Reduction Theory",
      "Reinforcement Theory"
    ],
    "ans": "D",
    "exp": "Drive-reduction theory: physiological needs create drives that push behaviour to restore homeostasis."
  },
  {
    "id": 69,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "FRBM",
    "q": "In the FRBM Act, the clause permitting deviation from the annual fiscal deficit target during calamity and national security is the ______:",
    "opts": [
      "Swing Clause",
      "Rule Clause",
      "Escape Clause",
      "Backup Clause",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Escape clause allows deviation from the fiscal-deficit target during calamities/national security events."
  },
  {
    "id": 70,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Regulators",
    "q": "The corporate debt market in India is regulated by:",
    "opts": [
      "RBI",
      "NABARD",
      "SEBI",
      "PFRDA",
      "SIDBI"
    ],
    "ans": "C",
    "exp": "SEBI regulates the corporate debt securities market."
  },
  {
    "id": 71,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Marginal Costing",
    "q": "Selling price Rs 100, P/V ratio 40%, fixed cost Rs 30,000. Calculate the break-even point.",
    "opts": [
      "120 units",
      "300 units",
      "400 units",
      "750 units",
      "1200 units"
    ],
    "ans": "D",
    "exp": "BEP = 30,000 / (40% x 100) = 750 units."
  },
  {
    "id": 72,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Dividend (Ch. VIII)",
    "q": "Declaration of dividends is provided in which Section of the Companies Act, 2013?",
    "opts": [
      "Section 123",
      "Section 148",
      "Section 8",
      "Section 412",
      "Section 224"
    ],
    "ans": "A",
    "exp": "Section 123 deals with declaration and payment of dividend."
  },
  {
    "id": 73,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Directors (Ch. XI)",
    "q": "Removal of a director is provided in which Section of the Companies Act, 2013?",
    "opts": [
      "Section 154",
      "Section 143",
      "Section 128",
      "Section 169",
      "Section 177"
    ],
    "ans": "D",
    "exp": "Section 169 allows removal of a director before expiry of term by ordinary resolution."
  },
  {
    "id": 74,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Anyone between the ages of ______ and ______ years may open an NPS account:",
    "opts": [
      "18, 65",
      "18, 70",
      "18, 75",
      "18, 60",
      "None of the above"
    ],
    "ans": "B",
    "exp": "NPS entry age for citizens is 18-70 years."
  },
  {
    "id": 75,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "Pension Policy",
    "q": "The Government of India commissioned the national project titled 'OASIS' to examine old-age income security policy in which year?",
    "opts": [
      "1999",
      "2000",
      "1991",
      "2003",
      "None of the above"
    ],
    "ans": "A",
    "exp": "The OASIS project on old-age income security was commissioned in 1999."
  },
  {
    "id": 76,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Money Supply",
    "q": "M3 in money supply is known as:",
    "opts": [
      "Narrow Money",
      "Broad Money",
      "Shallow Money",
      "Deep Money",
      "Easy Money"
    ],
    "ans": "B",
    "exp": "M3 (broad money) = currency with public + demand deposits + time deposits."
  },
  {
    "id": 77,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Demand Theory",
    "q": "The demand curve for Giffen goods is:",
    "opts": [
      "Downward sloping",
      "Upward sloping",
      "Not sloping",
      "Non-existent",
      "None of the above"
    ],
    "ans": "B",
    "exp": "Giffen goods violate the law of demand, so their demand curve slopes upward."
  },
  {
    "id": 78,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Ratio Analysis",
    "q": "Credit Sales = Rs 72,00,000 and Average Accounts Receivable = Rs 12,00,000. Calculate the average age of receivables.",
    "opts": [
      "60 days",
      "45 days",
      "90 days",
      "180 days",
      "72 days"
    ],
    "ans": "A",
    "exp": "(12 / 72) x 365 = approx 61 days - closest to 60 days."
  },
  {
    "id": 79,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Ratio Analysis",
    "q": "EBIT to Sales Ratio is also known as:",
    "opts": [
      "Interest Coverage Ratio",
      "Proprietary Ratio",
      "Assets Turnover Ratio",
      "Return on Capital Employed Ratio",
      "Operating Profit Ratio"
    ],
    "ans": "E",
    "exp": "EBIT / sales measures the operating profit margin."
  },
  {
    "id": 80,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Leadership",
    "q": "______ is a managerial approach where a dominant authority figure acts as a patriarch/matriarch and treats employees like an extended family:",
    "opts": [
      "Paternalistic Leadership",
      "Democratic Leadership",
      "Laissez Faire Leadership",
      "Both B and C",
      "None of the above"
    ],
    "ans": "A",
    "exp": "Paternalistic leader plays a father/mother-figure role with high control and high welfare."
  },
  {
    "id": 81,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Derivatives",
    "q": "Which of the following is NOT a derivative?",
    "opts": [
      "Forwards",
      "Futures",
      "Options",
      "Swaps",
      "Debentures"
    ],
    "ans": "E",
    "exp": "Debentures are debt instruments, not derivatives."
  },
  {
    "id": 82,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Derivatives",
    "q": "______ measures the rate of decline in the value of an option due to the passage of time:",
    "opts": [
      "Delta",
      "Gamma",
      "Rho",
      "Theta",
      "Vega"
    ],
    "ans": "D",
    "exp": "Theta = time decay of an option's value."
  },
  {
    "id": 83,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Board Meetings (Ch. XII)",
    "q": "The quorum for a meeting of the Board of Directors shall be:",
    "opts": [
      "One-third of the total strength of the board",
      "Two directors",
      "One-fourth of the total strength of the board",
      "Either (a) or (b), whichever is higher",
      "Either (b) or (c), whichever is higher"
    ],
    "ans": "D",
    "exp": "Section 174: quorum is 1/3 of total strength or two directors, whichever is higher."
  },
  {
    "id": 84,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Audit & Auditors (Ch. X)",
    "q": "The CAG appoints the auditor as per which Section of the Companies Act, 2013?",
    "opts": [
      "Section 123(2)",
      "Section 139(7)",
      "Section 144(4)",
      "Section 152(2)",
      "Section 177(5)"
    ],
    "ans": "B",
    "exp": "Section 139(7): Comptroller & Auditor General appoints auditors of government companies."
  },
  {
    "id": 85,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "Pension Schemes",
    "q": "Ministry of Electronics & IT launched ______ to issue digital life certificates to pensioners:",
    "opts": [
      "Jeevan Aaye Portal",
      "Jeevan Jyoti Portal",
      "Jeevan Praman Portal",
      "Atal Praman Portal",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Jeevan Pramaan is the Aadhaar-based digital life certificate system."
  },
  {
    "id": 86,
    "year": 2021,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "Taxation",
    "q": "Under which Section of the Income Tax Act are deductions available for contributions to NPS/APY?",
    "opts": [
      "80A",
      "80B",
      "80C",
      "80CCD",
      "None of the above"
    ],
    "ans": "D",
    "exp": "Section 80CCD provides deduction for NPS (and APY-linked) contributions."
  },
  {
    "id": 87,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Depreciation",
    "q": "Asset valued at Rs 10,00,000, current scrap value Rs 4,00,000, useful life 3 years. Depreciation under straight line method:",
    "opts": [
      "Rs 1,00,000",
      "Rs 2,00,000",
      "Rs 3,00,000",
      "Rs 4,00,000",
      "Rs 5,00,000"
    ],
    "ans": "B",
    "exp": "(10,00,000 - 4,00,000) / 3 = Rs 2,00,000 per year."
  },
  {
    "id": 88,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "ESOP",
    "q": "What is the minimum vesting period for an Employee Stock Option Plan (ESOP)?",
    "opts": [
      "4 years",
      "3 years",
      "2 years",
      "1 year",
      "None of the above"
    ],
    "ans": "D",
    "exp": "SEBI requires a minimum of one year between grant and vesting of options."
  },
  {
    "id": 89,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Cash Flow Statement",
    "q": "As per Ind AS 7, bank overdraft repayable on demand is reflected in the cash flow statement as:",
    "opts": [
      "Cash flow from operating activities",
      "Cash flow from financing activities",
      "Cash and Cash Equivalents",
      "Cash flow from investing activities",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Demand overdrafts form part of cash & cash equivalents under Ind AS 7."
  },
  {
    "id": 90,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Capital Markets",
    "q": "Which mechanism is used to bring price stability in the share price during/after an IPO?",
    "opts": [
      "Circuit Breakers",
      "White washing",
      "Green-shoe option",
      "Underwriting",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Green-shoe (over-allotment) option is a post-listing price-stabilisation tool."
  },
  {
    "id": 91,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Regulators",
    "q": "Which body regulates unlisted companies in the corporate sector of India?",
    "opts": [
      "RBI",
      "SEBI",
      "Ministry of Corporate Affairs",
      "IFFCI",
      "IFSCA"
    ],
    "ans": "C",
    "exp": "MCA administers the Companies Act, 2013 for corporate entities."
  },
  {
    "id": 92,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Inflation",
    "q": "Which of the following is NOT a component of core inflation?",
    "opts": [
      "Clothing Prices",
      "Vehicle Prices",
      "Housing Prices",
      "Food prices and Fuel prices",
      "Prices of miscellaneous products"
    ],
    "ans": "D",
    "exp": "Core inflation excludes volatile food and energy (fuel) segments."
  },
  {
    "id": 93,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Lean Tools",
    "q": "Which wastage-controlling technique means continuous improvement?",
    "opts": [
      "Six Sigma",
      "Total Productive Management (TPM)",
      "Kaizen",
      "Just-In-Time",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Kaizen literally means continual, incremental improvement."
  },
  {
    "id": 94,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Prospectus (Ch. III)",
    "q": "The red herring prospectus has to be filed with the RoC at least how many days before the open issue?",
    "opts": [
      "7 days",
      "6 days",
      "3 days",
      "2 days",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Section 32: RHP filed with RoC at least 3 days before opening of the issue."
  },
  {
    "id": 95,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Board Meetings (Ch. XII)",
    "q": "For public companies, what is the maximum time gap between two consecutive Board meetings?",
    "opts": [
      "120 days",
      "180 days",
      "90 days",
      "80 days",
      "None of the above"
    ],
    "ans": "A",
    "exp": "Section 173: not more than 120 days may intervene between two board meetings."
  },
  {
    "id": 96,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Directors (Ch. XI)",
    "q": "How many independent directors should a listed company have?",
    "opts": [
      "At least 1/3 of total directors",
      "At least 1/4 of total directors",
      "At least 50% of total directors",
      "At least 1/5 of total directors",
      "None of the above"
    ],
    "ans": "A",
    "exp": "Listed public companies need at least one-third independent directors."
  },
  {
    "id": 97,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Which of the following persons is NOT eligible to apply for the National Pension System?",
    "opts": [
      "Non-Resident Indians",
      "Resident of India",
      "Overseas Citizen of India",
      "Partial Resident of India",
      "Person of Indian Origin (PIO)"
    ],
    "ans": "E",
    "exp": "PIOs and HUFs are not eligible for NPS; NRIs and OCIs can join."
  },
  {
    "id": 98,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "If a subscriber opts for upgradation of pension contribution under APY, the differential contribution is payable at what rate?",
    "opts": [
      "10% monthly compounding",
      "8% monthly compounding",
      "9% monthly compounding",
      "1.5% monthly compounding",
      "None of the above"
    ],
    "ans": "B",
    "exp": "APY upgrade differential is charged at 8% p.a. on monthly compounding."
  },
  {
    "id": 99,
    "year": 2022,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Inflation",
    "q": "The Phillips curve shows the relation between:",
    "opts": [
      "Inflation and Government spendings",
      "Tax Rates and Unemployment",
      "Tax Rates and employment",
      "Inflation and Unemployment",
      "Inflation and employment"
    ],
    "ans": "D",
    "exp": "Phillips curve shows an inverse inflation-unemployment trade-off."
  },
  {
    "id": 100,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Rights Issue",
    "q": "Calculate the ex-right price if a company opts for a rights issue at Rs 120, current market price is Rs 240, and 1 right share is offered for every 2 existing shares:",
    "opts": [
      "100",
      "400",
      "300",
      "200",
      "500"
    ],
    "ans": "D",
    "exp": "(2 x 240 + 120) / 3 = Rs 200."
  },
  {
    "id": 101,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Accounting Concepts",
    "q": "Which accounting principle says revenue and expenses incurred to earn that revenue must belong to the same accounting period?",
    "opts": [
      "Entity Concept",
      "Accrual Concept",
      "Going Concept",
      "Matching Concept",
      "Revenue Recognition Concept"
    ],
    "ans": "D",
    "exp": "Matching concept: expenses are charged to the period of the related revenue."
  },
  {
    "id": 102,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Finance Commission",
    "q": "For devolution of funds under the 15th Finance Commission, what weightage has been assigned to Income Distance?",
    "opts": [
      "41.5%",
      "40%",
      "43%",
      "35%",
      "45%"
    ],
    "ans": "E",
    "exp": "15th FC assigned 45% weightage to the income-distance criterion."
  },
  {
    "id": 103,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Valuation",
    "q": "When book value per share exceeds market value and P/B ratio is less than 1, the shares are said to be:",
    "opts": [
      "Over-valued",
      "Under-valued",
      "In equilibrium",
      "Slightly over-valued",
      "None of the above"
    ],
    "ans": "B",
    "exp": "P/B below 1 means market price is below book value -> undervalued."
  },
  {
    "id": 104,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "Inflation",
    "q": "Very high unemployment with upward pressure on prices is termed as:",
    "opts": [
      "Boom",
      "Stagflation",
      "Depression",
      "Recession",
      "None of the above"
    ],
    "ans": "B",
    "exp": "Stagflation = high unemployment combined with rising prices."
  },
  {
    "id": 105,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Inventory Control",
    "q": "Annual demand = 5,000, carrying cost per unit = Rs 10, set-up cost = Rs 1,000. Calculate the economic batch quantity:",
    "opts": [
      "1,054 units",
      "1,000 units",
      "1,058 units",
      "1,060 units",
      "None of the above"
    ],
    "ans": "B",
    "exp": "EOQ = sqrt(2 x 5000 x 1000 / 10) = 1,000 units."
  },
  {
    "id": 106,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Public Issue (Ch. IV)",
    "q": "As per Section 39, what is the minimum application money a company should receive on issue of securities?",
    "opts": [
      "10% of nominal amount",
      "1% of nominal amount",
      "15% of nominal amount",
      "5% of nominal amount",
      "25% of nominal amount"
    ],
    "ans": "E",
    "exp": "Section 39 requires application money of at least 25% of nominal value."
  },
  {
    "id": 107,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Directors (Ch. XI)",
    "q": "Consent of a director to hold office must be submitted to the RoC within how many days?",
    "opts": [
      "18 days",
      "30 days",
      "45 days",
      "50 days",
      "12 days"
    ],
    "ans": "B",
    "exp": "Section 152: director's written consent filed with RoC within 30 days."
  },
  {
    "id": 108,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "PMVVY",
    "q": "What is the maximum amount of loan that can be availed by an applicant under PMVVY?",
    "opts": [
      "45% of purchase price",
      "65% of purchase price",
      "55% of purchase price",
      "70% of purchase price",
      "75% of purchase price"
    ],
    "ans": "E",
    "exp": "Loan of up to 75% of purchase price is allowed after 3 years."
  },
  {
    "id": 109,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "Gratuity",
    "q": "Gratuity is payable to an employee only if he/she has rendered continuous service for ______ years:",
    "opts": [
      "6 years",
      "5 years",
      "3 years",
      "4 years",
      "2 years"
    ],
    "ans": "B",
    "exp": "Payment of Gratuity Act requires 5 years of continuous service (with exceptions)."
  },
  {
    "id": 110,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Accounting Process",
    "q": "In the accounting process, which of the following represents the final step?",
    "opts": [
      "Identification of transactions",
      "Summary and analysis of financial data",
      "Communication of financial information",
      "Recording of transactions",
      "None of the above"
    ],
    "ans": "C",
    "exp": "The accounting cycle ends with communicating results to users."
  },
  {
    "id": 111,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Ratio Analysis",
    "q": "Calculate current ratio: Cash 1,00,000; investments (<1 yr) 50,000; inventory 75,000; creditors 15,000; bank overdraft 1,25,000; outstanding expenses 10,000:",
    "opts": [
      "1.5 : 1",
      "1 : 1",
      "1.2 : 1",
      "1 : 2",
      "1.8 : 1"
    ],
    "ans": "A",
    "exp": "CA = 2,25,000; CL = 1,50,000 -> 1.5 : 1."
  },
  {
    "id": 112,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "ESOP",
    "q": "In context of ESOPs, which is a pre-requisite for an employee to exercise the right to purchase shares?",
    "opts": [
      "Lock-in Period",
      "Grant Date",
      "Vesting",
      "Exercise Price",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Options must vest before they can be exercised."
  },
  {
    "id": 113,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Leadership",
    "q": "What is the other name for Laissez-faire leadership?",
    "opts": [
      "Participative Leadership",
      "Delegative Leadership",
      "Autocratic Leadership",
      "Transactional Leadership",
      "Transformational Leadership"
    ],
    "ans": "B",
    "exp": "Laissez-faire = hands-off, delegative style."
  },
  {
    "id": 114,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Motivation",
    "q": "Which of the following are the two factors of Herzberg's Two-Factor Theory of Motivation?",
    "opts": [
      "Motivation and Self-Actualisation",
      "Hygiene Factors and Motivators",
      "Extrinsic Rewards and Intrinsic Rewards",
      "Leadership and Supervision",
      "Needs and Wants"
    ],
    "ans": "B",
    "exp": "Herzberg classified factors into hygiene factors and motivators."
  },
  {
    "id": 115,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Financial Markets",
    "q": "In which of the following markets are treasury bills issued?",
    "opts": [
      "Capital Market",
      "Money Market",
      "Foreign Exchange Market",
      "Commodity Market",
      "Derivatives Market"
    ],
    "ans": "B",
    "exp": "T-bills are short-term government money-market instruments."
  },
  {
    "id": 116,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "RBI",
    "q": "What is the paid-up capital of the Reserve Bank of India?",
    "opts": [
      "Rs 5 crore",
      "Rs 50 crore",
      "Rs 5,000 crore",
      "Rs 50,000 crore",
      "Rs 1 lakh crore"
    ],
    "ans": "A",
    "exp": "RBI was constituted with a paid-up capital of Rs 5 crore."
  },
  {
    "id": 117,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Lean Tools",
    "q": "Which of the following is NOT a feature of a Lean System?",
    "opts": [
      "Continuous improvement (Kaizen)",
      "Just-in-time production",
      "Waste elimination",
      "Push system",
      "Respect for people"
    ],
    "ans": "D",
    "exp": "Lean uses pull systems; push (make-to-stock) is not a lean feature."
  },
  {
    "id": 118,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Six Sigma",
    "q": "Employees who handle Six Sigma projects along with their regular job responsibilities are known as:",
    "opts": [
      "Black Belt",
      "Green Belt",
      "Master Black Belt",
      "Yellow Belt",
      "Champion"
    ],
    "ans": "B",
    "exp": "Green Belts work on Six Sigma projects part-time alongside their normal role."
  },
  {
    "id": 119,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Prospectus (Ch. III)",
    "q": "Under Section 32, when a company plans to raise funds, which document is filed?",
    "opts": [
      "Return of Allotment (PAS-3)",
      "Shelf Prospectus",
      "Red Herring Prospectus",
      "Statement in Lieu of Prospectus",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Section 32 governs the red herring prospectus for book-built issues."
  },
  {
    "id": 120,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "IEPF (Ch. VIII)",
    "q": "Under Section 125, which fund is established?",
    "opts": [
      "Capital Redemption Reserve",
      "Investor Education and Protection Fund",
      "Securities Premium Fund",
      "Debenture Redemption Fund",
      "Securities Premium Reserve"
    ],
    "ans": "B",
    "exp": "Section 125 provides for the Investor Education and Protection Fund (IEPF)."
  },
  {
    "id": 121,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "If a person joins APY at 18, the minimum monthly contribution for a guaranteed Rs 1,000 pension at 60 is:",
    "opts": [
      "Rs 42",
      "Rs 84",
      "Rs 126",
      "Rs 210",
      "Rs 240"
    ],
    "ans": "A",
    "exp": "APY chart: entry age 18 for Rs 1,000 pension = Rs 42 per month."
  },
  {
    "id": 122,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Subscriber has Rs 50,000 in NPS. Maximum partial withdrawal and the contribution period required:",
    "opts": [
      "Rs 10,000 - after 3 years",
      "Rs 12,500 - after 3 years",
      "Rs 15,000 - after 5 years",
      "Rs 20,000 - after 7 years",
      "Rs 25,000 - after 10 years"
    ],
    "ans": "B",
    "exp": "Maximum 25% of contributions, permitted after 3 years of contribution."
  },
  {
    "id": 123,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Demand Theory",
    "q": "What is the Law of Demand?",
    "opts": [
      "Price rises, quantity demanded also rises",
      "Price falls, quantity demanded unchanged",
      "Price rises, quantity demanded falls",
      "Supply increases, demand decreases",
      "Supply decreases, demand decreases"
    ],
    "ans": "C",
    "exp": "Inverse price-quantity relationship, ceteris paribus."
  },
  {
    "id": 124,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Rights Issue",
    "q": "Current market price Rs 125; right shares at Rs 50 each at 20% premium in ratio 1:5. Ex-right price and value of right:",
    "opts": [
      "Ex-right Rs 114.16; value of right Rs 10.84",
      "Ex-right Rs 112.50; value Rs 12.50",
      "Ex-right Rs 95.00; value Rs 30.00",
      "Ex-right Rs 110.00; value Rs 15.00",
      "Ex-right Rs 100.83; value Rs 24.17"
    ],
    "ans": "A",
    "exp": "(5 x 125 + 60) / 6 = 114.16; right value = 125 - 114.16 = 10.84."
  },
  {
    "id": 125,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Inventory (AS 2)",
    "q": "Inventory bought for Rs 35 lakhs, 60% sold; rest expected to sell for Rs 16 lakhs less 15% sales commission. Reporting value of remaining inventory:",
    "opts": [
      "Rs 16.0 lakhs",
      "Rs 15.0 lakhs",
      "Rs 14.4 lakhs",
      "Rs 13.6 lakhs",
      "Rs 12.0 lakhs"
    ],
    "ans": "D",
    "exp": "NRV = 16,00,000 - 15% = Rs 13,60,000 (cost 14L > NRV, so value at NRV)."
  },
  {
    "id": 126,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Leadership",
    "q": "Goleman's theory: 'Do as I instruct' - identify this leadership style:",
    "opts": [
      "Affiliative Leadership",
      "Coercive Leadership",
      "Democratic Leadership",
      "Pacesetting Leadership",
      "Coaching Leadership"
    ],
    "ans": "B",
    "exp": "Coercive leadership demands compliance and strict obedience."
  },
  {
    "id": 127,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Organisational Behaviour",
    "q": "Which best describes the Pygmalion effect?",
    "opts": [
      "Negative feedback leads to poor performance",
      "Higher expectations lead to improved performance - a self-fulfilling prophecy",
      "People imitate others' behaviour",
      "Low expectations lead to higher achievements",
      "Impact of workplace environment"
    ],
    "ans": "B",
    "exp": "Pygmalion effect is a positive self-fulfilling prophecy (expectations -> performance)."
  },
  {
    "id": 128,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Regulators",
    "q": "Which of the following is NOT a subsidiary of RBI?",
    "opts": [
      "REBIT",
      "DICGC",
      "IFTAS",
      "PFRDA",
      "BRBNMPL"
    ],
    "ans": "D",
    "exp": "PFRDA is an independent statutory regulator under the PFRDA Act, 2013 - not an RBI subsidiary."
  },
  {
    "id": 129,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Derivatives",
    "q": "Investor puts Rs 20 lakhs in futures at Rs 1,050; lot size 100, beta 1.25. Required number of contracts to hedge:",
    "opts": [
      "24",
      "25",
      "16",
      "20",
      "10"
    ],
    "ans": "A",
    "exp": "Hedge value = 1.25 x 20L = 25L; contract value = 1.05L -> approx 24 contracts."
  },
  {
    "id": 130,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Cost Classification",
    "q": "Which type of costing method is used in the sugar industry?",
    "opts": [
      "Job Costing",
      "Batch Costing",
      "Process Costing",
      "Contract Costing",
      "Unit Costing"
    ],
    "ans": "C",
    "exp": "Continuous homogeneous production uses process costing."
  },
  {
    "id": 131,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Target Costing",
    "q": "50,000 mixer grinders at Rs 5,000 each; investment Rs 60 crore, desired ROI 15%. Required cost per unit:",
    "opts": [
      "Rs 4,200",
      "Rs 4,350",
      "Rs 3,200",
      "Rs 4,600",
      "Rs 4,750"
    ],
    "ans": "C",
    "exp": "Profit needed = 15% x 60cr = 9cr -> Rs 1,800/unit; 5,000 - 1,800 = Rs 3,200."
  },
  {
    "id": 132,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Audit & Auditors (Ch. X)",
    "q": "When an auditor resigns, to whom must the auditor intimate the resignation?",
    "opts": [
      "Shareholders",
      "Registrar of Companies (RoC)",
      "Board of Directors",
      "Ministry of Corporate Affairs",
      "SEBI"
    ],
    "ans": "B",
    "exp": "Section 140(2): auditor on resignation informs the RoC within 30 days."
  },
  {
    "id": 133,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Definitions",
    "q": "Who is considered a 'small shareholder' based on the value of shares held?",
    "opts": [
      "Less than Rs 50,000",
      "Less than Rs 10,000",
      "Less than Rs 20,000",
      "Less than Rs 1,00,000",
      "Less than Rs 5,000"
    ],
    "ans": "C",
    "exp": "Section 2(89): aggregate value of shares not exceeding Rs 20,000."
  },
  {
    "id": 134,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Who is eligible to join the NPS All Citizens Model in terms of age and nationality?",
    "opts": [
      "Indian citizen 18-60",
      "Indian citizen or NRI 18-65",
      "Indian citizen 18-70",
      "Indian citizen, OCI, NRI 18-70",
      "Only Indian citizens 21-60"
    ],
    "ans": "D",
    "exp": "NPS entry is open to citizens/OCIs/NRIs aged 18-70."
  },
  {
    "id": 135,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "APY subscriber aged 18 wanting Rs 5,000/month pension at 60 - monthly, quarterly, half-yearly contributions:",
    "opts": [
      "Rs 210 / 630 / 1,260",
      "Rs 210 / 626 / 1,239",
      "Rs 250 / 750 / 1,500",
      "Rs 264 / 792 / 1,584",
      "Rs 289 / 867 / 1,734"
    ],
    "ans": "B",
    "exp": "Official APY contribution chart for entry age 18, pension Rs 5,000."
  },
  {
    "id": 136,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS Exit",
    "q": "Corpus Rs 24,50,000 at retirement; annuity rate 6%. Lump sum and annuity purchase amounts:",
    "opts": [
      "Lump sum 14,70,000; annuity 9,80,000",
      "Lump sum 14,70,000; annuity 14,70,000",
      "Lump sum 14,70,000; annuity 510",
      "Lump sum 15,30,000; annuity 14,70,000",
      "Lump sum 14,70,000; annuity 850"
    ],
    "ans": "A",
    "exp": "Minimum 40% of corpus must buy annuity: 9.8L; balance 14.7L as lump sum."
  },
  {
    "id": 137,
    "year": 2021,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "National Income",
    "q": "GNP = GDP + ______",
    "opts": [
      "Taxes",
      "Subsidies",
      "Net Factor Income from Abroad",
      "Both A and B",
      "None of the above"
    ],
    "ans": "C",
    "exp": "GNP = GDP + NFIA. NFIA = factor income received from abroad - factor income paid abroad."
  },
  {
    "id": 138,
    "year": 2022,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "National Income",
    "q": "What is the correct formula to calculate Net National Product?",
    "opts": [
      "GNP - NFIA",
      "GNP - Depreciation",
      "GNP + Depreciation",
      "GNP - Indirect Taxes + Subsidies",
      "GNP + NFIA"
    ],
    "ans": "B",
    "exp": "NNP = GNP - Depreciation; to convert Gross to Net we deduct depreciation."
  },
  {
    "id": 139,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "While determining the share of States in vertical devolution, the Finance Commission primarily operates with which guiding principle?",
    "opts": [
      "Correcting vertical fiscal imbalances between the Centre and States",
      "Prioritizing development of local governments (Panchayats & Municipalities)",
      "Ensuring uniform tax rates across all States",
      "Maximizing foreign direct investment in States",
      "Linking fund transfers exclusively to performance audits"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 140,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Treasury Bill",
    "q": "In which of the following markets are the treasury bills issued?",
    "opts": [
      "Capital Market",
      "Money Market",
      "Foreign Exchange Market",
      "Commodity Market",
      "Derivatives Market"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 141,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Finance",
    "q": "Why did the Reserve Bank of India (RBI) intensify its use of forward and spot foreign exchange (FX) interventions during the Russia–Ukraine war?",
    "opts": [
      "To completely halt all capital outflows from the country",
      "To stabilize the rupee by managing volatility as foreign investors pulled out",
      "To increase India’s foreign exchange reserves during the crisis",
      "To promote long-term rupee appreciation against the dollar",
      "To eliminate the need for RBI to monitor market movements"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 142,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Zero-Rated Supply",
    "q": "Which of the following is considered a zero-rated supply under GST?",
    "opts": [
      "Supply of fresh fruits and vegetables in the domestic market",
      "Export of goods or services",
      "Education services by schools up to higher secondary",
      "Health care services provided by a hospital",
      "Renting residential dwellings for personal use"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 143,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "Pension Sector",
    "q": "Which of the following correctly matches the regulators for the Pension Sector, Regional Rural Banks (RRBs), and Mutual Funds, respectively?",
    "opts": [
      "PFRDA, RBI, SEBI",
      "SEBI, RBI, PFRDA",
      "RBI, NABARD, SEBI",
      "PFRDA, NABARD, SEBI",
      "NABARD, SEBI, RBI"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 144,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "EPS",
    "q": "The Aadhaar-enabled Payment System (AEPS) allows for interoperability between banks, enabling customers of any bank to access their accounts through micro-ATMs or other biometric-enabled devices provided by the business correspondent of any bank. Which organisation facilitates this system?",
    "opts": [
      "Reserve Bank of India (RBI)",
      "Securities and Exchange Board of India (SEBI)",
      "National Payments Corporation of India (NPCI)",
      "Unique Identification Authority of India (UIDAI)",
      "State Bank of India (SBI)"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 145,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Finance",
    "q": "Why is the Reserve Bank of India (RBI) relying more on the Standing Deposit Facility (SDF) instead of the Reverse Repo Rate?",
    "opts": [
      "SDF allows banks to borrow from RBI for longer tenors",
      "SDF is collateral-free, requiring no government securities",
      "Reverse Repo provides a higher interest rate than SDF",
      "Reverse Repo is only for foreign banks",
      "SDF is linked directly to government bond yields"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 146,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Stablecoins",
    "q": "Which of the following is a key benefit of stablecoins?",
    "opts": [
      "They guarantee unlimited profits through cryptocurrency trading",
      "They eliminate the need for all banking regulations worldwide",
      "They provide price stability by pegging value to assets like USD or gold",
      "They ensure that all cryptocurrencies are automatically legal tender",
      "They prevent cyber fraud and hacking completely"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 147,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Finance",
    "q": "What is the role of SEBI in implementing the guidelines of Business Responsibility and Sustainability Reporting (BRSR)?",
    "opts": [
      "SEBI mandates top listed companies to disclose ESG-related information through BRSR",
      "SEBI itself prepares the sustainability report for listed companies",
      "SEBI provides financial incentives to companies that publish BRSR",
      "SEBI restricts foreign investment in companies not filing BRSR",
      "SEBI exempts PSUs from following BRSR guidelines"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 148,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Finance",
    "q": "What is the paid-up capital of the Reserve Bank of India (RBI)?",
    "opts": [
      "Rs 5 crore",
      "Rs 50 crore",
      "Rs 5,000 crore",
      "Rs 50,000 crore",
      "Rs 1 lakh crore"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 149,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Stablecoins",
    "q": "What is the main outcome of the GENIUS Act (Guiding and Establishing National Innovation for U.S. Stablecoins)?",
    "opts": [
      "It allows any person to issue stablecoins without oversight",
      "It requires stablecoins to be backed 1:1 with U.S. dollars or equivalent liquid assets",
      "It permits stablecoin issuers to pay interest to holders freely",
      "It abolishes all regulatory standards for crypto in the U.S.",
      "It classifies stablecoins as securities under the SEC"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 150,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Leadership",
    "q": "What is the other name for Laissez-faire leadership?",
    "opts": [
      "Participative Leadership",
      "Delegative Leadership",
      "Autocratic Leadership",
      "Transactional Leadership",
      "Transformational Leadership"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 151,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Motivation",
    "q": "Which of the following are two factors of Herzberg’s Two-Factor Theory of Motivation?",
    "opts": [
      "Motivation and Self-Actualisation",
      "Hygiene Factors and Motivators",
      "Extrinsic Rewards and Intrinsic Rewards",
      "Leadership and Supervision",
      "Needs and Wants"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 152,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Theory",
    "q": "According to Douglas McGregor’s Theory X, what assumption is made about people?",
    "opts": [
      "People are self-motivated and seek responsibility",
      "People require close supervision and direction",
      "People naturally enjoy work and find it satisfying",
      "People are creative and capable of self-control",
      "People thrive on challenges and innovation"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 153,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Communication",
    "q": "Which of the following is an example of upward communication?",
    "opts": [
      "Assigning tasks to subordinates",
      "Soliciting feedback from employees",
      "Announcing company policies",
      "Giving performance appraisals",
      "Conducting team meetings"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 154,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Economics",
    "q": "What is the Law of Demand?",
    "opts": [
      "When the price of a good rises, the quantity demanded also rises.",
      "When the price of a good falls, the quantity demanded remains unchanged.",
      "When the price of a good rises, the quantity demanded falls.",
      "When the supply of goods increases, its demand decreases.",
      "When the supply of goods decreases, its demand decreases."
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 155,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "General",
    "topic": "General",
    "q": "Manufacturing comes under which of the following sectors of the economy?",
    "opts": [
      "Primary Sector",
      "Secondary Sector",
      "Tertiary Sector",
      "Quaternary Sector",
      "Quinary Sector"
    ],
    "ans": "E",
    "exp": "Answer: E"
  },
  {
    "id": 156,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Finance",
    "topic": "Finance",
    "q": "Which of the following is not a non-tax revenue receipt?",
    "opts": [
      "Interest Receipts",
      "Borrowings",
      "User Fees",
      "Dividend",
      "Penalties"
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 157,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Economics",
    "topic": "Economics",
    "q": "What distinguishes Keynes’ Consumption Function from Friedman’s Permanent Income Hypothesis?",
    "opts": [
      "Depends on Permanent Income, Depends on Current Disposable Income",
      "Depends on Price level, Random in nature",
      "Influenced by interest rate, related to 0 income",
      "Declining MPC, Relatively Constant Consumption Pattern",
      "Permanent Income Hypothesis is influenced by Transitory Income Fluctuations"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 158,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "General",
    "topic": "General",
    "q": "The World Bank classifies countries as per capita income into different categories. Which of the following categories is not included?",
    "opts": [
      "Low Income",
      "Lower-Middle Income",
      "Upper-Middle Income",
      "High Net Worth Individuals",
      "High Income"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 159,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "According to the Companies Act, 2013, under Section 32, when a company plans to raise funds, which document is filed?",
    "opts": [
      "Return of Allotment (Form PAS-3)",
      "Shelf Prospectus",
      "Red Herring Prospectus",
      "Statement in Lieu of Prospectus",
      "None of the above"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 160,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Section 125",
    "q": "Under Section 125 of the Companies Act, 2013, which of the following fund is established?",
    "opts": [
      "Capital Redemption Reserve",
      "Investor Education and Protection Fund",
      "Securities Premium Fund",
      "Debenture Redemption Fund",
      "Securities Premium Reserve"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 161,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Private Placement",
    "q": "As per the Companies Act, 2013, when a company makes a private placement of securities, it must allot the securities within how many days from the date of receipt of application money?",
    "opts": [
      "30 days",
      "60 days",
      "75 days",
      "90 days",
      "15 days"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 162,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Dividend",
    "q": "As per the Companies Act, 2013, once a company declares a dividend, it must be paid within how many days from the date of declaration?",
    "opts": [
      "30 days",
      "60 days",
      "75 days",
      "90 days",
      "15 days"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 163,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "General",
    "topic": "General",
    "q": "A public company cannot issue which of the following?",
    "opts": [
      "Priority Shares",
      "Bonus Shares",
      "Equity Shares",
      "Right Issue",
      "Preference Shares"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 164,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Audit",
    "q": "Under Section 143(6) of the Companies Act, 2013, the time period given to the Comptroller and Auditor General of India (CAG) for review of the audit report is how many days?",
    "opts": [
      "30 days",
      "60 days",
      "75 days",
      "15 days",
      "90 days"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 165,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Costing",
    "q": "Which of the following is NOT a feature of a Lean System?",
    "opts": [
      "Continuous improvement (Kaizen)",
      "Just-in-time production",
      "Waste elimination",
      "Push system",
      "Respect for people"
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 166,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Six Sigma",
    "q": "In Six Sigma methodology, employees who handle Six Sigma projects along with their regular job responsibilities are known as:",
    "opts": [
      "Black Belt",
      "Green Belt",
      "Master Black Belt",
      "Yellow Belt",
      "Champion"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 167,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "General",
    "topic": "General",
    "q": "Total Sales – Break Even Sales = _____________",
    "opts": [
      "Contribution Margin",
      "Margin of Safety",
      "Profit",
      "Fixed Costs",
      "Variable Costs"
    ],
    "ans": "E",
    "exp": "Answer: E"
  },
  {
    "id": 168,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "General",
    "topic": "General",
    "q": "A company planned to produce 200 units. The normal loss is 10%, and the actual output is 150 units. The abnormal gain or loss is:",
    "opts": [
      "Abnormal Gain of 20 units",
      "Abnormal Loss of 30 units",
      "Abnormal Gain of 10 units",
      "Abnormal Loss of 15 units",
      "No abnormal loss or gain"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 169,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "General",
    "topic": "General",
    "q": "Which of the following is an incorrect interpretation of DMAIC?",
    "opts": [
      "Define",
      "Measure",
      "Analyze",
      "Design",
      "Control"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 170,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Costing",
    "q": "Batch costing is classified under which type of costing?",
    "opts": [
      "Job Costing",
      "Process Costing",
      "Contract Costing",
      "Operating Costing",
      "Standard Costing"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 171,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Costing",
    "q": "Which of the following types of costing includes both variable and fixed costs in the cost of all products and services?",
    "opts": [
      "Job Costing",
      "Process Costing",
      "Contract Costing",
      "Operating Costing",
      "Absorption Costing"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 172,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Costing",
    "q": "Under Kaizen, which type of improvement is emphasized?",
    "opts": [
      "Radical improvement",
      "Gradual improvement",
      "One-time improvement",
      "Technological improvement",
      "Process redesign"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 173,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Management",
    "topic": "Management",
    "q": "In production and service management, the maximum time allowed to serve a customer or produce a unit is referred to as:",
    "opts": [
      "Cycle Time",
      "Lead Time",
      "Takt Time",
      "Throughput Time",
      "Processing Time"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 174,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Commerce & Accountancy",
    "q": "In the accounting process, which of the following represents the final step?",
    "opts": [
      "Identification of transactions",
      "Summary and analysis of financial data",
      "Communication of financial information",
      "Recording of transactions",
      "None of the above"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 175,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Commerce & Accountancy",
    "q": "Calculate Current Ratio from the following: • Cash= 1,00,000 • Disposable Investments (less than 1 year)= 50,000 • Inventory= 75,000 • Creditors= 15,000 • Bank Overdraft = 1,25,000 • Outstanding Expenses= 10,000",
    "opts": [
      "1.5:1",
      "1:1",
      "1:1",
      "1:2",
      "1.8:1"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 176,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Commerce & Accountancy",
    "topic": "Cash Flow",
    "q": "Which of the following activities is classified as a financing activity in the cash flow statement?",
    "opts": [
      "Dividend paid",
      "Dividend received",
      "TDS on investment",
      "Loan and advances to subsidiary company",
      "Loans and advances to the supplier"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 177,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Costing",
    "topic": "Depreciation",
    "q": "Calculate net profit ratio from the following: • Revenue From Operations = 5,00,000 • Other Income = 50,000 • Stock in trade = 2,00,000 • Employee Benefits = 1,00,000 • Depreciation = 50,000 • Tax Liability = 10% of RFO",
    "opts": [
      "20%",
      "30%",
      "15%",
      "25%",
      "12%"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 178,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "In the context of Employee Stock Options (ESOPs), which of the following is a prerequisite for an employee to exercise the right to purchase shares of the company?",
    "opts": [
      "Lock-in Period",
      "Grant Date",
      "Vesting",
      "Exercise Price",
      "None of the above"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 179,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "Under the Atal Pension Yojana (APY), if a person joins at the age of 18 years, what is the minimum monthly contribution required to receive a guaranteed pension of Rs 1,000 per month at the age of 60?",
    "opts": [
      "Rs 42",
      "Rs 84",
      "Rs 126",
      "Rs 210",
      "Rs 240"
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 180,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "What is the maximum age limit for joining the Atal Pension Yojana (APY)?",
    "opts": [
      "35 years",
      "40 years",
      "45 years",
      "50 years",
      "60 years"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 181,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Which of the following statements is/are incorrect with regard to NPS Vatsalya Scheme? 1. Minors are eligible only till the age of 10. 2. The minor will be the sole beneficiary. 3. A PRAN will be issued in the minor’s name. Options:",
    "opts": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "Only 2",
      "None of the above"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 182,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "What is the minimum contribution required per year in the National Pension System (NPS) – Tier I account?",
    "opts": [
      "Rs 250",
      "Rs 500",
      "Rs 1000",
      "Rs 2000",
      "Rs 2500"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 183,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "An NPS subscriber has ₹50,000 in his account. As per the rules of partial withdrawal, what is the maximum amount he can withdraw and after how many years of contribution?",
    "opts": [
      "Rs 10,000 – after 3 years",
      "Rs 12,500 – after 3 years",
      "Rs 15,000 – after 5 years",
      "Rs 20,000 – after 7 years",
      "Rs 25,000 – after 10 years"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 184,
    "year": 2025,
    "phase": "Phase 1",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Under the NPS Government Model (Central Government), which investment class has the highest permissible exposure limit?",
    "opts": [
      "Government Securities",
      "Corporate Debt Instruments",
      "Short-term Debt Instruments",
      "Equity",
      "Asset-backed / Miscellaneous"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 185,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Finance",
    "q": "Which of the following is not a subsidiary of RBI?",
    "opts": [
      "",
      "",
      "",
      "",
      ""
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 186,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "GST",
    "q": "Which of the following is not a component of GST?",
    "opts": [
      "CGST",
      "IGST",
      "SGST",
      "UTGST",
      "UIGST"
    ],
    "ans": "E",
    "exp": "Answer: E"
  },
  {
    "id": 187,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "General",
    "topic": "General",
    "q": "Which of the following best defines a non-scheduled Bank in India?",
    "opts": [
      "Banks which are included in the Second Schedule of the RBI Act, 1934",
      "Banks that cannot borrow from the RBI in emergencies",
      "Banks which are not covered in the Second Schedule of the RBI Act, 1934 and can",
      "Banks which provide only demand deposits",
      "Banks that are nationalised by the government"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 188,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Private Equity",
    "q": "Private equity is formed as ________, is registered with ________, and called ________?",
    "opts": [
      "Company, RBI, Mutual Fund",
      "Trust, SEBI, Alternate Investment Fund",
      "Partnership, IRDAI, Venture Capital Fund",
      "Trust, PFRDA, Pension Fund",
      "LLP, Ministry of Corporate Affairs, Debt Fund"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 189,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "An investor invests Rs 20 lakhs in the futures of a blue-chip company at Rs 1050 per share. The market price later falls to Rs 1020. The futures contract lot size is 100 shares, and the stock’s beta is 1.25. What is the required number of contracts to hedge the portfolio?",
    "opts": [
      "24",
      "25",
      "16",
      "20",
      "10"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 190,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Self-Esteem",
    "q": "Self-esteem is under which level of Maslow's hierarchy?",
    "opts": [
      "Level 1",
      "Level 2",
      "Level 3",
      "Level 4",
      "Level 5"
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 191,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Objectives and Goals",
    "q": "The process of laying objectives and goals is associated with which function of management?",
    "opts": [
      "Planning",
      "Organizing",
      "Directing",
      "Staffing",
      "Controlling"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 192,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "HRD",
    "q": "Which of the following is the developmental role of HRD?",
    "opts": [
      "Employee Engagement",
      "Recruitment",
      "Selection",
      "Improving working conditions",
      "Induction and Orientation"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 193,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Theory",
    "q": "There is a theory given by Goleman, which says 'do as I instruct', identify it?",
    "opts": [
      "Affiliative Leadership",
      "Coercive Leadership",
      "Democratic Leadership",
      "Pacesetting Leadership",
      "Coaching Leadership"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 194,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "PESTEL",
    "q": "Which of the following correctly represents the meanings of E, S, and L in the PESTEL analysis framework?",
    "opts": [
      "E = Environmental, S = Structural, L = Legislative",
      "E = Economic, S = Social, L = Legal",
      "E = Emotional, S = Societal, L = Logistical",
      "E = Ecological, S = Service, L = Lawful",
      "E = Educational, S = Supportive, L = Local"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 195,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Pygmalion Effect",
    "q": "Which of the following best describes the Pygmalion effect?",
    "opts": [
      "It is a phenomenon where negative feedback leads to poor performance in individuals.",
      "It is a psychological phenomenon where higher expectations lead to improved",
      "It refers to the tendency of people to imitate the behaviour of others.",
      "It is an effect where low expectations lead to higher achievements.",
      "It describes the impact of the workplace environment on employee satisfaction."
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 196,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Management",
    "topic": "Match the Following",
    "q": "Match the following Substances 1. Business can beat competitors through 2. Organisation achieves targets with 3. The firm grows in new markets through 4. Employees stay motivated by 5. Customer loyalty increases due to",
    "opts": [
      "1–A, 2–C, 3–D, 4–B, 5–E",
      "1–B, 2–C, 3–A, 4–E, 5–D",
      "1–E, 2–A, 3–C, 4–B, 5–D",
      "1–D, 2–B, 3–A, 4–E, 5–C",
      "1–A, 2–B, 3–E, 4–C, 5–D"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 197,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "GDP Deflator",
    "q": "What is the formula for GDP Deflator?",
    "opts": [
      "Nominal GDP / Price Index * 100",
      "Nominal GDP / Real GDP * 100",
      "(Nominal GDP – Real GDP) / Real GDP * 100",
      "Real GDP / Price Index * 100",
      "Real GDP / Nominal GDP * 100"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 198,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "GDP Deflator",
    "q": "Which of the following is most significant index for price? 1. GDP Deflator 2. Wholesale Price Index (WPI) 3. Consumer Price Index (CPI)",
    "opts": [
      "1 and 2",
      "2 and 3",
      "3 only",
      "1, 2, and 3",
      "1 and 3"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 199,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "Economics",
    "q": "A rise in the general price level caused by an increase in aggregate demand over available supply describes the _____",
    "opts": [
      "Demand Pull Inflation",
      "Cost Push Inflation",
      "Cost Pull Inflation",
      "Demand Push Inflation",
      "None of the above"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 200,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "Money Multiplier",
    "q": "Which of the following correctly represents the formula of the Money Multiplier?",
    "opts": [
      "Reserve Deposits (M2) / Broad Money (M3)",
      "Broad Money (M3) / Narrow Money (M0)",
      "Cash Reserve Ratio × Broad Money",
      "Narrow Money (M0) / Broad Money (M3)",
      "Monetary Base / Narrow Money"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 201,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "National Income",
    "q": "Which of the following statement/s are considered for calculating the national income? 1. All the addition of value to the intermediate goods by a firm using the factors of production is included in the added method 2. All the expenditures made on goods and services produced in the domestic territory during a year is included in the expenditure method 3. All the income generated from factors of production, that is wages, interest, rent etc. is included",
    "opts": [
      "1 and 2",
      "2 and 3",
      "1 and 3",
      "All of the above",
      "2 only"
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 202,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Finance",
    "topic": "Finance",
    "q": "Under the flexible inflation targeting framework adopted by the Reserve Bank of India (RBI) as per the RBI Act, 1934, what is the tolerance band for CPI Inflation?",
    "opts": [
      "3% ± 2%",
      "4% ± 2%",
      "5% ± 2%",
      "6% ± 2%",
      "2% ± 2%"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 203,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Economics",
    "topic": "Economics",
    "q": "What is the relationship between M, V, P, and T in the Fisher’s transaction approach to Demand for Money?",
    "opts": [
      "𝑀𝑀𝑀𝑀𝑀𝑀𝑀𝑀 = 𝑃𝑃𝑃𝑃𝑃𝑃𝑃𝑃",
      "𝑀𝑀𝑀𝑀𝑀𝑀𝑀𝑀 = 𝑃𝑃𝑃𝑃 + 𝑃𝑃𝑃𝑃",
      "𝑀𝑀𝑀𝑀𝑀𝑀𝑀𝑀 = 𝑃𝑃𝑃𝑃/𝑃𝑃𝑃𝑃",
      "𝑀𝑀𝑀𝑀𝑀𝑀𝑀𝑀 + 𝑃𝑃𝑃𝑃𝑃𝑃𝑃𝑃 = 0",
      "𝑀𝑀𝑀𝑀𝑀𝑀𝑀𝑀 − 𝑃𝑃𝑃𝑃𝑃𝑃𝑃𝑃 = 1"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 204,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Audit",
    "q": "As per the Companies Act, 2013, when an auditor resigns, to whom must the auditor intimate their resignation?",
    "opts": [
      "The Shareholders of the company",
      "To refund unclaimed dividends to shareholders",
      "To fund investor awareness programs",
      "To finance the purchase of unsubscribed shares",
      "To promote financial literacy among investors"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 205,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "IEPF",
    "q": "Under Section 125 of the Companies Act, 2013, the funds accumulated in the Investor Education and Protection Fund (IEPF) cannot be used for which of the following purposes?",
    "opts": [
      "To refund unclaimed dividends to shareholders",
      "To fund investor awareness programs",
      "To finance the purchase of unsubscribed shares",
      "To promote financial literacy among investors",
      ""
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 206,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Section 44",
    "q": "Under Section 44 of the Indian Companies Act, 2013, shares and debentures are classified as:",
    "opts": [
      "Movable property only",
      "Immovable property only",
      "Both movable and immovable property",
      "Neither movable nor immovable property",
      "Recognized as intangible assets under company accounts"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 207,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "As per the Companies Act, 2013, when a public issue is made, the company must inform which of the following?",
    "opts": [
      "Government Authorities",
      "Stock Exchanges where securities are proposed to be listed",
      "Shareholders only",
      "Registrar of Companies",
      "Credit Rating Agencies"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 208,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "Under the Companies Act, 2013, who is primarily responsible for addressing the grievances of shareholders?",
    "opts": [
      "The Board of Directors",
      "The Stakeholders Relationship Committee",
      "Remuneration and Nomination Committee",
      "The Securities and Exchange Board of India (SEBI)",
      "The Audit Committee"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 209,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Small Shareholder",
    "q": "Under the Companies Act, 2013, who is considered a \"small shareholder\" based on the value of shares held?",
    "opts": [
      "A shareholder holding shares worth less than Rs 50,000",
      "A shareholder holding shares worth less than Rs 10,000",
      "A shareholder holding shares worth less than Rs 20,000",
      "A shareholder holding shares worth less than Rs 1,00,000",
      "A shareholder holding shares worth less than Rs 5,000"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 210,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "Which of the following criteria best defines a \"startup\" as per the standard definition? 1. Age of the business (less than 7 years) 2. Profitability (must be profitable within the first 5 years) 3. Originality of the product or service (unique and innovative offering)",
    "opts": [
      "1 only",
      "1 and 2 only",
      "3 only",
      "1 and 3 only",
      "All of the above"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 211,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Sugar Industry",
    "q": "Which type of costing method is used in the sugar industry?",
    "opts": [
      "Job Costing",
      "Batch Costing",
      "Process Costing",
      "Contract Costing",
      "Unit Costing"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 212,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Commerce & Accountancy",
    "q": "Which of the following is the primary objective of Cost Accounting?",
    "opts": [
      "Cost Ascertainment",
      "Cost Book Keeping",
      "Cost Audit",
      "Cost Control",
      "Decision Making"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 213,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Six Sigma",
    "q": "The Number of defects in six sigma are_______?",
    "opts": [
      "3.4 Defects Per Million",
      "3.4 defects per 10 million",
      "5.3 defects per million",
      "2700 defects per million",
      "63 defects per million"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 214,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "ROI",
    "q": "A company plans to manufacture 50,000 mixer grinders and sell each at Rs 5,000. The project requires an investment of Rs 60 crore, and the company desires a 15% ROI. At what cost per unit should the company manufacture the product?",
    "opts": [
      "Rs 4,200",
      "Rs 4,350",
      "Rs 3,200",
      "Rs 4,600",
      "Rs 4,750"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 215,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "TQM",
    "q": "Which of the following is NOT a principle of Total Quality Management (TQM) according to Deming's 14 Points?",
    "opts": [
      "Eliminate inspection. Built-in quality.",
      "Drive out fear.",
      "Dependence on inspection to ensure quality.",
      "Institute training on the job.",
      "Break down barriers. Work as a team."
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 216,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Factory Cost",
    "q": "A manufacturing company has the following data for a product: Prime Cost: Rs 50,000 Factory rent: 150% of Depreciation Depreciation: Rs 2,000 Calculate the Factory Cost of the product.",
    "opts": [
      "Rs 55,000",
      "Rs 54,500",
      "Rs 50,000",
      "Rs 56,000",
      "Rs 53,250"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 217,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Costing",
    "q": "A company has the following data for a material cost analysis using Activity Based Costing (ABC): Material Cost = Rs 2,00,000 Number of orders = 35 Material Ordering Cost = Rs 5,000 Material Handling Cost = Rs 3,000 Labour Cost = Rs 3,00,000 What is the total material cost?",
    "opts": [
      "Rs 2,05,000",
      "Rs 2,08,000",
      "Rs 2,11,000",
      "Rs 2,14,000",
      "Rs 2,18,000"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 218,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "General",
    "topic": "General",
    "q": "Which of the following statements is incorrect regarding the classification of costs on a payable basis as variable?",
    "opts": [
      "Cost varies directly with the level of production.",
      "Material cost is a typical example of variable cost.",
      "Administration cost is a variable cost.",
      "Direct labor cost can be treated as a variable cost.",
      "Selling commission varies with sales and is a variable cost."
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 219,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Costing",
    "topic": "Opportunity Cost",
    "q": "Which of the following best defines \"opportunity cost\"?",
    "opts": [
      "The monetary cost of producing goods and services.",
      "The cost incurred on labor in a specific project.",
      "The value of the best alternative foregone when a choice is made.",
      "The fixed cost associated with running a business.",
      "The sum of all explicit costs only."
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 220,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "General",
    "topic": "General",
    "q": "Costs cannot be classified on the basis of which of the following?",
    "opts": [
      "Cost by Nature (Material, Labour, Overheads)",
      "Cost by Function (Production, Selling, Distribution)",
      "Cost by Expenditure (Administrative)",
      "Cost by Behavior (Fixed, Variable, Semi-variable)",
      "Cost by Time (Historical, Standard, Predetermined)"
    ],
    "ans": "E",
    "exp": "Answer: E"
  },
  {
    "id": 221,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "A company has a current market price of Rs 125 per share. It issues Right Shares at Rs 50 each at 20% premium in the ratio of 1:5. Calculate the Ex-right price and the Value of Right per share.",
    "opts": [
      "Ex-right price = Rs 114.16; Value of right = Rs 10.84",
      "Ex-right price = Rs 112.50; Value of right = Rs 12.50",
      "Ex-right price = Rs 95.00; Value of right = Rs 30.00",
      "Ex-right price = Rs 110.00; Value of right = Rs 15.00",
      "Ex-right price = Rs 100.83; Value of right = Rs 24.17"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 222,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "Commerce & Accountancy",
    "q": "Which of the following is considered an asset covered under Accounting Standard (AS) 2 Valuation of Inventories?",
    "opts": [
      "Investment in shares and securities",
      "Harvested crops at government minimum assured price",
      "Government securities purchased",
      "Construction work-in-progress (WIP) for long-term projects",
      "Assets used for ordinary course of business"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 223,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "What is the effect of issuing bonus shares by a company?",
    "opts": [
      "Number of shares in circulation increases",
      "Company’s total net worth increases",
      "Paid-up share capital decreases",
      "Shareholders’ total wealth decreases",
      "Company’s liabilities increase"
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 224,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "AS 11",
    "q": "Which of the following statements about non-integrated foreign operations is incorrect according to Accounting Standard 11 (AS 11)?",
    "opts": [
      "Contingent liabilities at the closing date are translated at the closing exchange rate.",
      "Income and expenses of non-integrated operations are translated at the exchange rates",
      "Assets and liabilities of non-integrated operations are translated at the date of",
      "Foreign exchange transaction differences on investments in non-integrated foreign",
      "Monetary items and non-monetary items at the closing rate."
    ],
    "ans": "D",
    "exp": "Answer: D"
  },
  {
    "id": 225,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Companies Act",
    "topic": "Companies Act",
    "q": "Classify each of the following as either a source of fund (A) or an application of fund (B): 1. Redemption of debentures with premium 2. Funds lost in operations 3. Issue of shares 4. Creditors paid off 5. Money received from receivers 6. Purchase of fixed assets",
    "opts": [
      "1-B, 2-B, 3-A, 4-B, 5-A, 6-B",
      "1-A, 2-B, 3-B, 4-A, 5-B, 6-A",
      "1-B, 2-A, 3-B, 4-A, 5-A, 6-A",
      "1-A, 2-A, 3-A, 4-A, 5-A, 6-B",
      "1-B, 2-A, 3-A, 4-B, 5-A, 6-B"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 226,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Commerce & Accountancy",
    "topic": "AS 2",
    "q": "A company purchased inventory for Rs 35 lakhs. It sold 60% of it. The remaining inventory is now expected to be sold for Rs 16 lakhs, but a 15% sales commission will be incurred to sell it. What is the value at which this remaining inventory should be reported in the financial statements as per AS 2?",
    "opts": [
      "16.0 lakhs",
      "15.0 lakhs",
      "14.4 lakhs",
      "13.6 lakhs",
      "12.0 lakhs"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 227,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "Pension Sector",
    "q": "The scheme launched for workers in the unorganised sector, not covered under any Central or State Government pension scheme, where the Government contributes Rs 1,000 per year is known as —",
    "opts": [
      "Atal Pension Yojana",
      "NPS – All Citizens Model",
      "NPS–Lite Swavalamban",
      "PM Shram Yogi Maandhan",
      "PM Kisan Maan Dhan Yojana"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 228,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "Grievance",
    "q": "As per PFRDA (Redressal of Subscriber Grievance) Regulations, 2015, every intermediary (such as CRA, POP, Trustee Bank, etc.) must resolve or reply to a grievance received from a subscriber within how many days of its receipt?",
    "opts": [
      "7 days",
      "15 days",
      "30 days",
      "45 days",
      "60 days"
    ],
    "ans": "E",
    "exp": "Answer: E"
  },
  {
    "id": 229,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "As per the PFRDA (Redressal of Subscriber Grievance) Regulations, 2015 (as amended), the NPS Trust must resolve or reply to a grievance received from a subscriber within how many days of its receipt?",
    "opts": [
      "15 days",
      "30 days",
      "21 days",
      "60 days",
      "90 days"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 230,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "As per PFRDA guidelines, who among the following is eligible to join the National Pension System (NPS) All Citizens Model in terms of age and nationality?",
    "opts": [
      "Any Indian citizen between 18 and 60 years of age",
      "Any Indian citizen or NRI between 18 and 65 years of age",
      "Any Indian citizen between 18 and 70 years of age",
      "Any Indian citizen, OCI, NRI between 18 and 70 years of age",
      "Only Indian citizens between 21 and 60 years of age"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 231,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "Under the Atal Pension Yojana (APY), a subscriber aged 18 years wishes to receive a minimum guaranteed pension of Rs 5,000 per month after attaining the age of 60 years. Based on the official APY contribution chart, what would be the required monthly, quarterly, and half-yearly contribution amounts, respectively?",
    "opts": [
      "Rs 210, Rs 630, Rs 1,260",
      "Rs 210, Rs 626, Rs 1,239",
      "Rs 250, Rs 750, Rs 1,500",
      "Rs 264, Rs 792, Rs 1,584",
      "Rs 289, Rs 867, Rs 1,734"
    ],
    "ans": "C",
    "exp": "Answer: C"
  },
  {
    "id": 232,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "A person has a corpus of Rs 2,450,000 in their NPS account. Upon retirement, the individual decides to withdraw the entire corpus. As per the NPS regulations, a portion of the corpus must be used for purchasing an annuity, and the remaining amount can be withdrawn as a lump sum. If the annuity rate is assumed to be 6% per annum, calculate the lump sum and the annuity purchase amount. A) Lump Sum: Rs 1,470,000, Annuity Purchase: Rs 980,000 B) Lump Sum: Rs 1,470,000, Annuity Purchase: Rs 1,470,000 C) Lump Sum: Rs 1,470,000, Annuity Purchase: Rs 510 D) Lump Sum: Rs 1,530,000, Annuity Purchase: Rs 1,470,000 E) Lump Sum: Rs 1,470,000, Annuity Purchase: Rs 850",
    "opts": [
      "",
      "",
      "",
      "",
      ""
    ],
    "ans": "A",
    "exp": "Answer: A"
  },
  {
    "id": 233,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "NPS",
    "q": "Upon making a contribution to your NPS account, how many working days does it typically take for the amount to reflect in your account?",
    "opts": [
      "1 working day",
      "2 working days",
      "3 working days",
      "5 working days",
      "7 working days"
    ],
    "ans": "B",
    "exp": "Answer: B"
  },
  {
    "id": 234,
    "year": 2025,
    "phase": "Phase 2",
    "subject": "Pension Sector",
    "topic": "APY",
    "q": "Regarding the Atal Pension Yojana (APY), which of the following statements is/are correct? 1. The Government provides a guaranteed minimum pension amount to the subscriber. 2. After the demise of the subscriber, the same pension is received by the spouse. 3. After the death of both the subscriber and the spouse, the accumulated pension wealth is returned to the nominee.",
    "opts": [
      "1 only",
      "1 and 2 only",
      "3 only",
      "1 and 3 only",
      "All of the above"
    ],
    "ans": "E",
    "exp": "Answer: E"
  }
];

/* =============== repeating-theme definitions =============== */
const THEMES = [
  {
    "name": "ESOP / Employee Stock Options",
    "re": {}
  },
  {
    "name": "Board Meetings & Quorum (Sec 173/174)",
    "re": {}
  },
  {
    "name": "Dividend (Sec 123)",
    "re": {}
  },
  {
    "name": "Prospectus, Issues & Allotment (Ch. III/IV)",
    "re": {}
  },
  {
    "name": "Directors, IDs & Auditors (Ch. X/XI)",
    "re": {}
  },
  {
    "name": "Marginal Costing & Break-Even",
    "re": {}
  },
  {
    "name": "Lean Tools (Kaizen, JIT, Six Sigma, VSM)",
    "re": {}
  },
  {
    "name": "Standard Costing & Variances",
    "re": {}
  },
  {
    "name": "Inventory, EOQ & Cost Classification",
    "re": {}
  },
  {
    "name": "NPS Architecture, PRAN & Withdrawal",
    "re": {}
  },
  {
    "name": "Atal Pension Yojana (APY)",
    "re": {}
  },
  {
    "name": "Other Pension Schemes (PMVVY, Gratuity, OASIS)",
    "re": {}
  },
  {
    "name": "Ratio Analysis & Valuation",
    "re": {}
  },
  {
    "name": "Ind AS, Cash Flow & Accounting Concepts",
    "re": {}
  },
  {
    "name": "Inflation, Phillips & Stagflation",
    "re": {}
  },
  {
    "name": "National Income (GDP / GNP / NNP)",
    "re": {}
  },
  {
    "name": "Derivatives, Options & Hedging",
    "re": {}
  },
  {
    "name": "Leadership & Motivation Theories",
    "re": {}
  },
  {
    "name": "Regulators: RBI, SEBI, PFRDA, MCA",
    "re": {}
  },
  {
    "name": "FRBM, Finance Commission & Fiscal/Monetary Policy",
    "re": {}
  },
  {
    "name": "Money Supply & Demand Curves",
    "re": {}
  }
];
