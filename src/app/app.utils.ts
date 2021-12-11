export function switchToView(section: string): void {
  setTimeout(() => {
    const nav = document.querySelector(section);
    if (nav) {
      nav.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, 10);
}
