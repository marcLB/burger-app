export function reverseFilter(){
    return function (str,sep = ' ') {
        if(typeof str !== 'string')
        return str
            .split('')
            .reverse()
            .join(sep)
  }
}