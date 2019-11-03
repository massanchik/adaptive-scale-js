export enum POLICY {
    ExactFit= 1,
    NoBorder,
    FullHeight,
    FullWidth,
    ShowAll,
}

export class Size {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

export class Rect extends Size{
    x: number;
    y: number;

    constructor(width: number, height: number, x: number, y: number) {
        super(width, height);
        this.x = x;
        this.y = y;
    }
}

interface Options {
    container: Size;
    target: Size;
    policy: POLICY;
}

export const getScaledRect = ({container, target, policy}: Options): Rect => {
    const aspectRatio = container.width / container.height;

    let scaleAspect = new Size(
        container.width / target.width,
        container.height / target.height
    );

    let isCalculated = false;

    let finalRect = new Rect(0, 0, 0, 0);
    let newTarget = new Size(target.width, target.height);

    switch (policy) {
        case POLICY.ExactFit:
            break;
        case POLICY.NoBorder:
            scaleAspect.width = scaleAspect.height = Math.max(scaleAspect.width, scaleAspect.height);
            break;
        case POLICY.ShowAll:
            scaleAspect.width = scaleAspect.height = Math.min(scaleAspect.width, scaleAspect.height);
            break;
        case POLICY.FullWidth:
            scaleAspect.height = scaleAspect.width;
            newTarget.width = Math.ceil(container.width / scaleAspect.width);
            break;
        case POLICY.FullHeight:
            scaleAspect.width = scaleAspect.height;
            newTarget.height = Math.ceil(container.height / scaleAspect.height);
            break;
        default:
            finalRect.x = finalRect.y = 0;
            finalRect.width = target.width;
            finalRect.height = target.height;
            isCalculated = true;
            break;
    }

    if (!isCalculated) {
        let width: number = newTarget.width * scaleAspect.width;
        let height: number = newTarget.height * scaleAspect.height;
        finalRect = {
            x: (container.width - width) / 2,
            y: (container.height - height) / 2,
            width: width,
            height: height,
        };
    }

    return finalRect

};
