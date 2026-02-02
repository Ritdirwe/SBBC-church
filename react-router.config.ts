import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// Disable prerendering for faster builds
	// Set to specific routes if needed, or remove for dynamic rendering
	prerender: false,
} satisfies Config;
