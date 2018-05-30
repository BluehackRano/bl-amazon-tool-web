/**
 * Created by daesubkim on 2018. 5. 31..
 */

var BlAmazonApi = require('bl_amazon_api')

/**
 * /mws APIs */
export function getMwsFeedsSubmissions (params) {
  return new Promise ((resolve, reject) => {
    var mws_api = new BlAmazonApi.MwsApi()
    mws_api.getMwsFeedsSubmissions(params, (error, data, response) => {
      if (error) {
        console.error(error)
        reject(error)
      } else {
        console.log('getMwsFeedsSubmissions() API called successfully. Returned data: ')
        // console.log(data)
        resolve(data.data)
      }
    })
  })
}

/**
 * /advertising APIs */
export function getAdvertisingBrowseNodeTopSellers (nodeId) {
  return new Promise ((resolve, reject) => {
    var advertising_api = new BlAmazonApi.AdvertisingApi()
    advertising_api.getAdvertisingBrowseNodeTopSellers(nodeId, (error, data, response) => {
      if (error) {
        console.error(error)
        reject(error)
      } else {
        console.log('getAdvertisingBrowseNodeTopSellers() API called successfully. Returned data: ')
        // console.log(data)
        resolve(data.data)
      }
    })
  })
}

/**
 * /tool APIs
 */
