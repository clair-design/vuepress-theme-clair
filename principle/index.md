# Design Principle

```html
@playground
<template>
  <div>
    <button @click="count++" :class="$style.button">
      You clicked me {{ count }} times.
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return { count: 0 }
    },
    mounted() {}
  }
</script>

<!-- Notice that style tags are ALWAYS treated as scoped -->
<style>
  button {
    line-height: 2;
    padding: 0 1em;
  }
</style>

<style module scoped>
  .button {
    font-size: 14px;
    font-weight: bold;
  }
</style>
```

sss22
