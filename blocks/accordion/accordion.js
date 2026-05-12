/**
 * Decorates an accordion block.
 * Authoring contract:
 * - each row is one accordion item
 * - first column is the item title
 * - second column is the item body
 * @param {Element} block The accordion block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [title, body] = row.children;
    if (!title || !body) {
      row.remove();
      return;
    }

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const panel = document.createElement('div');

    summary.className = 'accordion-item-label';
    panel.className = 'accordion-item-body';

    while (title.firstChild) summary.append(title.firstChild);
    while (body.firstChild) panel.append(body.firstChild);

    details.append(summary, panel);
    row.replaceWith(details);
  });
}
