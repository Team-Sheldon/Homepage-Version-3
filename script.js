// ===== TEAM SHELDON WEBSITE - COMMON JAVASCRIPT =====
// This file contains shared functionality used across all pages
// Author: Team Sheldon Web Development Team
// Version: 3.0 - Dark Theme Only

// ===== GLOBAL VARIABLES =====
let particleCount = 0;
// Reduce particles on mobile devices for better performance
const maxParticles = window.innerWidth < 768 ? 15 : 40;

// ===== PARTICLE BACKGROUND SYSTEM =====
/**
 * Creates and manages animated background particles
 * Automatically adjusts particle count based on device capability
 */
function initParticleBackground() {
  const particleBackground = document.getElementById('particleBackground');
  
  // Exit early if particle container doesn't exist
  if (!particleBackground) {
    console.warn('Particle background container not found');
    return;
  }
  
  /**
   * Creates a single animated particle
   */
  function createParticle() {
    // Don't create more particles than the maximum allowed
    if (particleCount >= maxParticles) return;
    
    // Create particle element
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Randomize particle properties for natural movement
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    // Add particle to background
    particleBackground.appendChild(particle);
    particleCount++;
    
    // Clean up particle when animation ends
    particle.addEventListener('animationend', () => {
      if (particle.parentNode) {
        particle.remove();
      }
      particleCount--;
    });
  }
  
  // Create new particles periodically
  setInterval(createParticle, 1200);
  
  // Create initial particles with staggered timing
  for (let i = 0; i < Math.min(8, maxParticles); i++) {
    setTimeout(createParticle, i * 200);
  }
  
  console.log('✨ Particle background initialized');
}

// ===== SCROLL PROGRESS INDICATOR =====
/**
 * Shows reading progress at the top of the page
 * Includes glow effects at milestone percentages
 */
function initScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  
  // Exit early if progress bar doesn't exist
  if (!scrollProgress) {
    console.warn('Scroll progress element not found');
    return;
  }
  
  window.addEventListener('scroll', () => {
    // Calculate scroll percentage
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Update progress bar width
    scrollProgress.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
    
    // Add glow effect at quarter milestones
    if (scrollPercent > 0 && scrollPercent % 25 < 1) {
      scrollProgress.style.animation = 'glow 0.5s ease-in-out';
      setTimeout(() => {
        scrollProgress.style.animation = '';
      }, 500);
    }
  });
}

// ===== HEADER SCROLL EFFECTS =====
/**
 * Manages header appearance and behavior during page scrolling
 * - Adds blur/transparency effects when scrolled
 * - Auto-hides header when scrolling down for immersive reading
 * - Shows header when scrolling up for easy navigation access
 */
function initHeaderScrollEffect() {
  const header = document.getElementById('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    
    // Add scrolled styling after 50px for visual depth
    if (scrollTop > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    // Hide header when scrolling down, show when scrolling up
    // Only triggers after 100px to avoid flickering on small movements
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
}

// ===== SCROLL-TRIGGERED ANIMATIONS =====
/**
 * Advanced scroll animations with staggered entry effects
 * - Uses Intersection Observer for performance-optimized detection
 * - Triggers fade-in animations when elements enter viewport
 * - Adds staggered timing for child elements to create wave effects
 * - Optimized thresholds prevent premature/late triggering
 */
function initScrollAnimations() {
  // Observer configuration for optimal animation timing
  const observerOptions = {
    threshold: 0.1,           // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Start animation 50px before element reaches bottom
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Mark element as visible for CSS transitions
        entry.target.classList.add('visible');
        
        // Add stagger animation to children for wave effect
        const staggerElements = entry.target.querySelectorAll('.stagger-animation');
        staggerElements.forEach((el, index) => {
          setTimeout(() => {
            el.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
          }, index * 100);  // 100ms delay between each child element
        });
      }
    });
  }, observerOptions);

  // Observe all elements marked for scroll animation
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ===== PERFORMANCE OPTIMIZATION =====
/**
 * Implements various performance optimizations for better user experience
 * - Lazy loading for images to reduce initial load time
 * - Intersection Observer API for efficient scroll monitoring
 * - Reduces bandwidth usage and improves page speed scores
 */
function initPerformanceObserver() {
  // Lazy load images for faster initial page load
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Replace data-src with actual src when image enters viewport
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);  // Stop observing loaded image
        }
      }
    });
  });

  // Start observing all images with lazy loading attributes
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== SIDEBAR NAVIGATION SYSTEM =====
/**
 * Enhanced sidebar with animations and accessibility features
 * - Smooth slide-in/out animations
 * - ARIA compliance for screen readers
 * - Focus management for keyboard navigation
 * - Auto-close on content interaction
 */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const burgerButton = document.querySelector('.burger-icon');
  const isOpen = sidebar.classList.contains('open');
  
  // Toggle sidebar state
  sidebar.classList.toggle('open');
  burgerButton.setAttribute('aria-expanded', !isOpen);
  
  // Add smooth animation effects
  sidebar.style.animation = isOpen ? 'slideOutRight 0.3s ease' : 'slideInRight 0.3s ease';
  
  // Focus management for accessibility
  if (!isOpen) {
    // Focus first navigation link when opening
    const firstLink = sidebar.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    // Return focus to burger button when closing
    burgerButton.focus();
  }
}

/**
 * Toggles the Resources dropdown submenu in sidebar
 * - Manages display state and animations
 * - Updates ARIA attributes for accessibility
 * - Smooth fade-in/out effects
 */
