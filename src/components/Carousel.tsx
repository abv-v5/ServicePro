import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, TrendingUp, Clock, Award } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Intelligence',
      description: 'Our advanced AI learns from every interaction to provide smarter, more personalized customer support experiences.',
      stats: { value: '95%', label: 'Accuracy Rate' },
      gradient: 'from-blue-600 to-purple-600',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Real-time insights and comprehensive analytics help you understand customer behavior and optimize your service delivery.',
      stats: { value: '300%', label: 'Performance Boost' },
      gradient: 'from-green-600 to-teal-600',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Clock,
      title: 'Instant Response',
      description: 'Lightning-fast response times with automated workflows ensure your customers never wait for the support they need.',
      stats: { value: '<2s', label: 'Average Response' },
      gradient: 'from-orange-600 to-red-600',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Award,
      title: 'Award-Winning Platform',
      description: 'Recognized by industry leaders for excellence in customer service technology and innovation.',
      stats: { value: '50+', label: 'Industry Awards' },
      gradient: 'from-purple-600 to-pink-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Platform Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for modern customer service teams.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 min-h-[500px]">
                    {/* Content */}
                    <div className="space-y-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                          {feature.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                          {feature.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-r ${feature.gradient} rounded-2xl p-6 text-center shadow-lg`}>
                          <div className="text-3xl font-bold text-white">
                            {feature.stats.value}
                          </div>
                          <div className="text-white/80 text-sm mt-1">
                            {feature.stats.label}
                          </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          <div className="font-semibold text-lg">Proven Results</div>
                          <div className="text-sm">Trusted by thousands</div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20`}></div>
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/90 dark:bg-gray-800/90 rounded-full backdrop-blur-sm shadow-xl flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center animate-pulse`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
              style={{ width: `${((currentSlide + 1) / features.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;