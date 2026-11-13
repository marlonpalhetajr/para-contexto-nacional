document.addEventListener('DOMContentLoaded', () => {
  const title = document.title || 'Tabela PCN';
  const heading = document.getElementById('title');
  if (heading) heading.textContent = 'Pará no Contexto Nacional';

  const tables = [...document.querySelectorAll('main table')];
  const dataTable = tables.find((table) => !table.querySelector('tr.logo')) || tables.at(-1);
  if (!dataTable) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'table-responsive';
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', title);
  wrapper.setAttribute('tabindex', '0');
  dataTable.before(wrapper);
  wrapper.append(dataTable);

  if (!dataTable.querySelector('caption')) {
    const caption = document.createElement('caption');
    caption.className = 'visually-hidden';
    caption.textContent = title;
    dataTable.prepend(caption);
  }

  dataTable.querySelectorAll('tr').forEach((row) => {
    const cells = [...row.cells];
    const populated = cells.filter((cell) => cell.textContent.trim());
    if (populated.length > 1 && populated.every((cell) => {
      const style = getComputedStyle(cell);
      return Number(style.fontWeight) >= 600 || style.backgroundColor !== 'rgba(0, 0, 0, 0)';
    })) {
      populated.forEach((cell) => {
        cell.setAttribute('role', 'columnheader');
        cell.setAttribute('scope', 'col');
      });
    }
  });

  document.querySelectorAll('a[target="_blank"]').forEach((link) => link.setAttribute('rel', 'noopener noreferrer'));
});
