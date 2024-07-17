<template>
  <div class="fixed inset-0 flex items-center justify-center bg-blue-300">
    <button type="button" @click="openModal"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
      Open dialog
    </button>
  </div>

  <!-- use the modal component, pass in the prop -->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-[100]">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                ADD SISWA
              </DialogTitle>
              <div class="mt-2">
                <form action="">
                  <div class="flex flex-col">
                    <div>
                      <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                      <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span class="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input type="text" name="price" id="price"
                          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00" />
                        <div class="absolute inset-y-0 right-0 flex items-center">
                          <label for="currency" class="sr-only">Currency</label>
                          <select id="currency" name="currency"
                            class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2">
                      <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input type="text" name="price" id="price"
                            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00" />
                          <div class="absolute inset-y-0 right-0 flex items-center">
                            <label for="currency" class="sr-only">Currency</label>
                            <select id="currency" name="currency"
                              class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                              <option>USD</option>
                              <option>CAD</option>
                              <option>EUR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-4">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal">
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>




</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(true)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
