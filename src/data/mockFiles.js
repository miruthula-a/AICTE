// Mock registry ledger of AICTE Approval files
export const STAGES = [
  {
    id: 1,
    key: "STAGE_01_SUBMISSION",
    code: "01",
    name: "Application Inward",
    shortName: "Inward & Fee",
    pigeonholeRack: "Rack 01-A",
    leadTimeDays: 7,
    description: "Initial application inward entry, processing fee verification & affidavit receipt."
  },
  {
    id: 2,
    key: "STAGE_02_DOC_SCRUTINY",
    code: "02",
    name: "Document Scrutiny",
    shortName: "Doc Scrutiny",
    pigeonholeRack: "Rack 02-B",
    leadTimeDays: 14,
    description: "Scrutiny committee verifies land title, Fire NOC, cadre ratios & statutory building plans."
  },
  {
    id: 3,
    key: "STAGE_03_EVC_VISIT",
    code: "03",
    name: "Expert Visiting Committee",
    shortName: "EVC Inspection",
    pigeonholeRack: "Rack 03-C",
    leadTimeDays: 15,
    description: "Physical inspection of campus laboratories, barrier-free access, computing centers & equipment."
  },
  {
    id: 4,
    key: "STAGE_04_SHC_REVIEW",
    code: "04",
    name: "Standing Hearing Committee",
    shortName: "SHC Hearing",
    pigeonholeRack: "Rack 04-D",
    leadTimeDays: 10,
    description: "Appellate hearing of flagged deficiencies, review of institution rejoinder & compliance submissions."
  },
  {
    id: 5,
    key: "STAGE_05_DECISION",
    code: "05",
    name: "Executive Committee Order",
    shortName: "Final Order",
    pigeonholeRack: "Rack 05-E",
    leadTimeDays: 5,
    description: "Final statutory decision dispatch: Letter of Approval (LoA) or Letter of Rejection (LoR)."
  }
];

