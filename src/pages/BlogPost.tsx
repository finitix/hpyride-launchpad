import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from "lucide-react";

const blogPostsData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  tags: string[];
}> = {
  "car-pooling-benefits-india": {
    title: "Top 10 Benefits of Car Pooling in India - Why HpyRide is Leading the Revolution",
    description: "Discover how car pooling with HpyRide saves money, reduces traffic, and helps the environment. Learn why millions of Indians are choosing ride sharing.",
    keywords: "car pooling benefits, hpyride car pooling, ride sharing India, carpooling advantages, save money commute",
    category: "Car Pooling",
    author: "HpyRide Team",
    date: "January 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop",
    tags: ["car pooling", "hpyride", "ride sharing", "commute", "save money"],
    content: [
      "Car pooling has emerged as one of the most effective solutions to India's urban mobility challenges. With HpyRide leading the car pooling revolution, millions of Indians are discovering smarter, more affordable ways to commute daily.",
      "## 1. Save Up to 60% on Commute Costs",
      "The most immediate benefit of car pooling with HpyRide is the dramatic cost savings. By sharing your ride with 2-3 other passengers, you can cut your daily commute expenses by up to 60%. For regular commuters traveling 20-30 km daily, this translates to savings of ₹3,000-5,000 per month.",
      "## 2. Reduce Traffic Congestion",
      "Indian cities like Delhi, Mumbai, and Bangalore are notorious for traffic jams. HpyRide's car pooling service directly addresses this by putting fewer cars on the road. If every car pooling trip removes just 2 additional vehicles from the road, the cumulative impact on traffic reduction is massive.",
      "## 3. Lower Your Carbon Footprint",
      "Environmental consciousness is growing in India, and car pooling is one of the easiest ways to contribute. By sharing rides through HpyRide, you reduce emissions per passenger by 50-75% compared to driving alone.",
      "## 4. Network and Make Connections",
      "Car pooling isn't just about transportation—it's an opportunity to meet like-minded professionals. Many HpyRide users have reported making valuable business connections and friendships through their daily shared rides.",
      "## 5. Verified and Safe Travel",
      "HpyRide ensures 100% driver verification with background checks, real-time GPS tracking, and emergency SOS features. This makes ride sharing safer than hailing random cabs.",
      "## 6. Flexible Scheduling",
      "Unlike public transport with fixed schedules, HpyRide's car pooling offers flexibility. You can find rides matching your timing, whether you're an early morning commuter or need late evening travel.",
      "## 7. Door-to-Door Convenience",
      "While public transport requires you to reach stations, car pooling with HpyRide offers near door-to-door service, saving you the hassle of first and last mile connectivity.",
      "## 8. Reduce Parking Hassles",
      "For those who drive to work, parking in Indian cities is both expensive and stressful. With car pooling, you eliminate parking worries entirely.",
      "## 9. Comfortable Travel Experience",
      "HpyRide matches you with quality vehicles, ensuring air-conditioned, comfortable travel—a significant upgrade from crowded public transport.",
      "## 10. Support the Sharing Economy",
      "By choosing HpyRide for car pooling, you're supporting India's sharing economy and contributing to sustainable urban development.",
      "## Start Your Car Pooling Journey with HpyRide",
      "Ready to experience these benefits? Join HpyRide today and become part of India's largest car pooling community. Whether you're a rider looking for affordable commutes or a driver wanting to share costs, HpyRide connects you with verified users across 50+ Indian cities.",
    ],
  },
  "ride-sharing-vs-cab-booking": {
    title: "Ride Sharing vs Traditional Cab Booking: Which is Better for Your Wallet?",
    description: "Compare ride sharing costs with traditional cab services. See how HpyRide's car pooling can save you up to 60% on daily commute expenses.",
    keywords: "ride sharing vs cab, hpyride, car pooling savings, ride booking comparison, affordable travel India",
    category: "Ride Sharing",
    author: "HpyRide Team",
    date: "January 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    tags: ["ride sharing", "ride booking", "hpyride", "cab comparison", "save money"],
    content: [
      "When it comes to daily commuting in India, you have multiple options: traditional cabs, ride-hailing apps like Ola and Uber, or ride sharing platforms like HpyRide. Let's break down the costs and benefits to help you make an informed decision.",
      "## Understanding the Cost Structure",
      "Traditional cab booking and ride-hailing apps charge you the full fare for the entire journey. Whether you're traveling alone or with friends, you bear the complete cost including driver charges, fuel, and company margins.",
      "HpyRide's ride sharing model is fundamentally different. Here, costs are split among passengers traveling on similar routes, dramatically reducing what each person pays.",
      "## Real Cost Comparison",
      "Let's take a typical 15 km commute in Bangalore: Traditional cab: ₹350-400 per trip. Ride-hailing (Ola/Uber): ₹250-350 per trip. HpyRide ride sharing: ₹100-150 per trip.",
      "Over 22 working days a month, that's the difference between spending ₹15,000 vs ₹5,000 on commuting. That's ₹10,000 saved monthly by choosing ride sharing with HpyRide!",
      "## Beyond Just Cost: Other Factors",
      "While cost is crucial, consider these factors: Convenience (HpyRide offers route-based matching for efficient pickups), Safety (100% verified drivers on HpyRide), Environmental impact (ride sharing reduces carbon emissions), and Social benefits (meet fellow commuters, expand your network).",
      "## When Traditional Cabs Make Sense",
      "Ride sharing isn't always the best choice. Traditional cabs or ride-hailing might be better for: Late night emergency travel, Carrying excessive luggage, Time-critical meetings where you can't wait for other passengers, and Travel to remote areas without active ride sharing pools.",
      "## The Verdict: Choose Based on Your Needs",
      "For daily office commutes, HpyRide's ride sharing offers unbeatable value. The consistent savings, combined with verified travel companions and environmental benefits, make it the smart choice for regular travelers.",
      "However, keep ride-hailing apps as backup for situations requiring immediate, solo travel. The best strategy is to use HpyRide for predictable daily commutes while relying on traditional options for unpredictable travel needs.",
    ],
  },
  "driver-pooling-earn-money": {
    title: "How Driver Pooling on HpyRide Helps Drivers Earn Extra Income",
    description: "Learn how professional drivers across India are joining HpyRide's driver pooling network to maximize earnings with intercity travel.",
    keywords: "driver pooling, hpyride drivers, earn money driving, intercity driver, professional driver India",
    category: "Driver Pooling",
    author: "HpyRide Team",
    date: "January 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=600&fit=crop",
    tags: ["driver pooling", "hpyride", "earn money", "professional drivers"],
    content: [
      "Driver pooling is transforming how professional drivers in India earn their livelihood. HpyRide's driver pooling network connects licensed drivers with intercity travelers, creating consistent income opportunities.",
      "## What is Driver Pooling?",
      "Unlike regular ride sharing where car owners offer spare seats, driver pooling involves professional drivers who collaborate on long-distance routes. These drivers are licensed, experienced, and committed to providing quality intercity travel services.",
      "## How HpyRide's Driver Pooling Works",
      "Professional drivers register on HpyRide with their vehicle and license details. After verification, they're assigned to popular intercity routes based on demand and their preferences. When travelers book these routes, the driver pooling system optimizes pickups and drop-offs for maximum efficiency.",
      "## Earning Potential for Drivers",
      "HpyRide's driver pooling offers competitive earnings: Regular intercity routes: ₹2,000-4,000 per trip. Popular corridors (Delhi-Jaipur, Mumbai-Pune): ₹3,000-5,000 per trip. Monthly potential (20 trips): ₹60,000-100,000.",
      "## Benefits of Joining HpyRide's Driver Network",
      "Consistent bookings through our platform, Fair revenue sharing model, Insurance and safety support, Fuel cost optimization through route planning, and Community of fellow professional drivers.",
      "## Requirements to Join",
      "Valid commercial driving license, Clean driving record, Vehicle meeting safety standards, Smartphone for HpyRide app, and Commitment to customer service.",
      "If you're a professional driver looking to maximize your earnings through intercity travel, HpyRide's driver pooling network is your gateway to better income and sustainable work.",
    ],
  },
  "safe-ride-booking-tips": {
    title: "5 Safety Tips for Ride Booking in India - HpyRide's Complete Guide",
    description: "Stay safe while using ride sharing apps in India. HpyRide shares essential safety tips for car pooling and verifying drivers.",
    keywords: "ride booking safety, hpyride safety, safe car pooling, verify drivers India, ride sharing tips",
    category: "Safety",
    author: "HpyRide Team",
    date: "January 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    tags: ["ride booking", "safety", "hpyride", "car pooling tips"],
    content: [
      "Safety should always be your top priority when using ride sharing or ride booking services. HpyRide is committed to user safety, and here are our essential tips for secure travel.",
      "## 1. Verify Driver Details Before Boarding",
      "Always check the driver's photo, name, and vehicle number match what's shown in the HpyRide app. Never board a vehicle where details don't match. Our 100% driver verification ensures every HpyRide driver has passed background checks.",
      "## 2. Share Your Trip Details",
      "Use HpyRide's built-in trip sharing feature to send your journey details to family or friends. They can track your real-time location throughout the ride. This simple step adds an extra layer of security.",
      "## 3. Prefer Daytime Travel for First-Time Routes",
      "When trying a new car pooling route, schedule your first few trips during daylight hours. Once you're familiar with the route and have regular co-passengers, evening travel becomes more comfortable.",
      "## 4. Trust Your Instincts",
      "If something feels wrong—whether it's the driver's behavior, vehicle condition, or route taken—don't hesitate to use HpyRide's emergency SOS feature. Your safety is paramount, and we'd rather you cancel than take risks.",
      "## 5. Keep Valuables Secure",
      "While HpyRide riders are verified users, it's wise to keep important documents and valuable items secure. Don't display expensive electronics unnecessarily, and keep your belongings within sight.",
      "## HpyRide's Safety Commitment",
      "Every HpyRide driver undergoes thorough verification including ID checks, driving record review, and background screening. Our GPS tracking, emergency features, and user rating system create multiple safety layers for worry-free car pooling.",
    ],
  },
  "car-rental-guide-india": {
    title: "Complete Guide to Car Rental in India - Self-Drive vs Chauffeur Options",
    description: "Planning a trip? Compare self-drive car rental with chauffeur-driven options. HpyRide's guide to renting vehicles in India.",
    keywords: "car rental India, self drive rental, chauffeur car hire, hpyride car rental, rent car India",
    category: "Car Rental",
    author: "HpyRide Team",
    date: "January 3, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&h=600&fit=crop",
    tags: ["car rental", "hpyride", "travel", "self drive", "chauffeur"],
    content: [
      "Car rental in India has evolved significantly, offering both self-drive and chauffeur-driven options. Whether you're planning a road trip, business travel, or need temporary transportation, understanding your options helps you choose wisely.",
      "## Self-Drive Car Rental",
      "Self-drive rentals let you pick up a car and drive it yourself. Popular for: Road trips and exploration, Long-term rentals for relocated professionals, Those who prefer privacy and flexibility, and Experienced drivers comfortable with Indian roads.",
      "## Chauffeur-Driven Rentals",
      "Chauffeur services provide a driver along with the vehicle. Ideal for: Business travelers needing to work during transit, Tourists unfamiliar with local roads, Airport transfers and city tours, and Those who prefer relaxation over driving.",
      "## Cost Comparison",
      "Self-drive: ₹1,500-3,000/day depending on vehicle. Chauffeur-driven: ₹2,500-5,000/day including driver costs. Factor in fuel (self-drive) or included packages (chauffeur) when comparing.",
      "## What to Check Before Renting",
      "Vehicle condition and maintenance records, Insurance coverage and liability terms, Fuel policy (return full or empty), Kilometer limits and excess charges, and Cancellation and modification policies.",
      "## HpyRide's Upcoming Car Rental Service",
      "HpyRide is launching comprehensive car rental services across 50+ Indian cities. Our offerings will include verified vehicles, transparent pricing, insurance coverage, and 24/7 support. Stay tuned for the most trusted car rental experience in India!",
    ],
  },
  "intercity-carpooling-routes": {
    title: "Best Intercity Car Pooling Routes in India - Mumbai to Pune, Delhi to Jaipur & More",
    description: "Explore popular intercity car pooling routes across India. HpyRide connects travelers on Delhi-Jaipur, Mumbai-Pune, and more.",
    keywords: "intercity car pooling, hpyride routes, Mumbai Pune carpool, Delhi Jaipur ride sharing, highway car pooling",
    category: "Car Pooling",
    author: "HpyRide Team",
    date: "January 1, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=600&fit=crop",
    tags: ["car pooling", "intercity travel", "hpyride", "highway routes"],
    content: [
      "Intercity car pooling has become increasingly popular in India, with travelers preferring the convenience and cost-savings of shared highway journeys. HpyRide connects thousands of intercity travelers daily on these popular routes.",
      "## Mumbai - Pune (150 km)",
      "The Mumbai-Pune expressway is India's busiest intercity car pooling corridor. With HpyRide, this 2.5-3 hour journey costs just ₹300-400 per person versus ₹1,500+ for a cab. Peak times: Friday evenings (Mumbai to Pune) and Sunday evenings (return).",
      "## Delhi - Jaipur (280 km)",
      "The capital to Pink City route sees massive car pooling demand, especially on weekends and festival seasons. HpyRide's ride sharing connects Delhi and Jaipur for ₹400-500, making weekend getaways affordable.",
      "## Bangalore - Chennai (350 km)",
      "Tech professionals frequently travel between India's major IT hubs. HpyRide's car pooling on this 5-6 hour route costs ₹500-700, significantly less than flights or private cabs.",
      "## Bangalore - Mysore (150 km)",
      "This popular tourist and business route is perfect for car pooling. HpyRide connects travelers for ₹250-350, making Mysore day trips economical.",
      "## Hyderabad - Vijayawada (275 km)",
      "Connecting two major Andhra/Telangana cities, this route sees consistent car pooling demand for both business and personal travel.",
      "## Tips for Intercity Car Pooling",
      "Book in advance for popular weekend routes, Check driver ratings and reviews, Agree on pickup/drop locations beforehand, Carry minimal luggage for shared vehicles, and Stay connected through HpyRide app during the journey.",
      "## Join HpyRide's Intercity Network",
      "Whether you're traveling for work, family visits, or weekend getaways, HpyRide's intercity car pooling connects you with verified co-travelers on India's busiest highway routes. Safe, affordable, and convenient—that's the HpyRide promise.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} | HpyRide Blog`}
        description={post.description}
        keywords={post.keywords}
        canonicalUrl={`https://hpyride.com/blog/${slug}`}
        ogImage={post.image}
        ogType="article"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-pink transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-brand text-white text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert"
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={18} className="text-muted-foreground" />
                <span className="font-medium text-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-2xl">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Share this article:</span>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-brand text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            More from <span className="gradient-text">HpyRide</span> Blog
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/blog" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              ← All Articles
            </Link>
            <Link to="/services" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Our Services
            </Link>
            <Link to="/contact" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
