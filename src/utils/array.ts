export const splitToChunks = (array = [], parts = 4) => {
    const tempArr = array;
    const res = [];
    while (array.length > 0) {
      const chunk = tempArr.splice(0, parts);
      // @ts-ignore
      res.push(chunk);
    }
    return res;
  };
  
  
  export const groupByKey = (list:Array<any>, key:string) => list.reduce((hash, obj) => ({
    ...hash,
    [obj[key]]: (hash[obj[key]] || []).concat(obj)
  }), {});
