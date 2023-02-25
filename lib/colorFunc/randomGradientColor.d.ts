/**
 *
 * @param hexColor?: string 颜色值 如：#ffffff
 * @param deg?: number 渐变色的方向角度 -360<=deg<=360 默认随机 输入等于0则随机角度
 * @param Colorangle?: number 颜色旋转角度 -360<=Colorangle<=360 默认30度
 * @returns string 渐变色字符串，如：linear-gradient(172deg, #fa9f89 100%, #fad889 100%)
 */
export declare const getRandomGradientColor: (hexColor?: string, deg?: number, Colorangle?: number) => string;
