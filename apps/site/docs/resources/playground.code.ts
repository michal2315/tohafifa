/** Starting code of the playground page. */
export const html = `<article class="post">
  <header class="post__header">
    <span class="post__avatar"></span>
    <strong>t_trainee</strong>
  </header>
  <p class="post__caption">Edit the HTML and SCSS to see what changes.</p>
</article>
`;

export const scss = `$primary: #4f46e5;
$radius: 12px;

body {
  font-family: system-ui, sans-serif;
  padding: 1rem;
}

.post {
  max-width: 24rem;
  border: 1px solid #ddd;
  border-radius: $radius;
  padding: 1rem;

  &__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: $primary;
  }
}
`;
