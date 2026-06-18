import vinayak from "@/assets/team/Vinayak.jpeg";
import ashish from "@/assets/team/Ashish.png";
import aditi from "@/assets/team/Aditi.jpeg";
import shifa from "@/assets/team/Shifa.jpeg";
import vatsal from "@/assets/team/Vatsal.jpeg";

const teamMembers = [
  {
    name: "Vinayak Pandey",
    role: "Founder & Chief Executive Officer",
    image: vinayak,
    intro:
      "AI Engineer and entrepreneur leading SkillYug Technologies with a vision to build impactful AI, automation, and digital solutions.",
  },
  {
    name: "Ashish Dubey",
    role: "Co-Founder & Chief Operating Officer",
    image: ashish,
    intro:
      "Manages operations, business strategy, client relationships, and growth initiatives across the organization.",
  },
  {
    name: "Aditi Mall",
    role: "Chief Marketing Officer",
    image: aditi,
    intro:
      "Leads branding, outreach campaigns, digital marketing strategies, and customer engagement efforts.",
  },
  {
    name: "Shifa Parveen",
    role: "Chief Technology Officer",
    image: shifa,
    intro:
      "Heads product development, software architecture, and innovation across SkillYug's technology ecosystem.",
  },
  {
    name: "Vatsal Varshney",
    role: "Social Media Manager",
    image: vatsal,
    intro:
      "Handles social media strategy, content creation, audience engagement, and online brand visibility.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3">
            Meet Our Experts
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Team
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Behind every successful project is a dedicated team committed to
            innovation, creativity, and delivering exceptional results.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-5 items-start">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl object-cover object-top border border-slate-200 shadow-sm"
                />

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="text-primary font-semibold mt-1">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {member.intro}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;