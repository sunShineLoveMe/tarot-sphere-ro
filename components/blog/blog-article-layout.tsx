"use client"

import type React from "react"

interface BlogArticleLayoutProps {
  children: React.ReactNode
}

/**
 * BlogArticleLayout - Enforces consistent typography and spacing for all blog articles
 *
 * Typography Rules:
 * - H2: Section titles, cyan color (#73F2FF), semibold, 28px, 48px top margin
 * - H3: Subsection titles, cyan color (#73F2FF), semibold, 22px, 32px top margin
 * - P: Body text, #cccccc, 18px, line-height 1.75, 20px bottom margin
 * - UL/LI: Bullet lists, same as P, 24px top margin, 16px between items
 * - Blockquote: Pink left border, pink/5 background, italic
 * - Strong: Pink highlight (#FF4FD8)
 */
export function BlogArticleLayout({ children }: BlogArticleLayoutProps) {
  return (
    <div className="blog-article-content">
      {children}

      <style jsx global>{`
        .blog-article-content {
          max-width: 680px;
          margin: 0 auto;
        }
        
        /* H2 - Main Section Titles */
        .blog-article-content h2 {
          color: #73F2FF;
          font-size: 1.75rem;
          font-weight: 600;
          margin-top: 48px;
          margin-bottom: 20px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        
        .blog-article-content h2:first-child {
          margin-top: 0;
        }
        
        /* H3 - Subsection Titles */
        .blog-article-content h3 {
          color: #73F2FF;
          font-size: 1.375rem;
          font-weight: 600;
          margin-top: 32px;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        
        /* Paragraphs */
        .blog-article-content p {
          color: #cccccc;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 20px;
        }
        
        /* Bullet Lists */
        .blog-article-content ul {
          margin-top: 24px;
          margin-bottom: 24px;
          padding-left: 24px;
          list-style-type: disc;
        }
        
        .blog-article-content ul li {
          color: #cccccc;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 16px;
          padding-left: 8px;
        }
        
        .blog-article-content ul li:last-child {
          margin-bottom: 0;
        }
        
        /* Nested lists */
        .blog-article-content ul ul {
          margin-top: 12px;
          margin-bottom: 12px;
        }
        
        /* Strong/Bold text */
        .blog-article-content strong {
          color: #FF4FD8;
          font-weight: 600;
        }
        
        /* Links */
        .blog-article-content a {
          color: #73F2FF;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        
        .blog-article-content a:hover {
          text-decoration: underline;
          opacity: 0.8;
        }
        
        /* Blockquotes */
        .blog-article-content blockquote {
          border-left: 4px solid #FF4FD8;
          background: rgba(255, 79, 216, 0.05);
          padding: 24px;
          margin: 32px 0;
          border-radius: 0 12px 12px 0;
        }
        
        .blog-article-content blockquote p {
          font-style: italic;
          margin-bottom: 0;
        }
        
        /* Emphasis/Italic */
        .blog-article-content em {
          font-style: italic;
          color: #e0e0e0;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .blog-article-content h2 {
            font-size: 1.5rem;
            margin-top: 40px;
          }
          
          .blog-article-content h3 {
            font-size: 1.25rem;
            margin-top: 28px;
          }
          
          .blog-article-content p,
          .blog-article-content ul li {
            font-size: 1rem;
          }
          
          .blog-article-content ul {
            padding-left: 20px;
          }
        }
        
        /* Images - Tarot Card Images */
        .blog-article-content .tarot-card-image {
          display: block;
          width: 100%;
          max-width: 100%;
          margin: 32px 0;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(255, 79, 216, 0.25), 0 0 80px rgba(115, 242, 255, 0.15);
          border: 2px solid rgba(115, 242, 255, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-article-content .tarot-card-image:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(255, 79, 216, 0.3), 0 0 100px rgba(115, 242, 255, 0.2);
        }
        
        @media (max-width: 640px) {
          .blog-article-content .tarot-card-image {
            margin: 24px 0;
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  )
}

export default BlogArticleLayout
