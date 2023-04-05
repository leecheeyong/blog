import * as DOMPurify from 'dompurify'
import { marked } from 'marked'
import { computed, ref } from 'vue'

const err = ref()

export default async (
  id: any
): Promise<{
  date: string | undefined
  markdown: any | undefined
  err: any | undefined
  title: string | undefined
  content: string | undefined
  description: string | undefined
  id: number | undefined
}> => {
  const data: {
    id: number | undefined
    title: string | undefined
    description: string | undefined
    date: string | undefined
    content: string | undefined
  } =
    (await fetch(
      `https://raw.githubusercontent.com/frontendkey/frontendkey.github.io/main/meta/${id}.json`
    ).then((r) => {
      if (r.status == 404) {
        err.value = '404 Not Found'
      } else {
        return r.json()
      }
    })) || {}
  const markdown = computed(() =>
    DOMPurify.default.sanitize(marked(data.content ? data.content : ''))
  )
  document.title = `Joe - ${data.title}`
  return {
    ...data,
    markdown,
    err
  }
}
