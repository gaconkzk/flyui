const raf = window.requestAnimationFrame || function(c) { return setTimeout(c, 0); }

// Mouse drag handler
function dragDealer(el: HTMLElement, context: FScrollable) {
  let lastPageY: number;

  el.addEventListener('mousedown', function(e: MouseEvent) {
    lastPageY = e.pageY;
    el.classList.add('ss-grabbed');
    document.body.classList.add('ss-grabbed');

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stop);

    return false;
  });

  function drag(e: MouseEvent) {
    var delta = e.pageY - lastPageY;
    lastPageY = e.pageY;

    raf(function() {
      context.el.scrollTop += delta / context.scrollRatio;
    });
  }

  function stop() {
    el.classList.remove('ss-grabbed');
    document.body.classList.remove('ss-grabbed');
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stop);
  }
}

export class FScrollable {
  target: HTMLElement
  content: Node
  direction: string
  bar: HTMLElement | null
  mB: () => void
  wrapper: HTMLElement
  el: HTMLElement
  scrollRatio: number = 1

  constructor(el: HTMLElement) {
    this.target = el
    this.content = el.firstElementChild as Node

    this.direction = window.getComputedStyle(this.target).direction
    //Create a reference to the function binding to remove the event listeners
    this.mB = this.moveBar.bind(this)

    this.wrapper = document.createElement('div')
    this.wrapper.setAttribute('class', 'ss-wrapper')

    this.el = document.createElement('div')
    this.el.setAttribute('class', 'ss-content')

    if (this.direction === 'rtl') {
      this.el.classList.add('rtl')
    }

    this.wrapper.appendChild(this.el)

    while (this.target.firstChild) {
      this.el.appendChild(this.target.firstChild)
    }
    this.target.appendChild(this.wrapper)

    const ourbar = '<div class="ss-scroll">'
    this.target.insertAdjacentHTML('beforeend', ourbar)
    this.bar = this.target.lastChild as HTMLElement

    if (this.bar) {
      dragDealer(this.bar, this)
      this.moveBar()
    }

    window.addEventListener('resize', this.mB)
    this.el.addEventListener('scroll', this.mB)
    this.el.addEventListener('mouseenter', this.mB)

    this.target.classList.add('ss-container')

    const css: any = window.getComputedStyle(el)
  	if (css['height'] === '0px' && css['max-height'] !== '0px') {
    	el.style.height = css['max-height']
    }
  }

  unBind() {
    //Remove event listeners
    window.removeEventListener('resize', this.mB)
    this.el.removeEventListener('scroll', this.mB)
    this.el.removeEventListener('mouseenter', this.mB)
    
    this.target.classList.remove('ss-container')

    //Unwrap the initial content and remove remaining wrappers
    this.target.insertBefore(this.content, this.wrapper)
    this.target.removeChild(this.wrapper)

    //Remove the bar including its drag-dealer event listener
    if (this.bar) {
      this.target.removeChild(this.bar)
      this.bar = null //make way for the garbage collector
    }
  }

  moveBar() {
    var totalHeight = this.el.scrollHeight,
        ownHeight = this.el.clientHeight,
        _this = this;

    this.scrollRatio = ownHeight / totalHeight;

    var isRtl = _this.direction === 'rtl';

    if (_this.bar) {
      let right = isRtl ? -3  : 3
      raf(function() {
        // 
        if (_this.bar) {
          // Hide scrollbar if no scrolling is possible
          if(_this.scrollRatio >= 1) {
            _this.bar.classList.add('ss-hidden')
          } else {
            _this.bar.classList.remove('ss-hidden')
            _this.bar.style.cssText = 'height:' + Math.max(_this.scrollRatio * 100, 10) + '%; top:' + (_this.el.scrollTop / totalHeight ) * 100 + '%;right:' + right + 'px;';
          }
        }
      })
    }
  }
}