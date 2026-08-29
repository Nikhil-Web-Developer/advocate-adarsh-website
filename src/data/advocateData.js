/**
 * Chambers of Adv. Adarsh Kumar Hans
 * Data Layer for React Application
 */

export const ADVOCATE_DATA = {
  profile: {
    name: "Adv. Adarsh Kumar Hans",
    title: "Advocate & Legal Consultant",
    degrees: "B.A. LL.B. (Hons), LL.M.",
    barCouncilNumber: "D/1428/2009 (Bar Council of Delhi)",
    experienceYears: 15,
    casesHandled: "1,400+",
    courtsAdmitted: "Supreme Court of India & High Court of Delhi",
    headline: "Experienced Legal Representation with Professional Integrity",
    subheadline: "Providing distinguished, strategic legal counsel and assertive courtroom advocacy for individuals, families, and corporations across the High Court of Delhi and Supreme Court of India.",
    phone: "+91 98108 45219",
    phoneClean: "+919810845219",
    email: "chamber@advocateadarsh.com",
    whatsapp: "919810845219",
    portraitImg: "public/assets/images/Advocate.jpeg",
    chambersBg: "/assets/images/chambers-bg.jpg",
    locations: [
      {
        name: "Delhi High Court Chamber",
        address: "Chamber No. 342, Lawyers Chambers Block III, High Court of Delhi, Sher Shah Road, New Delhi - 110503",
        timing: "Monday – Friday: 2:00 PM – 5:30 PM (During Court Working Days)",
        type: "Court Chamber"
      },
      {
        name: "Connaught Place Office",
        address: "Suite 408, Mercantile House, 15 K.G. Marg, Connaught Place, New Delhi - 110001",
        timing: "Monday – Saturday: 10:00 AM – 7:30 PM (By Prior Appointment)",
        type: "Head Consultation Office"
      }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/919810845219?text=Hello%20Adv.%20Adarsh,%20I%20would%20like%20to%20request%20a%20legal%20consultation."
    }
  },

  trustBadges: [
    { label: "Strict Confidentiality", icon: "ShieldCheck" },
    { label: "Supreme Court Bar Member", icon: "Landmark" },
    { label: "Transparent Counseling", icon: "Scale" },
    { label: "15+ Years Trial Experience", icon: "Clock" }
  ],

  statistics: [
    { value: "15+", label: "Years Experience", description: "In active litigation & high-stakes dispute resolution" },
    { value: "8+", label: "Practice Areas", description: "Comprehensive coverage across Civil, Criminal, Property & Corporate" },
    { value: "1,400+", label: "Matters Advised", description: "Successful representations & strategic consultations" },
    { value: "100%", label: "Client-Focused", description: "Uncompromising integrity, ethics & transparent fees" }
  ],

  corePillars: [
    {
      title: "Ethical Advocacy",
      description: "Rooted in the highest standards of legal ethics, transparent counseling, and complete compliance with Bar Council norms.",
      icon: "Scale"
    },
    {
      title: "Strategic Defense",
      description: "Thorough statutory analysis and pragmatic courtroom strategies engineered to secure decisive outcomes.",
      icon: "ShieldAlert"
    },
    {
      title: "Diligent Preparation",
      description: "Meticulous pre-trial scrutiny of evidentiary documentation, flawless pleadings, and incisive cross-examinations.",
      icon: "FileCheck"
    },
    {
      title: "Client Centricity",
      description: "Accessible, responsive legal guidance with compassionate handling of high-stress familial and commercial disputes.",
      icon: "Users"
    }
  ],

  practiceAreas: [
    {
      id: "civil-law",
      title: "Civil Law & Commercial Litigation",
      tagline: "Strategic dispute resolution, injunctions, suits for recovery, and contract enforcement.",
      icon: "Scale",
      brief: "Comprehensive representation in civil suits, money recovery, specific performance, permanent injunctions, and commercial disputes across High Courts and District Courts.",
      statutes: [
        "Code of Civil Procedure, 1908 (CPC)",
        "Specific Relief Act, 1963",
        "Indian Contract Act, 1872",
        "Commercial Courts Act, 2015"
      ],
      services: [
        "Recovery Suits under Order 37 CPC and Ordinary Suits",
        "Declaratory & Injunction Suits regarding title and possession",
        "Commercial dispute resolution and summary suits",
        "Appeals (RFA/RSA), Revisions, and Review petitions",
        "Execution proceedings and decree enforcement"
      ],
      caseApproach: "We emphasize thorough pre-litigation scrutiny of documentary evidence, stringent drafting, and proactive interlocutory relief strategies to protect clients' legal interests promptly."
    },
    {
      id: "criminal-law",
      title: "Criminal Law & Defense",
      tagline: "Rigorous defense in white-collar crimes, bail applications, trials, and appellate advocacy.",
      icon: "Gavel",
      brief: "Advocacy for individuals and corporate entities facing criminal allegations, emphasizing constitutional liberties, statutory safeguards, and trial defense.",
      statutes: [
        "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
        "Bharatiya Nyaya Sanhita, 2023 (BNS)",
        "Prevention of Corruption Act",
        "Negotiable Instruments Act (Sec 138)"
      ],
      services: [
        "Anticipatory Bail & Regular Bail before Sessions Court & High Court",
        "Quashing of FIRs and Criminal Complaints (Section 482 / 528 BNSS)",
        "Defense in Financial Fraud, PMLA, and Corporate Crime investigations",
        "Negotiable Instruments Act (Cheque Dishonour) proceedings",
        "Criminal trial defense, cross-examination, and appellate remedies"
      ],
      caseApproach: "Our criminal defense methodology focuses on procedural precision, forensic evidence analysis, and constitutional rights protection during police inquiry, remand, and trial."
    },
    {
      id: "family-law",
      title: "Family & Matrimonial Law",
      tagline: "Empathetic, confidential, and solution-driven resolution of matrimonial disputes.",
      icon: "HeartHandshake",
      brief: "Compassionate counsel in divorce, child custody, maintenance, domestic violence, and partition of ancestral assets with an emphasis on amicable settlements and fair outcomes.",
      statutes: [
        "Hindu Marriage Act, 1955",
        "Special Marriage Act, 1954",
        "Protection of Women from Domestic Violence Act, 2005",
        "Guardians and Wards Act, 1890"
      ],
      services: [
        "Mutual Consent Divorce and Contested Divorce proceedings",
        "Child Custody, Visitation Rights, and Guardianship petitions",
        "Maintenance & Alimony claims (Sec 125 CrPC / BNSS & Section 24 HMA)",
        "Domestic Violence defense and relief applications",
        "Pre-litigation family mediation and settlement drafting"
      ],
      caseApproach: "We balance assertiveness in court with empathetic negotiation, prioritizing children's welfare and long-term financial security while preventing protracted emotional litigation."
    },
    {
      id: "property-law",
      title: "Property & Real Estate Law",
      tagline: "Title diligence, ancestral partition, builder-buyer disputes, and property litigation.",
      icon: "Building2",
      brief: "End-to-end legal support for high-stakes property transactions, boundary disputes, partition suits, builder delays under RERA, and land acquisition.",
      statutes: [
        "Transfer of Property Act, 1882",
        "Real Estate (Regulation and Development) Act, 2016 (RERA)",
        "Registration Act, 1908",
        "Partition Act, 1893"
      ],
      services: [
        "Ancestral property partition and family settlement agreements",
        "Comprehensive 30-year property title search and legal vetting",
        "RERA complaints against defaulting real estate builders for refund & interest",
        "Tenant-Landlord disputes and eviction petitions",
        "Stay orders against illegal dispossession or unauthorized construction"
      ],
      caseApproach: "Rigorous title scrutiny coupled with expeditious court injunctions protects immovable assets against fraudulent alienation or developer negligence."
    },
    {
      id: "consumer-law",
      title: "Consumer Protection Law",
      tagline: "Aggressive defense and representation against deficient services and unfair trade practices.",
      icon: "ShieldAlert",
      brief: "Redressal before District Consumer Commissions, State Commission (SCDRC), and National Commission (NCDRC) for insurance, healthcare, banking, and e-commerce grievances.",
      statutes: [
        "Consumer Protection Act, 2019",
        "E-Commerce Rules, 2020",
        "Insurance Regulatory and Development Authority (IRDAI) Guidelines"
      ],
      services: [
        "Unfair trade practice claims against corporations and aggregators",
        "Medical negligence claims and defense",
        "Insurance claim repudiation challenges (Life, Health, Motor, Marine)",
        "Appeals and Revision Petitions before State & National Consumer Commissions",
        "Product liability actions for defective merchandise"
      ],
      caseApproach: "We leverage updated 2019 CPA statutory provisions for substantial compensation, punitive damages, and swift enforcement of consumer orders."
    },
    {
      id: "corporate-law",
      title: "Corporate & Business Advisory",
      tagline: "Commercial contracts, startup advisory, shareholder disputes, and NCLT insolvency.",
      icon: "Briefcase",
      brief: "Pragmatic legal structuring, regulatory compliance, commercial drafting, and corporate dispute resolution before the National Company Law Tribunal (NCLT).",
      statutes: [
        "Companies Act, 2013",
        "Insolvency and Bankruptcy Code, 2016 (IBC)",
        "Arbitration and Conciliation Act, 1996",
        "FEMA & DPIIT Regulations"
      ],
      services: [
        "Commercial contract drafting, negotiation, and NDA / Master Service Agreements",
        "Insolvency resolution petitions (Section 7, 9 & 10 IBC before NCLT)",
        "Shareholder disputes and oppression / mismanagement petitions (Sec 241/242)",
        "Corporate governance, regulatory audits, and statutory compliance",
        "Domestic and international commercial arbitration proceedings"
      ],
      caseApproach: "We combine keen business awareness with legal precision to safeguard enterprise equity, prevent contractual loopholes, and resolve corporate deadlocks."
    },
    {
      id: "cyber-law",
      title: "Cyber Law & Digital Compliance",
      tagline: "Legal counsel for cyber frauds, data privacy, IT Act offenses, and digital forensics.",
      icon: "Cpu",
      brief: "Specialized representation in financial phishing frauds, identity theft, unauthorized access, intermediary liability, and DPDP Act compliance.",
      statutes: [
        "Information Technology Act, 2000 (Amended 2008)",
        "Digital Personal Data Protection Act, 2023",
        "BNS Cyber Crime Sections"
      ],
      services: [
        "Legal remedies for cyber banking fraud, unauthorized transfers, and crypto scams",
        "Defense & prosecution under Sections 43, 66, 66C, 66D, 67 of the IT Act",
        "Data privacy compliance, GDPR / DPDP Act frameworks, and cookie policies",
        "Take-down notices and intermediary liability litigation against tech platforms",
        "Digital evidence authentication under Section 65B Indian Evidence Act / BSA"
      ],
      caseApproach: "Fast-track preservation of digital trails, coordinated liaison with Cyber Cells, and strict evidentiary compliance under the new Bharatiya Sakshya Adhiniyam."
    },
    {
      id: "labour-law",
      title: "Labour & Employment Law",
      tagline: "Balancing enterprise compliance and employee rights with statutory diligence.",
      icon: "UserCheck",
      brief: "Guidance on workplace policies, POSH compliance, executive employment agreements, wrongful termination, and Industrial Disputes adjudication.",
      statutes: [
        "Industrial Disputes Act, 1947",
        "POSH Act, 2013",
        "New Labour Codes (Wages, Social Security, OSH, IR)",
        "Payment of Gratuity Act, 1972"
      ],
      services: [
        "Wrongful termination, severance negotiations, and non-compete enforcement",
        "POSH (Prevention of Sexual Harassment) internal committee guidance and inquiry defense",
        "Drafting employee handbooks, ESOP schemes, and confidentiality agreements",
        "Representation before Labour Courts, Industrial Tribunals, and Conciliation Officers",
        "Statutory compliance audits for establishments under EPF, ESI, and Gratuity"
      ],
      caseApproach: "Proactive dispute mitigation through bulletproof employment contracts and compliant internal dispute mechanisms."
    }
  ],

  careerTimeline: [
    {
      period: "2020 – Present",
      role: "Senior Counsel & Managing Advocate",
      organization: "Chambers of Adv. Adarsh Kumar Hans, New Delhi",
      description: "Leading an independent litigation practice handling high-stakes civil appeals, commercial arbitrations, criminal defenses, and constitutional writ petitions before the High Court of Delhi and Supreme Court of India.",
      highlight: "Over 600+ complex matters successfully argued; recognized for precision in interlocutory relief."
    },
    {
      period: "2015 – 2020",
      role: "Managing Associate & Litigation Lead",
      organization: "Apex Juris Law Firm, Barakhamba Road, New Delhi",
      description: "Headed the commercial litigation and white-collar defense vertical. Managed cross-jurisdictional suits, RERA litigations, and arbitrations across NCR tribunals and High Courts.",
      highlight: "Supervised a team of 8 associate advocates and led 35+ major arbitration proceedings."
    },
    {
      period: "2010 – 2015",
      role: "Junior Advocate & Chambers Counsel",
      organization: "Chambers of Senior Advocate, Delhi High Court",
      description: "Mentored under a distinguished Senior Advocate. Drafted special leave petitions, writ petitions, regular first appeals, and conducted cross-examinations in trial courts.",
      highlight: "Mastered trial courtroom strategy, civil procedural nuances, and statutory interpretation."
    }
  ],

  courts: [
    {
      id: "supreme-court",
      name: "Supreme Court of India",
      level: "Apex Constitutional Court",
      location: "Tilak Marg, Mandi House, New Delhi",
      description: "Special Leave Petitions (SLPs), Transfer Petitions, Writ Petitions under Article 32, and Statutory Civil/Criminal Appeals.",
      badge: "Apex Court Practice",
      icon: "Landmark"
    },
    {
      id: "delhi-high-court",
      name: "High Court of Delhi",
      level: "Principal Constitutional & Appellate Court",
      location: "Sher Shah Road, New Delhi",
      description: "Original Jurisdiction Suits above ₹2 Crore, Writ Petitions (Art. 226), Section 11 Arbitration Petitions, Regular First Appeals, and Bail Applications.",
      badge: "Primary Practice Court",
      icon: "Scale"
    },
    {
      id: "district-courts",
      name: "District & Sessions Courts (NCR)",
      level: "Trial & Sessions Courts",
      location: "Tis Hazari | Patiala House | Saket | Rohini | Dwarka | Karkardooma",
      description: "Civil Suits, Title & Partition Disputes, Criminal Trials, Bail Hearings, Matrimonial & Family Courts, and NI Act (138) complaints.",
      badge: "Comprehensive NCR Coverage",
      icon: "Building2"
    },
    {
      id: "tribunals",
      name: "Specialized Tribunals & Commissions",
      level: "Quasi-Judicial Authorities",
      location: "NCLT / NCLAT, NCDRC, CAT, DRT, Delhi RERA",
      description: "Insolvency & Corporate disputes (IBC), National Consumer Redressal, Central Administrative matters, Debt Recovery, and Real Estate complaints.",
      badge: "Tribunal Specialist",
      icon: "Gavel"
    }
  ],

  achievements: [
    {
      year: "2023",
      category: "Award & Recognition",
      title: "Excellence in Civil & Commercial Advocacy",
      institution: "Delhi Legal Conclave & Bar Leadership Summit",
      description: "Conferred the distinction for exemplary trial litigation ethics and strategic dispute resolution in complex commercial recovery suits.",
      icon: "Award"
    },
    {
      year: "2022",
      category: "Publication",
      title: "Author: 'Modern Real Estate Litigation & RERA Framework'",
      institution: "Indian Journal of Contemporary Law (IJCL)",
      description: "Published a widely cited research paper analyzing buyer protections, statutory escrow compliance, and recent Supreme Court jurisprudence.",
      icon: "BookOpen"
    },
    {
      year: "2021",
      category: "Speaking Engagement",
      title: "Keynote Speaker: 'Digital Forensics in Criminal Trials'",
      institution: "National Law University Alumni Forum",
      description: "Delivered keynote lecture on Section 65B Indian Evidence Act admissibility and electronic trail preservation for young practitioners.",
      icon: "Mic"
    },
    {
      year: "2019",
      category: "Certification & ADR",
      title: "Certified Commercial Arbitrator & Mediator",
      institution: "Indian Institute of Arbitration & Mediation (IIAM)",
      description: "Accredited specialist in institutional commercial dispute resolution, fast-track arbitral proceedings, and judicial mediation.",
      icon: "BadgeCheck"
    }
  ],

  caseCategories: [
    {
      id: "cat-civil",
      name: "Civil & Commercial Recovery",
      count: "380+ Matters",
      description: "Recovery of commercial receivables, specific performance of property agreements, and interim injunctions against breach of contract.",
      keyInsight: "Focused on securing pre-judgment security and urgent ex-parte ad-interim injunctions to prevent asset dissipation."
    },
    {
      id: "cat-property",
      name: "Property & Real Estate Disputes",
      count: "290+ Matters",
      description: "Ancestral land partitions, demarcation challenges, builder refund litigations under RERA, and eviction defense.",
      keyInsight: "30-year forensic title vetting and strategic application for local commissioner appointments during trial."
    },
    {
      id: "cat-criminal",
      name: "Criminal Defense & Bail Advocacy",
      count: "320+ Matters",
      description: "Anticipatory bails, trial defense in economic offenses, cheque bounce settlements, and quashing of non-meritorious FIRs.",
      keyInsight: "Immediate relief prioritization through fundamental rights enforcement and meticulous cross-examination."
    },
    {
      id: "cat-family",
      name: "Matrimonial & Family Matters",
      count: "210+ Matters",
      description: "Mutual consent settlements, child custody protocols, maintenance computation, and protection against domestic abuse.",
      keyInsight: "Dignified mediation strategies to protect family legacy, children's emotional well-being, and mutual respect."
    },
    {
      id: "cat-consumer",
      name: "Consumer & Insurance Redressal",
      count: "150+ Matters",
      description: "Repudiated insurance claims, builder delay penalties, medical negligence defense, and defective product liabilities.",
      keyInsight: "Utilizing 2019 CPA provisions for stringent penalty awards and prompt decree execution."
    },
    {
      id: "cat-corporate",
      name: "Corporate & Insolvency Advisory",
      count: "110+ Matters",
      description: "Section 9 operational debt IBC petitions, contractual structuring, boardroom deadlock mediation, and arbitration.",
      keyInsight: "High-speed pre-litigation notice mechanisms leading to out-of-court commercial resolutions."
    }
  ],

  testimonials: [
    {
      name: "Rahul S.",
      designation: "Business Director, Tech Enterprises",
      matterType: "Commercial Contract & Recovery",
      quote: "Adv. Adarsh Kumar Hans handled our high-stakes commercial dispute with extraordinary clarity and strategic foresight. His courtroom arguments were precise, and we secured a favorable settlement well within our timeline. Highly trustworthy counsel.",
      rating: 5,
      verified: true
    },
    {
      name: "Dr. Ananya M.",
      designation: "Senior Healthcare Consultant",
      matterType: "Property Partition & Title Dispute",
      quote: "Our ancestral property matter was entangled in complex legal hurdles for over 7 years. Adv. Adarsh brought order, untangled the title records with surgical precision, and guided our family to a just partition without acrimony.",
      rating: 5,
      verified: true
    },
    {
      name: "Vikram K.",
      designation: "Managing Director, Real Estate Group",
      matterType: "RERA & Builder Arbitration",
      quote: "Very professional, highly accessible, and exceptionally honest in his legal assessment. He does not make false promises; he delivers solid, statutory legal representation. You are in safe hands with his chambers.",
      rating: 5,
      verified: true
    },
    {
      name: "Sandeep & Meenakshi G.",
      designation: "Private Clients",
      matterType: "Family Law & Custody Resolution",
      quote: "During one of the most emotionally challenging phases of our life, Adv. Adarsh provided compassionate yet razor-sharp counsel. He protected our child's interests first and facilitated a civilized settlement. Forever grateful.",
      rating: 5,
      verified: true
    },
    {
      name: "Kunal P.",
      designation: "Fintech Founder",
      matterType: "Cyber Compliance & IT Act Advisory",
      quote: "His deep grasp of the IT Act and digital forensics saved our startup from unwarranted liability during a data dispute. Quick, responsive, and thoroughly knowledgeable.",
      rating: 5,
      verified: true
    }
  ],

  faqs: [
    {
      q: "How do I book a consultation with Adv. Adarsh Kumar Hans?",
      a: "You can book an appointment directly through the 'Book Consultation' interface on this website, or call the chamber office at +91 98108 45219. You may choose between an In-Person Chamber Meeting (Connaught Place / High Court) or a Secure Video Consultation."
    },
    {
      q: "What documents should I prepare before the initial consultation?",
      a: "Please carry or upload all relevant case documents, notices received, contracts, FIR/charge-sheet copies, or correspondence. A chronological summary of events helps us analyze your matter with maximum efficiency."
    },
    {
      q: "Do you practice in courts outside Delhi NCR?",
      a: "While our primary daily practice is before the High Court of Delhi, Supreme Court of India, and NCR District Courts, we also represent clients in significant appellate and arbitration matters across various High Courts and National Tribunals across India upon special engagement."
    },
    {
      q: "Is consultation strictly confidential?",
      a: "Yes. All discussions, shared documents, and legal inquiries are protected under strict professional privilege and client-advocate confidentiality governed by the Advocates Act, 1961 and Bar Council of India guidelines."
    },
    {
      q: "What is your consultation fee and fee structure?",
      a: "Consultation fees vary depending on the nature and complexity of the legal matter (e.g., initial legal opinion, document vetting, urgent bail review). Our chamber follows transparent, ethical billing with no hidden costs discussed transparently prior to engagement."
    }
  ]
};
