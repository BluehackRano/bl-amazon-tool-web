/**
 * Created by daesubkim on 2018. 5. 31..
 */

var BlAmazonApi = require('bl_amazon_api')

/**
 * /product APIs
 */
export function getProductBrowseNodeAttributes (nodeId) {
  // console.log(nodeId)
  return new Promise((resolve, reject) => {
    var productApi = new BlAmazonApi.ProductApi()
    productApi.getProductsBrowseNodeAttributes(nodeId, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getAdvertisingBrowseNode() API called successfully. Returned data: ')
        resolve(data.data)
      }
    })
  })
}

/**
 * /advertising APIs
 */
export function getAdvertisingBrowseNode (nodeId) {
  return new Promise((resolve, reject) => {
    var advertisingApi = new BlAmazonApi.AdvertisingApi()
    advertisingApi.getAdvertisingBrowseNode(nodeId, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getAdvertisingBrowseNode() API called successfully. Returned data: ')
        resolve(data.data)
      }
    })
  })
}

/**
 * /tool APIs
 */
export function getToolTitles (nodeId) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getToolTitles(nodeId, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getAdvertisingBrowseNode() API called successfully. Returned data: ')
        resolve(data.data)
      }
    })
  })
}
export function getDictionaryBrowseNodesAll (nodeId) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionaryBrowseNodesAll(nodeId, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getAdvertisingBrowseNode() API called successfully. Returned data: ')
        resolve(data.data)
      }
    })
  })
}
export function getDictionaryWords (nodeIds) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionaryWords(nodeIds, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWords() API called successfully. Returned data: ')
        resolve(data.data)
      }
    })
  })
}
export function postDictionarySubAttrsWordsCountReset (subAttrIds) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.postDictionarySubAttrsWordsCountReset(subAttrIds, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
      }
    })
  })
}
export function getDictionaryWordsFiltered (nodeId, filters) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionaryWordsFiltered(nodeId, filters, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data.data)
        // console.log(data.data)
      }
    })
  })
}

export function getDictionarySubAttrsWords (subAttrIds) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionarySubAttrsWords(subAttrIds, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data.data)
        // console.log(data.data)
      }
    })
  })
}

export function getDictionaryProductsAttrs (nodeId, attrId) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionaryProductsAttrs(nodeId, attrId, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
        console.log(data)
      }
    })
  })
}
export function getDictionaryProductsAttrsSubAttrs (nodeId, attrId, subAttrId) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionaryProductsAttrsSubAttrs(nodeId, attrId, subAttrId, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
        console.log(data)
      }
    })
  })
}
export function getDictionaryProductsAttrsSubAttrsWords (nodeId, attrId, subAttrId, word) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.getDictionaryProductsAttrsSubAttrsWords(nodeId, attrId, subAttrId, word, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
        console.log(data)
      }
    })
  })
}

export function postDictionaryProductsAttrs (nodeId, attrId, attrUsName, attrKrName) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.postDictionaryProductsAttrs(nodeId, attrId, attrUsName, attrKrName, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
      }
    })
  })
}
export function postDictionaryProductsAttrsSubAttrs (nodeId, attrId, subAttrId, subAttrUsName, subAttrKrName) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.postDictionaryProductsAttrsSubAttrs(nodeId, attrId, subAttrId, subAttrUsName, subAttrKrName, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
      }
    })
  })
}
export function postDictionaryProductsAttrsSubAttrsWords (nodeId, attrId, subAttrId, word) {
  return new Promise((resolve, reject) => {
    var toolApi = new BlAmazonApi.ToolApi()
    toolApi.postDictionaryProductsAttrsSubAttrsWords(nodeId, attrId, subAttrId, word, (error, data, response) => {
      if (error) {
        // console.error(error)
        reject(error)
      } else {
        // console.log('getDictionaryWordsFiltered() API called successfully. Returned data: ')
        resolve(data)
      }
    })
  })
}
