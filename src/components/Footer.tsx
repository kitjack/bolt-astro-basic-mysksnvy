import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1C] py-16 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-6 h-6 text-orange-500"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <rect width="7" height="5" x="7" y="7" rx="1" />
                <rect width="7" height="5" x="10" y="12" rx="1" />
              </svg>
              <span>AI-Free-Forever</span>
            </div>
            <p className="text-gray-400 mb-4">
              Unlimited AI tools and features with no word limits, no subscriptions, no restrictions. Forever free.
            </p>
            <div className="text-gray-400">
              <a href="mailto:support@aifreeforever.com" className="hover:text-white transition">
                support@aifreeforever.com
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-500 hover:text-gray-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Integrations</h3>
            <ul className="space-y-2">
              <li><a href="/zapier" className="text-gray-400 hover:text-white transition">Zapier</a></li>
              <li><a href="/sdk" className="text-gray-400 hover:text-white transition">SDK and Code Examples</a></li>
              <li><a href="/amazon-s3" className="text-gray-400 hover:text-white transition">Upload to Amazon S3</a></li>
              <li><a href="/rapid-api" className="text-gray-400 hover:text-white transition">RapidAPI Hub</a></li>
              <li><a href="/sanity" className="text-gray-400 hover:text-white transition">Plugin for Sanity</a></li>
              <li><a href="/signed-links" className="text-gray-400 hover:text-white transition">Signed Links</a></li>
              <li><a href="/flowmattic" className="text-gray-400 hover:text-white transition">FlowMattic</a></li>
              <li><a href="/google-sheets" className="text-gray-400 hover:text-white transition">Google Sheets</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/use-cases" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
              <li><a href="/what-is" className="text-gray-400 hover:text-white transition">What is a screenshot API?</a></li>
              <li><a href="/tools" className="text-gray-400 hover:text-white transition">Screenshot Tools</a></li>
              <li><a href="/website" className="text-gray-400 hover:text-white transition">Website Screenshots</a></li>
              <li><a href="/full-page" className="text-gray-400 hover:text-white transition">Full Page Screenshots</a></li>
              <li><a href="/scrolling" className="text-gray-400 hover:text-white transition">Scrolling Screenshots</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/scrolling" className="text-gray-400 hover:text-white transition">Scrolling Screenshots</a></li>
              <li><a href="/api" className="text-gray-400 hover:text-white transition">Screenshot API</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/roadmap" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
              <li><a href="/status" className="text-gray-400 hover:text-white transition">Status</a></li>
              <li><a href="/affiliate" className="text-gray-400 hover:text-white transition">Affiliate Program</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-800">
          <div className="flex items-center gap-2 text-gray-400">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>All services are online</span>
            </div>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="/compare" className="text-sm text-gray-400 hover:text-white transition">Compare</a>
            <a href="/puppeteer" className="text-sm text-gray-400 hover:text-white transition">Puppeteer alternative</a>
          </div>
        </div>
      </div>
    </footer>
  );
}