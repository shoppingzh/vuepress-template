const { readdirSync, statSync } = require('fs')

/**
 * 查找目录下的所有文件
 * @param {String} dir 目录
 * @param {Function} filter 过滤规则
 */
function listFiles(dir, filter) {
  let files = readdirSync(dir, {
    withFileTypes: true
  }).filter(f => f.isFile())
  if (filter) {
    files = files.filter(filter)
  }
  return files.map(f => ({
    name: f.name,
    path: `${dir}/${f.name}`
  }))
}

/**
 * 判断路径对应文件还是文件夹
 * @param {String} path 路径
 */
function isFile(path) {
  const stat = statSync(path)
  return stat ? stat.isFile() : false
}

/**
 * 获取文件名的基础部分
 * @param {String} filename 文件名
 */
function getBasename(filename) {
  if (!filename) return filename
  const idx = filename.lastIndexOf('.')
  return idx >= 0 ? filename.substring(0, idx) : filename
}

/**
 * 获取文件名的后缀部分
 * @param {String} filename 文件名
 */
function getExtension(filename) {
  if (!filename) return filename
  const idx = filename.lastIndexOf('.')
  return idx >= 0 ? filename.substring(idx + 1) : null
}


module.exports = {
  listFiles,
  isFile,
  getBasename,
  getExtension
}
