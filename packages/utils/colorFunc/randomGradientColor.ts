import { rotateHsv, randomColor } from './formatColor';
/**
 * 
 * @param hexColor?: string 颜色值 如：#ffffff
 * @param deg?: number 渐变色的方向角度 -360<=deg<=360 默认随机 输入等于0则随机角度
 * @param Colorangle?: number 颜色旋转角度 -360<=Colorangle<=360 默认30度
 * @returns string 渐变色字符串，如：linear-gradient(172deg, #fa9f89 100%, #fad889 100%)
 */
export const getRandomGradientColor = (hexColor = '', deg = 0, Colorangle = 30) => {
    deg = deg == 0 ? Math.floor(Math.random() * 360) : deg;
    const color1 = hexColor ? hexColor : randomColor();
    const color2 = rotateHsv(color1, Colorangle);
    return `linear-gradient(${deg}deg, ${color1} 100%, ${color2} 100%)`;
}

