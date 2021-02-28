<template>
  <div class="icon-box" :class="'icon-box-'+alignment">
    <i :class="icon"></i>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "IconBox",
  props: {
    icon: String,
    title: String,
    content: String,
    alignment: String
  },
};
</script>

<style>

.icon-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
}

.icon-box-left{ 
  align-items: flex-start;
  text-align: left;
}

.icon-box-right{ 
  align-items: flex-end;
  text-align: right;
}

.icon-box i{
  color: var(--accent-color);
  font-size: 50px;
}

.icon-box h2{
  font-weight: 600;
  font-size: var(--font-size-40);
  margin: 10px 0;
}

.icon-box p{
  font-size: var(--font-size-20);
  margin: 0 0 10px 0;
  font-weight: 300;
}
</style>
