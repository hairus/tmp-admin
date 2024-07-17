<template>
  <div class="h-full w-full flex justify-center items-center">
    <button class="btn" @click="openModal">open modal</button>
    <dialog id="my_modal_100" class="modal">
      <div class="modal-box w-full">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="text-lg font-bold">Hello!</h3>
        <form action="" class="w-full">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">What is your name?</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">What is your name?</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">What is your name?</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">What is your name?</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
          <button class="btn btn-sm btn-success mt-3" @click="hiddenModal">close</button>
        </form>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    openModal() {
      document.getElementById('my_modal_100').showModal()
    },
    hiddenModal() {
      document.getElementById('my_modal_100').close()
    }
  }
}
</script>
