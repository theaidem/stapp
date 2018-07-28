
export const getImageSrc = (fileName) =>
    `${(process.env.GH_PAGES) ? '' : '/'}${require('../../images/'+fileName)}`

export const clone = (data) =>
    JSON.parse(JSON.stringify(data))

export const serialize = (obj) =>
    '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')

export const getQueryObject = (search) => {
    let query = {}
    for(var value of search.entries()) {
        query[value[0]] = value[1]
    }
    return query
}
