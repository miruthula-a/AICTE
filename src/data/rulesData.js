// AICTE Approval Process Handbook (APH) Versioned Rules Database
export const RULEBOOKS = [
  {
    id: "APH-2026-27",
    version: "2026-27 (v2.3)",
    gazetteDate: "14 Jan 2026",
    status: "ACTIVE_STATUTORY",
    description: "Statutory Approval Process Handbook for Academic Year 2026-27 notified under AICTE Act 1987 Section 10(k).",
  },
  {
    id: "APH-2025-26",
    version: "2025-26 (v1.8)",
    gazetteDate: "18 Dec 2024",
    status: "SUPERSEDED",
    description: "Approval Process Handbook for Academic Year 2025-26.",
  },
  {
    id: "APH-2024-25",
    version: "2024-25 (v1.2)",
    gazetteDate: "22 Nov 2023",
    status: "HISTORICAL_ARCHIVE",
    description: "Approval Process Handbook for Academic Year 2024-25.",
  }
];

export const COMPLIANCE_CLAUSES = [
  {
    clauseId: "APH-2026-CL-4.1",
    section: "04. Faculty & Cadre Ratios",
    title: "Faculty to Student Ratio (FSR) & Cadre Proportion",
    rulebook: "APH-2026-27",
    requirementSummary: "Engineering & Technology Under Graduate: Minimum 1:15 ratio with Cadre Proportion of 1:2:6 (Prof : Assoc Prof : Asst Prof). Minimum 80% regular full-time appointments.",
    severity: "CRITICAL_BLOCKER",
    slaDays: 7,
    stageApplicable: "STAGE_02_DOC_SCRUTINY",
    validationLogic: "StudentCount / ApprovedFacultyCount <= 15.0 AND CadreRatioCompliant == true"
  },
  {
    clauseId: "APH-2026-CL-7.2",
    section: "07. Land & Infrastructure",
    title: "Built-up Carpet Area & Instructional Space",
    rulebook: "APH-2026-27",
    requirementSummary: "Total instructional carpet area must meet minimum 4,200 sq.m for sanctioned intake of 360 students, including designated specialized computer laboratories, workshop floor, and seminar halls.",
    severity: "CRITICAL_BLOCKER",
    slaDays: 10,
    stageApplicable: "STAGE_03_EVC_VISIT",
    validationLogic: "VerifiedCarpetArea >= RequiredSanctionedArea"
  },
  {
    clauseId: "APH-2026-CL-9.4",
    section: "09. Statutory Safety & Health",
    title: "Fire Safety Certificate (State Fire Dept NOC)",
    rulebook: "APH-2026-27",
    requirementSummary: "Valid No Objection Certificate (NOC) from State Fire and Emergency Services Department. Certificate validity must extend at least 90 days beyond the academic session start date.",
    severity: "HIGH_ALERT",
    slaDays: 5,
    stageApplicable: "STAGE_02_DOC_SCRUTINY",
    validationLogic: "FireNocExpiryDate > CurrentDate + 90 Days"
  },
  {
    clauseId: "APH-2026-CL-11.1",
    section: "11. Land Title & Ownership",
    title: "Clear Land Title & 30-Year Non-Encumbrance Certificate",
    rulebook: "APH-2026-27",
    requirementSummary: "Registered sale deed or 30-year lease deed in the name of the Applicant Society/Trust. Valid Non-Encumbrance Certificate issued by the competent Revenue Authority / Sub-Registrar within the last 6 months.",
    severity: "CRITICAL_BLOCKER",
    slaDays: 14,
    stageApplicable: "STAGE_02_DOC_SCRUTINY",
    validationLogic: "LandTitleRegistered == true AND EncumbranceCertAgeMonths <= 6"
  },
  {
    clauseId: "APH-2026-CL-13.3",
    section: "13. Financial Viability",
    title: "Corpus Fund Joint Fixed Deposit Receipt (FDR)",
    rulebook: "APH-2026-27",
    requirementSummary: "Irrevocable Joint FDR of ₹1.00 Crore created in Nationalized Bank in joint names of AICTE Member Secretary and Society/Trust Chairman for a continuous period of 10 years.",
    severity: "CRITICAL_BLOCKER",
    slaDays: 7,
    stageApplicable: "STAGE_02_DOC_SCRUTINY",
    validationLogic: "JointFdrVerified == true AND FdrTenureYears >= 10"
  },
  {
    clauseId: "APH-2026-CL-16.5",
    section: "16. Quality & Accreditation",
    title: "NBA Accreditation for Expansion / New Course Approval",
    rulebook: "APH-2026-27",
    requirementSummary: "Institutions applying for intake expansion in existing engineering courses must have valid NBA accreditation with at least 675 marks for a minimum of 2 batches or Tier-I Washington Accord status.",
    severity: "MODERATE",
    slaDays: 10,
    stageApplicable: "STAGE_04_SHC_REVIEW",
    validationLogic: "NbaScore >= 675 OR Tier1Status == true"
  },
  {
    clauseId: "APH-2026-CL-18.2",
    section: "18. Accessibility & Inclusion",
    title: "Barrier-Free Access for Persons with Disabilities (PwD)",
    rulebook: "APH-2026-27",
    requirementSummary: "Gradient ramps (1:12), motorized lifts in multi-storey blocks, tactile paving from entrance, accessible braille signage, and dedicated wheel-chair friendly sanitation blocks.",
    severity: "HIGH_ALERT",
    slaDays: 7,
    stageApplicable: "STAGE_03_EVC_VISIT",
    validationLogic: "PwdPhysicalAuditPassed == true"
  },
  {
    clauseId: "APH-2026-CL-21.1",
    section: "21. Grievance & Student Safety",
    title: "Anti-Ragging Committee & Internal Complaint Committee (ICC)",
    rulebook: "APH-2026-27",
    requirementSummary: "Constitution of Anti-Ragging Squad as per Supreme Court directives, 24x7 toll-free helpline publication, and statutory Internal Complaints Committee under POSH Act.",
    severity: "MODERATE",
    slaDays: 5,
    stageApplicable: "STAGE_02_DOC_SCRUTINY",
    validationLogic: "CommitteeNotified == true AND TollFreeActive == true"
  }
];
