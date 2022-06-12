// export const pluralize = (val:string)=>{
//     let plural = val;
//     const len = plural.length;
//     const lastIndex = len -1;
//     const secondLastIndex = len-2;
//     if(val.length > 0){
//       if(['roof','belief','chef','chief'].includes(val)){
//         return `${plural}s`;
//       }else if(plural[secondLastIndex]+plural[lastIndex] === 'lf'){
//         return plural.slice(0,plural.length - 1)+'ves';
//       }else if(['ray','boy'].includes(val)){
//         return plural+'s';
//       } else if(plural[lastIndex] === 'y'){
//         return plural.slice(0,len-1) + 'ies';
//       }else if(['piano','photo','halo'].includes(val)){
//         return plural+'s';
//       } else if(['o','x','s','h','z'].includes(plural[lastIndex])){
//         plural = plural+ 'es';
//         return plural;
//       }else{
//         return plural+'s';
//       }
//     }
//   }
  
//   export const upperFirst = (string)=> {
//     return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
//   }
  
//   export const hyphensUnderscoresIntoSpaces = str => str.replace(/[_-]/g, ' ');
  
//   export const camelCase = str => str.replace( /([-_]\w)/g, g => g[ 1 ].toUpperCase());
  
//   export const pascalCase = str => {
//     const camelCaseText = camelCase( str );
//     return camelCaseText[0].toUpperCase() + camelCaseText.substr(1);
//   }



const typography = () => typography



export default typography