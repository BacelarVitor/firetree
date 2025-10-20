
<script lang="ts">
    import { page } from "$app/state";
</script>
<nav class="flex justify-center my-6">
  <ul class="steps">
    <a  href="/login" class="step step-primary">Sign In</a>
    <a href="/login/username" 
      class="step"
      class:step-primary={page.url.pathname?.match(/username|photo/g)}>Username</a>
    <a href="/login/photo" class="step" class:step-primary={page.url.pathname?.includes('photo')}>Photo</a>
  </ul>
</nav>