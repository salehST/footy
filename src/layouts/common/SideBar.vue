<template>
  <div class="sidebar min-h-screen fixed left-0 top-0 max-w-smd w-full bg-darkGreen h-full shadow flex-col justify-between items-stretch hidden z-30 lg:flex">
    <div class=" flex flex-col flex-grow items-stretch">
                <div class="logo mb-14  p-6">
                    <a href=""><img src="/img/footy_logo.svg" class=" w-28 h-auto" alt="logo">
                        <p class="text-white font-bold text-10"><i>Work hard. Play Footy.</i></p>
                    </a>
                </div>
                <ul class="">
                    <li class="flex w-full justify-between text-white cursor-pointer items-center">
                        <router-link class="side-nav flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-3 px-6 transition focus:outline-none" to="/clubhouse">
                            <div class="flex items-center">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 21.5C5.45 21.5 4.97933 21.3043 4.588 20.913C4.196 20.521 4 20.05 4 19.5V10.5C4 10.1833 4.071 9.88333 4.213 9.6C4.35433 9.31667 4.55 9.08333 4.8 8.9L10.8 4.4C10.9833 4.26667 11.175 4.16667 11.375 4.1C11.575 4.03333 11.7833 4 12 4C12.2167 4 12.425 4.03333 12.625 4.1C12.825 4.16667 13.0167 4.26667 13.2 4.4L19.2 8.9C19.45 9.08333 19.646 9.31667 19.788 9.6C19.9293 9.88333 20 10.1833 20 10.5V19.5C20 20.05 19.8043 20.521 19.413 20.913C19.021 21.3043 18.55 21.5 18 21.5H14V14.5H10V21.5H6Z" fill="white"/>
                                    </svg>
                                <span class="text-18 font-bold ml-2">Dashboard</span>
                            </div>
                            
                        </router-link>

                    </li>
                    <li class="dropdown-nav relative flex w-full justify-between text-white cursor-pointer items-center">
                        
                        <a href="javascript:void(0)" class="side-nav rotate flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-4 transition focus:outline-none">
                            <div class="flex items-center w-full">
                                    <TeamSelect />
                                    
                            </div>
                            

                        </a>
                        
                    </li>
                    <li class="dropdown-nav relative flex w-full justify-between text-white cursor-pointer items-center">
                        <a href="javascript:void(0)" class="side-nav rotate flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-3 transition focus:outline-none">
                            <div class="block items-center w-full">
                                <LeagueSelect />
                            </div>
                        </a>    
                    </li>
                    <li class="flex w-full justify-between text-white cursor-pointer items-center">
                        <a href="javascript:void(0)" class="side-nav flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-3 px-6 transition focus:outline-none">
                            <div class="flex items-center">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 21.6C5.92593 21.6 5.2963 21.3407 4.77778 20.8222C4.25926 20.3037 4 19.6741 4 18.9333V17.1556C4 16.9037 4.08533 16.6927 4.256 16.5227C4.42607 16.352 4.63704 16.2667 4.88889 16.2667H6.66667V4.46667C6.66667 4.33333 6.72593 4.25185 6.84444 4.22222C6.96296 4.19259 7.08148 4.23704 7.2 4.35556L8 5.15556L9.02222 4.13333C9.11111 4.04444 9.21481 4 9.33333 4C9.45185 4 9.55556 4.04444 9.64444 4.13333L10.6667 5.15556L11.6889 4.13333C11.7778 4.04444 11.8815 4 12 4C12.1185 4 12.2222 4.04444 12.3111 4.13333L13.3333 5.15556L14.3556 4.13333C14.4444 4.04444 14.5481 4 14.6667 4C14.7852 4 14.8889 4.04444 14.9778 4.13333L16 5.15556L17.0222 4.13333C17.1111 4.04444 17.2148 4 17.3333 4C17.4519 4 17.5556 4.04444 17.6444 4.13333L18.6667 5.15556L19.4667 4.35556C19.5852 4.23704 19.7037 4.18874 19.8222 4.21067C19.9407 4.23319 20 4.31852 20 4.46667V18.9333C20 19.6741 19.7407 20.3037 19.2222 20.8222C18.7037 21.3407 18.0741 21.6 17.3333 21.6H6.66667ZM17.3333 19.8222C17.5852 19.8222 17.7961 19.7369 17.9662 19.5662C18.1369 19.3961 18.2222 19.1852 18.2222 18.9333V6.48889H8.44444V16.2667H15.5556C15.8074 16.2667 16.0184 16.352 16.1884 16.5227C16.3591 16.6927 16.4444 16.9037 16.4444 17.1556V18.9333C16.4444 19.1852 16.5298 19.3961 16.7004 19.5662C16.8705 19.7369 17.0815 19.8222 17.3333 19.8222ZM10.2 10.0444C9.94815 10.0444 9.74074 9.95911 9.57778 9.78844C9.41481 9.61837 9.33333 9.40741 9.33333 9.15556C9.33333 8.9037 9.41867 8.69244 9.58933 8.52178C9.75941 8.3517 9.97037 8.26667 10.2222 8.26667H13.7778C14.0296 8.26667 14.2409 8.3517 14.4116 8.52178C14.5816 8.69244 14.6667 8.9037 14.6667 9.15556C14.6667 9.40741 14.5816 9.61837 14.4116 9.78844C14.2409 9.95911 14.0296 10.0444 13.7778 10.0444H10.2ZM10.2 12.7111C9.94815 12.7111 9.74074 12.6258 9.57778 12.4551C9.41481 12.285 9.33333 12.0741 9.33333 11.8222C9.33333 11.5704 9.41867 11.3591 9.58933 11.1884C9.75941 11.0184 9.97037 10.9333 10.2222 10.9333H13.7778C14.0296 10.9333 14.2409 11.0184 14.4116 11.1884C14.5816 11.3591 14.6667 11.5704 14.6667 11.8222C14.6667 12.0741 14.5816 12.285 14.4116 12.4551C14.2409 12.6258 14.0296 12.7111 13.7778 12.7111H10.2ZM16.4444 10.0444C16.1926 10.0444 15.9816 9.95911 15.8116 9.78844C15.6409 9.61837 15.5556 9.40741 15.5556 9.15556C15.5556 8.9037 15.6409 8.69244 15.8116 8.52178C15.9816 8.3517 16.1926 8.26667 16.4444 8.26667C16.6963 8.26667 16.9073 8.3517 17.0773 8.52178C17.248 8.69244 17.3333 8.9037 17.3333 9.15556C17.3333 9.40741 17.248 9.61837 17.0773 9.78844C16.9073 9.95911 16.6963 10.0444 16.4444 10.0444ZM16.4444 12.7111C16.1926 12.7111 15.9816 12.6258 15.8116 12.4551C15.6409 12.285 15.5556 12.0741 15.5556 11.8222C15.5556 11.5704 15.6409 11.3591 15.8116 11.1884C15.9816 11.0184 16.1926 10.9333 16.4444 10.9333C16.6963 10.9333 16.9073 11.0184 17.0773 11.1884C17.248 11.3591 17.3333 11.5704 17.3333 11.8222C17.3333 12.0741 17.248 12.285 17.0773 12.4551C16.9073 12.6258 16.6963 12.7111 16.4444 12.7111ZM6.66667 19.8222H14.6667V18.0444H5.77778V18.9333C5.77778 19.1852 5.86282 19.3961 6.03289 19.5662C6.20356 19.7369 6.41481 19.8222 6.66667 19.8222ZM5.77778 19.8222V18.0444V19.8222Z" fill="white"/>
                                </svg>

                                <span class="text-18  font-bold ml-2">Bookings</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="py-6 border-t border-gray-700">
                <ul class="w-full">
                  
                    <li class="flex w-full justify-between text-white cursor-pointer items-center">
                        <router-link class="side-nav flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-3 px-6 transition focus:outline-none" to="/profile">
                            <div class="flex items-center">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1201 9.28C14.151 9.03 14.1716 8.77 14.1716 8.5C14.1716 8.23 14.151 7.97 14.1099 7.72L15.8482 6.4C16.0025 6.28 16.0436 6.06 15.951 5.89L14.3053 3.12C14.2024 2.94 13.9864 2.88 13.8013 2.94L11.7544 3.74C11.3224 3.42 10.8698 3.16 10.3658 2.96L10.0572 0.84C10.0263 0.64 9.85147 0.5 9.64575 0.5H6.35425C6.14853 0.5 5.98395 0.64 5.9531 0.84L5.64452 2.96C5.1405 3.16 4.67764 3.43 4.25591 3.74L2.20901 2.94C2.02386 2.87 1.80786 2.94 1.705 3.12L0.0592423 5.89C-0.0436172 6.07 -0.00247327 6.28 0.162102 6.4L1.90043 7.72C1.85928 7.97 1.82843 8.24 1.82843 8.5C1.82843 8.76 1.849 9.03 1.89014 9.28L0.151816 10.6C-0.00247351 10.72 -0.0436172 10.94 0.0489564 11.11L1.69471 13.88C1.79757 14.06 2.01357 14.12 2.19872 14.06L4.24563 13.26C4.67764 13.58 5.13022 13.84 5.63423 14.04L5.94281 16.16C5.98395 16.36 6.14853 16.5 6.35425 16.5H9.64575C9.85147 16.5 10.0263 16.36 10.0469 16.16L10.3555 14.04C10.8595 13.84 11.3224 13.57 11.7441 13.26L13.791 14.06C13.9761 14.13 14.1921 14.06 14.295 13.88L15.9408 11.11C16.0436 10.93 16.0025 10.72 15.8379 10.6L14.1201 9.28ZM8 11.5C6.30282 11.5 4.91421 10.15 4.91421 8.5C4.91421 6.85 6.30282 5.5 8 5.5C9.69718 5.5 11.0858 6.85 11.0858 8.5C11.0858 10.15 9.69718 11.5 8 11.5Z" fill="white"/>
