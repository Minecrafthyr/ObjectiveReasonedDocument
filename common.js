function createRefLinks() {
  document.querySelectorAll('.ref-links').forEach(container => {
    const targetId = container.dataset.id;
    const refs = document.querySelectorAll(`ref[data-target="${targetId}"]`);

    // 为每个ref添加唯一ID
    refs.forEach((ref, i) => {
      ref.id = `${targetId}-ref${i + 1}`;
      ref.title = container.textContent
    });

    // 创建链接列表
    container.innerHTML = [...refs].map((ref, i) =>
      `<sub title="${ref.textContent}"><a href="#${ref.id}">${i}</a></sub>`
    ).join(' ') + container.textContent;

    // 为每个ref添加点击跳转功能
    refs.forEach((ref, i) => {
      ref.addEventListener('click', () => {
        container.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
}
createRefLinks();