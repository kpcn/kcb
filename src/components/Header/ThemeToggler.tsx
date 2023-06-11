import { effect, useSignal } from '@preact/signals';
import { Lightbulb, LightbulbOff } from 'lucide-preact';

const ThemeToggler = () => {
	const STORAGE_KEY = '@kcb-theme';
	const currentTheme = localStorage.getItem(STORAGE_KEY);
	const theme = useSignal(currentTheme);

	effect(() => {
		localStorage.setItem(STORAGE_KEY, theme.value as string);
	});

	const onThemeChange = () => {
		if (theme.value === 'light') {
			theme.value = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			theme.value = 'light';
			document.documentElement.removeAttribute('class');
		}
	};

	return (
		<button class="antialiased flex items-center" onClick={onThemeChange}>
			{theme.value === 'light' ? (
				<i class="w-5 h-5 rotate-180">
					<Lightbulb size={18} />
				</i>
			) : (
				<i class="dark:text-slate-50 rotate-180">
					<LightbulbOff size={18} />
				</i>
			)}
		</button>
	);
};

export default ThemeToggler;