</svg>

                            
                                <span class="text-18  font-bold ml-2">Profile & Billing</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="flex w-full justify-between text-white cursor-pointer items-center">
                        <a href="https://www.playfooty.com/contact/" target="_blank" class="side-nav flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-3 px-6 transition focus:outline-none">
                            <div class="flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4706 19.6L11.2353 16.96H11C8.77255 16.96 6.88235 16.234 5.32941 14.782C3.77647 13.33 3 11.5627 3 9.48C3 7.39733 3.77647 5.63 5.32941 4.178C6.88235 2.726 8.77255 2 11 2C12.1137 2 13.1528 2.19419 14.1172 2.58256C15.0822 2.97152 15.9296 3.50685 16.6593 4.18856C17.3884 4.87085 17.9606 5.66285 18.376 6.56456C18.792 7.46685 19 8.43867 19 9.48C19 11.7093 18.2863 13.7075 16.8588 15.4746C15.4314 17.2422 13.6353 18.6173 11.4706 19.6ZM10.9765 14.298C11.2431 14.298 11.4706 14.21 11.6588 14.034C11.8471 13.858 11.9412 13.6453 11.9412 13.396C11.9412 13.1467 11.8471 12.934 11.6588 12.758C11.4706 12.582 11.2431 12.494 10.9765 12.494C10.7098 12.494 10.4824 12.582 10.2941 12.758C10.1059 12.934 10.0118 13.1467 10.0118 13.396C10.0118 13.6453 10.1059 13.858 10.2941 14.034C10.4824 14.21 10.7098 14.298 10.9765 14.298ZM11 11.504C11.1725 11.504 11.3294 11.4453 11.4706 11.328C11.6118 11.2107 11.7059 11.0493 11.7529 10.844C11.7843 10.6533 11.8706 10.4809 12.0118 10.3266C12.1529 10.1729 12.3961 9.93467 12.7412 9.612C13.0235 9.348 13.2588 9.062 13.4471 8.754C13.6353 8.446 13.7294 8.116 13.7294 7.764C13.7294 7.016 13.459 6.45485 12.9181 6.08056C12.3766 5.70685 11.7373 5.52 11 5.52C10.451 5.52 9.97663 5.63733 9.57694 5.872C9.17663 6.10667 8.85098 6.4 8.6 6.752C8.4902 6.91333 8.47043 7.082 8.54071 7.258C8.61161 7.434 8.75686 7.55867 8.97647 7.632C9.13333 7.69067 9.2902 7.69067 9.44706 7.632C9.60392 7.57333 9.7451 7.46333 9.87059 7.302C9.99608 7.14067 10.1492 7.00867 10.3299 6.906C10.51 6.80333 10.7333 6.752 11 6.752C11.4235 6.752 11.7413 6.862 11.9534 7.082C12.1649 7.302 12.2706 7.544 12.2706 7.808C12.2706 8.05733 12.1922 8.28085 12.0353 8.47856C11.8784 8.67685 11.6902 8.87867 11.4706 9.084C11.0314 9.436 10.7371 9.722 10.5878 9.942C10.4391 10.162 10.349 10.4627 10.3176 10.844C10.302 11.02 10.3609 11.174 10.4946 11.306C10.6276 11.438 10.7961 11.504 11 11.504ZM13.3529 15.2V16.388C14.4667 15.508 15.3724 14.4778 16.0701 13.2974C16.7685 12.1165 17.1176 10.844 17.1176 9.48C17.1176 7.88133 16.5256 6.52819 15.3416 5.42056C14.157 4.31352 12.7098 3.76 11 3.76C9.2902 3.76 7.84329 4.31352 6.65929 5.42056C5.47467 6.52819 4.88235 7.88133 4.88235 9.48C4.88235 11.0787 5.47467 12.4318 6.65929 13.5394C7.84329 14.6465 9.2902 15.2 11 15.2H13.3529Z" fill="white"/>
