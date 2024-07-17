<!-- @format -->

<template>
	<div class="h-full w-full flex-col flex justify-center items-center font-inter">
		<div class="mb-10">
			<div class="card">
				<div class="card-body bg-blue-100 rounded shadow">
					<span class="countdown font-mono text-2xl">
						<span style="--value: 01"></span>
						:
						<span style="--value: 01"></span>
						:
						<span :style="'--value:' + second"></span>
					</span>
				</div>
			</div>
		</div>
		<button
			type="button"
			@click="openModal"
			class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
			Button
		</button>
		<dialog
			id="my_modal_100"
			class="modal">
			<div class="modal-box w-full">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 class="text-lg font-bold">Hello!</h3>
				<form
					action=""
					class="w-full">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">What is your name?</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">What is your name?</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">What is your name?</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">What is your name?</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full" />
					</label>
					<button
						class="btn btn-sm btn-success mt-3"
						@click="hiddenModal">
						close
					</button>
				</form>
			</div>
		</dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				open: false,
				countDown: 10,
				second: 90,
			};
		},
		methods: {
			openModal() {
				document.getElementById('my_modal_100').showModal();
			},
			hiddenModal() {
				document.getElementById('my_modal_100').close();
			},
			countDownTimer() {
				if (this.second > 0) {
					setTimeout(() => {
						this.second -= 1;
						this.countDownTimer();
					}, 1000);
				} else {
					this.second = 90;
					this.countDownTimer();
				}
			},
		},
		created() {
			this.countDownTimer();
		},
	};
</script>
