<template>
  <div>
    <h2>📊 모니터링 대시보드</h2>
    <p v-if="isLoading">로딩 중...</p>
    <p v-if="isError">에러 발생: {{ error?.message }}</p>
    <div v-else>
      <p>CPU 사용량: {{ data?.cpu }}%</p>
      <p>Memory 사용량: {{ data?.memory }}%</p>
      <p>Network 사용량: {{ data?.network }} Mbps</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchMetrics } from '@/api/dashboard';
import { useQuery } from '@tanstack/vue-query';

// import { useDashboardStore } from '@/stores/useDashboardStore'
// const store = useDashboardStore()
// access QueryClient instance
const { data, isLoading, isError, error} = useQuery({
  queryKey: ['dashboard'],
  queryFn: fetchMetrics,
  refetchInterval: 5000
})

</script>
