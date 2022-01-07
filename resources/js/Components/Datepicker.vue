<template>
	<div :value="datepickerValue">
	    <label for="datepicker" class="font-bold text-sm mb-1 text-gray-700 block">Select Date</label>
	    <div class="relative">
	        <input 
	            type="text"
	            readonly
	            v-model="datepickerValue"
	            @click="showDatepicker = !showDatepicker"
	            @keydown.escape="showDatepicker = false"
	            class="w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
	            placeholder="Select date">

	            <div class="absolute top-0 right-0 px-3 py-2">
	                <svg class="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
	                </svg>
	            </div>
	            <div 
	                class="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0" 
	                style="width: 17rem" 
	                v-show="showDatepicker"
	                @click.away="showDatepicker = false">

	                <div class="flex justify-between items-center mb-2">
	                    <div>
	                        <span class="text-lg font-bold text-gray-800">{{MONTH_NAMES[month]}}</span>
	                        <span class="ml-1 text-lg text-gray-600 font-normal">{{year}}</span>
	                    </div>
	                    <div>
	                        <button 
	                            type="button"
	                            class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full" 
	                            :class="{'cursor-not-allowed opacity-25': month == 0 }"
	                            :disabled="month == 0 ? true : false"
	                            @click="month--; getNoOfDays()">
	                            <svg class="h-6 w-6 text-gray-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
	                            </svg>  
	                        </button>
	                        <button 
	                            type="button"
	                            class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full" 
	                            :class="{'cursor-not-allowed opacity-25': month == 11 }"
	                            :disabled="month == 11 ? true : false"
	                            @click="month++; getNoOfDays()">
	                            <svg class="h-6 w-6 text-gray-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
	                            </svg>									  
	                        </button>
	                    </div>
	                </div>

	                <div class="flex flex-wrap mb-3 -mx-1">
	                    <div v-for="(day, index) in DAYS" :key="index">	
	                        <div style="width: 14.26%" class="px-1">
	                            <div
	                                class="text-gray-800 font-medium text-center text-xs">
	                                	{{day}}
	                                </div>
	                        </div>
	                    </div>
	                </div>

	                <div class="flex flex-wrap -mx-1">
	                    <div v-for="blankday in blankdays">
	                        <div 
	                            style="width: 14.28%"
	                            class="text-center border p-1 border-transparent text-sm"	
	                        ></div>
	                    </div>	
	                    <div v-for="(date, dateIndex) in no_of_days" :key="dateIndex">	
	                        <div style="width: 14.28%" class="px-1 mb-1">
	                            <div
	                                @click="getDateValue(date)"
	                                class="cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100"
	                                :class="{'bg-blue-500 text-white': isToday(date) == true, 'text-gray-700 hover:bg-blue-200': isToday(date) == false }"	
	                            >
	                            {{date}}
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>

	    </div>	 
	</div>
</template>


<script>
	import { ref } from 'vue';

	export default{

		setup(){
			const MONTH_NAMES = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	        const DAYS = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
			
	        const showDatepicker = ref(false);
	        const datepickerValue = ref('');

	        const month = ref('');
	        const year = ref('');
	        const no_of_days = ref([]);
	        const blankdays = ref([]);
	        const days = ref(['Dim' 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']);

			const initDate = () => {
				let today = new Date();
				month.value = today.getMonth();
				year.value = today.getFullYear();
				datepickerValue.value = new Date(this.year, this.month, today.getDate()).toDateString();
			}

			return {
				showDatepicker,
				datepickerValue,
				month,
				year,
				no_of_days,
				blankdays,
				days,
				MONTH_NAMES,
				DAYS
			}
		}
	}
</script>