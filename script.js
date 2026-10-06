const art = document.querySelector('.data-art');
const artButton = document.querySelector('.art-toggle');
const artStatus = document.querySelector('#art-status');

artButton.hidden = false;
artButton.addEventListener('click', () => {
  const organized = artButton.getAttribute('aria-pressed') !== 'true';
  artButton.setAttribute('aria-pressed', String(organized));
  art.classList.toggle('is-organized', organized);
  artStatus.textContent = organized ? 'Financial detail, brought into focus.' : 'From financial detail to a clearer picture.';
  artButton.firstChild.textContent = organized ? 'Show the details again ' : 'Bring it into focus ';
});

const flashcard = document.querySelector('.flashcard');
flashcard.disabled = false;
flashcard.addEventListener('click', () => {
  const flipped = flashcard.getAttribute('aria-pressed') !== 'true';
  flashcard.setAttribute('aria-pressed', String(flipped));
  flashcard.setAttribute('aria-label', flipped
    ? 'Flashcard: Workflow. A sequence of steps to get work done. Flip to see the Chinese translation.'
    : 'Flashcard: 工作流程. Flip to see the English translation.');
});

// Navigation remains ordinary anchor links; this only adds a reading-position cue.
const navigationLinks = document.querySelectorAll('.nav-links a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -45% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
