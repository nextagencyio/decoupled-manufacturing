'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Building2, Cog, Shield, TrendingUp, Truck, Award, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const commitmentItems = [
  { icon: Building2, title: 'Advanced Facilities', description: '500,000+ sq ft of modern manufacturing space with cutting-edge CNC, robotics, and automation.' },
  { icon: Cog, title: 'Precision Engineering', description: 'Tight-tolerance machining and fabrication meeting the most demanding specifications.' },
  { icon: Shield, title: 'Quality Assurance', description: 'ISO 9001 and AS9100 certified with rigorous inspection at every production stage.' },
  { icon: TrendingUp, title: 'Continuous Improvement', description: 'Lean manufacturing and Six Sigma methodologies driving operational excellence.' },
  { icon: Truck, title: 'Global Logistics', description: 'Reliable supply chain management ensuring on-time delivery to customers worldwide.' },
  { icon: Award, title: 'Industry Leader', description: 'Recognized for innovation and reliability across aerospace, automotive, and defense sectors.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80&fit=crop', alt: 'Manufacturing floor' },
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&fit=crop', alt: 'Quality inspection' },
  { src: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=80&fit=crop', alt: 'CNC machining' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&fit=crop', alt: 'Finished products' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Engineering Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Steelpoint Manufacturing delivers precision-engineered solutions with uncompromising quality and reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-primary-700" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Our Operations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A look inside our state-of-the-art facilities and precision manufacturing processes.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"><Building2 className="w-5 h-5 text-accent-400" /></div>
                <span className="text-lg font-bold text-white font-display">Steelpoint</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">Precision manufacturing and engineering solutions since 1978.</p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span>1200 Industrial Parkway<br />Pittsburgh, PA 15222</span></div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><span>(555) 567-8901</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/products" className="hover:text-white transition-colors">All Product Lines</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Aerospace</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Automotive</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Defense</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Industrial</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Capabilities</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
                <li><Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Engineering</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Quality Control</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">R&D</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Request Quote</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Technical Support</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Visit Facility</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div><h4 className="text-white font-bold mb-1">Industry Updates</h4><p className="text-primary-300 text-sm">Get manufacturing insights, product announcements, and industry news delivered to your inbox.</p></div>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Steelpoint Manufacturing. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64" />
      <button type="submit" className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap">Subscribe</button>
    </form>
  )
}
