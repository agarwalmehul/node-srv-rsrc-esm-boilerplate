'use strict'

const VersionModel = {
  get
}

export default VersionModel

async function get () {
  const {
    npm_package_name: name = '',
    npm_package_version: version = '',
    npm_package_description: description = ''
  } = process.env

  const data = { name, description, version }
  return data
}