function toggleResources() {
  const submenu = document.getElementById('resourcesSubMenu');
  const resourcesButton = document.querySelector('[aria-controls="resourcesSubMenu"]');
  const isHidden = submenu.style.display === 'none' || submenu.style.display === '';
  
  if (isHidden) {
    // Show submenu with fade-in effect
    submenu.style.display = 'block';
    setTimeout(() => submenu.classList.add('show'), 10);
    resourcesButton.setAttribute('aria-expanded', 'true');
  } else {
    // Hide submenu with fade-out effect
    submenu.classList.remove('show');
    setTimeout(() => submenu.style.display = 'none', 300);
    resourcesButton.setAttribute('aria-expanded', 'false');
  }
}

// ===== SMOOTH SCROLLING UTILITIES =====
/**
 * Smooth scrolling functions for better user experience
 * - Animated scrolling to specific sections
 * - Return-to-top functionality
 * - Easing animations for natural movement
 */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ===== KEYBOARD SHORTCUTS & ACCESSIBILITY =====
/**
 * Implements keyboard shortcuts for power users and accessibility
 * - Ctrl/Cmd + H: Quick scroll to top
 * - Number keys 1-3: Navigate to main sections
 * - Escape key: Close sidebar and modals
 * - Tab trapping in sidebar for proper focus flow
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + H: Scroll to top shortcut
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      scrollToTop();
    }
    
    // Number keys 1-3 for quick section navigation
    if (e.key >= '1' && e.key <= '3') {
      e.preventDefault();
      const sections = ['about', 'skills', 'values'];
      scrollToSection(sections[parseInt(e.key) - 1]);
    }
  });
}

// ===== ENHANCED KEYBOARD NAVIGATION =====
/**
 * Comprehensive keyboard navigation system
 * - Escape key closes sidebar
 * - Tab trapping within sidebar when open
 * - Focus management for better accessibility
 */
// Escape key functionality - closes sidebar when open
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const sidebar = document.getElementById('sidebar');
    const burgerButton = document.querySelector('.burger-icon');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      burgerButton.setAttribute('aria-expanded', 'false');
      burgerButton.focus();  // Return focus to trigger element
    }
  }
});

// Focus trap for sidebar - keeps tab navigation within sidebar when open
document.addEventListener('keydown', function(e) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar || !sidebar.classList.contains('open')) return;
  
  if (e.key === 'Tab') {
    const focusableElements = sidebar.querySelectorAll('a, button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Wrap focus to last element when shift+tabbing from first
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } 
    // Wrap focus to first element when tabbing from last
    else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});

// ===== UNIVERSAL SMOOTH SCROLLING =====
/**
 * Enables smooth scrolling for all internal anchor links
 * - Automatically detects and enhances hash links (#section)
 * - Prevents default browser jumping behavior
 * - Provides consistent smooth scrolling experience
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== NOTIFICATION SYSTEM =====
/**
 * Simple notification system for user feedback
 * - Shows temporary messages for user actions
 * - Different types: success, info, warning, error
 * - Auto-dismisses after specified time
 */
function showNotification(message, type = 'info', duration = 3000) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background: var(--background-color);
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    color: var(--text-color);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto-remove after duration
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease forwards';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, duration);
}

// ===== PAGE VISIBILITY & PERFORMANCE MONITORING =====
/**
 * Optimizes performance based on page visibility and usage patterns
 * - Pauses animations when page is hidden (background tab)
 * - Resumes animations when page becomes visible
 * - Monitors load times and performance metrics
 * - Helps preserve battery life on mobile devices
 */
// Page Visibility API for performance optimization
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Pause animations when page is hidden to save resources
    document.querySelectorAll('.particle').forEach(particle => {
      particle.style.animationPlayState = 'paused';
    });
  } else {
    // Resume animations when page becomes visible
    document.querySelectorAll('.particle').forEach(particle => {
      particle.style.animationPlayState = 'running';
    });
  }
});

// ===== ERROR HANDLING & DEBUGGING =====
/**
 * Global error handling for better debugging and user experience
 * - Catches and logs JavaScript errors
 * - Monitors page load performance
 * - Provides insights for optimization
 */
// Global error handler for debugging
window.addEventListener('error', function(e) {
  console.error('Error caught:', e.error);
});

// Performance monitoring - tracks page load times
window.addEventListener('load', function() {
  const loadTime = performance.now();
  if (loadTime > 3000) {
    console.log('Page loaded with longer than expected load time:', loadTime + 'ms');
  }
});

// ===== MAIN INITIALIZATION FUNCTION =====
/**
 * Initializes all common website features across all pages
 * - Optimized loading order for best performance
 * - Mobile-responsive feature activation
 * - Conditional loading based on device capabilities
 * - Centralized feature management
 */
function initCommonFeatures() {
  // Initialize core scroll-based features first
  initScrollAnimations();
  initScrollProgress();
  initHeaderScrollEffect();
  
  // Only initialize resource-intensive particles on larger screens
  // This improves performance on mobile devices
  if (window.innerWidth >= 768) {
    initParticleBackground();
  }
  
  // Initialize user interaction features
  initKeyboardShortcuts();
  initSmoothScrolling();
  
  // Initialize performance optimizations last
  initPerformanceObserver();
  
  console.log('🚀 Team Sheldon website features initialized successfully');
}
