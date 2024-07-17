<!-- @format -->

<template>
	<div class="w-full h-full">
		<div class="card bg-base-100 shadow-xl w-full">
			<div class="card-body rounded-lg">
				<div class="card-title mb-3">Data Table jquery and vue js</div>
				<div
					class="flex justify-center items-center"
					v-show="loading">
					<span class="loading loading-spinner loading-lg"></span>
				</div>
				<!-- Table Section -->
				<div
					class="w-full"
					v-if="users.length > 1">
					<!-- Card -->
					<div class="flex flex-col w-full">
						<div class="-m-1.5 overflow-x-auto">
							<div class="p-1.5 full inline-block align-middle">
								<div
									class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
									<!-- Header -->

									<!-- End Header -->

									<!-- Table -->
									<table
										class="w-full divide-y divide-gray-200"
										id="example">
										<thead class="bg-gray-50">
											<tr>
												<th
													scope="col"
													class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
													<div class="flex items-center gap-x-2">
														<span
															class="text-xs font-semibold uppercase tracking-wide text-gray-800">
															Name
														</span>
													</div>
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-start">
													<div class="flex items-center gap-x-2">
														<span
															class="text-xs font-semibold uppercase tracking-wide text-gray-800">
															Position
														</span>
													</div>
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-start">
													<div class="flex items-center gap-x-2">
														<span
															class="text-xs font-semibold uppercase tracking-wide text-gray-800">
															Status
														</span>
													</div>
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-start">
													<div class="flex items-center gap-x-2">
														<span
															class="text-xs font-semibold uppercase tracking-wide text-gray-800">
															Portfolio
														</span>
													</div>
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-start">
													<div class="flex items-center gap-x-2">
														<span
															class="text-xs font-semibold uppercase tracking-wide text-gray-800">
															Created
														</span>
													</div>
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-end"></th>
											</tr>
										</thead>

										<tbody class="divide-y divide-gray-200">
											<tr
												v-for="user in users"
												:key="user.id">
												<td class="size-px whitespace-nowrap">
													<div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
														<div class="flex items-center gap-x-3">
															<img
																class="inline-block size-[38px] rounded-full"
																src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D"
																alt="Image Description" />
															<div class="grow">
																<span class="block text-sm font-semibold text-gray-800">{{
																	user.title
																}}</span>
																<span class="block text-sm text-gray-500">{{ user.id }}</span>
															</div>
														</div>
													</div>
												</td>
												<td class="h-px w-72 whitespace-nowrap">
													<div class="px-6 py-3">
														<span class="block text-sm font-semibold text-gray-800"
															>Director</span
														>
														<span class="block text-sm text-gray-500">Human resources</span>
													</div>
												</td>
												<td class="size-px whitespace-nowrap">
													<div class="px-6 py-3">
														<span
															class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
															<svg
																class="size-2.5"
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																viewBox="0 0 16 16">
																<path
																	d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
															</svg>
															{{ user.completed }}
														</span>
													</div>
												</td>
												<td class="size-px whitespace-nowrap">
													<div class="px-6 py-3">
														<div class="flex items-center gap-x-3">
															<span class="text-xs text-gray-500">1/5</span>
															<div
																class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
																<div
																	class="flex flex-col justify-center overflow-hidden bg-gray-800"
																	role="progressbar"
																	style="width: 25%"
																	aria-valuenow="25"
																	aria-valuemin="0"
																	aria-valuemax="100"></div>
															</div>
														</div>
													</div>
												</td>
												<td class="size-px whitespace-nowrap">
													<div class="px-6 py-3">
														<span class="text-sm text-gray-500">28 Dec, 12:12</span>
													</div>
												</td>
												<td class="size-px whitespace-nowrap">
													<div class="px-6 py-1.5">
														<a
															class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium"
															href="#">
															Edit
														</a>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<!-- End Table -->

									<!-- Footer -->

									<!-- End Footer -->
								</div>
							</div>
						</div>
					</div>
					<!-- End Card -->
				</div>
				<!-- End Table Section -->
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				loading: false,
				users: [],
			};
		},
		methods: {
			async getUsers() {
				this.loading = true;
				await axios
					.get('https://jsonplaceholder.typicode.com/todos/')
					.then((res) => {
						this.users = res.data;
						this.$nextTick(() => {
							$('#example').DataTable({
                lengthMenu: [5, 10, 20, 50],
								// data: res.data,
								// "serverSide": true,
							});
							this.loading = false;
						});
					});
			},
			cek(id) {
				console.log(id);
			},
		},
		mounted() {
			this.getUsers();
		},
	};
</script>

<style>
	.dataTables_wrapper {
		padding: 20px;
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button {
		border-radius: 50% !important;
		padding: 0.5em 0.9em !important;
	}
	.dataTables_wrapper .dataTables_filter input {
		border: 1px solid #aaa;
		border-radius: 10px;
		padding: 4px;
		background-color: transparent;
		margin-left: 3px;
		margin-bottom: 25px;
	}
	.dataTables_wrapper .dataTables_length select {
		border: 1px solid #aaa;
    width: 60px;
		border-radius: 10px;
		background-color: transparent;
		padding: 3px;
	}
</style>
