import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import awsCloudFoundationsBadge from '../../assets/badges/AWS_cloud_foundations_badge.webp';
import awsCloudPractitionerBadge from '../../assets/badges/AWS_cloud_practitioner_badge.webp';
import citiBadge1 from '../../assets/badges/IMG_7797.WEBP';
import citiBadge2 from '../../assets/badges/IMG_7798.WEBP';
import citiBadge3 from '../../assets/badges/IMG_7799.WEBP';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'aws-cloud-foundations',
      image: awsCloudFoundationsBadge,
      alt: 'AWS Academy Cloud Foundations Badge',
      title: 'Хакатон «Стартап-Нация» с проектом Smart Kitchen',
      subtitle: 'AСертификат об успешном прохождении хакатона «Стартап-Нация»',
      credentialUrl: 'https://www.instagram.com/startupnation.asia/',
      status: 'completed'
    },
    {
      id: 'aws-cloud-practitioner',
      image: awsCloudPractitionerBadge,
      alt: 'AWS Cloud Practitioner Badge',
      title: 'Финал Hult Prize National Competition 2026',
      subtitle: 'Certificate of Participation in "Hult Prize National Competition 2026',
      credentialUrl: 'https://www.hultprize.org/competition/nationals',
      status: 'completed'
    }
  ];

  const credentials = [
    {
      id: 'citi-human-subjects',
      image: citiBadge1,
      alt: 'CITI Program Logo',
      title: 'Бизнес-курс «Успешный питчинг» от VirtualAccelerate',
      subtitle: 'Изучение искусства презентации проектов инвесторам',
      issuer: 'CITI Program',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: '00000000',
      credentialUrl: 'https://www.virtualaccelerate.com/for-entrepreneurs',
      status: 'completed'
    },
    {
      id: 'citi-hipaa',
      image: citiBadge2,
      alt: 'CITI Program Logo',
      title: 'Питчинг  команды SOLVIX на Pizza Pitch',
      subtitle: 'Сертификат за активное участие в стартап-питчинге Pizza Pitch',
      issuer: 'CITI Program',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: '00000000',
      credentialUrl: 'https://pizzapitch.uz/ru/',
      status: 'completed'
    },
    {
      id: 'citi-gcp',
      image: citiBadge3,
      alt: 'CITI Program Logo',
      title: 'Сертификат участника «Недели Науки»',
      subtitle: 'Награда за активное участие в «Недели Науки» ОшГУ',
      issuer: 'CITI Program',
      issued: 'Nov 2025',
      expires: 'Nov 2028',
      credentialId: '00000000',
      credentialUrl: 'https://www.oshsu.kg/public/ru/news/220',
      status: 'completed'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Сертификаты и достижения</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`Посмотреть удостоверение ${badge.title}`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* CITI Program Certifications */}
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={credential.image}
                      alt={credential.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle || (credential.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`Посмотреть удостоверение ${credential.title}`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;