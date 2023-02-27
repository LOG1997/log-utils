// 字节转单位

type TUnit = '' | 'B' | 'KB' | 'MB' | 'GB' | 'TB';

/**
 * 字节转单位
 * @param byte:number 字节大小，必传
 * @param unit:'' | 'B' | 'KB' | 'MB' | 'GB' | 'TB' 单位，非必传，默认为空
 * @param fixed:number 保留小数位数，非必传，默认为2
 * @returns string 单位大小
 */
export function byteToUnit(byte: number, unit: TUnit = '', fixed = 2): string {
    const byteType = unit ? unit : transform(byte);
    if (byteType == 'B') {
        return byte + 'B';
    } else if (byteType == 'KB') {
        return (byte / 1024).toFixed(fixed) + 'KB';
    } else if (byteType == 'MB') {
        return (byte / 1024 / 1024).toFixed(fixed) + 'MB';
    } else if (byteType == 'GB') {
        return (byte / 1024 / 1024 / 1024).toFixed(fixed) + 'GB';
    } else {
        return (byte / 1024 / 1024 / 1024 / 1024).toFixed(fixed) + 'TB';
    }
}

function transform(byte: number): TUnit {
    if (byte < 1024) {
        return 'B'
    }
    if (byte < 1024 * 1024) {
        return 'KB'
    }
    if (byte < 1024 * 1024 * 1024) {
        return 'MB'
    }
    if (byte < 1024 * 1024 * 1024 * 1024) {
        return 'GB'
    }
    return 'TB'
}