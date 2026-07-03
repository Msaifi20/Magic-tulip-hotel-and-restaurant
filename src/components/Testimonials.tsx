import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { Language, Translation, Review } from '../types';
import { initialReviews } from '../data';

interface TestimonialsProps {
  currentLang: Language;
  t: Translation;
}

export default function Testimonials({ currentLang, t }: TestimonialsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form states
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  // Load reviews on mount
  useEffect(() => {
    const saved = localStorage.getItem('magic_tulip_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse reviews', e);
        setReviews(initialReviews);
      }
    } else {
      setReviews(initialReviews);
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview: Review = {
      id: Math.random().toString(36).substring(2, 9),
      name: newName,
      rating: newRating,
      comment: {
        en: newComment,
        tr: newComment,
      },
      date: new Date().toISOString().split('T')[0],
      avatar: `https://images.unsplash.com/photo-${Math.floor(1500000000000 + Math.random() * 100000000000)}?w=100&auto=format&fit=crop&q=80` // Random unsplash avatar
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('magic_tulip_reviews', JSON.stringify(updated));

    setNewName('');
    setNewRating(5);
    setNewComment('');
    setSuccessMsg(true);

    // Reset success message after 4s
    setTimeout(() => {
      setSuccessMsg(false);
      setIsFormOpen(false);
    }, 3000);
  };

  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-500 font-mono text-sm tracking-widest uppercase block mb-3 font-bold">
              {t.reviewTitle}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              {t.reviewSubtitle}
            </h2>
            <div className="h-1 w-24 bg-amber-500 mt-4 rounded-full" />
          </div>

          {/* Leave a review Toggle Button */}
          <button
            id="toggle-review-form-btn"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 rounded-2xl text-xs font-extrabold uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-amber-900/10 transition-all self-start cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-stone-950" />
            <span>{t.reviewWriteTitle}</span>
          </button>
        </div>

        {/* Dynamic Review Submission Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              id="review-form-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-xl mx-auto">
                <h3 className="font-serif text-lg font-bold text-stone-100 mb-6 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>{t.reviewWriteTitle}</span>
                </h3>

                {successMsg ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-950/20 border border-emerald-800/30 rounded-2xl text-center text-emerald-400"
                  >
                    <Quote className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <p className="font-medium text-sm">
                      {currentLang === 'en' 
                        ? 'Thank you! Your review has been added successfully.' 
                        : 'Teşekkür ederiz! Yorumunuz başarıyla eklendi.'}
                    </p>
                  </motion.div>
                ) : (
                  <form id="add-review-form" onSubmit={handleReviewSubmit} className="space-y-4">
                    
                    {/* Name input */}
                    <div>
                      <label htmlFor="review-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                        {t.reviewLabelName}
                      </label>
                      <input
                        id="review-name"
                        type="text"
                        required
                        placeholder={t.reviewPlaceholderName}
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-850 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm font-sans"
                      />
                    </div>

                    {/* Rating star selector */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                        {t.reviewLabelRating}
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            id={`star-btn-${star}`}
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className="p-1 focus:outline-none transition-transform active:scale-95"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= newRating ? 'text-amber-500 fill-amber-500' : 'text-stone-750'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Comment text area */}
                    <div>
                      <label htmlFor="review-comment" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                        {t.reviewLabelComment}
                      </label>
                      <textarea
                        id="review-comment"
                        rows={4}
                        required
                        placeholder={t.reviewPlaceholderComment}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-850 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm font-sans resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      id="submit-review-btn"
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-650 hover:to-amber-700 text-stone-950 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all text-center cursor-pointer font-sans"
                    >
                      {t.reviewSubmit}
                    </button>

                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              id={`review-card-id-${review.id}`}
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-stone-950/60 rounded-3xl p-8 border border-stone-850 shadow-md hover:shadow-xl hover:border-amber-500/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6 text-amber-500">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className={`w-4 h-4 ${
                        sIdx < review.rating ? 'fill-amber-500' : 'text-stone-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-stone-300 text-sm font-sans italic leading-relaxed mb-6">
                  "{review.comment[currentLang] || review.comment.en}"
                </p>
              </div>

              {/* Profile Card */}
              <div className="flex items-center space-x-4 border-t border-stone-900 pt-4 mt-4">
                <img
                  src={review.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-stone-800"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-100 font-sans">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {review.date}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
