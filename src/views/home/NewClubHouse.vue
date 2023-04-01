<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap');
.main-wrapper{
    font-family: 'Work Sans', sans-serif!important;
}
.right-content{
    background-image: url(/img/bg-page-header.cf71cf51.png), linear-gradient(135deg, rgb(2, 159, 138) 0%, rgb(25, 56, 96) 100%);
}

</style>
<template> 
    <div class="main-wrapper">
    <div class="flex w-full justify-start">
    <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <div class="min-h-screen w-1/5 max-w-xs absolute sm:relative bg-darkGreen shadow md:h-full flex-col justify-between flex">
            <div class=" p-6 h-full flex flex-col flex-grow">
                <div class="logo mb-14">
                    <a href=""><img src="/img/footy_logo.svg" class=" w-28 h-auto" alt="logo">
                        <p class="text-white font-700 text-10"><i>Work hard. Play Footy.</i></p>
                    </a>
                </div>
                <ul class="mt-12">
                    <li class="flex w-full justify-between text-white cursor-pointer items-center mb-6">
                        <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 21.5C5.45 21.5 4.97933 21.3043 4.588 20.913C4.196 20.521 4 20.05 4 19.5V10.5C4 10.1833 4.071 9.88333 4.213 9.6C4.35433 9.31667 4.55 9.08333 4.8 8.9L10.8 4.4C10.9833 4.26667 11.175 4.16667 11.375 4.1C11.575 4.03333 11.7833 4 12 4C12.2167 4 12.425 4.03333 12.625 4.1C12.825 4.16667 13.0167 4.26667 13.2 4.4L19.2 8.9C19.45 9.08333 19.646 9.31667 19.788 9.6C19.9293 9.88333 20 10.1833 20 10.5V19.5C20 20.05 19.8043 20.521 19.413 20.913C19.021 21.3043 18.55 21.5 18 21.5H14V14.5H10V21.5H6Z" fill="white"/>
                                </svg>
                            <span class=" text-18 font-bold ml-2">Dashboard</span>
                        </a>
                        <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div>
                    </li>
                    <li class="flex w-full flex-col justify-start text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                        
                        <a href="javascript:void(0)" class="flex w-full items-center justify-between focus:outline-none">
                            <span class="flex items-center focus:outline-none">
                                <i class="mdi mdi-puzzle-outline"></i>
                                <span class="text-sm ml-2">LSD Legends</span>
                            </span>
                            
                        <div class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div>
                        </a>
                        
                        <ul>
                            <li>
                                
                                <div class="flex justify-center mt-auto w-full search-bar">
                                    <div class="relative">
                                        <div class="text-gray-300 absolute ml-3 inset-0 bottom-1/4 m-auto w-4 h-4">
                                            <i class="mdi mdi-magnify"></i>
                                        </div>
                                        <input class="focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100  pl-11  py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                        <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <i class="mdi mdi-compass-outline"></i>
                            <span class="text-sm ml-2">2022 Summer Cup</span>
                        </a>
                    </li>
                    <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                        <a href="javascript:void(0)" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                            <i class="mdi mdi-tag"></i>
                            <span class="text-sm ml-2">Bookings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="p-6">
                <ul class="w-full flex items-center justify-between text-xl">
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <button aria-label="show notifications" class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                            <i class="mdi mdi-bell-outline"></i>
                        </button>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <button aria-label="open chats" class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                            <i class="mdi mdi-chat-outline"></i>
                        </button>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <button aria-label="open settings" class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                            <i class="mdi mdi-settings"></i>
                        </button>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <button aria-label="open logs" class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
                            <i class="mdi mdi-archive-outline"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Sidebar ends -->
        <!-- Remove class [ h-64 ] when adding a card block -->
        <div class="right-content py-10 w-full px-6">
            <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
            <div class="w-full h-full">
                <!-- Place your content here -->
                Yo' content here...
            </div>
        </div>
    </div>
    </div>
</template>