export const INITIAL_FILES = [
  {
    id: "FILE-2026-9041",
    fileNumber: "AICTE/WRO/2026-27/1-4921098",
    instituteName: "Saraswati College of Engineering & Technology",
    location: "Kharghar, Navi Mumbai, Maharashtra",
    region: "WRO (Mumbai)",
    applicationType: "Increase in Intake (B.Tech AI & Data Science +60)",
    currentStageId: 2,
    submissionDate: "04 Feb 2026",
    daysElapsed: 12,
    totalSlaDays: 14,
    deadlineDate: "18 Feb 2026",
    status: "COMPLIANCE_GAP",
    stampLabel: "COMPLIANCE GAP",
    statusColor: "vermilion",
    assignedOfficer: "Smt. Archana Varma, Asst. Director (WRO)",
    actionNeededBy: "Scrutiny Officer Table 4",
    actionNote: "Deficiency memo pending dispatch: Fire Safety NOC expired on 18 Jan 2026.",
    trustName: "Saraswati Technical Education & Welfare Trust",
    landAreaAcres: "4.85 Acres (Urban)",
    builtUpAreaSqM: "14,820 sq.m",
    programsApplied: "B.Tech Computer Engg (120), AI & DS (60 to 120), Mechanical (60)",
    redPenNotes: [
      {
        date: "08 Feb 2026",
        officer: "A. Varma",
        note: "Fire NOC submitted is dated Dec 2024 with 1-year validity; expired 18 Jan 2026. Non-compliant with APH-2026-CL-9.4."
      },
      {
        date: "11 Feb 2026",
        officer: "A. Varma",
        note: "Faculty-Student ratio is 1:17.2; requires 2 additional Assistant Professors in CSE Dept."
      }
    ],
    complianceChecks: [
      {
        clauseId: "APH-2026-CL-4.1",
        title: "Faculty to Student Ratio (FSR)",
        status: "GAP_FOUND",
        required: "1:15 ratio with 1:2:6 Cadre proportion",
        submitted: "1:17.2 (CSE Dept short of 2 Asst. Professors)",
        inspectorNote: "Shortfall of 2 regular faculties in Computer Dept. Cadre balance skewed."
      },
      {
        clauseId: "APH-2026-CL-9.4",
        title: "Fire Safety Certificate (State Fire Dept NOC)",
        status: "GAP_FOUND",
        required: "Valid State Fire NOC with ≥90 days validity from session start",
        submitted: "Certificate #CIDCO/FIRE/2024/918 expired on 18-Jan-2026",
        inspectorNote: "Critical statutory blocker. Renewal application acknowledgment not acceptable."
      },
      {
        clauseId: "APH-2026-CL-11.1",
        title: "Land Title & 30-Year Non-Encumbrance Certificate",
        status: "VERIFIED",
        required: "Registered deed + Sub-Registrar NEC issued within 6 months",
        submitted: "Registered Lease Deed #4912/2004 (99 years) + NEC dated 10-Jan-2026",
        inspectorNote: "Clear title in name of trust. Verified against CIDCO registrar record."
      },
      {
        clauseId: "APH-2026-CL-13.3",
        title: "Corpus Fund Joint FDR (₹1.00 Cr)",
        status: "VERIFIED",
        required: "₹1.00 Cr 10-year joint FDR in nationalized bank",
        submitted: "Bank of India FDR #9041288 (₹1,00,00,000, tenure to 2036)",
        inspectorNote: "Original receipt produced and verified with bank branch."
      }
    ],
    timelineRuler: {
      totalScaleDays: 45,
      stageDayMarks: [
        { day: 7, label: "Inward Closed", completed: true },
        { day: 21, label: "Scrutiny Cutoff", completed: false, isCurrentCutoff: true },
        { day: 36, label: "EVC Window", completed: false },
        { day: 45, label: "Statutory Order", completed: false }
      ],
      currentDay: 12
    },
    dispatchLog: [
      {
        dispatchNo: "AICTE/WRO/SCRUT/2026/0411",
        timestamp: "04 Feb 2026, 11:20 AM",
        officer: "Despatch Clerk M. Kale",
        action: "Docket inwards registered; application fee ₹2,50,000 reconciled on Bharatkosh portal."
      },
      {
        dispatchNo: "AICTE/WRO/SCRUT/2026/0488",
        timestamp: "09 Feb 2026, 04:45 PM",
        officer: "Smt. Archana Varma, Asst. Dir",
        action: "Document Scrutiny Committee Sheet drafted. Rule APH-2026-CL-9.4 red-flagged for Fire NOC."
      }
    ]
  },
  {
    id: "FILE-2026-8812",
    fileNumber: "AICTE/NRO/2026-27/1-3829014",
    instituteName: "Awadh Institute of Technology & Management",
    location: "Sitapur Road, Lucknow, Uttar Pradesh",
    region: "NRO (Kanpur)",
    applicationType: "New Technical Institution (UG Engg & Poly)",
    currentStageId: 3,
    submissionDate: "18 Jan 2026",
    daysElapsed: 28,
    totalSlaDays: 35,
    deadlineDate: "22 Feb 2026",
    status: "DUE_SOON",
    stampLabel: "DUE IN 3 DAYS",
    statusColor: "ochre",
    assignedOfficer: "Prof. D. K. Sharma, EVC Convener",
    actionNeededBy: "EVC Inspection Team-B",
    actionNote: "Physical inspection scheduled for 16 Feb; site geo-tag verification pending.",
    trustName: "Awadh Educational & Charitable Society",
    landAreaAcres: "7.50 Acres (Rural)",
    builtUpAreaSqM: "9,640 sq.m",
    programsApplied: "New Diploma in Electrical (60), B.Tech Civil (60), B.Tech CSE (60)",
    redPenNotes: [
      {
        date: "02 Feb 2026",
        officer: "D. K. Sharma",
        note: "All land and corpus docs cleared in Scrutiny. EVC must physically check PwD ramps in Block-B."
      }
    ],
    complianceChecks: [
      {
        clauseId: "APH-2026-CL-7.2",
        title: "Built-up Carpet Area & Instructional Space",
        status: "VERIFIED",
        required: "Min 4,200 sq.m for 360 intake",
        submitted: "Certified Architect Blueprint shows 4,890 sq.m instructional area",
        inspectorNote: "Blueprint vetted by PWD Executive Engineer. Physical room dimension audit due on visit."
      },
      {
        clauseId: "APH-2026-CL-9.4",
        title: "Fire Safety Certificate",
        status: "VERIFIED",
        required: "Valid State Fire NOC",
        submitted: "UP Fire Services NOC #FS/LKO/2025/1102 valid till 14-Dec-2026",
        inspectorNote: "Valid and authenticated on UP Fire Online Portal."
      },
      {
        clauseId: "APH-2026-CL-18.2",
        title: "Barrier-Free Access for Persons with Disabilities",
        status: "PENDING_INSPECTION",
        required: "Ramps (1:12 slope), Braille signage, disabled toilets in each block",
        submitted: "Affidavit submitted; physical ramp gradient pending EVC inclinometer verification",
        inspectorNote: "EVC team instructed to carry physical gradient meter."
      }
    ],
    timelineRuler: {
      totalScaleDays: 45,
      stageDayMarks: [
        { day: 7, label: "Inward Closed", completed: true },
        { day: 20, label: "Scrutiny Cleared", completed: true },
        { day: 31, label: "EVC Visit Window", completed: false, isCurrentCutoff: true },
        { day: 45, label: "Statutory Order", completed: false }
      ],
      currentDay: 28
    },
    dispatchLog: [
      {
        dispatchNo: "AICTE/NRO/INW/2026/0122",
        timestamp: "18 Jan 2026, 09:15 AM",
        officer: "Despatch Registrar NRO",
        action: "New Institute application admitted in registry."
      },
      {
        dispatchNo: "AICTE/NRO/EVC/2026/0890",
        timestamp: "06 Feb 2026, 03:00 PM",
        officer: "Regional Officer NRO",
        action: "EVC Committee 3-member panel constituted under Prof. D. K. Sharma."
      }
    ]
  },
  {
    id: "FILE-2026-7640",
    fileNumber: "AICTE/SRO/2026-27/1-5019821",
    instituteName: "Karpagam Institute of Advanced Technology",
    location: "Pollachi Main Road, Coimbatore, Tamil Nadu",
    region: "SRO (Chennai)",
    applicationType: "Extension of Approval (EoA) & Course Name Change",
    currentStageId: 1,
    submissionDate: "10 Feb 2026",
    daysElapsed: 3,
    totalSlaDays: 7,
    deadlineDate: "17 Feb 2026",
    status: "ON_TRACK",
    stampLabel: "ON TRACK",
    statusColor: "pine",
    assignedOfficer: "Shri T. Natarajan, Section Officer",
    actionNeededBy: "Registry Scrutiny Desk",
    actionNote: "Affidavit-1 reconciliation in progress; bank gateway transaction confirmed.",
    trustName: "Karpagam Charitable Trust",
    landAreaAcres: "12.4 Acres",
    builtUpAreaSqM: "28,400 sq.m",
    programsApplied: "EoA for 8 UG Engineering branches + Renaming IT to AI & Machine Learning",
    redPenNotes: [],
    complianceChecks: [
      {
        clauseId: "APH-2026-CL-13.3",
        title: "Corpus Fund Joint FDR",
        status: "VERIFIED",
        required: "₹1.00 Cr joint FDR renewal certificate",
        submitted: "Indian Overseas Bank FDR #SRO-89100 active",
        inspectorNote: "Joint encumbrance with Member Secretary AICTE verified."
      },
      {
        clauseId: "APH-2026-CL-21.1",
        title: "Anti-Ragging Committee & ICC Notification",
        status: "VERIFIED",
        required: "Notification uploaded to institute website & National Anti-Ragging Portal",
        submitted: "Web link and committee gazette notification confirmed",
        inspectorNote: "Toll free number checked and working."
      }
    ],
    timelineRuler: {
      totalScaleDays: 45,
      stageDayMarks: [
        { day: 7, label: "Fee & Inward", completed: false, isCurrentCutoff: true },
        { day: 21, label: "Scrutiny", completed: false },
        { day: 35, label: "Inspection", completed: false },
        { day: 45, label: "Statutory Order", completed: false }
      ],
      currentDay: 3
    },
    dispatchLog: [
      {
        dispatchNo: "AICTE/SRO/REG/2026/0201",
        timestamp: "10 Feb 2026, 02:40 PM",
        officer: "T. Natarajan, Section Officer",
        action: "Online inward synchronized; processing fee ₹1,00,000 cleared."
      }
    ]
  },
  {
    id: "FILE-2026-6519",
    fileNumber: "AICTE/NWRO/2026-27/1-2918801",
    instituteName: "Maharaja Agrasen Institute of Polytech & Engg",
    location: "Sector 22, Rohini, New Delhi",
    region: "NWRO (Chandigarh)",
    applicationType: "Restoration of Sanctioned Intake (Mechanical 120)",
    currentStageId: 4,
    submissionDate: "02 Jan 2026",
    daysElapsed: 44,
    totalSlaDays: 40,
    deadlineDate: "11 Feb 2026",
    status: "OVERDUE",
    stampLabel: "OVERDUE (4 DAYS)",
    statusColor: "vermilion",
    assignedOfficer: "Justice (Retd.) M. C. Garg / Shri Rajiv Bajaj, RO NWRO",
    actionNeededBy: "Standing Hearing Committee (SHC)",
    actionNote: "Statutory 15-day limit for SHC recommendation expired on 11 Feb. Urgent hearing memo required.",
    trustName: "Maharaja Agrasen Technical Society",
    landAreaAcres: "5.1 Acres",
    builtUpAreaSqM: "18,900 sq.m",
    programsApplied: "Restoration of reduced intake in B.Tech Mechanical Engineering",
    redPenNotes: [
      {
        date: "28 Jan 2026",
        officer: "R. Bajaj, RO",
        note: "Deficiency rejoinder submitted by college on 25 Jan. Hearing was slated for 08 Feb but adjourned due to quorum lack."
      },
      {
        date: "12 Feb 2026",
        officer: "R. Bajaj, RO",
        note: "Statutory SLA breached. Re-notified for hearing on 16 Feb 10:30 AM."
      }
    ],
    complianceChecks: [
      {
        clauseId: "APH-2026-CL-4.1",
        title: "Faculty Cadre Proportion in Mechanical Dept",
        status: "GAP_FOUND",
        required: "At least 1 Professor, 2 Associate Professors, 6 Assistant Professors",
        submitted: "0 Professors, 1 Assoc Prof, 8 Asst Profs (Shortage of Professor cadre)",
        inspectorNote: "Cadre deficiency persisting since AY 2024-25. Selection committee minutes pending."
      },
      {
        clauseId: "APH-2026-CL-16.5",
        title: "NBA Accreditation Score for Restoration",
        status: "GAP_FOUND",
        required: "Valid NBA Tier-II or min 675 marks",
        submitted: "Accreditation expired 30-Jun-2025; renewal SAR submitted but peer team not visited",
        inspectorNote: "Rejoinder claims NBA visit scheduled in March 2026; committee to rule on provisional approval."
      }
    ],
    timelineRuler: {
      totalScaleDays: 45,
      stageDayMarks: [
        { day: 7, label: "Inward Closed", completed: true },
        { day: 20, label: "Scrutiny Done", completed: true },
        { day: 32, label: "EVC Rejection", completed: true },
        { day: 40, label: "SHC Hearing SLA", completed: false, isCurrentCutoff: true, overdue: true },
        { day: 45, label: "Statutory Order", completed: false }
      ],
      currentDay: 44
    },
    dispatchLog: [
      {
        dispatchNo: "AICTE/NWRO/SHC/2026/0110",
        timestamp: "02 Jan 2026, 10:00 AM",
        officer: "Registry NWRO",
        action: "Appeal filed under Clause 1.8 of Approval Process Handbook."
      },
      {
        dispatchNo: "AICTE/NWRO/SHC/2026/0295",
        timestamp: "28 Jan 2026, 05:10 PM",
        officer: "Rajiv Bajaj, Regional Officer",
        action: "Show Cause Notice issued. College represented on 28 Jan."
      },
      {
        dispatchNo: "AICTE/NWRO/SHC/2026/0402",
        timestamp: "12 Feb 2026, 11:00 AM",
        officer: "Rajiv Bajaj, Regional Officer",
        action: "ALERT DISPATCHED: File crossed 40-day statutory hearing SLA. Re-constituted bench summons issued."
      }
    ]
  },
  {
    id: "FILE-2026-5201",
    fileNumber: "AICTE/SCRO/2026-27/1-4190823",
    instituteName: "Chaitanya Bharathi Institute of Technology",
    location: "Gandipet, Hyderabad, Telangana",
    region: "SCRO (Hyderabad)",
    applicationType: "Addition of Integrated MCA (5-Year Program)",
    currentStageId: 5,
    submissionDate: "20 Dec 2025",
    daysElapsed: 42,
    totalSlaDays: 45,
    deadlineDate: "16 Feb 2026",
    status: "ON_TRACK",
    stampLabel: "ON TRACK",
    statusColor: "pine",
    assignedOfficer: "Dr. B. K. Murthy, Member Secretary (EC)",
    actionNeededBy: "Executive Committee Table",
    actionNote: "Draft Letter of Approval (LoA) placed before Executive Committee for signature.",
    trustName: "Chaitanya Bharathi Educational Society",
    landAreaAcres: "50.8 Acres",
    builtUpAreaSqM: "52,000 sq.m",
    programsApplied: "Integrated Master of Computer Applications (60 Seats)",
    redPenNotes: [
      {
        date: "04 Feb 2026",
        officer: "B. K. Murthy",
        note: "All 8 statutory clauses satisfied. Scrutiny, EVC, and state government NOC in order. Recommended for grant of LoA."
      }
    ],
    complianceChecks: [
      {
        clauseId: "APH-2026-CL-4.1",
        title: "Faculty Cadre Proportion",
        status: "VERIFIED",
        required: "1:15 ratio",
        submitted: "Compliant: 1 Professor, 2 Assoc Profs, 3 Asst Profs recruited",
        inspectorNote: "Original interview panel minutes signed by Osmania University nominee."
      },
      {
        clauseId: "APH-2026-CL-7.2",
        title: "Instructional Space for MCA Labs",
        status: "VERIFIED",
        required: "Min 850 sq.m dedicated computer laboratories",
        submitted: "1,200 sq.m dedicated high-performance computing lab with 180 workstations",
        inspectorNote: "Physically audited during EVC on 14 Jan 2026."
      },
      {
        clauseId: "APH-2026-CL-9.4",
        title: "Fire Safety Certificate",
        status: "VERIFIED",
        required: "State Fire NOC valid for AY 2026-27",
        submitted: "Telangana Disaster Response & Fire NOC #RC/678/2025 valid till Nov 2027",
        inspectorNote: "Compliant."
      }
    ],
    timelineRuler: {
      totalScaleDays: 45,
      stageDayMarks: [
        { day: 7, label: "Inward Done", completed: true },
        { day: 20, label: "Scrutiny Done", completed: true },
        { day: 33, label: "EVC Recommended", completed: true },
        { day: 40, label: "SHC Waiver", completed: true },
        { day: 45, label: "Executive Order", completed: false, isCurrentCutoff: true }
      ],
      currentDay: 42
    },
    dispatchLog: [
      {
        dispatchNo: "AICTE/SCRO/EC/2026/0998",
        timestamp: "04 Feb 2026, 04:30 PM",
        officer: "Regional Officer SCRO",
        action: "Clean scrutiny and EVC recommendations submitted to Member Secretary for EC agenda."
      }
    ]
  },
  {
    id: "FILE-2026-4190",
    fileNumber: "AICTE/ERO/2026-27/1-6029188",
    instituteName: "Siliguri Institute of Technology",
    location: "Sukna, Siliguri, Darjeeling, West Bengal",
    region: "ERO (Kolkata)",
    applicationType: "Extension of Approval (EoA)",
    currentStageId: 2,
    submissionDate: "06 Feb 2026",
    daysElapsed: 9,
    totalSlaDays: 14,
    deadlineDate: "20 Feb 2026",
    status: "DUE_SOON",
    stampLabel: "DUE IN 5 DAYS",
    statusColor: "ochre",
    assignedOfficer: "Shri Subhasish Sen, Scrutiny Officer",
    actionNeededBy: "Scrutiny Officer Desk 2",
    actionNote: "Affidavit verifying AICTE land master plan conversion certificate under review.",
    trustName: "Techno India Group Foundation",
    landAreaAcres: "10.2 Acres (Hilly terrain)",
    builtUpAreaSqM: "22,500 sq.m",
    programsApplied: "EoA for B.Tech CSE, ECE, Civil, IT + MCA",
    redPenNotes: [
      {
        date: "08 Feb 2026",
        officer: "S. Sen",
        note: "Land conversion certificate from Darjeeling District Magistrate requires stamped true copy."
      }
    ],
    complianceChecks: [
      {
        clauseId: "APH-2026-CL-11.1",
        title: "Land Title & Encumbrance",
        status: "GAP_FOUND",
        required: "Certified true copy of DM Land Conversion Order",
        submitted: "Photocopy with unclear stamp from 1999",
        inspectorNote: "Requisite true copy sought from Registrar. 5 days remaining before scrutiny cutoff."
      },
      {
        clauseId: "APH-2026-CL-13.3",
        title: "Corpus Fund Joint FDR",
        status: "VERIFIED",
        required: "₹1.00 Cr joint FDR",
        submitted: "SBI Siliguri Branch FDR active till 2031",
        inspectorNote: "Confirmed with State Bank branch manager."
      }
    ],
    timelineRuler: {
      totalScaleDays: 45,
      stageDayMarks: [
        { day: 7, label: "Inward Done", completed: true },
        { day: 21, label: "Scrutiny Deadline", completed: false, isCurrentCutoff: true },
        { day: 36, label: "Inspection", completed: false },
        { day: 45, label: "Statutory Order", completed: false }
      ],
      currentDay: 9
    },
    dispatchLog: [
      {
        dispatchNo: "AICTE/ERO/SCRUT/2026/0312",
        timestamp: "06 Feb 2026, 01:15 PM",
        officer: "Registry ERO",
        action: "Docket inwards registered."
      }
    ]
  }
];

