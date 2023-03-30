type TUnit = '' | 'B' | 'KB' | 'MB' | 'GB' | 'TB';
/**
 * 字节转单位
 * @param byte:number 字节大小，必传
 * @param unit:'' | 'B' | 'KB' | 'MB' | 'GB' | 'TB' 单位，非必传，默认为空
 * @param fixed:number 保留小数位数，非必传，默认为2
 * @returns string 单位大小
 */
export declare function byteToUnit(byte: number, unit?: TUnit, fixed?: number): string;
export {};
