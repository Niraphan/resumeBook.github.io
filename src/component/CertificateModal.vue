<!-- CertificateModal.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 class="text-2xl font-bold mb-4">{{ certificate.name }}</h2>
      <p class="mb-4">{{ certificate.description }}</p>
      <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props for the certificate object and modal state
const props = defineProps({
  certificate: Object,
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
/* You can add additional styling here */
</style>
