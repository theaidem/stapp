
export function clone(data) {
    return JSON.parse(JSON.stringify(data))
}

export function serialize(obj) {
    return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}

export function getQueryObject(search) {
    let query = {}
    for(var value of search.entries()) {
        query[value[0]] = value[1]
    }
    return query
}
