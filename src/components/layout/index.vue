<script lang="ts" setup>
import NewFooter from '@/components/layout/NewFooter.vue'
import NewHeader from '@/components/layout/NewHeader.vue'
</script>

<template>
  <a-layout class="layout">
    <NewHeader />
    <!-- <a-layout-header> -->
    <!--  &lt;!&ndash; <Header /> &ndash;&gt; -->
    <!--  <NewHeader /> -->
    <!-- </a-layout-header> -->
    <!--    <iframe class="min-h-[22rem] " srcdoc=" -->
    <!--      <!DOCTYPE html> -->
    <!--      <html lang=&quot;en&quot; class=&quot;light&quot;> -->
    <!--        <head> -->
    <!--          <meta charset=&quot;UTF-8&quot;> -->
    <!--          <meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;> -->
    <!--          <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;> -->
    <!--          <link href=&quot;https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap&quot; rel=&quot;stylesheet&quot;> -->
    <!--          <script src=&quot;https://cdn.tailwindcss.com&quot;></script> -->
    <!--          <script> -->
    <!--            tailwind.config = { -->
    <!--              darkMode: &quot;class&quot;, -->
    <!--              theme: { -->
    <!--                extend: { -->
    <!--                  colors: { -->
    <!--                    primary: {&quot;50&quot;:&quot;#eff6ff&quot;,&quot;100&quot;:&quot;#dbeafe&quot;,&quot;200&quot;:&quot;#bfdbfe&quot;,&quot;300&quot;:&quot;#93c5fd&quot;,&quot;400&quot;:&quot;#60a5fa&quot;,&quot;500&quot;:&quot;#3b82f6&quot;,&quot;600&quot;:&quot;#2563eb&quot;,&quot;700&quot;:&quot;#1d4ed8&quot;,&quot;800&quot;:&quot;#1e40af&quot;,&quot;900&quot;:&quot;#1e3a8a&quot;,&quot;950&quot;:&quot;#172554&quot;} -->
    <!--                  } -->
    <!--                }, -->
    <!--                fontFamily: { -->
    <!--                  &quot;body&quot;: [&quot;Inter&quot;, &quot;ui-sans-serif&quot;, &quot;system-ui&quot;, &quot;-apple-system&quot;, &quot;system-ui&quot;, &quot;Segoe UI&quot;, &quot;Roboto&quot;, &quot;Helvetica Neue&quot;, &quot;Arial&quot;, &quot;Noto Sans&quot;, &quot;sans-serif&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;], -->
    <!--                  &quot;sans&quot;: [&quot;Inter&quot;, &quot;ui-sans-serif&quot;, &quot;system-ui&quot;, &quot;-apple-system&quot;, &quot;system-ui&quot;, &quot;Segoe UI&quot;, &quot;Roboto&quot;, &quot;Helvetica Neue&quot;, &quot;Arial&quot;, &quot;Noto Sans&quot;, &quot;sans-serif&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;] -->
    <!--                } -->
    <!--              } -->
    <!--            } -->
    <!--          </script> -->

    <!--        </head> -->
    <!--        <body> -->
    <!--          <header> -->
    <!--    <nav class=&quot;bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800&quot;> -->
    <!--        <div class=&quot;flex flex-wrap justify-between items-center mx-auto max-w-screen-xl&quot;> -->
    <!--            <a href=&quot;https://flowbite.com&quot; class=&quot;flex items-center&quot;> -->
    <!--                <img src=&quot;https://flowbite.com/docs/images/logo.svg&quot; class=&quot;mr-3 h-6 sm:h-9&quot; alt=&quot;Flowbite Logo&quot; /> -->
    <!--                <span class=&quot;self-center text-xl font-semibold whitespace-nowrap dark:text-white&quot;>Flowbite</span> -->
    <!--            </a> -->
    <!--            <div class=&quot;flex items-center lg:order-2&quot;> -->
    <!--                <a href=&quot;#&quot; class=&quot;text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800&quot;>Log in</a> -->
    <!--                <a href=&quot;#&quot; class=&quot;text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800&quot;>Get started</a> -->
    <!--                <button data-collapse-toggle=&quot;mobile-menu-2&quot; type=&quot;button&quot; class=&quot;inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600&quot; aria-controls=&quot;mobile-menu-2&quot; aria-expanded=&quot;false&quot;> -->
    <!--                    <span class=&quot;sr-only&quot;>Open main menu</span> -->
    <!--                    <svg class=&quot;w-6 h-6&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z&quot; clip-rule=&quot;evenodd&quot;></path></svg> -->
    <!--                    <svg class=&quot;hidden w-6 h-6&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 20 20&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path fill-rule=&quot;evenodd&quot; d=&quot;M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z&quot; clip-rule=&quot;evenodd&quot;></path></svg> -->
    <!--                </button> -->
    <!--            </div> -->
    <!--            <div class=&quot;hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1&quot; id=&quot;mobile-menu-2&quot;> -->
    <!--                <ul class=&quot;flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0&quot;> -->
    <!--                    <li> -->
    <!--                        <a href=&quot;#&quot; class=&quot;block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white&quot; aria-current=&quot;page&quot;>Home</a> -->
    <!--                    </li> -->
    <!--                    <li> -->
    <!--                        <a href=&quot;#&quot; class=&quot;block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700&quot;>Company</a> -->
    <!--                    </li> -->
    <!--                    <li> -->
    <!--                        <a href=&quot;#&quot; class=&quot;block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700&quot;>Marketplace</a> -->
    <!--                    </li> -->
    <!--                    <li> -->
    <!--                        <a href=&quot;#&quot; class=&quot;block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700&quot;>Features</a> -->
    <!--                    </li> -->
    <!--                    <li> -->
    <!--                        <a href=&quot;#&quot; class=&quot;block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700&quot;>Team</a> -->
    <!--                    </li> -->
    <!--                    <li> -->
    <!--                        <a href=&quot;#&quot; class=&quot;block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700&quot;>Contact</a> -->
    <!--                    </li> -->
    <!--                </ul> -->
    <!--            </div> -->
    <!--        </div> -->
    <!--    </nav> -->
    <!-- </header> -->
    <!--          <script src=&quot;https://unpkg.com/flowbite@1.5.3/dist/flowbite.js&quot;></script> -->

    <!--          <script> -->
    <!--            window.addEventListener(&quot;load&quot;, function(event) { -->
    <!--              const links = document.querySelectorAll(&quot;a&quot;); -->
    <!--              const buttons = document.querySelectorAll(&quot;button&quot;); -->

    <!--              links.forEach(function(link) { -->
    <!--                link.addEventListener(&quot;click&quot;, function(ev) { -->
    <!--                  ev.preventDefault(); -->
    <!--                }); -->
    <!--              }); -->

    <!--              buttons.forEach(function(button) { -->
    <!--                button.addEventListener(&quot;click&quot;, function(ev) { -->
    <!--                  ev.preventDefault(); -->
    <!--                }); -->
    <!--              }); -->
    <!--            }); -->
    <!--          </script> -->
    <!--        </body> -->
    <!--      </html>" loading="eager" width="100%" height="450px"></iframe> -->
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <NewFooter />
  </a-layout>
</template>

<style lang="scss" scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
