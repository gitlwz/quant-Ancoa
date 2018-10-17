import React from 'react';

let gradientColors;

function getRgbColor(red, green, blue) {
    return `rgb(${red},${green},${blue})`;
}

function AlertLevel ({height = 30, width = 300, colors = [
    {red: 102, green: 238, blue: 68, position: 0},
    {red: 255, green: 238, blue: 102, position: 30},
    {red: 255, green: 51, blue: 34, position: 100},
]}) {
    gradientColors = colors;
    let levelBackground;
    if (!colors || colors.length === 0) {
        levelBackground = 'white';
    } else if (colors.length === 1) {
        levelBackground = getRgbColor(colors[0].red, colors[0].green, colors[0].blue);
    } else {
        const gradient = colors.reduce((result, current, index) => {
            return `${result} ${getRgbColor(current.red, current.green, current.blue)} ${current.position}%${index === colors.length-1 ? '' : ','}`
        }, '');
        levelBackground = `linear-gradient(to right, ${gradient})`
    }

    return (
        <div style={{
            height, 
            width, 
            display: 'flex', 
            lineHeight: `${height}px`,
        }}>

            <span>Low Severity</span>

            <div style={{
                display: 'inline-block',
                flex: 1,
                background: levelBackground,
                height: '100%',
                margin: '0 6px',
                borderRadius: 4,
            }}>{!colors ? '颜色不可用' : ''}</div>

            <span>High Severity</span>
        </div>
    );
}

/**
 * 获取级别对应的颜色值 (RGB), 
 * @param {Array} colors 渐变色的数组, 默认为组件所用数组
 * @param {number} level 级别, 取值为 0-100
 */
export function getLeveColor(level, colors = gradientColors) {
    if (!colors || colors.length === 0) return '';
    if (colors.length === 1) return getRgbColor(colors[0].red, colors[0].green, colors[0].blue);
    let startColor, endColor;
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        if(color.position < level) { // 当前颜色结点在目标左侧, 记为起始颜色
            startColor = color;
        } else if (color.position === level) { // 当前颜色结点恰好是目标位置, 可以直接记为结果
            return getRgbColor(color.red, color.blue, color.green);
        } else { // 当前颜色结点在目标右侧, 记为结束颜色并返回
            endColor = color;
            break;
        }
    }

    const ratio = (level - startColor.position) / (endColor.position - startColor.position);
    const red = startColor.red + (endColor.red - startColor.red) * ratio;
    const green = startColor.green + (endColor.green - startColor.green) * ratio;
    const blue = startColor.blue + (endColor.blue - startColor.blue) * ratio;
    return getRgbColor(red, green, blue);
}

export default AlertLevel;