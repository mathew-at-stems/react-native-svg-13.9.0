import React, {
    Component
} from 'react-native';

import Svg, {
    Path,
    Rect,
    G,
    Defs,
    Stop,
    RadialGradient,
    Polyline,
    ClipPath,
    Circle
} from 'react-native-svg';

class StrokeExample extends Component{
    static title = 'The stroke property defines the color of a line, text or outline of an element';
    render() {
        return <Svg height="80" width="225">
            <G fill="none">
                <Path stroke="red" d="M5 20 l215 0" />
                <Path stroke="black" d="M5 40 l215 0" />
                <Path stroke="blue" d="M5 60 l215 0" />
            </G>
        </Svg>;
    }
}

class StrokeLinecap extends Component{
    static title = 'The stroke-linecap property defines different types of endings to an open path';
    render() {
        return <Svg height="80" width="225">
            <G fill="none" stroke="black">
                <Path strokeLinecap="butt" strokeWidth="2" d="M5 20 l215 0" />
                <Path strokeLinecap="round" strokeWidth="4" d="M5 40 l215 0" />
                <Path strokeLinecap="square" strokeWidth="6" d="M5 60 l215 0" />
            </G>
        </Svg>;
    }
}

class StrokeDasharray  extends Component{
    static title = 'strokeDasharray';
    render() {
        return <Svg height="80" width="225">
            <G fill="none" stroke="black" strokeWidth="4">
                <Path strokeDasharray="5,5" d="M5 20 l215 0" />
                <Path strokeDasharray="10,10" d="M5 40 l215 0" />
                <Path strokeDasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
            </G>
        </Svg>;
    }
}

class StrokePattern  extends Component{
    static title = 'Advanced stroke example.';
    render() {
        return <Svg height="80" width="200">
            <Defs>
                <RadialGradient id="grad" cx="50%" cy="50%" rx="80%" ry="80%" fx="50%" fy="50%">
                    <Stop
                        offset="50%"
                        stopColor="#fff"
                        stopOpacity="1"
                    />
                    <Stop
                        offset="100%"
                        stopColor="#f00"
                        stopOpacity="1"
                    />
                </RadialGradient>
                <ClipPath id="clip">
                    <Circle r="96" cx="100" cy="40" />
                </ClipPath>
            </Defs>
            <Rect
                x="5"
                y="5"
                height="70"
                width="190"
                fill="blue"
                stroke="url(#grad)"
                strokeWidth="5"
                strokeDasharray="10"
                clipPath="url(#clip)"
            />

            <Polyline
                strokeDasharray="20,10,5,5,5,10"
                points="10,10 20,12 30,20 40,60 60,70 90,55"
                fill="none"
                stroke="url(#grad)"
                strokeLinecap="round"
                strokeWidth="5"
            />
        </Svg>;
    }
}


const icon = <Svg
    height="20"
    width="20"
>
    <G fill="none" stroke="black" strokeWidth="2">
        <Path strokeDasharray="2,2" d="M0 4 h20" />
        <Path strokeDasharray="4,4" d="M0 10 h20" />
        <Path strokeDasharray="4,2,1,1,1,6" d="M0 19 h20" />
    </G>
</Svg>;

const samples = [StrokeExample, StrokeLinecap, StrokeDasharray, StrokePattern];

export {
    icon,
    samples
}