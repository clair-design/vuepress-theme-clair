<template>
  <div :class="$style.app">
    <header :class="$style.siteHeader">
      <router-link to="/">
        <img
          :class="$style.logo"
          src="https://s1.ssl.qhres.com/static/9df9c3c715a8b6cb.svg"
        />
      </router-link>
      <ul v-if="navItems" :class="$style.navItems">
        <li v-for="(item, $index) in navItems" :key="$index">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>
    </header>
    <Content />
  </div>
</template>

<script>
export default {
  computed: {
    navItems() {
      const items = this.$themeConfig.nav
      return items && items.length ? items : null
    }
  }
}
</script>

<style scoped module lang="scss">
// .app {}

.siteHeader {
  display: flex;
  padding: 1em 2em;
  border-bottom: 1px solid #eee;
}

.logo {
  width: 100px;
}

.navItems {
  // reset
  list-style: none;
  margin: 0;
  padding: 0;

  flex: 1 0 0;

  // layout
  display: flex;
  justify-content: flex-end;

  & > li {
    margin: 0 1em;

    & > a {
      text-decoration: none;
    }
  }
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
