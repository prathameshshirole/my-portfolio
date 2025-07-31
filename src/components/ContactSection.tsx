import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Calendar } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_ogsigac',
      'template_6xgpmk9',
      formData,
      'WN1h0hFFemcVI-aG2'
    ).then(() => {
      toast.success("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }).catch((error) => {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    }).finally(() => {
      setIsSending(false);
    });
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shiroleprathamesh2000@gmail.com",
      link: "mailto:shiroleprathamesh2000@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 07587791449",
      link: "tel:+4407587791449",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "London, UK",
      link: null,
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Professional Profile",
      link: "https://www.linkedin.com/in/prathamesh-shirole/",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Code Portfolio",
      link: "https://github.com/prathameshshirole",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-primary/20', text: 'text-primary', hover: 'hover:bg-primary/30' };
      case 'secondary':
        return { bg: 'bg-secondary/20', text: 'text-secondary', hover: 'hover:bg-secondary/30' };
      case 'accent':
        return { bg: 'bg-accent/20', text: 'text-accent', hover: 'hover:bg-accent/30' };
      default:
        return { bg: 'bg-primary/20', text: 'text-primary', hover: 'hover:bg-primary/30' };
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="gradient-border data-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const colors = getColorClasses(contact.color);
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <contact.icon className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              className={`font-medium ${colors.text} hover:underline`}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Current Status</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 text-primary">
                      <Calendar className="w-3 h-3 mr-1" />
                      Immediately Available
                    </Badge>
                    <Badge className="bg-secondary/20 text-secondary">
                      Recent Graduate
                    </Badge>
                    <Badge className="bg-accent/20 text-accent">
                      Open to Relocation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-border data-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Connect Online</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const colors = getColorClasses(social.color);
                    return (
                      <a 
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 ${colors.bg} ${colors.hover}`}
                      >
                        <social.icon className={`h-5 w-5 ${colors.text}`} />
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="gradient-border data-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <p className="text-muted-foreground mb-8">
                Interested in discussing data science opportunities? I'd love to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@company.com" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company / Organization</label>
                  <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company name (optional)" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Data Analyst Position / Collaboration Opportunity" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, your data challenges, or how we can collaborate..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  disabled={isSending}
                >
                  {isSending ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold mb-2 text-foreground">What to expect:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Response within 24 hours</li>
                  <li>• Professional discussion about opportunities</li>
                  <li>• Flexible scheduling for interviews/calls</li>
                  <li>• Portfolio demonstration if requested</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Call to Action */}
        <div className="mt-16 text-center">
          <Card className="gradient-border data-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Drive Data Success</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                As a recent MSc Data Science graduate with proven ML expertise and a passion for turning data into insights, 
                I'm excited to contribute to your organization's data-driven goals.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Fresh Perspective</div>
                  <div className="text-sm text-muted-foreground">Latest data science techniques and methodologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">Proven Skills</div>
                  <div className="text-sm text-muted-foreground">98% ML accuracy with real-world deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">Ready to Start</div>
                  <div className="text-sm text-muted-foreground">Immediately available for full-time positions</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Start Conversation
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;