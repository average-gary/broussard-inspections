import { useSeoMeta } from '@unhead/react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useNostrLogin } from '@nostrify/react/login';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Home, Bug, Droplets, Phone, Star, MapPin, Clock, Shield, Calculator, BookOpen, Calendar } from 'lucide-react';

const Index = () => {
  useSeoMeta({
    title: 'Broussard Home Inspections - Professional Home Inspection Services',
    description: 'Professional home inspection services including general inspections, termite testing, and mold sampling referrals. Licensed and insured inspectors serving the local area.',
  });

  const { logins } = useNostrLogin();
  const { user } = useCurrentUser();
  const isLoggedIn = logins.length > 0;
  const npub = user?.pubkey;
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [squareFootage, setSquareFootage] = useState('');
  const [housePrice, setHousePrice] = useState('');
  const [houseAge, setHouseAge] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "General Home Inspections",
      description: "Comprehensive evaluation of your property's structure, systems, and safety features",
      features: ["Structural Assessment", "Electrical Systems", "Plumbing Systems", "HVAC Inspection", "Roof & Exterior", "Interior Components"]
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Termite Inspections",
      description: "Professional termite detection and wood-destroying insect evaluations",
      features: ["Wood-Destroying Insects", "Termite Detection", "Damage Assessment", "Prevention Recommendations", "Treatment Options", "Follow-up Inspections"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Moisture Evaluations",
      description: "Advanced moisture detection and assessment to prevent water damage and mold growth",
      features: ["Moisture Meter Testing", "Thermal Imaging", "Water Intrusion Detection", "Humidity Level Analysis", "Foundation Moisture Check", "Preventive Recommendations"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Mold Sampling Referrals",
      description: "Connect with certified mold inspection specialists for air quality testing",
      features: ["Air Quality Testing", "Surface Sampling", "Moisture Detection", "Health Risk Assessment", "Remediation Planning", "Post-Treatment Verification"]
    }
  ];

  const contractors = [
    {
      name: "ABC Roofing Solutions",
      specialty: "Roofing & Gutters",
      phone: "(555) 123-4567",
      rating: 4.8,
      reviews: 127,
      description: "Experienced roofing contractors specializing in repairs and replacements"
    },
    {
      name: "Perfect Plumbing Co.",
      specialty: "Plumbing Services",
      phone: "(555) 234-5678",
      rating: 4.9,
      reviews: 203,
      description: "Licensed plumbers for all residential plumbing needs"
    },
    {
      name: "Elite Electrical",
      specialty: "Electrical Work",
      phone: "(555) 345-6789",
      rating: 4.7,
      reviews: 156,
      description: "Certified electricians for safety upgrades and repairs"
    },
    {
      name: "Foundation Masters",
      specialty: "Foundation Repair",
      phone: "(555) 456-7890",
      rating: 4.6,
      reviews: 89,
      description: "Foundation specialists with 20+ years experience"
    }
  ];

  const sampleImages = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Home inspection - electrical panel",
      caption: "Electrical Panel Inspection"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Home inspection - plumbing systems",
      caption: "Plumbing System Check"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Home inspection - HVAC unit",
      caption: "HVAC System Inspection"
    },
    {
      src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Home inspection - structural elements",
      caption: "Structural Assessment"
    },
    {
      src: "https://images.unsplash.com/photo-1609205807107-e6ec2de9e7bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Moisture evaluation - thermal imaging",
      caption: "Moisture Evaluation with Thermal Imaging"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Moisture evaluation - water damage detection",
      caption: "Water Damage Detection"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      npub: "npub1abc123...",
      rating: 5,
      date: "2024-09-15",
      comment: "Thorough inspection and detailed report. Very professional service!"
    },
    {
      name: "Mike Chen",
      npub: "npub1def456...",
      rating: 5,
      date: "2024-09-10",
      comment: "Found several issues we wouldn't have noticed. Saved us thousands in repairs."
    },
    {
      name: "Lisa Rodriguez",
      npub: "npub1ghi789...",
      rating: 4,
      date: "2024-09-05",
      comment: "Great communication throughout the process. Highly recommend!"
    }
  ];

  const blogArticles = [
    {
      id: 1,
      title: "5 Critical Areas Every Home Inspector Checks",
      excerpt: "Learn about the most important systems and components that professional home inspectors focus on during a comprehensive evaluation.",
      date: "2024-09-20",
      readTime: "5 min read",
      category: "Inspection Basics",
      content: "When you hire a professional home inspector, they follow a systematic approach to evaluate your property. The five most critical areas include: 1) Structural elements like foundations, floors, and load-bearing walls. 2) Electrical systems including panels, wiring, and outlets. 3) Plumbing systems covering water supply, drainage, and fixtures. 4) HVAC systems for heating, cooling, and ventilation. 5) Roofing and exterior elements that protect your home from the elements."
    },
    {
      id: 2,
      title: "Common Red Flags: When to Walk Away from a Home Purchase",
      excerpt: "Discover the warning signs that could indicate serious problems and potentially costly repairs in your future home.",
      date: "2024-09-18",
      readTime: "7 min read",
      category: "Buying Tips",
      content: "Some issues discovered during a home inspection are deal-breakers. Major foundation problems, extensive electrical code violations, severe water damage or active leaks, structural damage to load-bearing elements, and outdated or dangerous HVAC systems are all red flags. However, minor cosmetic issues, older appliances, and minor maintenance items are typically negotiable."
    },
    {
      id: 3,
      title: "Understanding Your Home Inspection Report",
      excerpt: "A guide to interpreting your inspection report and prioritizing the repairs and maintenance items identified.",
      date: "2024-09-15",
      readTime: "6 min read",
      category: "Reports",
      content: "Your inspection report categorizes findings into three levels: Safety issues that need immediate attention, major systems that require repair or replacement, and maintenance items for future consideration. Photos and detailed descriptions help you understand each issue. Use this report to negotiate repairs with sellers or plan your maintenance budget."
    },
    {
      id: 4,
      title: "Seasonal Home Maintenance: A Year-Round Checklist",
      excerpt: "Stay ahead of problems with this comprehensive seasonal maintenance guide for homeowners.",
      date: "2024-09-12",
      readTime: "8 min read",
      category: "Maintenance",
      content: "Spring: Clean gutters, inspect roof, service HVAC, check exterior caulking. Summer: Inspect and clean deck/patio, check irrigation systems, maintain landscaping drainage. Fall: Winterize outdoor faucets, clean chimney, seal gaps and cracks. Winter: Monitor for ice dams, check insulation, maintain proper humidity levels. Regular maintenance prevents costly emergency repairs."
    },
    {
      id: 5,
      title: "The Hidden Dangers of DIY Electrical Work",
      excerpt: "Why electrical work should be left to professionals and how improper installations can threaten your safety.",
      date: "2024-09-10",
      readTime: "4 min read",
      category: "Safety",
      content: "DIY electrical work might seem cost-effective, but it poses serious risks. Improper installations can cause fires, electrocution, and code violations that affect insurance and resale value. Common DIY mistakes include overloaded circuits, incorrect wire gauges, improper grounding, and code violations. Always hire licensed electricians for electrical work and have installations inspected."
    },
    {
      id: 6,
      title: "Moisture Problems: Prevention and Early Detection",
      excerpt: "Learn how to identify moisture issues before they become major problems affecting your home's structure and air quality.",
      date: "2024-09-08",
      readTime: "6 min read",
      category: "Moisture Control",
      content: "Moisture problems can cause structural damage, mold growth, and health issues. Warning signs include musty odors, visible water stains, peeling paint, and condensation on windows. Prevention involves proper ventilation, addressing leaks promptly, maintaining gutters, and controlling humidity levels. Use moisture meters and thermal imaging for early detection."
    }
  ];

  const submitReview = () => {
    if (!isLoggedIn) {
      alert('Please log in with your Nostr account to submit a review.');
      return;
    }
    console.log('Review submitted:', { rating, comment: reviewText, npub });
    setReviewText('');
    setRating(5);
  };

  const calculateEstimate = () => {
    if (!squareFootage || !housePrice || !houseAge) {
      alert('Please fill in all fields to get an estimate.');
      return;
    }

    const sqft = parseInt(squareFootage);
    const price = parseInt(housePrice.replace(/[,$]/g, ''));
    const age = parseInt(houseAge);

    // Base inspection fee
    let baseRate = 350;

    // Square footage pricing (tiered)
    if (sqft <= 1500) {
      baseRate += 0;
    } else if (sqft <= 2500) {
      baseRate += 75;
    } else if (sqft <= 4000) {
      baseRate += 150;
    } else {
      baseRate += 225;
    }

    // House age multiplier (older homes need more thorough inspection)
    if (age >= 100) {
      baseRate += 150;
    } else if (age >= 51) {
      baseRate += 75;
    }

    // House price factor (higher value homes get premium service)
    if (price >= 1000000) {
      baseRate += 100;
    } else if (price >= 750000) {
      baseRate += 75;
    } else if (price >= 500000) {
      baseRate += 50;
    }

    setEstimate(baseRate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Broussard Home Inspections
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Professional • Licensed • Insured</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-blue-600">(555) HOME-123</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Available 7 Days a Week</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="contractors">Contractors</TabsTrigger>
            <TabsTrigger value="estimate">Estimate</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Professional Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive home inspection services to protect your investment and ensure your family's safety
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Sample Inspection Images
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Examples of our thorough inspection process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-center">{image.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contractors Tab */}
          <TabsContent value="contractors" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted Contractor References
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Reliable professionals we recommend for repairs and improvements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contractors.map((contractor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-1">{contractor.name}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{contractor.specialty}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">{contractor.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">({contractor.reviews} reviews)</p>
                      </div>
                    </div>
                    <CardDescription>{contractor.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-600" />
                        <span className="font-mono text-blue-600">{contractor.phone}</span>
                      </div>
                      <Button variant="outline" size="sm">Contact</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Estimate Tab */}
          <TabsContent value="estimate" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get Your Inspection Estimate
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Instant quote based on your property details
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Estimate Calculator */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calculator className="w-6 h-6" />
                      <span>Inspection Calculator</span>
                    </CardTitle>
                    <CardDescription>
                      Enter your property details to get an instant estimate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="squareFootage">Square Footage</Label>
                      <Input
                        id="squareFootage"
                        type="number"
                        placeholder="e.g., 2500"
                        value={squareFootage}
                        onChange={(e) => setSquareFootage(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Total living space in square feet</p>
                    </div>

                    <div>
                      <Label htmlFor="housePrice">House Value</Label>
                      <Input
                        id="housePrice"
                        type="text"
                        placeholder="e.g., $350,000"
                        value={housePrice}
                        onChange={(e) => setHousePrice(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Current market value or purchase price</p>
                    </div>

                    <div>
                      <Label htmlFor="houseAge">Age of Home (Years)</Label>
                      <Input
                        id="houseAge"
                        type="number"
                        placeholder="e.g., 15"
                        value={houseAge}
                        onChange={(e) => setHouseAge(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">How old is the property?</p>
                    </div>

                    <Button onClick={calculateEstimate} className="w-full" size="lg">
                      Calculate Estimate
                    </Button>

                    {estimate && (
                      <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            Estimated Cost
                          </h3>
                          <p className="text-4xl font-bold text-gray-900 dark:text-white">
                            ${estimate.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            *This is an estimate. Final pricing may vary based on specific conditions and additional services.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Pricing Information */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pricing Factors</CardTitle>
                      <CardDescription>How we calculate your inspection cost</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Square Footage</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Up to 1,500 sq ft: Base rate</li>
                            <li>• 1,501 - 2,500 sq ft: +$75</li>
                            <li>• 2,501 - 4,000 sq ft: +$150</li>
                            <li>• Over 4,000 sq ft: +$225</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Age Factor</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• 0-50 years: No additional charge</li>
                            <li>• 51-99 years: +$75</li>
                            <li>• 100+ years: +$150</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Property Value</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Under $500k: No additional charge</li>
                            <li>• $500k - $750k: +$50</li>
                            <li>• $750k - $1M: +$75</li>
                            <li>• $1M+: +$100</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Comprehensive written report</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Digital photos of issues found</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Same-day report delivery</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>90-day warranty on inspection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Free consultation call</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Home Inspection & Maintenance Blog
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Expert insights and practical tips for homeowners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-xs text-gray-500 space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Article Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Featured Article
              </h3>
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="default">Featured</Badge>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blogArticles[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{blogArticles[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{blogArticles[0].title}</CardTitle>
                  <CardDescription className="text-base">
                    {blogArticles[0].excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {blogArticles[0].content}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{blogArticles[0].category}</Badge>
                    <Button>Continue Reading</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blog Categories */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Popular Topics
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Inspection Basics', 'Buying Tips', 'Safety', 'Maintenance', 'Moisture Control', 'Reports'].map((category) => (
                  <Badge key={category} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Client Reviews
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                What our satisfied customers are saying
              </p>
            </div>

            {/* Submit Review Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Leave a Review</CardTitle>
                <CardDescription>
                  {isLoggedIn ?
                    `Logged in as ${npub?.slice(0, 16)}...` :
                    'Please log in with your NIP-05 identity to leave a review'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        disabled={!isLoggedIn}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea
                    id="review"
                    placeholder="Share your experience..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    disabled={!isLoggedIn}
                    className="mt-1"
                  />
                </div>
                <Button onClick={submitReview} disabled={!isLoggedIn || !reviewText.trim()}>
                  Submit Review
                </Button>
              </CardContent>
            </Card>

            {/* Existing Reviews */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm text-gray-600">{review.npub}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Ready to schedule your inspection? Get in touch today!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Schedule an Inspection</CardTitle>
                  <CardDescription>Fill out the form and we'll contact you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" placeholder="123 Main St, City, State 12345" />
                  </div>
                  <div>
                    <Label htmlFor="inspectionType">Inspection Type</Label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>General Home Inspection</option>
                      <option>Termite Inspection</option>
                      <option>Mold Sampling Referral</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea id="message" placeholder="Any specific concerns or requirements..." />
                  </div>
                  <Button className="w-full">Request Inspection</Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Phone</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-blue-600">(555) HOME-123</p>
                    <p className="text-gray-600">Available 7 days a week</p>
                    <p className="text-sm text-gray-500">Emergency inspections available</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>Service Area</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">Greater Metro Area</p>
                    <p className="text-gray-600">Within 50 miles of downtown</p>
                    <p className="text-sm text-gray-500 mt-2">
                      We proudly serve the entire metropolitan area and surrounding communities
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Business Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                      <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM</p>
                      <p><span className="font-semibold">Sunday:</span> By appointment</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Emergency inspections available 24/7
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Broussard Home Inspections</h3>
            <p className="text-gray-300 mb-4">
              Licensed • Insured • Professional
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                License #HI-2024-001
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                Fully Insured
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                Certified Inspector
              </Badge>
            </div>
            <Separator className="my-6 bg-gray-700" />
            <p className="text-sm text-gray-500">
              © 2024 Broussard Home Inspections. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
