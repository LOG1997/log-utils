import { TRgb, THsv, THsl, THex } from './types/color';
// rgb转hsv
/**
 * 
 * @param props TRgb:{r:number,g:number,b:number}
 * @returns Thsv:{h:number,s:number,v:number}
 */
export function rgb2Hsv(props: TRgb): THsv {
    const { r, g, b } = props;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // v取值
    const v = 100 * max / 255;
    // s取值
    const s = max === 0 ? 0 : 100 * (max - min) / max;
    // h取值
    let h = 0;
    if (max === r && g >= b) {
        h = 60 * (g - b) / (max - min);
    }
    else if (max === r && g < b) {
        h = 60 * (g - b) / (max - min) + 360;
    }
    else if (max === g) {
        h = 60 * (b - r) / (max - min) + 120;
    }
    else if (max === b) {
        h = 60 * (r - g) / (max - min) + 240;
    }
    return {
        h: Math.round(h), s: Math.round(s), v: Math.round(v)
    };

}
// rgb转hsl
/**
 * 
 * @param props TRgb:{r:number,g:number,b:number}
 * @returns THsl:{h:number,s:number,l:number}
 */
export function rgb2Hsl(props: TRgb): THsl {
    const { r, g, b } = props;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // l取值
    const l = (max + min) / 2;
    // s取值
    let s = 0;
    if (max === min || l === 0) {
        s = 0;
    }
    else if (l > 0 && l <= 0.5) {
        s = (max - min) / (max + min);
    }
    else if (l > 0.5) {
        s = (max - min) / (2 - max - min);
    }
    // h取值
    let h = 0;
    if (max == min) {
        h = 0;
    }
    else if (max === r && g >= b) {
        h = 60 * (g - b) / (max - min);

    }
    else if (max === r && g < b) {
        h = 60 * (g - b) / (max - min) + 360;
    }
    else if (max === g) {
        h = 60 * (b - r) / (max - min) + 120;
    }
    else if (max === b) {
        h = 60 * (r - g) / (max - min) + 240;
    }
    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}
// rgb转hex
/**
 * 
 * @param props TRgb:{r:number,g:number,b:number}
 * @returns THex:string
 */
export function rgb2Hex(props: TRgb): THex {
    const { r, g, b } = props;
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
}
// hex转rgb
/**
 * 
 * @param hex THex:string
 * @returns TRgb:{r:number,g:number,b:number}
 */
export function hex2Rgb(hex: string): TRgb {
    const rgb = [];
    for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt('0x' + hex.slice(i, i + 2)));
    }
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
}
// hsv转rgb
/**
 * 
 * @param props THsv:{h:number,s:number,v:number}
 * @returns TRgb:{r:number,g:number,b:number}
 */
export function hsv2Rgb(props: THsv): TRgb {
    const { h, s, v } = props;
    const hue = h % 360;
    const saturation = s / 100;
    const vion = v / 100;
    let r = 0, g = 0, b = 0;
    if (saturation === 0) {
        r = g = b = vion;
    }
    else {
        const i = Math.floor(hue / 60);
        const f = hue / 60 - i;

        const p = vion * (1 - saturation);
        const q = vion * (1 - saturation * f);
        const t = vion * (1 - saturation * (1 - f));
        switch (i) {
            case 0:
                r = vion;
                g = t;
                b = p;
                break;

            case 1:
                r = q;
                g = vion;
                b = p;
                break;
            case 2:
                r = p;
                g = vion;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = vion;
                break;

            case 4:
                r = t;
                g = p;
                b = vion;
                break;
            case 5:
                r = vion;
                g = p;
                b = q;
                break;
        }


    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
//hsv颜色旋转
/**
 * 
 * @param props THex:string
 * @param angle number 旋转角度 默认为30度
 * @returns THex:string 如：#ffffff
 */
export function rotateHsv(props: THex, angle = 30): THex {
    const rgbColor = hex2Rgb(props);
    const hsvColor = rgb2Hsv(rgbColor);

    const { h, s, v } = hsvColor;
    let newH = h + angle;
    if (newH > 360) {
        newH = newH - 360;
    }
    else if (newH < 0) {
        newH = 360 + newH;
    }
    const newRgbColor = hsv2Rgb({ h: newH, s, v });
    const newHexColor = rgb2Hex(newRgbColor);
    return newHexColor;
}
// 随机颜色
/**
 * 
 * @returns THex:string 如：#ffffff
 */
export function randomColor(): string {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
}