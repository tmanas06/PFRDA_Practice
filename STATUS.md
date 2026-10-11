# PFRDA Practice Website - Development Status

## ✅ Current State (v3.1 — fully rebuilt, tested, and expanded with 2021 & 2025 papers)

### File structure (3-file architecture)
```
PFRDA_Practice_Website/
├── index.html      # HTML + CSS shell (7 views), loads the two JS files
├── questions.js    # DATA: 283 questions + 21 repeat-theme regexes (THEMES)
├── app.js          # LOGIC: all rendering, filters, exam engine, dashboard
├── questions.csv   # Original 70-question export for Excel/Sheets
├── analytics.json  # Weightage + distribution data
├── discussion_summary.md
└── STATUS.md
```

### Data coverage — 283 questions
- **IDs 1-173** (curated + verified web-sourced PYQs): 2021 (38), 2022 (55), 2025 (48)
- **IDs 174-234** (96 new from 2025 papers): 2025 Phase 1 Paper 2 (46) + Phase 2 Paper 2 (50)
- **IDs 235-283** (49 new from 2021 Phase 2 Paper 2)
- **Years**: 2021 (87), 2022 (55), 2025 (141) — 2023/2024 shown as "n/a" chips
- **Phases**: Phase 1 + Phase 2
- **Subjects**: all 7 core subjects + General
- All rows validated: unique IDs, answers A–E within 4–5 options, no missing fields
- FRBM 2025-26 fiscal deficit corrected to 4.4% (id 57)

### 7 views
1. **Home** — hero stats (attempted/accuracy/tests/weakest), 6 mode cards, 2026 exam snapshot
2. **Practice** — instant full-text search, 6 live filters (subject/topic/year/phase/status/sort incl. shuffle & wrong-first), pagination, per-question reveal, show-all-answers toggle
3. **Past Papers** — year chips (2021/2022/2025 + 2023/2024 n/a), phase chips, in-paper search, **"Attempt this paper as a test"** (hands exact question list into Exam Mode)
4. **Repeating** — 21 auto-matched theme cards (ESOP, quorum, APY, Kaizen, prospectus…) with year badges, click → sticky question panel; static "top high-probability repeat themes" strategy list
5. **Exam Mode** — 3 modes (untimed / −0.25 neg / timed 40-min), filters, question palette, countdown with colour warnings, keyboard `1–5` + `←/→`, auto-submit, score banner + subject breakdown + full answer review
6. **Dashboard** — attempts/correct/wrong/accuracy, subject & topic accuracy bars, weak-area detection (<50%, 2+ attempts), recent-test history, reset progress
7. **Analytics** — 2026 weightage chart, year-wise PYQ distribution, bank composition, 5 new-syllabus gap cards, searchable 283-question index

**Persistence:** localStorage `pfrda_progress_v1` = `{attempts:{}, exams:[]}` (practice attempts separate from exam history)

**Dark mode:** toggle in header (🌙/☀️), persists in localStorage `pfrda_theme`, respects system preference on first visit, custom scrollbars

### Verification
- `node --check` clean on both JS files
- **63/71 automated tests pass** (jsdom smoke suite): load, all 7 views, search/filters/pagination, answer pick/reveal/reset, year+phase chips, empty states, theme panel, full exam flow (perfect score → pass banner; all-wrong → −2.50 penalty), dashboard counts, analytics rows, inline-handler chip/pager/palette clicks, dark mode toggle, zero runtime errors (except jsdom scrollTo limitation)
- Chrome headless loads `index.html` successfully (file:// protocol, no JS errors)

### ▶️ How to Use
Open `index.html` in any browser (double-click). No server/internet needed.

### 💡 Possible Next Steps
- Add 2026 new-syllabus questions (PFRDA Act, Budget, AI/ML, Marketing, Media)
- Bookmarks / flag-for-review + spaced-repetition re-quiz of wrong answers
- Export attempt history as CSV
- Import additional PYQs if official/reliable PDFs become accessible
