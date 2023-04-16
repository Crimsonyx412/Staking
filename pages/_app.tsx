import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import WithStateContainers from 'containers';
import { scTheme, muiTheme } from 'styles/theme';

import '../i18n';

import Layout from 'sections/shared/Layout';

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Kwenta description" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@kwenta_io" />
				<meta name="twitter:creator" content="@kwenta_io" />
				{/* open graph */}
				<meta property="og:url" content="https://kwenta.io/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Kwenta" />
				<meta property="og:description" content="Kwenta description" />
				<meta property="og:image" content="/images/kwenta.png" />
				<meta property="og:image:alt" content="Kwenta" />
				<meta property="og:site_name" content="Kwenta" />
				{/* twitter */}
				<meta name="twitter:image" content="/images/kwenta.png" />
				<meta name="twitter:url" content="https://kwenta.io" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<SCThemeProvider theme={scTheme}>
				<MuiThemeProvider theme={muiTheme}>
					<WithStateContainers>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</WithStateContainers>
				</MuiThemeProvider>
			</SCThemeProvider>
		</>
	);
};

export default App;
