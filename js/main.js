const experienceToggle = document.querySelector('.experience-toggle');
const experienceContent = document.querySelector('#experience-content');
const toggleLabel = experienceToggle?.querySelector('[data-toggle-label]');

if (experienceToggle && experienceContent && toggleLabel) {
  document.documentElement.classList.add('has-experience-toggle');
  experienceContent.setAttribute('aria-hidden', 'true');
  experienceContent.inert = true;

  const setExperienceExpanded = (expanded) => {
    experienceToggle.setAttribute('aria-expanded', String(expanded));
    document.documentElement.classList.toggle('experience-open', expanded);
    experienceContent.setAttribute('aria-hidden', String(!expanded));
    experienceContent.inert = !expanded;
    toggleLabel.textContent = expanded ? 'Hide my experience' : 'View my experience';
  };

  experienceToggle.addEventListener('click', () => {
    const isExpanded = experienceToggle.getAttribute('aria-expanded') === 'true';
    setExperienceExpanded(!isExpanded);
  });

  document.querySelector('.site-header nav a[href="#experience"]')?.addEventListener('click', () => {
    setExperienceExpanded(true);
  });
}
