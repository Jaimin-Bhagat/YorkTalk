'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Briefcase, 
  Building2, 
  Award, 
  TrendingUp, 
  Grid, 
  BookOpen,
  MessageSquare,
  HelpCircle,
  Gift,
  ChevronDown
} from 'lucide-react'
import '../styles/sideNavStyles.css'

interface NavItemProps {
  href: string
  icon: React.ReactNode
  text: string
  isActive?: boolean
  badge?: string
}

const NavItem = ({ href, icon, text, isActive = false, badge }: NavItemProps) => (
  <Link 
    href={href}
    className={`side-nav-item ${isActive ? 'active' : ''}`}
  >
    <div className="side-nav-item-inner">
      <span className="side-nav-item-icon">{icon}</span>
      <span className="side-nav-item-text">{text}</span>
      {badge && (
        <span className="side-nav-item-badge">
          {badge}
        </span>
      )}
    </div>
  </Link>
)

const NavSection = ({ 
  title, 
  children, 
  isExpanded, 
  onToggle 
}: { 
  title: string, 
  children: React.ReactNode,
  isExpanded: boolean,
  onToggle: () => void
}) => (
  <section className="side-nav-section">
    <h2 className="side-nav-section-title">
      {title}
    </h2>
    <div data-state={isExpanded ? "open" : "closed"}>
      {children}
      <button 
        type="button"
        onClick={onToggle}
        className="side-nav-show-more"
      >
        <div className="side-nav-show-more-inner">
          <p className="side-nav-show-more-text">Show more</p>
          <ChevronDown className={`side-nav-show-more-icon ${isExpanded ? 'expanded' : ''}`} />
        </div>
      </button>
    </div>
  </section>
)

interface SideNavProps {
  className?: string
}

export default function SideNav({ className = '' }: SideNavProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    faculties: false,
    clubs: false,
    general: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }
  
  return (
    <div className={`side-nav ${className}`}>
      <div className="side-nav-container">
        <div className="side-nav-main-section">
          <NavItem 
            href="/dashboard" 
            icon={<Briefcase size={16} />} 
            text="Feed" 
            isActive={true} 
          />
          <NavItem 
            href="/my-company" 
            icon={<Building2 size={16} />} 
            text="My Company" 
          />
          <NavItem 
            href="/polls" 
            icon={<MessageSquare size={16} />} 
            text="Polls" 
          />
          <NavItem 
            href="/channels" 
            icon={<Grid size={16} />} 
            text="All Channels" 
          />
          <NavItem 
            href="/featured" 
            icon={<Award size={16} />} 
            text="Featured Content" 
          />
          <NavItem 
            href="/trending" 
            icon={<TrendingUp size={16} />} 
            text="Trending" 
          />
        </div>
        
        <hr className="side-nav-divider" />
        
        <div className="side-nav-section-content">
          {/* Faculties Section */}
          <NavSection 
            title="Faculties" 
            isExpanded={expandedSections.faculties}
            onToggle={() => toggleSection('faculties')}
          >
            <div>
              <div className="flex">
                <NavItem 
                  href="/faculty/science" 
                  icon={<BookOpen size={16} />} 
                  text="Faculty of Science" 
                />
              </div>
              <div className="flex">
                <NavItem 
                  href="/faculty/engineering" 
                  icon={<BookOpen size={16} />} 
                  text="Faculty of Engineering" 
                />
              </div>
              <div className="flex">
                <NavItem 
                  href="/faculty/health" 
                  icon={<BookOpen size={16} />} 
                  text="Faculty of Health" 
                />
              </div>
              <div className={expandedSections.faculties ? "flex" : "hidden"}>
                <NavItem 
                  href="/faculty/arts" 
                  icon={<BookOpen size={16} />} 
                  text="Faculty of Arts" 
                />
              </div>
              <div className={expandedSections.faculties ? "flex" : "hidden"}>
                <NavItem 
                  href="/faculty/business" 
                  icon={<BookOpen size={16} />} 
                  text="Faculty of Business" 
                />
              </div>
            </div>
          </NavSection>
          
          <hr className="side-nav-divider" />
          
          {/* Clubs Section */}
          <NavSection 
            title="Clubs"
            isExpanded={expandedSections.clubs}
            onToggle={() => toggleSection('clubs')}
          >
            <div>
              <div className="flex">
                <NavItem 
                  href="/club/cs-club" 
                  icon={<BookOpen size={16} />} 
                  text="Computer Science Club" 
                />
              </div>
              <div className="flex">
                <NavItem 
                  href="/club/debate-society" 
                  icon={<BookOpen size={16} />} 
                  text="Debate Society" 
                />
              </div>
              <div className="flex">
                <NavItem 
                  href="/club/chess-club" 
                  icon={<BookOpen size={16} />} 
                  text="Chess Club" 
                />
              </div>
              <div className={expandedSections.clubs ? "flex" : "hidden"}>
                <NavItem 
                  href="/club/photography-club" 
                  icon={<BookOpen size={16} />} 
                  text="Photography Club" 
                />
              </div>
              <div className={expandedSections.clubs ? "flex" : "hidden"}>
                <NavItem 
                  href="/club/music-club" 
                  icon={<BookOpen size={16} />} 
                  text="Music Club" 
                />
              </div>
            </div>
          </NavSection>
          
          <hr className="side-nav-divider" />
          
          {/* General Section */}
          <NavSection 
            title="General"
            isExpanded={expandedSections.general}
            onToggle={() => toggleSection('general')}
          >
            <div>
              <div className="flex">
                <NavItem 
                  href="/ask" 
                  icon={<HelpCircle size={16} />} 
                  text="Ask Questions" 
                />
              </div>
              <div className="flex">
                <NavItem 
                  href="/offers" 
                  icon={<Gift size={16} />} 
                  text="Offer Evaluation" 
                  badge="NEW" 
                />
              </div>
              <div className="flex">
                <NavItem 
                  href="/holidays" 
                  icon={<Gift size={16} />} 
                  text="Holidays" 
                  badge="NEW"
                />
              </div>
              <div className={expandedSections.general ? "flex" : "hidden"}>
                <NavItem 
                  href="/cars" 
                  icon={<Gift size={16} />} 
                  text="Cars" 
                  badge="NEW"
                />
              </div>
              <div className={expandedSections.general ? "flex" : "hidden"}>
                <NavItem 
                  href="/ai" 
                  icon={<Gift size={16} />} 
                  text="Artificial Intelligence" 
                  badge="NEW"
                />
              </div>
            </div>
          </NavSection>
        </div>
      </div>
    </div>
  )
}
