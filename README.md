# VuePress Theme for ClairDesign

On the way... Maybe never...

```html
@playground
<button>click</button>
```

```html
@playground
<button @click="incr">{{count}}</button>

<script>
  export default {
    data() {
      return { count: 1 }
    },
    methods: {
      incr() {
        this.count += 1
      }
    }
  }
</script>
```

```html
@playground
<template>
  <HelloWorld></HelloWorld>
</template>
<script>
  export default {
    components: {
      HelloWorld: {
        render(h) {
          return h('h1', null, 'hello world')
        }
      }
    }
  }
</script>
```
