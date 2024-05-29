import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyCredit from '@/views/MyCredit.vue'
import CreditRecord from '@/views/CreditRecord.vue'
import RulesandPolicy from '@/views/RulesandPolicy.vue'
import RewardPoints from '@/views/RewardPoints.vue'
import RedeemPoints from '@/views/RedeemPoints.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mycredit',
      name: 'mycredit',
      component: MyCredit
    },
    {
      path: '/creditrecord',
      name: 'creditrecord',
      component: CreditRecord,
      children: [
        {
          path: '/rewardpoints',
          name: 'rewardpoints',
          component: RewardPoints
        },
        {
          path: '/redeempoints',
          name: 'redeempoints',
          component: RedeemPoints
        }
      ]
    },
    {
      path: '/rulesandpolicy',
      name: 'rulesandpolicy',
      component: RulesandPolicy
    }
  ]
})

export default router
