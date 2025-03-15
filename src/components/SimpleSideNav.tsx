'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Briefcase, Building2, MessageSquare, Grid, Award, 
  TrendingUp, BookOpen, HelpCircle, Gift, ChevronDown, ChevronUp 
} from 'lucide-react'
import '../styles/sideNavStyles.css'

const NavItem = ({ icon: Icon, label, active = false, onClick }: { 
  icon: any, 
  label: string, 
  active?: boolean,
  onClick?: () => void
}) => {
  return (
    <div 
      className={`side-nav-item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="side-nav-item-inner">
        <div className="side-nav-item-icon">
          <Icon size={16} />
        </div>
        <span className="side-nav-item-label">{label}</span>
      </div>
    </div>
  )
}

const SimpleSideNav = () => {
  const [showMoreFaculties, setShowMoreFaculties] = useState(false)
  const [showMoreClubs, setShowMoreClubs] = useState(false)

  return (
    <div className="side-nav">
      <div className="side-nav-container">
        <div className="side-nav-main-section">
          <NavItem icon={Briefcase} label="Jobs" />
          <NavItem icon={Building2} label="Housing" />
          <NavItem icon={MessageSquare} label="Discussions" active />
          <NavItem icon={Grid} label="Courses" />
          <NavItem icon={Award} label="Professors" />
          <NavItem icon={TrendingUp} label="Trending" />
        </div>

        <div className="side-nav-section">
          <div className="side-nav-section-title">Faculties</div>
          <div className="side-nav-section-items">
            <NavItem icon={BookOpen} label="Science" />
            <NavItem icon={BookOpen} label="Engineering" />
            <NavItem icon={BookOpen} label="Liberal Arts" />
            {showMoreFaculties && (
              <>
                <NavItem icon={BookOpen} label="Business" />
                <NavItem icon={BookOpen} label="Health" />
                <NavItem icon={BookOpen} label="Education" />
              </>
            )}
            <div 
              className="side-nav-show-more"
              onClick={() => setShowMoreFaculties(!showMoreFaculties)}
            >
              <div className="side-nav-show-more-inner">
                <span>{showMoreFaculties ? 'Show less' : 'Show more'}</span>
                {showMoreFaculties ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </div>
          </div>
        </div>

        <div className="side-nav-section">
          <div className="side-nav-section-title">Clubs</div>
          <div className="side-nav-section-items">
            <NavItem icon={BookOpen} label="Chess Club" />
            <NavItem icon={BookOpen} label="Debate Society" />
            {showMoreClubs && (
              <>
                <NavItem icon={BookOpen} label="Photography" />
                <NavItem icon={BookOpen} label="Music Club" />
                <NavItem icon={BookOpen} label="Dance Club" />
              </>
            )}
            <div 
              className="side-nav-show-more"
              onClick={() => setShowMoreClubs(!showMoreClubs)}
            >
              <div className="side-nav-show-more-inner">
                <span>{showMoreClubs ? 'Show less' : 'Show more'}</span>
                {showMoreClubs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </div>
          </div>
        </div>

        <div className="side-nav-section">
          <div className="side-nav-section-title">General</div>
          <div className="side-nav-section-items">
            <NavItem icon={HelpCircle} label="Help Center" />
            <NavItem icon={Gift} label="Premium" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleSideNav 