# FileTrail — AICTE Approval Workflow & Compliance Ledger

> **National Regulatory Infrastructure Initiative**  
> *Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System*

FileTrail is an enterprise-grade web platform designed under the **"Inspector's Dossier"** visual language. It reimagines institutional technical education approval as a modern, tactile government registry office—incorporating rich visual evidence, campus telemetry, calibrated deadline rulers, and automated compliance matrix verification.

---

## 🏛️ Product Premise & Philosophy

Every technical institution's approval file moves through 5 statutory stages:
1. **Stage 01:** Application Inward & Fee Verification
2. **Stage 02:** Document Scrutiny (Scrutiny Committee)
3. **Stage 03:** Expert Visiting Committee (EVC Inspection)
4. **Stage 04:** Standing Hearing Committee (SHC / SAC Review)
5. **Stage 05:** Executive Committee Final Decision (LoA / LoR)

### The Honest Limits Principle
> **"FileTrail tracks, checks and alerts. It does not approve or reject. Every decision stays with an officer."**

The system does not claim to replace committee members with opaque AI algorithms. Instead, it deterministically validates submissions against versioned clauses in the **AICTE Approval Process Handbook (APH 2026-27)** and alerts officials before statutory SLAs expire or certificates lapse.

---

## 🎨 Visual System: "The Inspector's Dossier"

- **Modern Executive Canvas:** Off-white `#F8F6F0` and crisp card surfaces `#FFFFFF`.
- **Primary Ink:** Deep `#0F172A` with secondary text `#475569`.
- **Status Inks:** Emerald (`#166534`), Amber (`#D97706`), and Vermilion (`#DC2626`).
- **Typography:**
  - *Primary UI Sans:* **Plus Jakarta Sans** (Executive Sans-Serif)
  - *Headings:* **Newsreader** (Refined Editorial Serif)
  - *Metadata & Docket IDs:* **JetBrains Mono** (Precision Monospace)
- **Identity Details:**
  - **Filing Pigeonholes:** Dedicated physical racks per stage; hovering lifts a file out of its shelf.
  - **Visual Campus Telemetry:** High-resolution campus photography, robotics laboratory evidence, and PWD-approved blueprints on every case dossier.
  - **Calibrated Deadline Ruler:** Millimeter/day tick marks with sliding brass pin indicator showing elapsed working days versus statutory cutoffs.
  - **Red-Pen Annotations:** Hand-written style marginal notes stamped with officer signatures and dates.

---

## 📂 Features & Screens

1. **Filing Pigeonholes (Live Case Board):**
   - 5-stage rack columns with live docket count and SLA limits.
   - Filter by Regional Office (WRO, NRO, SRO, NWRO, SCRO) and Scrutiny Status.
   - Quick advance button to promote files across stages.

2. **The Inspector's Dossier (Detail Modal):**
   - Dossier header with high-resolution campus photography and official status stamp.
   - Visual inspection gallery (Academic Block, AI & Computing Lab, PWD Blueprints).
   - **Tab 01:** Versioned Compliance Matrix (APH 2026-27 clauses: FSR 1:15, Fire NOC, Land Title, ₹1.00 Cr Corpus Joint FDR, NBA Accreditation).
   - **Tab 02:** Red-Pen Margin Notes with form to stamp new handwritten remarks.
   - **Tab 03:** Chronological Dispatch Ledger Trail with tamper-evident audit log.
   - **Tab 04:** Official AICTE Letterhead Deficiency Notice generator.

3. **Statutory Alert Registry:**
   - Urgent ledger tracking expired statutory certificates (e.g. Fire NOC), SLA breaches (>40 days in SHC), and 72-hour EVC inspection cutoff windows.

4. **Inward Registration Desk:**
   - Modal to admit fresh applications, generate sequential docket numbers, and slot into Stage 01.

---

## 🚀 How to Run the Prototype

### Option 1: Open Directly in Any Browser
Simply open the file in your preferred browser:
- [`file:///c:/Users/mirut/OneDrive/Desktop/project/index.html`](file:///c:/Users/mirut/OneDrive/Desktop/project/index.html)

### Option 2: Run via Local HTTP Server
```bash
node server.js
```
Then visit **`http://localhost:3000`**.
