'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Home, Briefcase, Building2, MessageSquare, Grid, Award, TrendingUp, Beaker, Cog, BookText, Heart, Landmark, Palette, GraduationCap, Scale, BookOpen, Globe, School, PlusCircle, Mail } from 'lucide-react'
import '../styles/sideNavStyles.css'

const NavItem = ({ icon, label, active = false, onClick, fullLabel, className }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean,
  onClick?: () => void,
  fullLabel?: string,
  className?: string
}) => {
  return (
    <div 
      className={`side-nav-item ${active ? 'active' : ''} ${className || ''}`}
      onClick={onClick}
      title={fullLabel || label}
    >
      <div className="side-nav-item-inner">
        <div className="side-nav-item-icon">
          {icon}
        </div>
        <span className="side-nav-item-text">{label}</span>
      </div>
    </div>
  )
}

interface SimpleSideNavProps {
  onHomeClick?: () => void;
}

const SimpleSideNav = ({ onHomeClick }: SimpleSideNavProps) => {
  const [showMoreFaculties, setShowMoreFaculties] = useState(false)
  const [showMoreClubs, setShowMoreClubs] = useState(false)

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    }
  };

  return (
    <div className="side-nav">
      <div className="side-nav-container">
        <div className="side-nav-main-section">
          <NavItem icon={<Home size={18} />} label="Home" onClick={handleHomeClick} />
          <NavItem icon={<Briefcase size={18} />} label="Jobs" />
          <NavItem icon={<Building2 size={18} />} label="Housing" />
          <NavItem icon={<MessageSquare size={18} />} label="Discussions" active />
          <NavItem icon={<Grid size={18} />} label="Courses" />
          <NavItem icon={<Award size={18} />} label="Professors" />
          <NavItem icon={<TrendingUp size={18} />} label="Trending" />
        </div>

        <div className="side-nav-section">
          <div className="side-nav-section-title">Faculties</div>
          <div className="side-nav-section-content">
            <NavItem icon={<Beaker size={18} />} label="Science" fullLabel="Faculty of Science" />
            <NavItem icon={<Cog size={18} />} label="Lassonde" fullLabel="Lassonde School of Engineering" />
            <NavItem icon={<BookText size={18} />} label="Liberal Arts" fullLabel="Faculty of Liberal Arts & Professional Studies" />
            <NavItem icon={<Heart size={18} />} label="Health" fullLabel="Faculty of Health" />
            <NavItem icon={<Landmark size={18} />} label="Schulich" fullLabel="Schulich School of Business" />
            {showMoreFaculties && (
              <>
                <NavItem icon={<Palette size={18} />} label="Arts & Media" fullLabel="School of the Arts, Media, Performance & Design" />
                <NavItem icon={<GraduationCap size={18} />} label="Education" fullLabel="Faculty of Education" />
                <NavItem icon={<Scale size={18} />} label="Osgoode" fullLabel="Osgoode Hall Law School" />
                <NavItem icon={<BookOpen size={18} />} label="Graduate Studies" fullLabel="Faculty of Graduate Studies" />
                <NavItem icon={<Building2 size={18} />} label="Glendon" fullLabel="Glendon College" />
                <NavItem icon={<Globe size={18} />} label="Environmental" fullLabel="Faculty of Environmental & Urban Change" />
              </>
            )}
            <button 
              className="side-nav-show-more"
              onClick={() => setShowMoreFaculties(!showMoreFaculties)}
            >
              <div className="side-nav-show-more-inner">
                <span className="side-nav-show-more-text">{showMoreFaculties ? 'Show less' : 'Show more'}</span>
                <div className={`side-nav-show-more-icon ${showMoreFaculties ? 'expanded' : ''}`}>
                  {showMoreFaculties ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="side-nav-section">
          <div className="side-nav-section-title">Clubs</div>
          <div className="side-nav-section-content">
            <NavItem icon={<School size={18} />} label="Bethune College" />
            <NavItem icon={<School size={18} />} label="Calumet College" />
            <NavItem icon={<School size={18} />} label="Founders College" />
            <NavItem icon={<School size={18} />} label="McLaughlin College" />
            {showMoreClubs && (
              <>
                <NavItem icon={<School size={18} />} label="New College" />
                <NavItem icon={<School size={18} />} label="Stong College" />
                <NavItem icon={<School size={18} />} label="Vanier College" />
                <NavItem icon={<School size={18} />} label="Winters College" />
              </>
            )}
            <button 
              className="side-nav-show-more"
              onClick={() => setShowMoreClubs(!showMoreClubs)}
            >
              <div className="side-nav-show-more-inner">
                <span className="side-nav-show-more-text">{showMoreClubs ? 'Show less' : 'Show more'}</span>
                <div className={`side-nav-show-more-icon ${showMoreClubs ? 'expanded' : ''}`}>
                  {showMoreClubs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="side-nav-section" style={{ marginBottom: "30px" }}>
          <div className="side-nav-section-title">General</div>
          <div className="side-nav-section-content">
            <NavItem icon={<PlusCircle size={18} />} label="Ask Questions" />
            <NavItem 
              icon={<Mail size={18} />} 
              label="Contact Us" 
              active={false}
              className="contact-us-item"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleSideNav
