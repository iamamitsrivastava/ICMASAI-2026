import { Card } from "@/components/ui/card";
import { Mail, Globe, Award } from "lucide-react";
import { conferenceConfig } from "@/config/conferenceConfig";

const Committee = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-4 gradient-text">
            Committee Members
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Meet the distinguished members organizing {conferenceConfig.name} {conferenceConfig.year}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Chief Patrons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Chief Patrons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {conferenceConfig.committee.chiefPatrons.map((patron, index) => (
                <Card key={index} className="glass-card hover-lift overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    {patron.image ? (
                      <img
                        src={patron.image}
                        alt={patron.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Award className="w-24 h-24 text-primary/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold rounded-full mb-2">
                        Chief Patron
                      </div> */}
                      <h3 className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-s font-semibold rounded-full mb-2">{patron.name}</h3>
                      <p className="text-sm text-white/90 font-medium">{patron.title}</p>
                      <p className="text-xs text-white/80 mt-1">{patron.organization}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Patrons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Patrons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {conferenceConfig.committee.patrons.map((patron, index) => (
                <Card key={index} className="glass-card hover-lift overflow-hidden">
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      {patron.image ? (
                        <img
                          src={patron.image}
                          alt={patron.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Award className="w-16 h-16 text-primary/40" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 text-center">
                      {/* <div className="inline-block px-2 py-1 bg-gradient-to-r from-primary/80 to-secondary/80 text-white text-xs font-semibold rounded-full mb-2">
                        Patron
                      </div> */}
                      <h3 className="text-base font-bold mb-1">{patron.name}</h3>
                      <p className="text-xs text-muted-foreground leading-tight">{patron.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{patron.organization}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Organizing Chair */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Organizing Chair</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {conferenceConfig.committee.organizingChair.map((chair, index) => (
                <Card key={index} className="glass-card hover-lift overflow-hidden">
                  <div className="relative">
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      {chair.image ? (
                        <img
                          src={chair.image}
                          alt={chair.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Award className="w-16 h-16 text-primary/40" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 text-center">
                      <div className="inline-block px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold rounded-full mb-2">
                        {chair.role}
                      </div>
                      <h3 className="text-base font-bold mb-1">{chair.name}</h3>
                      <p className="text-xs text-muted-foreground leading-tight">{chair.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{chair.organization}</p>
                      {chair.email && (
                        <div className="flex items-center justify-center mt-2 text-xs text-muted-foreground">
                          <Mail className="w-3 h-3 mr-1" />
                          <span className="truncate">{chair.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Advisory Committee */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Advisory Committee</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {conferenceConfig.committee.advisoryCommittee?.map((member, index) => (
                <Card key={index} className="p-4 glass-card hover-lift w-full max-w-sm md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">{member.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.organization}</p>
                      <p className="text-xs text-primary mt-1 font-medium">{member.country}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Committee */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Technical Program Committee</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {conferenceConfig.committee.technicalCommittee.map((member, index) => (
                <Card key={index} className="p-4 glass-card hover-lift w-full max-w-sm md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.title}</p>
                      <p className="text-xs text-muted-foreground">{member.organization}</p>
                      <p className="text-xs text-primary mt-1">{member.country}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* General Program Committee */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">General Program Committee</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {conferenceConfig.committee.generalProgramCommittee.map((member, index) => (
                <Card key={index} className="glass-card hover-lift overflow-hidden w-full max-w-xs md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <div className="relative">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-[center_20%]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Award className="w-12 h-12 text-primary/40" />
                        </div>
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <div className="inline-block px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold rounded-full mb-2">
                        General Program Committee
                      </div>
                      <h3 className="text-sm font-bold mb-1">{member.name}</h3>
                      <p className="text-xs text-muted-foreground leading-tight">{member.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.organization}</p>
                      <p className="text-xs text-primary mt-1 font-medium">{member.country}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Publication Committee */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Publication Committee</h2>
            {conferenceConfig.committee.publicationCommittee && conferenceConfig.committee.publicationCommittee.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {conferenceConfig.committee.publicationCommittee.map((member, index) => (
                  <Card key={index} className="p-4 glass-card hover-lift">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{member.name}</h3>
                        <p className="text-xs text-muted-foreground">{member.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.organization}</p>
                        <p className="text-xs text-primary mt-1 font-medium">{member.country}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-12 h-12 text-primary/60" />
                </div>
                <p className="text-muted-foreground text-lg">Publication Committee members will be announced soon</p>
              </div>
            )}
          </div>

          {/* Organization Committee */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Organization Committee</h2>
            {conferenceConfig.committee.organizationCommittee && conferenceConfig.committee.organizationCommittee.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {conferenceConfig.committee.organizationCommittee.map((member, index) => (
                  <Card key={index} className="p-4 glass-card hover-lift">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{member.name}</h3>
                        <p className="text-xs text-muted-foreground">{member.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.organization}</p>
                        <p className="text-xs text-primary mt-1 font-medium">{member.country}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-12 h-12 text-primary/60" />
                </div>
                <p className="text-muted-foreground text-lg">Organization Committee members will be announced soon</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;