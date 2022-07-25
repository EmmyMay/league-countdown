import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

function getRoutes() {
  const { routes } = createRoutes()
  return routes
}

const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes(),
})

export default router

// Auto routes creation

function createRoutes() {
  const imports = import.meta.globEager('../views/**/*.vue')
  const routes: RouteRecordRaw[] = []

  Object.keys(imports).forEach((key: any) => {
    if (key === './index.ts') return
    let dynamicName = ''
    const name = key.replace(/(\.\.\/views\/|\.vue)/g, '')
    let path = `/${name.toLowerCase()}`
    if (
      name.toLowerCase().includes('index') ||
      name.toLowerCase().includes('home')
    )
      path = '/'
    if (Array.from(name.toLowerCase())[0] === '_') {
      dynamicName = name.substring(1)
      path = `/${dynamicName}/:${dynamicName}`
    }
    routes.push({
      path,
      name,
      component: () => import(`../views/${name}.vue`),
    })
  })
  return { imports, routes }
}
