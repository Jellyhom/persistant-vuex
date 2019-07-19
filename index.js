export default function (options) {
  options = options || {}
  let storage = options.storage || (window && window.localStorage)
  let key = options.key || 'vuex'

  const canWriteStorage = storage => {
    try {
      storage.setItem('StayEasyAndJustHaveATry', 'haha')
      storage.removeItem('StayEasyAndJustHaveATry')
      return true
    } catch (e) {}

    return false
  }

  if (!canWriteStorage(storage)) {
    throw new Error('Invalid storage instance given');
  }
  
  return store => {
    const vuex = storage.getItem(key)
    if (vuex) {
      store.replaceState(JSON.parse(vuex))
    }
    store.subscribe((mutation, state) => {
      storage.setItem(key, JSON.stringify(state))
    })
  }
}
