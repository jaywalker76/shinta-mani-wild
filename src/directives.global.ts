import Vue from 'vue'

// TODO: handle on-resize
// helpful article to rerender vue components: https://michaelnthiessen.com/force-re-render/
Vue.directive('readMore', {
  inserted(el, binding, vnode) {    
    const originalHeight = el.clientHeight
    el.setAttribute('original-height', String(originalHeight))
    
    const newHeight = binding.value.lines * binding.value.lineHeight
    if (originalHeight <= newHeight) {
      return
    }
    
    el.style.height = binding.value.lines * binding.value.lineHeight + 'px'
    el.style.overflowY = 'hidden'
    el.classList.add('read-more-content')

    const readmoreLink = document.createElement('a')
    readmoreLink.textContent = 'Read More'
    readmoreLink.href = '#'
    readmoreLink.classList.add('read-more-link', ...(binding.value.linkClass || '').split(' '))
    if (el.parentNode) {
      el.parentNode.insertBefore(readmoreLink, el.nextSibling)
    } else {
      console.log('No parentNode in truncated text.')
    }

    readmoreLink.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      el.style.height = originalHeight + 'px'
      readmoreLink.remove()
    })
  },
  unbind(el) {
    if (el.parentElement) {
      const readmoreLink = el.parentElement.querySelector('.read-more-link')      
      if (readmoreLink) {
        readmoreLink.remove()
      }
    }
  }
})
