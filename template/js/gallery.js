// ===================================
// GALLERY LIGHTBOX FUNCTIONALITY
// ===================================

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let images = [];

// Collect all gallery images
galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) {
        images.push({
            src: img.src,
            alt: img.alt
        });

        // Add click event to open lightbox
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    }
});

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Update lightbox image
function updateLightboxImage() {
    if (images[currentImageIndex]) {
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    }
}

// Navigate to previous image
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
}

// Event listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', previousImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// ===================================
// GALLERY FILTERING (Optional)
// ===================================

// If you want to add category filtering to your gallery, uncomment and customize this code:

/*
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter category
        const filter = button.dataset.filter;
        
        // Filter gallery items
        galleryItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});
*/

// ===================================
// LAZY LOAD GALLERY IMAGES
// ===================================

if ('IntersectionObserver' in window) {
    const galleryImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Add fade-in effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';

                // Load image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }

                // Fade in once loaded
                img.onload = () => {
                    img.style.opacity = '1';
                };

                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    // Observe all gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        galleryImageObserver.observe(img);
    });
}

// ===================================
// GALLERY GRID ANIMATION
// ===================================

const animateGalleryItems = () => {
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';

        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50); // Stagger animation
    });
};

// Run animation when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateGalleryItems);
} else {
    animateGalleryItems();
}
