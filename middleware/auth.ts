// /middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig, useFetch } from '#app'

async function isAuthenticated(): Promise<boolean> {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  try {
    const { data } = await useFetch(apiBase + '/api/user', {
      credentials: 'include'
    })
    return !!data.value
  } catch (error) {
    return false
  }
}

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!(await isAuthenticated())) {
    return navigateTo('/login')
  }
})
