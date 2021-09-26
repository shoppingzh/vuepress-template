const { resolve, join } = require('path')
const { navs } = require('../../config.js')
const { listFiles, getBasename, getExtension, isFile } = require('./utils/file.js')

const docPath = resolve(process.cwd(), 'docs')

function createNav(navs) {
  const doGenerateNav = (navItem, path = '', depth = 0) => {
    const conf = {}
    conf.text = navItem.name
    const children = navItem.children
    if (children && children.length) {
      conf.items = children.map(childItem => doGenerateNav(childItem, join(path, childItem.path), depth + 1))
    } else {
      const filePath = join(docPath, path)
      if (isFile(filePath)) {
        conf.link = join('/', path)
      } else {
        const files = listFiles(filePath, f => /^md$/i.test(getExtension(f.name)))
        if (!files || !files.length) return conf
        if (!navItem.docs) {
          conf.link = join('/', path, files[0].name)
        } else {
          conf.items = files.map(f => ({
            text: getBasename(f.name),
            link: join('/', path, f.name)
          }))
        }
      }
    }
    return conf
  }
  return navs.map(item => {
    return doGenerateNav(item, item.path)
  })
}

module.exports = createNav(navs)
