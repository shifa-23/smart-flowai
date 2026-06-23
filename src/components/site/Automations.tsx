import {
  Zap,
  Bot,
  Mail,
  MessageSquare,
  PhoneCall,
  Video,
  Database,
  FileText,
  FileSearch,
  Receipt,
  PieChart,
  TrendingUp,
  LineChart,
  UserX,
  Smile,
  ShieldAlert,
  ShoppingCart,
  Boxes,
  Activity,
  Users
} from "lucide-react";
import Reveal from "./Reveal";

const automations = [
  { title: "Lead Generation Automation", icon: Zap, desc: "Autonomously scans directories, social networks, and registries to target prospective accounts." },
  { title: "Lead Qualification AI", icon: Bot, desc: "Evaluates prospective client intent, budget, and timeline criteria through automated email exchanges." },
  { title: "Sales Email Personalization", icon: Mail, desc: "Generates customized cold-outreach emails by analyzing the prospect's LinkedIn profile and company data." },
  { title: "Customer Support Chatbot", icon: MessageSquare, desc: "Resolves 24/7 user queries, handles order tracking, and processes returns using corporate knowledge base." },
  { title: "Voice Support Agent", icon: PhoneCall, desc: "Speaks with callers using custom trained voices to handle booking, front-desk, or level-1 triage tasks." },
  { title: "Meeting Summarization", icon: Video, desc: "Listens to video/audio calls, isolates Action Items, lists key decisions, and syncs summaries to Slack." },
  { title: "CRM Auto-Update Agent", icon: Database, desc: "Automatically logs sales call transcripts, captures deal status updates, and updates sales pipeline." },
  { title: "Proposal Generator", icon: FileText, desc: "Draws data from RFP briefs and formats complete custom commercial proposals." },
  { title: "Contract Analysis System", icon: FileSearch, desc: "Scans vendor agreements for liabilities, missing clauses, renewal terms, and payment structures." },
  { title: "Invoice Processing Automation", icon: Receipt, desc: "Extracts billing items, vendor IDs, and totals from PDF invoices to push into accounting ledgers." },
  { title: "Expense Classification", icon: PieChart, desc: "Reads corporate receipts, groups expenses by tax codes, and flags non-compliant claims." },
  { title: "Business Intelligence Dashboard", icon: LineChart, desc: "Consolidates cross-channel data to present visual KPI trackers and predictive sales metrics." },
  { title: "Demand Forecasting", icon: TrendingUp, desc: "Analyzes historical store sales and seasonal fluctuations to predict future inventory demand." },
  { title: "Churn Prediction", icon: UserX, desc: "Identifies accounts displaying dropping platform usage patterns and flags them for CS retention outreach." },
  { title: "Customer Sentiment Analysis", icon: Smile, desc: "Monitors review platforms and social feeds to flag negative escalations before they trend." },
  { title: "Fraud Detection", icon: ShieldAlert, desc: "Scans transactional logs in real-time to alert compliance teams of abnormal purchasing behaviors." },
  { title: "Recommendation Engine", icon: ShoppingCart, desc: "Suggests matching products or upsells based on historical customer browsing and basket values." },
  { title: "Inventory Optimization", icon: Boxes, desc: "Adjusts reorder alerts to balance warehouses and lower cash-in-inventory overhead." },
  { title: "Predictive Maintenance", icon: Activity, desc: "Tracks mechanical telemetry indicators to predict equipment failure schedules." },
  { title: "HR Resume Screening", icon: Users, desc: "Screens candidate profiles against role descriptions to rate fit factors before initial interviews." }
];

const Automations = () => {
  return (
    <section id="automations" className="relative py-20 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary mb-3">AI Powered</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our AI <span className="text-gradient">Automations</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Discover our comprehensive suite of 20+ specialized AI agents and automations designed to scale your business operations.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {automations.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 50}>
              <div className="group h-full rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-card-hover hover:border-primary/40 transition-all flex flex-col">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automations;
