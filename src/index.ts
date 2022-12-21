export function merge(collection_1: number[], collection_2: number[]): number[] {
    let result: number[] = [];
    let index1: number = 0;
    let index2: number = 0;
    while (index1 < collection_1.length && index2 < collection_2.length){
        if(collection_1[index1] < collection_2[index2]){
            result.push(collection_1[index1]);
            index1++;
        }else{
            result.push(collection_2[index2]);
            index2++;
        }
    }
    return result.concat(collection_1.slice(index1).concat(collection_2.slice(index2)));
  }