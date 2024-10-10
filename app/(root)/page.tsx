import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox';

const Home = () => {
const loggedIn = {firstName: 'Rocky'};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "guest"}
                subtext="Access and manage your account transactions efficiently "
                />

                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1450.45}
                />
            </header>
        </div>
    </section>
  )
}

export default Home