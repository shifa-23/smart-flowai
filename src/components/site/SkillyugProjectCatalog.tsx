import { useState } from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Video, 
  Code, 
  ShoppingBag, 
  HeartPulse, 
  School, 
  DollarSign, 
  Cpu, 
  Award, 
  Check, 
  Info, 
  Sparkles,
  Search
} from "lucide-react";
import Reveal from "./Reveal";

const categories = [
  { id: "students", label: "For Students", icon: GraduationCap },
  { id: "businesses", label: "For Businesses", icon: Briefcase },
  { id: "creators", label: "For Content Creators", icon: Video },
  { id: "developers", label: "For Developers", icon: Code },
  { id: "ecommerce", label: "For E-commerce", icon: ShoppingBag },
  { id: "healthcare", label: "For Healthcare", icon: HeartPulse },
  { id: "institutions", label: "For Education Institutions", icon: School },
  { id: "finance", label: "For Finance", icon: DollarSign },
  { id: "agents", label: "Advanced AI Agents", icon: Cpu },
  { id: "strong-projects", label: "Strong Profile Projects", icon: Award }
];

const catalogData: Record<string, { title: string; desc: string }[]> = {
  students: [
    { title: "AI Study Planner", desc: "Generates custom adaptive schedules based on exam dates, coursework load, and past retention rates." },
    { title: "Smart Notes Generator", desc: "Summarizes textbooks, transcripts, and handouts into structured markdown summaries with auto-definitions." },
    { title: "Lecture-to-Notes Automation", desc: "Transcribes class audio, identifies primary concepts, and outputs reference guides." },
    { title: "Research Paper Summarizer", desc: "Extracts methodology, findings, and core conclusions from academic research PDFs." },
    { title: "Assignment Assistant", desc: "Guides step-by-step problem solving with detailed explanations rather than direct copy-paste answers." },
    { title: "Personalized Quiz Generator", desc: "Autocreates multiple-choice or short-answer exams from your syllabus to test key knowledge points." },
    { title: "Flashcard Generator", desc: "Converts text files or study guides into interactive flashcard sets with spaced-repetition loops." },
    { title: "Resume Analyzer", desc: "Compares resumes against internship job descriptions and suggests optimizations for ATS compliance." },
    { title: "Internship Finder", desc: "Scrapes and matches student profiles with active summer, winter, and remote internships." },
    { title: "Scholarship Finder", desc: "Aggregates global college grants and scholarships matching student demographic profiles." },
    { title: "Mock Interview Automation", desc: "Simulates technical or behavioral interviews with an interactive vocal companion." },
    { title: "Coding Mentor Agent", desc: "Provides syntax pointers, bug explanations, and refactoring tips without writing the code for you." },
    { title: "LeetCode Progress Tracker", desc: "Tracks challenge completion rates, highlights concepts needing review, and logs metrics." },
    { title: "Exam Preparation Planner", desc: "Builds a reverse study timeline from your test date, allocating chapters based on personal difficulty levels." },
    { title: "Attendance & Performance Predictor", desc: "Predicts semester GPA based on assignment scores and participation trends." }
  ],
  businesses: [
    { title: "Lead Generation Automation", desc: "Autonomously scans directories, social networks, and registries to target prospective accounts." },
    { title: "Lead Qualification AI", desc: "Evaluates prospective client intent, budget, and timeline criteria through automated email exchanges." },
    { title: "Sales Email Personalization", desc: "Generates customized cold-outreach emails by analyzing the prospect's LinkedIn profile and company data." },
    { title: "Customer Support Chatbot", desc: "Resolves 24/7 user queries, handles order tracking, and processes returns using corporate knowledge base." },
    { title: "Voice Support Agent", desc: "Speaks with callers using custom trained voices to handle booking, front-desk, or level-1 triage tasks." },
    { title: "Meeting Summarization", desc: "Listens to video/audio calls, isolates Action Items, lists key decisions, and syncs summaries to Slack." },
    { title: "CRM Auto-Update Agent", desc: "Automatically logs sales call transcripts, captures deal status updates, and updates sales pipeline." },
    { title: "Proposal Generator", desc: "Draws data from RFP briefs and formats complete custom commercial proposals." },
    { title: "Contract Analysis System", desc: "Scans vendor agreements for liabilities, missing clauses, renewal terms, and payment structures." },
    { title: "Invoice Processing Automation", desc: "Extracts billing items, vendor IDs, and totals from PDF invoices to push into accounting ledgers." },
    { title: "Expense Classification", desc: "Reads corporate receipts, groups expenses by tax codes, and flags non-compliant claims." },
    { title: "Business Intelligence Dashboard", desc: "Consolidates cross-channel data to present visual KPI trackers and predictive sales metrics." },
    { title: "Demand Forecasting", desc: "Analyzes historical store sales and seasonal fluctuations to predict future inventory demand." },
    { title: "Churn Prediction", desc: "Identifies accounts displaying dropping platform usage patterns and flags them for CS retention outreach." },
    { title: "Customer Sentiment Analysis", desc: "Monitors review platforms and social feeds to flag negative escalations before they trend." },
    { title: "Fraud Detection", desc: "Scans transactional logs in real-time to alert compliance teams of abnormal purchasing behaviors." },
    { title: "Recommendation Engine", desc: "Suggests matching products or upsells based on historical customer browsing and basket values." },
    { title: "Inventory Optimization", desc: "Adjusts reorder alerts to balance warehouses and lower cash-in-inventory overhead." },
    { title: "Predictive Maintenance", desc: "Tracks mechanical telemetry indicators to predict equipment failure schedules." },
    { title: "HR Resume Screening", desc: "Screens candidate profiles against role descriptions to rate fit factors before initial interviews." }
  ],
  creators: [
    { title: "Content Idea Generator", desc: "Monitors keywords and video trends across YouTube/TikTok to draft highly clickable content ideas." },
    { title: "Script Writer", desc: "Formats engaging voiceover scripts, complete with visual hook hooks and call-to-actions." },
    { title: "Video Clip Generator", desc: "Extracts viral highlights from long-form podcasts and resizes them for vertical feeds." },
    { title: "Thumbnail Recommendation System", desc: "Analyzes thumbnail designs to predict CTR performance and suggest graphical adjustments." },
    { title: "Social Media Post Scheduler", desc: "Drafts and schedules contextual text updates tailored for LinkedIn, X, and Threads." },
    { title: "Trend Detection Agent", desc: "Scans social feeds to report on viral phrases or audio tracks matching your niche." },
    { title: "SEO Optimization Agent", desc: "Recommends title revisions, meta descriptions, and video tags to maximize search visibility." },
    { title: "Multi-platform Content Repurposing", desc: "Transcribes a video and outputs a blog article, draft newsletter, and 5 short social summaries." }
  ],
  developers: [
    { title: "AI Code Review Agent", desc: "Scans pull requests for security vulnerabilities, formatting errors, and runtime performance bugs." },
    { title: "Pull Request Analyzer", desc: "Generates readable PR descriptions summarizing file changes, test coverage, and code impacts." },
    { title: "Bug Detection System", desc: "Uses semantic matching on crash reports to isolate the exact buggy code blocks needing review." },
    { title: "Documentation Generator", desc: "Reads source trees to auto-generate markdown files, class indexes, and API reference sheets." },
    { title: "Test Case Generator", desc: "Autocreates unit and integration test scripts from source files to maintain coverage profiles." },
    { title: "CI/CD Monitoring Agent", desc: "Analyzes deploy logs to trace root-causes of pipeline breakages." },
    { title: "Security Vulnerability Scanner", desc: "Flags outdated dependencies, exposed secrets, and weak cryptographic configurations." },
    { title: "GitHub Repository Assistant", desc: "Manages project issues, cleans duplicate bug reports, and guides contributor pull requests." }
  ],
  ecommerce: [
    { title: "Product Recommendation Engine", desc: "Matches storefront collections against past user orders to drive custom landing page grids." },
    { title: "Dynamic Pricing System", desc: "Adjusts SKU pricing in real-time based on local demand, inventory volumes, and competitor prices." },
    { title: "Customer Segmentation", desc: "Groups buying cohorts based on lifecycle metrics, average order size, and purchase frequency." },
    { title: "Review Analysis Automation", desc: "Synthesizes thousands of product reviews into high-level lists of pros and cons." },
    { title: "Inventory Forecasting", desc: "Predicts peak holiday order levels to prevent out-of-stock events on high-performing SKUs." },
    { title: "Cart Abandonment Recovery", desc: "Launches personal outreach schedules offering support or custom coupons to recover baskets." },
    { title: "Product Description Generator", desc: "Creates SEO-focused product details from raw spec lists and attributes." },
    { title: "Competitor Price Monitoring", desc: "Monitors competitor sites to generate alert recommendations for your own inventory pricing." }
  ],
  healthcare: [
    { title: "Appointment Scheduling Assistant", desc: "Centralizes calendar scheduling, auto-verifies insurance networks, and sends patient SMS alerts." },
    { title: "Medical Report Summarizer", desc: "Converts complex patient medical files into structured, readable digests for doctor checkups." },
    { title: "Patient Risk Prediction", desc: "Analyzes vitals and historical charts to flag high cardiovascular or diabetes risk profiles." },
    { title: "Drug Recommendation Support", desc: "Cross-checks drug interactions against active patient prescriptions to prevent conflicts." },
    { title: "Medical Image Analysis", desc: "Provides high-accuracy anomaly highlights on chest X-rays, MRI scans, and ultrasound files." },
    { title: "Disease Detection Models", desc: "Analyzes biological lab reports to flag metrics deviating from target wellness benchmarks." }
  ],
  institutions: [
    { title: "AI Teaching Assistant", desc: "Resolves syllabus questions, clarifies class details, and guides homework steps 24/7." },
    { title: "Student Performance Prediction", desc: "Identifies students tracking below passing thresholds, triggering early counselor alerts." },
    { title: "Automated Grading System", desc: "Assesses code submissions and objective math quizzes, leaving detailed feedback notes." },
    { title: "Plagiarism Detection", desc: "Detects AI-generated content or paraphrased online sources across essay files." },
    { title: "Course Recommendation Engine", desc: "Suggests elective paths matching student interests and career goals." },
    { title: "Admission Screening Automation", desc: "Grades admission letters, flags requirements, and assigns scores to speed application flows." }
  ],
  finance: [
    { title: "Stock Market Analysis Agent", desc: "Aggregates global corporate news, earnings reports, and charts to compile portfolio risk updates." },
    { title: "Credit Risk Assessment", desc: "Reviews credit histories and financial records to assign custom risk ratings for loan applicants." },
    { title: "Loan Approval Assistant", desc: "Verifies application files and processes documents to expedite loan review pipelines." },
    { title: "Fraud Detection", desc: "Monitors account logins and payment activities to instantly flag account takeover signs." },
    { title: "Portfolio Optimization", desc: "Rebalances asset allocation weights to match client risk tolerances." },
    { title: "Financial Report Analysis", desc: "Scans corporate balance sheets to track debt levels, cash-flows, and profitability ratios." }
  ],
  agents: [
    { title: "Autonomous Research Agent", desc: "Formulates research queries, compiles documents, and writes complete background summaries on arbitrary topics." },
    { title: "Multi-Agent Business Analyst", desc: "Simulates team discussions between financial, operational, and marketing agents to solve corporate bottlenecks." },
    { title: "AI Project Manager", desc: "Tracks milestone pipelines, flags task dependencies, and checks in with team members automatically." },
    { title: "AI Recruiter", desc: "Reaches out to matching profiles, conducts pre-screen chats, and organizes interview schedules." },
    { title: "AI SDR", desc: "Sends outreach sequences, handles initial responses, and books meetings with qualified prospects." },
    { title: "AI Customer Success Manager", desc: "Monitors product utilization metrics and reaches out to support accounts facing issues." },
    { title: "AI Operations Manager", desc: "Checks stock levels, processes orders, and triggers shipping labels autonomously." },
    { title: "AI Executive Assistant", desc: "Manages emails, categorizes calendars, books travel, and prepares briefs for weekly reviews." },
    { title: "AI Procurement Agent", desc: "Requests quotes from certified suppliers, compares bids, and submits purchase orders." },
    { title: "AI Data Analyst", desc: "Writes and executes SQL queries, builds graphs, and outputs statistical insights from live databases." }
  ],
  "strong-projects": [
    { title: "Multi-Agent Startup Research System", desc: "Orchestrates research nodes to scrap funding databases, profile competitors, and write startup feasibility briefs." },
    { title: "Autonomous LinkedIn Content Agent", desc: "Scans technical RSS feeds, writes target thought-leadership posts, drafts layout graphics, and publishes posts." },
    { title: "AI Interview Monitoring Platform", desc: "Integrates video feeds, audio logs, and tab tracking to flag anomalous candidate activities." },
    { title: "RAG-Based Enterprise Knowledge Assistant", desc: "Answers operational queries with citation links, searching across secure corporate PDF databases." },
    { title: "Customer Support Agent with Memory", desc: "Maintains chat history logs to personalize client conversations across separate weeks." },
    { title: "AI Sales Prospecting System", desc: "Enriches lead profiles, writes targeted emails, and measures campaign open and click metrics." },
    { title: "RL-Based Dynamic Pricing Engine", desc: "Trained using Reinforcement Learning to optimize profit margins under changing demand curves." },
    { title: "Predictive Maintenance using IoT + ML", desc: "Applies deep learning models to predict mechanical equipment failure states from sensor readings." },
    { title: "Multi-Agent Software Development Assistant", desc: "Accepts a user request and schedules code writer, test checker, and review agents to build features." },
    { title: "Enterprise Document Intelligence Platform", desc: "Parses complex tables, handwriting, and charts across thousands of scanned legal/accounting PDFs." }
  ]
};

