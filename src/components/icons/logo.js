import { cn } from '@/lib/utils';

const Logo = ({ variant, className = '' }) => {
    return (
        <svg
            className={cn(
                'w-16 h-16', // Base size
                (!variant || variant === 'default') && '[--accent-color:#18b0dd] [--main-color:#ffffff]', // Default variant
                variant === 'businessHero' && '[--accent-color:#101619] [--main-color:#101619] lg:[--accent-color:#18b0dd] lg:[--main-color:#ffffff]', // Medium screens
                variant === 'profileHero' && '[--accent-color:#101619] [--main-color:#101619] sm:[--accent-color:#18b0dd] sm:[--main-color:#ffffff]', // Medium screens
                className
            )}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="layer1">
                <g transform="matrix(6.711072,0,0,6.711072,-151.83105,-1337.2504)">
                    <path
                        id="path1-6"
                        mask="none"
                        style={{ fill: 'var(--accent-color)', fillOpacity: 1, strokeWidth: 0.264583 }}
                        d="M 59.606343 202.40636 A 35 35 0 0 0 24.606171 237.40624 A 35 35 0 0 0 59.606343 272.40613 A 35 35 0 0 0 76.717466 267.83899 A 34.2145 34.2145 0 0 1 62.718911 270.85086 A 34.2145 34.2145 0 0 1 28.504521 236.63647 A 34.2145 34.2145 0 0 1 61.827776 202.48552 A 35 35 0 0 0 59.606343 202.40636 z "
                    />
                    <path
                        id="path16-5-6"
                        style={{ fill: 'var(--accent-color)', fillOpacity: 1, stroke: 'none', strokeWidth: 0 }}
                        d="m 80.172849,216.46398 -23.004988,39.84571 h 9.202133 l 13.802855,-23.90757 4.600722,-7.96873 z"
                    />
                    <path
                        id="path16"
                        style={{ fill: 'var(--main-color)', fillOpacity: 1, stroke: 'none', strokeWidth: 0 }}
                        d="m 61.769087,216.46384 -23.004989,39.84571 h 9.202134 l 13.802855,-23.90755 9.202134,15.93883 4.600721,-7.96942 z m 15.087054,26.1314 -0.748136,1.29655 -3.852585,6.67286 3.316522,5.7449 h 9.202134 z"
                    />
                </g>
            </g>
        </svg>
    );
};

export default Logo;