</svg>



                                <span class="text-18  font-bold ml-2">Contact</span>
                            </div>
                        </a>
                    </li>
                    <li class="flex w-full justify-between text-white cursor-pointer items-center">
                        <a class="side-nav flex items-center bg-opacity-0 bg-white hover:bg-opacity-10 w-full justify-between py-3 px-6 transition focus:outline-none" v-on:click="signOut">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 19a.75.75 0 0 1 .75-.75h6a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25h-6a.75.75 0 0 1 0-1.5h6c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 18 19.75h-6a.75.75 0 0 1-.75-.75Z"/><path fill="currentColor" d="M15.612 13.115a1 1 0 0 1-1 1H9.756c-.023.356-.052.71-.086 1.066l-.03.305a.718.718 0 0 1-1.025.578a16.844 16.844 0 0 1-4.885-3.539l-.03-.031a.721.721 0 0 1 0-.998l.03-.031a16.843 16.843 0 0 1 4.885-3.539a.718.718 0 0 1 1.025.578l.03.305c.034.355.063.71.086 1.066h4.856a1 1 0 0 1 1 1v2.24Z"/></svg>



                                <span class="text-18  font-bold ml-2">{{ $t('menu.log_out') }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
  </div>
</template>
<script lang="ts">
import LeagueSelect from '@/components/select/LeagueSelect.vue';
import TeamSelect from '@/components/select/TeamSelect.vue';
import Vue from 'vue';

// import BaseSvgIcon from '@/layouts/icons/BaseSvgIcon.vue';
export default Vue.extend({
    data() {
        return {
            
        };
    },
	methods: {
		async signOut() {
			await (this as any).$store.dispatch('signOut');
			this.$store.commit('resetMatchState');
			this.$store.commit('resetPlayerState');
			this.$store.commit('resetResultState');
			this.$store.commit('resetFixturesState');
			this.$store.commit('resetStandingState');
			this.$router.push({ name: 'welcome' });
		},
	},
    components: { TeamSelect, LeagueSelect }
});
</script>
<style scoped>
/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 10px;
}
 
::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
}
.side-nav.router-link-exact-active.router-link-active {
    background: rgb(255 255 255 / 15%);
}
.rotate_180{
    transform: rotate(180deg);
}
.dropdown-nav .dropdown {
    position: absolute;
    top: 55px;
    width: 100%;
    background: #183254;
}
.search-bar input {
    height: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 250px;
    padding-left: 30px;
    color: #000;
}
.icon-mag {
    top: 5px;
    left: 10px;
}
.dropdown-nav-items li a {
    padding-left: 60px;
}


</style>
