<template>
  <div class="page">
    <main class="hero">
      <h1>Xiaomi + Nuxt</h1>
      <p>= ТОП</p>
    </main>
    <section class="extra" aria-label="Дополнительно">
      <h2>Ещё блок</h2>
      <p>Здесь просто второй экран для разнообразия — можно смотреть скролл и отступы.</p>
    </section>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #111;
  color: #fff;
  font-family: system-ui, sans-serif;
}
.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.hero h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
.hero p { color: #f97316; font-size: 1.25rem; }
.extra {
  padding: 2.5rem 2rem;
  text-align: center;
  background: #1a1a1a;
  border-top: 1px solid #333;
}
.extra h2 { font-size: 1.1rem; margin-bottom: 0.75rem; color: #ccc; }
.extra p { color: #888; font-size: 0.95rem; line-height: 1.5; max-width: 28rem; margin: 0 auto; }
</style>
