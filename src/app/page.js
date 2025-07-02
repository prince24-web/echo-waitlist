'use client'
import React, { useState } from 'react';
import { Brain, RotateCcw, Bot, Calendar, Target, Mail, ChevronRight, Sparkles, Users, Zap, Clock } from 'lucide-react';

export default function EchoLanding() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // TODO: Replace with actual Supabase integration
    // Example Supabase call:
    // try {
    //   const { data, error } = await supabase
    //     .from('waitlist')
    //     .insert([{ email, created_at: new Date() }]);
    //   
    //   if (error) throw error;
    //   setIsSubmitted(true);
    //   setEmail('');
    // } catch (error) {
    //   console.error('Error:', error);
    // } finally {
    //   setIsSubmitting(false);
    // }
    
    // Simulate API call for demo
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Post Templates That Don't Suck",
      description: "Pre-built templates that sound human, not corporate"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Cross-Posting (X, IG, Threads)",
      description: "One post, everywhere. Save time, stay consistent"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Writer Trained on Your Voice",
      description: "Learns your tone so you never sound like a robot"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Auto-Filled Weekly Content Calendar",
      description: "Never stare at a blank calendar again"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Launch Post & Meme Generator",
      description: "Perfect posts for your biggest moments"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Create and launch waitlist",
      description: "Perfect for building anticipation for your product"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8 inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full px-6 py-2 border border-purple-500/20">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Echo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Build your startup.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let your content echo.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Vibe-first marketing automation for founders who post with purpose.
          </p>

          {/* CTA Button */}
          <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 mb-8">
            <span>Join the Waitlist</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span>Join 200+ founders building with Echo.</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Problem + Promise Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                No more blank calendars or 
                <span className="text-purple-400"> &quot;we&rsquo;re thrilled to announce&quot;</span> posts.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Echo helps you automate your launch and build-in-public content without losing your tone. 
                Because your startup deserves content that actually sounds like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Features that
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> actually matter</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl text-purple-400 group-hover:text-purple-300 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Built for
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> builders</span>
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-6 border border-purple-500/20">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Founders</h3>
              <p className="text-gray-400">Building the next big thing</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-500/20">
              <Brain className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Indie Hackers</h3>
              <p className="text-gray-400">Shipping products solo</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-2xl p-6 border border-pink-500/20">
              <Target className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Builders in Public</h3>
              <p className="text-gray-400">Sharing the journey</p>
            </div>
          </div>

          <p className="text-xl text-gray-300">
            People tired of writing boring posts and sounding like robots.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Ready to
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> vibe?</span>
          </h2>

          {!isSubmitted ? (
            <div className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Joining...</span>
                  </div>
                ) : (
                  'Join the Waitlist '
                )}
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">You&rsquo;re in!</h3>
              <p className="text-gray-300">We&rsquo;ll ping you when Echo is ready to make your content legendary.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Echo
            </span>
          </div>
          <p className="text-gray-400">
            Made for builders, by builders. Let your content echo.
          </p>
        </div>
      </footer>
    </div>
  );
}