import Vue from 'vue'
import VueRouter from 'vue-router'
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)

const Home = () => import('@/views/home/HomeView')
const Category = () => import('@/views/category/CategoryView')
const Cart = () => import('@/views/cart/CartView')
const Main = () => import('@/views/main/MainView')
// const Details = () => import("@/views/views/Details/DetailsView")
// const Hotel = () => import("@/components/")
const CityList = () => import("@/views/CityList/CityList.vue")
const DomesticView = () => import("@/views/CityList/components/DomesticView")
const OverseasView = () => import("@/views/CityList/components/OverseasView")
const routes = [{
	path: '/',
	redirect: '/home'
},
{
	path: '/home',
	component: Home,
	beforeEnter: (to, from, next) => {
		console.log(to, from, next())
	}
},
{
	path: '/category',
	component: Category
},
{
	path: '/cart',
	component: Cart
},
{
	path: '/main',
	component: Main
},
{
	path: "/cityList",
	component: CityList,
	children: [
		{
			path: "",
			redirect: "/cityList/domestic"
		},
		{
			path: "domestic",
			component: DomesticView
		},
		{
			path: "overseas",
			component: OverseasView
		}
	]
}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
