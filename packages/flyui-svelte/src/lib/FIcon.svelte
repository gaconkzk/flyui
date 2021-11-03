<script lang="ts">
  import {
    svgIcon,
    Props,
    Options,
    setOptions,
    getPropKeys,
    Icon,
    IconData,
  } from '@yzfe/svgicon'

  import { get } from './names'

  export let width: string
  export let height: string
  export let original: boolean = false
  export let name: string
  let classes = ''
  export { classes as class }

  let data: string

  get(name).then((r) => data = r.default)

  // This should be moved to core as a function :D - 
  // hacking modify svg string attributes by fake import to dom
  function processData(svgHtml: string, props: any): string {
    // this temporary should be deleted after this function call? or memory leaked??
    const template = document.createElement('template')
    template.innerHTML = svgHtml
    const svg = template.firstElementChild
    if (svg) {
      svg.setAttribute('width', width)
      svg.setAttribute('height', height)
      svg.setAttribute('original', `${original}`)
      svg.setAttribute('class', classes)
    }
    
    return template.innerHTML
  }

  $: {
    if (data) {
      // process data ---
      data = processData(data, { width, height, original, class: classes })
    }
  }
</script>

{@html data}