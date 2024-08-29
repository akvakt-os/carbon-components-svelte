<script>
  /** Obtain a reference to the form element */
  export let ref = null;
  export let enhance = new Function();
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<form
  class:bx--form="{true}"
  bind:this="{ref}"
  {...$$restProps}
  on:click
  on:keydown
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:submit
  use:enhance
>
  <slot />
</form>
