import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: "car-pooling-benefits-india",
    title: "Top 10 Benefits of Car Pooling in India - Why HpyRide is Leading the Revolution",
    excerpt: "Discover how car pooling with HpyRide saves money, reduces traffic, and helps the environment. Learn why millions of Indians are choosing ride sharing for daily commutes.",
    category: "Car Pooling",
    author: "HpyRide Team",
    date: "January 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
    tags: ["car pooling", "hpyride", "ride sharing"],
  },
  {
    id: "ride-sharing-vs-cab-booking",
    title: "Ride Sharing vs Traditional Cab Booking: Which is Better for Your Wallet?",
    excerpt: "Compare ride sharing costs with traditional cab services. See how HpyRide's car pooling can save you up to 60% on daily commute expenses across Indian cities.",
    category: "Ride Sharing",
    author: "HpyRide Team",
    date: "January 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    tags: ["ride sharing", "ride booking", "hpyride"],
  },
  {
    id: "driver-pooling-earn-money",
    title: "How Driver Pooling on HpyRide Helps Drivers Earn Extra Income",
    excerpt: "Learn how professional drivers across India are joining HpyRide's driver pooling network to maximize earnings while providing safe, reliable intercity travel.",
    category: "Driver Pooling",
    author: "HpyRide Team",
    date: "January 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=400&fit=crop",
    tags: ["driver pooling", "hpyride", "earn money"],
  },
  {
    id: "safe-ride-booking-tips",
    title: "5 Safety Tips for Ride Booking in India - HpyRide's Complete Guide",
    excerpt: "Stay safe while using ride sharing apps in India. HpyRide shares essential safety tips for car pooling, ride booking, and verifying drivers before your journey.",
    category: "Safety",
    author: "HpyRide Team",
    date: "January 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["ride booking", "safety", "hpyride"],
  },
  {
    id: "car-rental-guide-india",
    title: "Complete Guide to Car Rental in India - Self-Drive vs Chauffeur Options",
    excerpt: "Planning a trip? Compare self-drive car rental with chauffeur-driven options. HpyRide's upcoming car rental service will transform how Indians rent vehicles.",
    category: "Car Rental",
    author: "HpyRide Team",
    date: "January 3, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=400&fit=crop",
    tags: ["car rental", "hpyride", "travel"],
  },
  {
    id: "intercity-carpooling-routes",
    title: "Best Intercity Car Pooling Routes in India - Mumbai to Pune, Delhi to Jaipur & More",
    excerpt: "Explore popular intercity car pooling routes across India. HpyRide connects travelers on Delhi-Jaipur, Mumbai-Pune, Bangalore-Chennai and more highway routes.",
    category: "Car Pooling",
    author: "HpyRide Team",
    date: "January 1, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
    tags: ["car pooling", "intercity travel", "hpyride"],
  },
];

const categories = [
  "All",
  "Car Pooling",
  "Ride Sharing",
  "Driver Pooling",
  "Car Rental",
  "Safety",
];

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="HpyRide Blog - Car Pooling, Ride Sharing & Driver Pooling Tips India"
        description="Read the latest articles on car pooling, ride sharing, driver pooling, and ride booking in India. HpyRide shares tips, guides, and industry insights."
        keywords="hpyride blog, car pooling tips India, ride sharing guide, driver pooling news, ride booking articles, car rental tips"
        canonicalUrl="https://hpyride.com/blog"
      />

      {/* Hero Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">HpyRide</span> Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tips, guides, and insights on car pooling, ride sharing, and driver pooling in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-gradient-brand text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background" aria-labelledby="blog-posts">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 id="blog-posts" className="sr-only">HpyRide Blog Posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-brand-pink transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-brand-pink font-medium text-sm group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary/30" aria-labelledby="newsletter">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 id="newsletter" className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with <span className="gradient-text">HpyRide</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest car pooling tips, ride sharing news, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
              <button className="h-12 px-6 rounded-xl bg-gradient-brand text-white font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Explore <span className="gradient-text">HpyRide</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              ← Back to Home
            </Link>
            <Link to="/services" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              Our Services
            </Link>
            <Link to="/about" className="text-brand-pink hover:text-brand-purple transition-colors font-medium">
              About Us
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

export default Blog;
