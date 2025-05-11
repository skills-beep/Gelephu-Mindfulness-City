
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				forest: {
					DEFAULT: '#1E5631',
					light: '#4D8B6C'
				},
				gold: {
					DEFAULT: '#D4AF37',
					light: '#F0D878'
				},
				earth: {
					DEFAULT: '#E6DED1',
					light: '#F5F0E8'
				},
				royal: {
					DEFAULT: '#3B3487',
					light: '#6A5FB5'
				}
			},
			fontFamily: {
				cormorant: ['Cormorant Garamond', 'serif'],
				opensans: ['Open Sans', 'sans-serif'],
				playfair: ['Playfair Display', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'slow-drift': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0)'
					},
					'50%': {
						transform: 'translateY(-5px) translateX(5px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slow-drift': 'slow-drift 10s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.adsttc.com/media/images/6584/0ec5/a700/7869/9971/4c02/slideshow/big-unveils-gelephus-mindfulness-city-bridging-bhutans-heritage-and-future_6.jpg?1703153357')",
				'about-pattern': "linear-gradient(rgba(45, 79, 58, 0.8), rgba(45, 79, 58, 0.8)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')",
				'pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627,2.269c-0.957-0.951-2.295-1.539-3.77-1.539c-1.451,0-2.771,0.569-3.729,1.486 c-0.975-0.917-2.306-1.486-3.77-1.486c-1.451,0-2.771,0.569-3.729,1.486C38.654,1.3,37.322,0.73,35.858,0.73 c-1.451,0-2.771,0.569-3.729,1.486C31.154,1.3,29.822,0.73,28.358,0.73c-1.451,0-2.771,0.569-3.729,1.486 C23.654,1.3,22.322,0.73,20.858,0.73c-1.451,0-2.771,0.569-3.729,1.486C16.154,1.3,14.822,0.73,13.358,0.73 c-1.451,0-2.771,0.569-3.729,1.486C8.654,1.3,7.322,0.73,5.858,0.73c-1.475,0-2.813,0.588-3.77,1.539 c-0.957,0.951-1.549,2.27-1.549,3.726c0,1.433,0.573,2.735,1.501,3.686C1.074,10.63,0.5,11.932,0.5,13.365 c0,1.433,0.573,2.735,1.501,3.686C1.074,18.13,0.5,19.432,0.5,20.865c0,1.433,0.573,2.735,1.501,3.686 C1.074,25.63,0.5,26.932,0.5,28.365c0,1.433,0.573,2.735,1.501,3.686C1.074,33.13,0.5,34.432,0.5,35.865 c0,1.433,0.573,2.735,1.501,3.686C1.074,40.63,0.5,41.932,0.5,43.365c0,1.433,0.573,2.735,1.501,3.686 C1.074,48.13,0.5,49.432,0.5,50.865c0,1.456,0.592,2.775,1.549,3.726c0.957,0.951,2.295,1.539,3.77,1.539 c1.451,0,2.771-0.569,3.729-1.486c0.975,0.917,2.306,1.486,3.77,1.486c1.451,0,2.771-0.569,3.729-1.486 c0.975,0.917,2.306,1.486,3.77,1.486c1.451,0,2.771-0.569,3.729-1.486c0.975,0.917,2.306,1.486,3.77,1.486 c1.451,0,2.771-0.569,3.729-1.486c0.975,0.917,2.306,1.486,3.77,1.486c1.451,0,2.771-0.569,3.729-1.486 c0.975,0.917,2.306,1.486,3.77,1.486c1.475,0,2.813-0.588,3.77-1.539c0.957-0.951,1.549-2.27,1.549-3.726 c0-1.433-0.573-2.735-1.501-3.686c0.928-0.951,1.501-2.252,1.501-3.686c0-1.433-0.573-2.735-1.501-3.686 c0.928-0.951,1.501-2.252,1.501-3.686c0-1.433-0.573-2.735-1.501-3.686c0.928-0.951,1.501-2.252,1.501-3.686 c0-1.433-0.573-2.735-1.501-3.686c0.928-0.951,1.501-2.252,1.501-3.686c0-1.433-0.573-2.735-1.501-3.686 c0.928-0.951,1.501-2.252,1.501-3.686C56.176,4.539,55.584,3.22,54.627,2.269z' fill='%23d4af37' fill-opacity='0.1'/%3E%3C/svg%3E\")"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
