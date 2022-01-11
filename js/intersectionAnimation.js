const classes = {
    animate: 'IO--animate',
    origin: 'IO--origin'
}

const options = {
    rootMargin: '0px 0px -15% 0px',
};

const targets = document.querySelectorAll('.' + classes.origin);

if (targets.length > 0) {
    const intersectionAnimationObserver = new IntersectionObserver(
        function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(classes.animate);
                    entry.target.classList.remove(classes.origin);
                    intersectionAnimationObserver.unobserve(entry.target)
                }
            });
        }, options
    );
    targets.forEach(target => {
        intersectionAnimationObserver.observe(target);
    });
}