const SkillyugProjectCatalog = () => {
  const [activeTab, setActiveTab] = useState("businesses");
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategoryData = catalogData[activeTab] || [];
  
  const filteredData = activeCategoryData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="catalog" className="relative py-20 md:py-24 bg-background overflow-hidden border-t border-border/60">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-content px-6 md:px-10 relative z-10">
        
        {/* Company Overview Hero Row */}
        <Reveal as="div" className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>SKILLYUG TECHNOLOGIES</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Empowering Businesses with <span className="text-gradient">Next-Gen IT Solutions</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Skillyug Technologies is a technology-driven IT solutions company specializing in the design and development of scalable, secure, and user-centric web applications. We help startups, small businesses, and enterprises transform their ideas into high-performance digital products tailored to their business goals.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-primary/10 rounded-bl-full pointer-events-none" />
            <h3 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Client Demonstration Guide
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              This catalog highlights our active client project benchmarks. Use these live demonstrations to:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Evaluate real-time operational response rates.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Inspect user experience (UX) quality and responsive layout fluidity.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Select features or architecture templates to customize for your own product.</span>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Services Showcase */}
        <div className="mb-20">
          <Reveal as="div" className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Our Capabilities</h3>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              A Broad Suite of Professional Services
            </h2>
            <p className="text-muted-foreground mt-3 text-xs md:text-sm">
              We leverage modern engineering patterns to ship solutions spanning fullstack web development, AI integration, and design.
            </p>
          </Reveal>

          {/* Directory Filter / Search bar */}
          <Reveal delay={50}>
            <div className="max-w-md mx-auto mb-10 relative">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search capabilities, e.g. quiz generator, CRM, voice..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
          </Reveal>

          {/* Interactive Categories Tabs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setSearchQuery("");
                  }}
                  className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-xs font-semibold text-left justify-start ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-glow-primary scale-102"
                      : "bg-card border-border hover:border-primary/20 text-foreground"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-primary"}`} />
                  <span className="truncate">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Categorized Services List Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((service, idx) => (
                <Reveal key={service.title} delay={idx * 30}>
                  <div className="group relative h-full flex flex-col justify-between rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 card-lift">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <h4 className="font-display font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                          {service.title}
                        </h4>
                        <span className="h-5 w-5 shrink-0 rounded bg-primary/10 text-primary grid place-items-center text-[10px] font-bold">
                          AI
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground text-sm">
                No services or capabilities found matching "{searchQuery}". Try searching for something else.
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Us & Client Demonstration Value section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-gradient-primary/5 blur-2xl rounded-full pointer-events-none" />
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-xl font-extrabold text-foreground mb-6">
                Why Choose <span className="text-gradient">Skillyug Technologies</span>?
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Client-focused development", desc: "Built strictly around your specific goals and target audience's needs." },
                  { title: "Modern design & performance", desc: "No generic templates. Sleek layouts with optimized load times and responsiveness." },
                  { title: "Secure & scalable architecture", desc: "Structured to handle growing traffic volumes and data compliance." },
                  { title: "Transparent communication", desc: "Clear timeline checkpoints, live demonstration builds, and consistent alignment." },
                  { title: "Cost-effective premium quality", desc: "Premium engineering standards delivered at highly competitive project pricing." }
                ].map((h, i) => (
                  <Reveal key={h.title} delay={i * 60}>
                    <div className="flex gap-4 group">
                      <span className="mt-1 h-6 w-6 grid place-items-center rounded-md bg-gradient-primary shrink-0 transition-transform group-hover:scale-105 group-hover:rotate-3 shadow-glow-primary">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </span>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{h.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={100}>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">Partnering with Us</p>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-snug mt-2">
                We design with scale, security, and high performance in mind.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                Whether you need a fully integrated business operations dashboard, a custom-designed marketing website, or a responsive mobile app client, Skillyug Technologies guarantees smooth delivery, clear communication, and cost-effective premium execution.
              </p>
            </Reveal>
            
            <Reveal delay={150}>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/80 bg-muted/30">
                <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Interested in customized builds?</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Let's discuss how we can build a tailor-made system for your workflow.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillyugProjectCatalog;