export const STATUTORY_ALERTS = [
  {
    id: "ALT-2026-001",
    severity: "CRITICAL",
    fileId: "FILE-2026-6519",
    fileNumber: "AICTE/NWRO/2026-27/1-2918801",
    instituteName: "Maharaja Agrasen Institute of Polytech & Engg",
    region: "NWRO (Chandigarh)",
    stageName: "Standing Hearing Committee (SHC)",
    headline: "Statutory Hearing SLA Exceeded (Overdue by 4 days)",
    clause: "APH-2026-CL-16.5 & SLA Sec 10(4)",
    detectedAt: "11 Feb 2026, 00:01 AM",
    description: "Statutory 15-day limit to complete hearing and publish SHC recommendation expired. Case risks statutory default notice from Central Appellate Authority.",
    officerAction: "Urgent re-convening of SHC Bench scheduled for 16 Feb 2026."
  },
  {
    id: "ALT-2026-002",
    severity: "CRITICAL",
    fileId: "FILE-2026-9041",
    fileNumber: "AICTE/WRO/2026-27/1-4921098",
    instituteName: "Saraswati College of Engineering & Technology",
    region: "WRO (Mumbai)",
    stageName: "Document Scrutiny",
    headline: "Statutory Safety Certificate Expired (Fire NOC)",
    clause: "APH-2026-CL-9.4",
    detectedAt: "08 Feb 2026, 03:15 PM",
    description: "State Fire Dept NOC #CIDCO/FIRE/2024/918 expired on 18 Jan 2026. File cannot proceed to EVC stage without valid safety certification.",
    officerAction: "Officer Archana Varma flagged compliance gap; 48-hour cure notice drafted."
  },
  {
    id: "ALT-2026-003",
    severity: "WARNING",
    fileId: "FILE-2026-8812",
    fileNumber: "AICTE/NRO/2026-27/1-3829014",
    instituteName: "Awadh Institute of Technology & Management",
    region: "NRO (Kanpur)",
    stageName: "Expert Visiting Committee (EVC)",
    headline: "EVC Inspection Window Closes in 72 Hours",
    clause: "APH-2026-CL-7.2 & Schedule II",
    detectedAt: "13 Feb 2026, 09:00 AM",
    description: "Physical inspection window allocated to Team-B expires on 16 Feb. Site geo-coordinates and digital report upload mandatory before 17 Feb 17:00 IST.",
    officerAction: "Reminder dispatched to EVC Convener Prof. D. K. Sharma."
  },
  {
    id: "ALT-2026-004",
    severity: "WARNING",
    fileId: "FILE-2026-4190",
    fileNumber: "AICTE/ERO/2026-27/1-6029188",
    instituteName: "Siliguri Institute of Technology",
    region: "ERO (Kolkata)",
    stageName: "Document Scrutiny",
    headline: "Land Conversion True Copy Clarification Due in 5 Days",
    clause: "APH-2026-CL-11.1",
    detectedAt: "09 Feb 2026, 12:10 PM",
    description: "Sub-Registrar certified true copy of 1999 DM Land order required. Scrutiny stage will close on 20 Feb.",
    officerAction: "Scrutiny memo awaiting registered courier receipt acknowledgement."
  }
];
