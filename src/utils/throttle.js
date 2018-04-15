/*
* Based on https://developer.mozilla.org/en-US/docs/Web/Events/resize#Example
*
*   window.addEventListener(
*     'resize',
*     throttle(() => {
*       console.log('Resource conscious resize callback!')
*     })
*   )
*/

export const throttle = function(func) {
  let running = false

  const throttledFunc = function() {
    if (running) return

    running = true

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(func)
    } else {
      // fallback to 15 frames per second
      setTimeout(func, 1000 / 15)
    }

    running = false
  }
  return throttledFunc
}

export default throttle
