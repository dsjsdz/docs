<script setup>
import { onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const router = useRouter()
const { site } = useData()

onMounted(() => {
  // site.value.base 通常是 '/docs/'
  router.go(`${site.value.base}zh-CN/`)
})
</script>
