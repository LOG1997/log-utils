import { TRgb, THsv, THsl, THex } from './types/color';
/**
 *
 * @param props TRgb:{r:number,g:number,b:number}
 * @returns Thsv:{h:number,s:number,v:number}
 */
export declare function rgb2Hsv(props: TRgb): THsv;
/**
 *
 * @param props TRgb:{r:number,g:number,b:number}
 * @returns THsl:{h:number,s:number,l:number}
 */
export declare function rgb2Hsl(props: TRgb): THsl;
/**
 *
 * @param props TRgb:{r:number,g:number,b:number}
 * @returns THex:string
 */
export declare function rgb2Hex(props: TRgb): THex;
/**
 *
 * @param hex THex:string
 * @returns TRgb:{r:number,g:number,b:number}
 */
export declare function hex2Rgb(hex: string): TRgb;
/**
 *
 * @param props THsv:{h:number,s:number,v:number}
 * @returns TRgb:{r:number,g:number,b:number}
 */
export declare function hsv2Rgb(props: THsv): TRgb;
/**
 *
 * @param props THex:string
 * @param angle number 旋转角度 默认为30度
 * @returns THex:string 如：#ffffff
 */
export declare function rotateHsv(props: THex, angle?: number): THex;
/**
 *
 * @returns THex:string 如：#ffffff
 */
export declare function randomColor(): string;
