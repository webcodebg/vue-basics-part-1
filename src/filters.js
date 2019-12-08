import Vue from 'vue'

Vue.filter('implode', (v, delimiter = ', ') => {
  
    let result = ''
  
    for (const str in v) {
        if(str == v.length - 1){
            result += v[str]
        } else {
            result += v[str] + delimiter 
        }
            
    }
  
    return result
})  