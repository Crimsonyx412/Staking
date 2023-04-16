import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const RewardsPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<Head>
				<title>{t('earn.page-title')}</title>
			</Head>
			<div>Rewards</div>
		</>
	);
};

export default RewardsPage;
